/*
 * DESIGN: "The Margin Notes" — all site copy lives here.
 * Brand: warm, literate, meticulous. Headlines read like a book jacket.
 */
export const ASSETS = {
  heroDesk: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/hero-desk_bb994cca.png`,
  heroPortrait: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/puja-hero_d6b0cfc3.png`,
  aboutPhoto: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/puja-portrait_783cb0ee.png`,
  blogFeatured: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/blog-featured-kindness_557dd10a.png`,
  logo: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/ink-leaf-logo_db66f81d.png`,
  texture: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/texture-paper_f1a571ab.png`,
};

export interface PublishedWork {
  kind: "role" | "book";
  title: string;
  description: string;
  cover?: string;
  href?: string;
  hrefLabel?: string;
  pending?: boolean;
}

export const publishedWorks: PublishedWork[] = [
  {
    kind: "role",
    title: "Chief Editor & Creative Director — The Alcove Publishers",
    description:
      "2018–2026. Joined the organisation as a Blogger and progressed to the roles of Editor, Chief Editor, and Creative Director. Successfully managed the end-to-end publishing journey for over 300 books — from author onboarding and manuscript editing to coordinating cover design, formatting, printing, and publication. Additionally spearheaded book launches, moderated panel discussions, and led content creation for social media campaigns, including promotional posts, book trailers, and teaser videos.",
  },
  {
    kind: "book",
    title: "An Ode to Spring",
    description: "Published poetry collection.",
    href: "https://thealcovepublishers.com/product/an-ode-to-spring/",
    hrefLabel: "View book →",
  },
  {
    kind: "book",
    title: "Jazba-e-Ishq",
    description: "Published poetry collection.",
    href: "https://thealcovepublishers.com/product/jazba-e-ishq/",
    hrefLabel: "View book →",
  },
  {
    kind: "role",
    title: "Freelance Editing Profile",
    description: "See client reviews and ongoing freelance editing work.",
    href: "http://www.upwork.com/freelancers/~01ea387e4fbb57689d?p=2071917491534139392",
    hrefLabel: "View on Upwork →",
  },
];

export interface EditedBook {
  title: string;
  cover: string;
  href?: string;
  pending?: boolean;
}

