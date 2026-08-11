import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router, Switch, useLocation } from "wouter";

// GitHub Pages has no server to handle client-side routes, so all URLs
// use the hash fragment (e.g. /#/about). wouter's official
// useHashLocation handles the hash reading/reactivity reliably.
import { useHashLocation } from "wouter/use-hash-location";

import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import About from "./pages/About";
import Services from "./pages/Services";
import PublishedWork from "./pages/PublishedWork";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

function ScrollToTopOnRouteChange() {
  const [location] = useLocation();

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  return null;
}

function RouteSwitch() {
  const [location] = useLocation();

  return (
    <Switch key={location}>
      <Route path={"/"} component={Home} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/:slug"} component={Article} />
      <Route path={"/about"} component={About} />
      <Route path={"/services"} component={Services} />
      <Route path={"/published-work"} component={PublishedWork} />
      <Route path={"/testimonials"} component={Testimonials} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function RouterApp() {
  return (
    <Router hook={useHashLocation}>
      <ScrollToTopOnRouteChange />
      <RouteSwitch />
    </Router>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster position="bottom-center" />
          <RouterApp />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
