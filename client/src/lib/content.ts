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
      "2018–2026. Joined the organization as a Blogger and progressed to the roles of Editor, Chief Editor, and Creative Director. Successfully managed the end-to-end publishing journey for over 300 books, from author onboarding and manuscript editing to coordinating cover design, formatting, printing, and publication, ensuring each project aligned with the author's vision and publishing goals. Additionally, spearheaded book launches, moderated panel discussions, and led content creation for social media campaigns, including promotional posts, book trailers, and teaser videos.",
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
    href: "https://amzn.in/d/0ij9Zvwx",
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
      "My association with Puja goes right back to my first book 'A Tangible God'. With a keen eye for detail and a sharp sense of reasoning she pointed out the errors in the text with her trademark green, blue and yellow highlights! The typos, the missing punctuations, the tense chaos and the spelling fiascos were all swept away and forgotten. This month, when my fourth book 'Lunch for the Dead' has seen the light, I have to thank Puja for many things. For being constantly available, for replying to my endless queries in record time, for boosting my confidence when I was feeling low, for the kind encouragement when I was in a maze of doubt, for making me feel that my words matter. This personal touch is what makes Puja stand apart. She is remarkable as an editor. As a human being, she is simply exceptional.",
    name: "Sapna Manoj",
    book: "A Tangible God · Lunch for the Dead",
    href: "https://amzn.in/d/08rDHSeX",
    cover: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/cover-tangible-god_0306c64b.jpg`,
  },
  {
    quote:
      "Every writer craves an editor who understands both the manuscript and the person behind it. Working with Puja was definitely one of the best parts of my debut publishing journey. She knew exactly when to challenge a sentence and when to let my voice shine. Her suggestions always strengthened the manuscript without taking away its heart, and our easy rapport made the entire process inspiring and genuinely fun.",
    name: "Kamalika Mazumder",
    book: "Heir I Am",
    href: "https://amzn.in/d/0dMjpLbi",
    cover: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/cover-heir-i-am_a719d24a.jpg`,
  },
  {
    quote:
      "As an author, I value an editor who not only refines a manuscript but also understands the emotions behind every page. Working with Puja was a truly reassuring experience. She addressed even the smallest of my concerns with patience, professionalism, and genuine care, making the entire editing process smooth and collaborative. What sets Puja apart is her ability to preserve an author's voice while enhancing the manuscript with remarkable attention to detail. She is thoughtful, approachable, and deeply committed to the books she works on. I wholeheartedly recommend her to any author seeking an editor who is both highly skilled and a pleasure to work with.",
    name: "Bindu P. Menon",
    book: "Elani",
    href: "https://amzn.in/d/02xSPi2V",
    cover: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/cover-elani_d36e4d4f.jpg`,
  },
  {
    quote:
      "As opportunity presented itself, was acquainted with Ms Puja Gupta to edit my book “Chakra -The Circle of Life”. She has been a tremendous support in editing the manuscript with open ideas as well as prompt Feedback. Always accessible and supportive, Puja Gupta is a joy to work with making the tedious process of editing effortless.",
    name: "Mytri Sanatkumar",
    book: "Chakra – The Circle of Life",
    href: "https://amzn.in/d/00BqYWa8",
    cover: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/cover-chakra_cb20cbec.jpg`,
  },
  {
    quote:
      "In my years as an academic author, I have collaborated with many professionals, but Puja stands in a league of her own. She has been far more than an editor; she has been my strongest support system and a true guiding force behind my most vigorous academic works. To say she played an essential role in my writing, editing, and creative journey would be an understatement—she has been the visionary who helped me build the foundation of my authorial voice. What sets Puja apart is her profound intellectual generosity. She is an extraordinary listener and a deeply compassionate person. When I found myself blocked as a writer, unable to see a path forward, Puja’s intelligence and wisdom illuminated the way. She has a rare gift for bringing out the best in a writer’s creative journey, not through flattery, but through a deep and sensitive understanding of the material. She was the first person to truly grasp my concepts when others overlooked them, and she validated my work while simultaneously holding up a mirror to my shortcomings in the most sensible and constructive way. Puja’s editorial style is a masterclass in balance. She possesses the tenacity to push her authors beyond their perceived boundaries, yet she does so with immense sensitivity. As someone navigating disabilities such as dyslexia and low vision, I often felt like the writing world was not built for me. But Puja never allowed my circumstances to define my potential. She created an accessible, encouraging environment and guided me toward a positive route, ensuring my voice remained intact while the prose became sharper and more robust. The results of her perseverance speak for themselves. It is largely due to Puja’s dedication and editorial influence that one of my books is now archived in the Irene Lewisohn Costume Reference Library at The Costume Institute of the Metropolitan Museum of Art in New York. That achievement is a testament to her ability to refine a manuscript until it meets the highest standards of scholarship and creativity. Puja is a true visionary with a pure heart and an unmatched eye for potential. She has the influence and the skill to make the best version out of anyone’s writing dreams. She is a gift to the editing world, and any writer fortunate enough to work with her will find not just an editor, but a partner who genuinely cares about their vision. I am deeply grateful for her impact on my life and career, and I recommend her without any hesitation.",
    name: "Nehmat Kaur Dhillon",
    book: "Fashion and Somatic Movement Therapy",
    href: "https://amzn.in/d/09KCxfCc",
    cover: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/cover-fashion-somatic_7fb22897.jpg`,
  },
  {
    quote:
      "I came in touch with Puja over emails when finalising The Alcove as a publisher for my book, Our Roots Run Wild. Right from attending my queries about the whole process to helping me walk through it, Puja has been a constant support. Her quick, tireless responses made me feel comfortable in dealing with a publisher half the country away - the distance, in fact, had no consequences. Despite the size and the theme of the book, she has enabled it to see the light of the day. Her editing, in particular, has helped the book come into a readable shape, a skill, among many in the publishing business, that I came to know Puja for.",
    name: "Aniruddha Dhamorikar",
    book: "Our Roots Run Wild",
    href: "https://amzn.in/d/0hlETcNy",
    cover: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/cover-our-roots_64e522b5.jpg`,
  },
  {
    quote:
      "I am delighted to write this recommendation for Puja Gupta as she transitions into freelance editing. Puja served as the creative editor for my debut collection of short stories, And the River Flows, published by Alcove Publishers. Throughout our collaboration, she was an absolute pillar of professional support. As an author bringing a deeply personal project to life, working with Puja was an incredible experience. What sets Puja apart is not just her keen editorial judgment, but her exceptional approachability and responsiveness. She was consistently prompt, thoughtful, and articulate in her feedback, making the editing process both smooth and rewarding. Beyond her sharp eye for detail, her genuine encouragement and belief in my narrative voice gave me immense confidence throughout the publication journey. Any author or publisher would be incredibly fortunate to work with Puja. Her professionalism, editorial talent, and dedication to guiding writers make her an invaluable asset to any creative project. I whole-heartedly recommend her services to anyone seeking a top-tier freelance editor.",
    name: "Celia Abraham",
    book: "And the River Flows",
    cover: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/celia-abraham_cover.jpg.jpeg`,
  },
  {
    quote:
      "My association with Puja started with the editing of my second book, Amaltas. Though the manuscript had been professionally edited twice before, Puja could still spot the blemishes. I was impressed. Getting the cover of Amaltas right was a struggle. I did my best to annoy Puja with my repeated requests for customisation, but she was patient during the entire process. The first time I met Puja was at the launch of Amaltas. She moderated the interaction. During the course of the event, I realized that here was someone who genuinely loved Amaltas as much as myself, if not more. The thought was very inspiring and encouraging. Puja, with her grace, charm and articulation made the launch of my book memorable. She carried the entire event on her shoulders. Since then, Puja has been my go to person for literary and publishing consultation. Thank you Puja, for Amaltas and everything else. P.S. : Puja is a brilliant closet poet.",
    name: "Hermit Pen",
    book: "Amaltas",
    href: "https://amzn.in/d/0baB38V2",
    cover: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/cover-amaltas_e339c921.jpg`,
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
      "Kindness is a thought that arrives with no ulterior motive. Calm, unarticulated, almost transparent — and most of all, unassuming. Here is where I draw the line between kindness and its counterfeits.",
    featured: true,
    image: ASSETS.blogFeatured,
    body: [
      {
        kind: "p",
        text: "Since forever, we have known Kindness as a virtue – much celebrated and sought after.",
      },
      {
        kind: "p",
        text: "Who would not want to have – a Kind boss in the corporate jungle, Kind words from a friend in times of trouble, a Kind gesture in the throes of despair.",
      },
      {
        kind: "p",
        text: "For me, Kindness is a thought that comes to you with no ulterior motive. It shows in your actions but without a rider. It’s calm, non-articulated, almost transparent and most of all unassuming.",
      },
      {
        kind: "p",
        text: "More often than not, Kindness is confused with being selfless – to the extent of jeopardising one’s own feelings.",
      },
      {
        kind: "p",
        text: "And that is where I differ.",
      },
      {
        kind: "p",
        text: "Being Kind in no way implies that you are not entitled to set boundaries or be honest in your feedback knowing well that it might not be taken in the right spirit. Kindness also does not mean that you put up with any unfair treatment or toxic patterns.",
      },
      {
        kind: "p",
        text: "On the other hand being ‘too Kind’ is something one needs to be wary off. For Kindness does not announce itself – it does not attempt to be recognised or dramatic. Often what is being crafted and creating a perception is not Kindness – rather a cloak. And beneath that lies the raw truth that is far uglier in proportion to the fake front being put up.",
      },
      {
        kind: "p",
        text: "Kindness does not seek to burden; it seeks to uplift. uplifting without being a burden. It is a gentle presence that offers solace without leaving scars of strife.",
      },
      {
        kind: "quote",
        text: "Kindness begins with the understanding that we all struggle.",
      },
      { kind: "attribution", text: "— Charles Glassman" },
      {
        kind: "p",
        text: "So be Kind in whichever capacity you can be, but don’t forget to count yourself in the list.",
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
    body: "Guidance through publishing fundamentals, cover suggestions, formatting ideas, and launch strategy — from manuscript to market.",
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
