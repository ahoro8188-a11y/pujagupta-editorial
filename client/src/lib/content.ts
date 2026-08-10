/*
 * DESIGN: "The Margin Notes" — all site copy lives here.
 * Brand: warm, literate, meticulous. Headlines read like a book jacket.
 */
export const ASSETS = {
  heroDesk: "/manus-storage/hero-desk_bb994cca.png",
  heroIllustration: "/manus-storage/hero-portrait-frame_1dc68764.png",
  blogFeatured: "/manus-storage/blog-featured-kindness_557dd10a.png",
  logo: "/manus-storage/ink-leaf-logo_db66f81d.png",
  texture: "/manus-storage/texture-paper_f1a571ab.png",
};

export interface BlogPost {
  slug: string;
  number: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  featured?: boolean;
  image?: string;
  body: { kind: "p" | "quote" | "attribution" | "h2"; text: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "be-one-of-a-kind",
    number: "No. 01",
    category: "Essay",
    date: "August 2026",
    readTime: "4 min read",
    title: "Be One of a 'Kind'",
    excerpt:
      "Kindness is a thought that arrives with no ulterior motive. Calm, unarticulated, almost transparent \u2014 and most of all, unassuming. Here is where I draw the line between kindness and its counterfeits.",
    featured: true,
    image: ASSETS.blogFeatured,
    body: [
      {
        kind: "p",
        text: "Since forever, we have known Kindness as a virtue \u2014 much celebrated and sought after. Who would not want to have a Kind boss in the corporate jungle, Kind words from a friend in times of trouble, a Kind gesture in the throes of despair.",
      },
      {
        kind: "p",
        text: "For me, Kindness is a thought that comes to you with no ulterior motive. It shows in your actions but without a rider. It's calm, non-articulated, almost transparent and most of all unassuming.",
      },
      {
        kind: "p",
        text: "More often than not, Kindness is confused with being selfless \u2014 to the extent of jeopardising one's own feelings. And that is where I differ.",
      },
      {
        kind: "h2",
        text: "Kindness is not self-erasure",
      },
      {
        kind: "p",
        text: "Being Kind in no way implies that you are not entitled to set boundaries or be honest in your feedback, knowing well that it might not be taken in the right spirit. Kindness also does not mean that you put up with any unfair treatment or toxic patterns.",
      },
      {
        kind: "p",
        text: "On the other hand, being 'too Kind' is something one needs to be wary of. For Kindness does not announce itself \u2014 it does not attempt to be recognised or dramatic. Often what is being crafted and creating a perception is not Kindness, rather a cloak. And beneath that lies the raw truth that is far uglier in proportion to the fake front being put up.",
      },
      {
        kind: "p",
        text: "Kindness does not seek to burden; it seeks to uplift \u2014 uplifting without being a burden. It is a gentle presence that offers solace without leaving scars of strife.",
      },
      {
        kind: "quote",
        text: "Kindness begins with the understanding that we all struggle.",
      },
      { kind: "attribution", text: "\u2014 Charles Glassman" },
      {
        kind: "p",
        text: "So be Kind in whichever capacity you can be, but don't forget to count yourself in the list.",
      },
    ],
  },
];

export const services = [
  {
    no: "01",
    title: "Manuscript Editing",
    body: "Developmental, copy, and line editing to sharpen your story \u2014 structural honesty, sentence-level care, and a fresh eye that still hears your voice.",
  },
  {
    no: "02",
    title: "Proofreading",
    body: "A careful final pass so nothing slips through \u2014 typos, consistency, formatting, and the small things that make a professional first impression.",
  },
  {
    no: "03",
    title: "Author Consultancy",
    body: "Guidance through publishing, launches, and everything between \u2014 an honest sounding board from first draft to last page.",
  },
];

export const testimonial = {
  quote:
    "For being constantly available, for making me feel that my words matter.",
  name: "Sapna Manoj",
  role: "Author",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/published-work", label: "Published Work" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const marqueeWords = [
  "EDITOR",
  "POET",
  "AUTHOR CONSULTANT",
  "MOM OF TWO",
];