export const editedBooks: EditedBook[] = [
  {
    title: "Sermons of the Dead",
    cover: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/cover-sermons_cfe2934c.jpg`,
    href: "https://amzn.in/d/0dZVfuhN",
  },
  {
    title: "Our Roots Run Wild",
    cover: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/cover-our-roots_64e522b5.jpg`,
    href: "https://amzn.in/d/0hlETcNy",
  },
  {
    title: "Saligia",
    cover: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/cover-saligia_09ceef80.jpg`,
    pending: true,
  },
  {
    title: "Through Not Your Eyes",
    cover: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/cover-through-not-your-eyes_28c2a423.jpg`,
    href: "https://amzn.in/d/030xwZXy",
  },
  {
    title: "The Colony Brats",
    cover: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/cover-colony-brats_7f9f36f1.jpg`,
    href: "https://amzn.in/d/0cPrmmcR",
  },
  {
    title: "The Song of the Waves",
    cover: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/cover-song-of-waves_7a15a077.jpg`,
    href: "https://amzn.in/d/06ZV76L6",
  },
  {
    title: "Secrets of Mango Rain",
    cover: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/cover-mango-rain_58bdbef4.jpg`,
    href: "https://amzn.in/d/04CX6bLs",
  },
  {
    title: "Amaltas",
    cover: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/cover-amaltas_e339c921.jpg`,
    href: "https://amzn.in/d/0baB38V2",
  },
  {
    title: "The Lines of Separation",
    cover: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/cover-lines-separation_c201d45f.jpg`,
    href: "https://amzn.in/d/0bt1CYvO",
  },
  {
    title: "Jamila – A Love Beyond the Grave",
    cover: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/cover-jamila_93119956.jpg`,
    href: "https://amzn.in/d/09v6GefZ",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  book: string;
  href?: string;
  cover?: string;
  stars?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "My association with Puja goes right back to my first book 'A Tangible God'. With a keen eye for detail and a sharp sense of reasoning she pointed out the errors in the text with her trademark meticulous approach, and made me a better writer.",
    name: "Sapna Manoj",
    book: "A Tangible God · Lunch for the Dead",
    href: "https://amzn.in/d/08rDHSeX",
    cover: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/cover-tangible-god_0306c64b.jpg`,
  },
  {
    quote:
      "Every writer craves an editor who understands both the manuscript and the person behind it. Working with Puja was definitely one of the best parts of my debut publishing journey. She knew exactly when to push the manuscript and when to reassure the author.",
    name: "Kamalika Mazumder",
    book: "Heir I Am",
    href: "https://amzn.in/d/0dMjpLbi",
    cover: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/cover-heir-i-am_a719d24a.jpg`,
  },
  {
    quote:
      "As an author, I value an editor who not only refines a manuscript but also understands the emotions behind every page. Working with Puja was a truly reassuring experience. She addressed every concern I had with immense care and finesse.",
    name: "Bindu P. Menon",
    book: "Elani",
    href: "https://amzn.in/d/02xSPi2V",
    cover: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/cover-elani_d36e4d4f.jpg`,
  },
  {
    quote:
      "As opportunity presented itself, was acquainted with Ms Puja Gupta to edit my book 'Chakra – The Circle of Life'. She has been a tremendous support in editing the manuscript with openness and meticulous attention. I am impressed by her professional demeanor.",
    name: "Mytri Sanatkumar",
    book: "Chakra – The Circle of Life",
    href: "https://amzn.in/d/00BqYWa8",
    cover: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/cover-chakra_cb20cbec.jpg`,
  },
  {
    quote:
      "In my years as an academic author, I have collaborated with many professionals, but Puja stands in a league of her own. She has been far more than an editor; she has been my strongest support in transforming research findings into an engaging narrative.",
    name: "Nehmat Kaur Dhillon",
    book: "Fashion and Somatic Movement Therapy",
    href: "https://amzn.in/d/02BvyAi5",
    cover: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/cover-fashion-somatic_7fb22897.jpg`,
  },
  {
    quote:
      "I came in touch with Puja over emails when finalising The Alcove as a publisher for my book, Our Roots Run Wild. Right from attending my queries about the whole process to helping me walk through the publication timeline with ease, she has been an absolute rockstar.",
    name: "Aniruddha Dhamorikar",
    book: "Our Roots Run Wild",
    href: "https://amzn.in/d/0hlETcNy",
    cover: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/cover-our-roots_64e522b5.jpg`,
  },
  {
    quote:
      "I am delighted to write this recommendation for Puja Gupta as she transitions into freelance editing. Puja served as the creative editor for my debut collection of short stories, And the River Flows. For being constantly available… for making me feel that my words matter — this personal touch is what makes Puja stand apart.",
    name: "Celia Abraham",
    book: "And the River Flows",
    cover: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/celia-abraham_cover.jpg.jpeg`,
  },
];

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
      "Kindness is a thought that arrives with no ulterior motive. Calm, unarticulated, almost transparent — and most of all, unassuming. Here is where I draw the line between kindness and i...",
    featured: true,
    image: ASSETS.blogFeatured,
    body: [
      {
        kind: "p",
        text: "Since forever, we have known Kindness as a virtue — much celebrated and sought after. Who would not want to have a Kind boss in the corporate jungle, Kind words from a friend in distress, or a Kind gesture from a stranger?",
      },
      {
        kind: "p",
        text: "For me, Kindness is a thought that comes to you with no ulterior motive. It shows in your actions but without a rider. It's calm, non-articulated, almost transparent and most of all, non-judgmental.",
      },
      {
        kind: "p",
        text: "More often than not, Kindness is confused with being selfless — to the extent of jeopardising one's own feelings. And that is where I differ.",
      },
      {
        kind: "h2",
        text: "Kindness is not self-erasure",
      },
      {
        kind: "p",
        text: "Being Kind in no way implies that you are not entitled to set boundaries or be honest in your feedback, knowing well that it might not be taken in the right spirit. Kindness also does not mean that you become a Yes-person.",
      },
      {
        kind: "p",
        text: "On the other hand, being 'too Kind' is something one needs to be wary of. For Kindness does not announce itself — it does not attempt to be recognised or dramatic. Often what looks like kindness to the giver can be enabling for the receiver.",
      },
      {
        kind: "p",
        text: "Kindness does not seek to burden; it seeks to uplift — uplifting without being a burden. It is a gentle presence that offers solace without leaving scars of strife.",
      },
      {
        kind: "quote",
        text: "Kindness begins with the understanding that we all struggle.",
      },
      { kind: "attribution", text: "— Charles Glassman" },
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
    body: "Developmental, copy, and line editing to sharpen your story — structural honesty, sentence-level care, and a fresh eye that still hears your voice.",
  },
  {
    no: "02",
    title: "Proofreading",
    body: "A careful final pass so nothing slips through — typos, consistency, formatting, and the small things that make a professional first impression.",
  },
  {
    no: "03",
    title: "Author Consultancy",
    body: "Guidance through publishing, launches, and everything between — an honest sounding board from first draft to last page.",
  },
];


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
