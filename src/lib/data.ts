export interface AITool {
  id: number;
  slug: string;
  name: string;
  category: string;
  url: string;
  desc: string;
  icon: string;
  pricingType: "Free" | "Freemium" | "Paid" | "Open Source";
  hasApi: boolean;
  rating: number;
  upvotes: number;
  prompts?: string[];
  pros?: string[];
  cons?: string[];
  alternatives?: number[];
}

export const SITE_CONFIG = {
  name: "Circle",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://circletheai.com",
  title: "Circle - The AI Universe Directory",
  description: "Discover, explore, compare, and submit the world's most innovative Artificial Intelligence tools.",
};

export const CATEGORIES = [
  "Design", "Web Builders", "Video", "Copywriting", "Coding",
  "Image Gen", "Audio", "Marketing", "Productivity", "Data",
  "Research", "Security"
];

export const PRICING_TYPES = ["All", "Free", "Freemium", "Paid", "Open Source"];

export const AI_TOOLS: AITool[] = [
  {
    id: 1,
    slug: "adobe-firefly",
    name: "Adobe Firefly",
    category: "Design",
    url: "https://firefly.adobe.com",
    desc: "Generative AI for creative workflows, integrated into Adobe Creative Cloud.",
    icon: "Palette",
    pricingType: "Freemium",
    hasApi: true,
    rating: 4.8,
    upvotes: 342,
    prompts: [
      "Photorealistic portrait of a robotic astronaut in neon cyberpunk lighting, 8k resolution",
      "Vector illustration of a modern smart city skyline at sunset, minimalist flat art"
    ],
    pros: ["Direct integration with Photoshop and Illustrator", "Commercially safe generated assets"],
    cons: ["Generative credits limit free usage", "Watermark on free tier downloads"],
    alternatives: [2, 4, 55]
  },
  {
    id: 2,
    slug: "midjourney",
    name: "Midjourney",
    category: "Design",
    url: "https://midjourney.com",
    desc: "Advanced AI image generation known for its artistic, cinematic, and photorealistic styles.",
    icon: "Image",
    pricingType: "Paid",
    hasApi: false,
    rating: 4.9,
    upvotes: 890,
    prompts: [
      "Cinematic macro shot of an iridescent crystal glass butterfly --v 6.0 --ar 16:9",
      "Hyper-detailed architectural concept of an eco-friendly solar skyscraper, photorealistic --stylize 250"
    ],
    pros: ["Unmatched artistic quality and realism", "Active global community and daily inspiration"],
    cons: ["No official API", "No permanently free tier"],
    alternatives: [1, 4, 53]
  },
  {
    id: 3,
    slug: "canva-magic-design",
    name: "Canva Magic Design",
    category: "Design",
    url: "https://canva.com",
    desc: "AI-powered tool that generates customized templates, banners, and layouts instantly.",
    icon: "Layout",
    pricingType: "Freemium",
    hasApi: true,
    rating: 4.7,
    upvotes: 512,
    prompts: [
      "Instagram story template for a summer fashion sale with modern typography",
      "Professional pitch deck presentation layout for an AI startup"
    ],
    pros: ["Extremely intuitive for non-designers", "Massive asset and font library"],
    cons: ["Limited customization compared to pro design suites"],
    alternatives: [1, 5, 7]
  },
  {
    id: 4,
    slug: "dall-e-3",
    name: "DALL-E 3",
    category: "Design",
    url: "https://openai.com/dall-e-3",
    desc: "OpenAI's state-of-the-art text-to-image generator with precise prompt following and readable text.",
    icon: "Zap",
    pricingType: "Paid",
    hasApi: true,
    rating: 4.8,
    upvotes: 670,
    prompts: [
      "A vintage diner menu board that clearly says 'COFFEE $2' in retro neon letters",
      "An oil painting of a librarian owl sitting on a stack of ancient books"
    ],
    pros: ["Superior text rendering inside images", "Natural prompt understanding via ChatGPT"],
    cons: ["Strict safety filtering", "Limited fine-tuning camera controls"],
    alternatives: [2, 53, 56]
  },
  {
    id: 5,
    slug: "looka",
    name: "Looka",
    category: "Design",
    url: "https://looka.com",
    desc: "AI-driven platform for automated logo design and complete brand identity generation.",
    icon: "Target",
    pricingType: "Paid",
    hasApi: false,
    rating: 4.5,
    upvotes: 210,
    prompts: [
      "Modern minimalist logo for a fintech startup named VaultAI with geometric badge"
    ],
    pros: ["Generates full brand kits and business cards", "Instant vector downloads"],
    cons: ["One-off payment needed to download vector files"],
    alternatives: [1, 3, 7]
  },
  {
    id: 6,
    slug: "uizard",
    name: "Uizard",
    category: "Design",
    url: "https://uizard.io",
    desc: "Sketch-to-prototype UI designer that uses AI to transform wireframes into interactive apps.",
    icon: "PenTool",
    pricingType: "Freemium",
    hasApi: false,
    rating: 4.6,
    upvotes: 380,
    prompts: [
      "Mobile crypto wallet interface with dark mode theme and portfolio dashboard"
    ],
    pros: ["Convert hand-drawn sketches to UI screens", "Fast clickable prototype generation"],
    cons: ["Limited export options for clean production code"],
    alternatives: [8, 14, 20]
  },
  {
    id: 7,
    slug: "designs-ai",
    name: "Designs.ai",
    category: "Design",
    url: "https://designs.ai",
    desc: "All-in-one suite for generating logos, videos, social banners, and mockups.",
    icon: "Layout",
    pricingType: "Paid",
    hasApi: false,
    rating: 4.4,
    upvotes: 195,
    pros: ["Multi-format creative generation", "Centralized asset manager"],
    cons: ["Higher subscription pricing for individual creators"],
    alternatives: [1, 3, 5]
  },
  {
    id: 8,
    slug: "figma-ai",
    name: "Figma AI",
    category: "Design",
    url: "https://figma.com",
    desc: "AI capabilities embedded directly into Figma to automate design layouts and component variants.",
    icon: "Layers",
    pricingType: "Freemium",
    hasApi: true,
    rating: 4.9,
    upvotes: 780,
    pros: ["Industry-standard design workflow", "Automated layer renaming and prototyping"],
    cons: ["Requires Figma proficiency"],
    alternatives: [6, 14]
  },
  {
    id: 9,
    slug: "runway",
    name: "Runway",
    category: "Design",
    url: "https://runwayml.com",
    desc: "A multimodal AI studio for generating cinematic video clips, audio, and visual assets.",
    icon: "Video",
    pricingType: "Freemium",
    hasApi: true,
    rating: 4.8,
    upvotes: 620,
    prompts: [
      "Drone camera flyover of a futuristic neon city through heavy rain, cinematic lighting, 4k"
    ],
    pros: ["Gen-2 & Gen-3 cutting-edge video models", "Camera motion brush and depth controls"],
    cons: ["High credit consumption for video rendering"],
    alternatives: [21, 27, 28]
  },
  {
    id: 10,
    slug: "khroma",
    name: "Khroma",
    category: "Design",
    url: "https://khroma.co",
    desc: "AI color tool for designers that learns your personal aesthetic preferences to generate palettes.",
    icon: "Palette",
    pricingType: "Free",
    hasApi: false,
    rating: 4.6,
    upvotes: 310,
    pros: ["Completely free to use", "Generates typography and poster color mockups"],
    cons: ["Focused solely on color generation"],
    alternatives: [1, 5]
  },
  {
    id: 11,
    slug: "wix-adi",
    name: "Wix ADI",
    category: "Web Builders",
    url: "https://wix.com",
    desc: "Artificial Design Intelligence that builds a unique website in minutes.",
    icon: "Globe",
    pricingType: "Freemium",
    hasApi: false,
    rating: 4.5,
    upvotes: 290,
    pros: ["Complete hosting and domain integration", "Rich eCommerce and booking extensions"],
    cons: ["Platform lock-in"],
    alternatives: [12, 13, 14]
  },
  {
    id: 12,
    slug: "hostinger-ai",
    name: "Hostinger AI",
    category: "Web Builders",
    url: "https://hostinger.com",
    desc: "Drag-and-drop builder with AI tools for content, logos, and heatmaps.",
    icon: "Layout",
    pricingType: "Paid",
    hasApi: false,
    rating: 4.6,
    upvotes: 240,
    pros: ["Affordable bundled hosting", "Built-in AI SEO and copywriter"],
    cons: ["No permanent free tier"],
    alternatives: [11, 13, 15]
  },
  {
    id: 13,
    slug: "durable",
    name: "Durable",
    category: "Web Builders",
    url: "https://durable.co",
    desc: "AI website builder for solo entrepreneurs that creates a site in 30 seconds.",
    icon: "Zap",
    pricingType: "Freemium",
    hasApi: false,
    rating: 4.7,
    upvotes: 410,
    pros: ["Rapid website setup under 1 minute", "Built-in invoicing and simple CRM"],
    cons: ["Limited granular design customizability"],
    alternatives: [11, 14, 19]
  },
  {
    id: 14,
    slug: "framer-ai",
    name: "Framer AI",
    category: "Web Builders",
    url: "https://framer.com",
    desc: "Generate entire websites from a single text prompt in seconds.",
    icon: "Layout",
    pricingType: "Freemium",
    hasApi: false,
    rating: 4.9,
    upvotes: 750,
    prompts: [
      "Minimalist landing page for a SaaS AI tool with glassmorphism cards, dark mode, and pricing tables"
    ],
    pros: ["Top-tier animations and visual quality", "Direct domain publishing with fast CDN"],
    cons: ["Steeper learning curve for complex interactive logic"],
    alternatives: [8, 13, 20]
  },
  {
    id: 15,
    slug: "10web",
    name: "10Web",
    category: "Web Builders",
    url: "https://10web.io",
    desc: "AI-powered WordPress platform for automated website building and hosting.",
    icon: "Cloud",
    pricingType: "Paid",
    hasApi: false,
    rating: 4.5,
    upvotes: 215,
    pros: ["Full WordPress ecosystem compatibility", "90+ Google PageSpeed optimization"],
    cons: ["Requires WordPress architecture familiarity"],
    alternatives: [11, 18]
  },
  {
    id: 16,
    slug: "site123",
    name: "SITE123",
    category: "Web Builders",
    url: "https://site123.com",
    desc: "Simple and intuitive website builder with AI-assisted design and layout.",
    icon: "Globe",
    pricingType: "Freemium",
    hasApi: false,
    rating: 4.3,
    upvotes: 160,
    pros: ["Extremely simple setup", "Mobile responsive out of the box"],
    cons: ["Rigid layout customization"],
    alternatives: [11, 13]
  },
  {
    id: 17,
    slug: "appy-pie",
    name: "Appy Pie",
    category: "Web Builders",
    url: "https://appypie.com",
    desc: "No-code AI platform for building websites, apps, and chatbots.",
    icon: "Smartphone",
    pricingType: "Freemium",
    hasApi: true,
    rating: 4.4,
    upvotes: 275,
    pros: ["Multi-platform web and mobile build", "Pre-built business workflow connectors"],
    cons: ["App store export requires paid plan"],
    alternatives: [13, 14]
  },
  {
    id: 18,
    slug: "elementor-ai",
    name: "Elementor AI",
    category: "Web Builders",
    url: "https://elementor.com",
    desc: "AI-driven content and code generation for WordPress website building.",
    icon: "Code",
    pricingType: "Paid",
    hasApi: false,
    rating: 4.6,
    upvotes: 330,
    pros: ["Generates custom CSS code directly in editor", "Native WordPress integration"],
    cons: ["Requires Elementor Pro license"],
    alternatives: [15, 14]
  },
  {
    id: 19,
    slug: "squarespace-ai",
    name: "Squarespace AI",
    category: "Web Builders",
    url: "https://squarespace.com",
    desc: "Smart templates and copy generation to help you launch faster.",
    icon: "Layout",
    pricingType: "Paid",
    hasApi: false,
    rating: 4.7,
    upvotes: 360,
    pros: ["Award-winning template aesthetics", "Built-in email marketing and analytics"],
    cons: ["No free tier available"],
    alternatives: [11, 14]
  },
  {
    id: 20,
    slug: "dora-ai",
    name: "Dora AI",
    category: "Web Builders",
    url: "https://dora.run",
    desc: "Generate 3D animated websites from text prompts using AI.",
    icon: "Box",
    pricingType: "Freemium",
    hasApi: false,
    rating: 4.8,
    upvotes: 490,
    prompts: [
      "Landing page with interactive 3D model of a cybernetic headphone that rotates on scroll"
    ],
    pros: ["Native 3D models and scroll-driven animations", "Next-generation spatial UI feel"],
    cons: ["Heavy resource load on older client devices"],
    alternatives: [14, 6]
  },
  {
    id: 21,
    slug: "descript",
    name: "Descript",
    category: "Video",
    url: "https://descript.com",
    desc: "AI-powered video editor that makes editing as easy as editing text.",
    icon: "Video",
    pricingType: "Freemium",
    hasApi: false,
    rating: 4.8,
    upvotes: 560,
    pros: ["Automatic filler word removal", "AI voice clone overdubbing"],
    cons: ["Desktop app can be resource intensive"],
    alternatives: [24, 26, 29]
  },
  {
    id: 22,
    slug: "synthesia",
    name: "Synthesia",
    category: "Video",
    url: "https://synthesia.io",
    desc: "Create professional AI avatar videos from text in minutes.",
    icon: "Users",
    pricingType: "Paid",
    hasApi: true,
    rating: 4.7,
    upvotes: 480,
    pros: ["150+ diverse photorealistic avatars", "Multi-language voice synchronization"],
    cons: ["No free plan for continuous usage"],
    alternatives: [23, 29, 30]
  },
  {
    id: 23,
    slug: "heygen",
    name: "HeyGen",
    category: "Video",
    url: "https://heygen.com",
    desc: "AI video generation for marketing, sales, and training using avatars.",
    icon: "UserCircle",
    pricingType: "Freemium",
    hasApi: true,
    rating: 4.9,
    upvotes: 720,
    pros: ["Flawless lip-sync video translation", "Custom avatar creation from 2-minute video"],
    cons: ["Credit limits on free tier"],
    alternatives: [22, 29]
  },
  {
    id: 24,
    slug: "pictory",
    name: "Pictory",
    category: "Video",
    url: "https://pictory.ai",
    desc: "Automatically create short, highly shareable branded videos from long-form content.",
    icon: "Scissors",
    pricingType: "Paid",
    hasApi: false,
    rating: 4.6,
    upvotes: 310,
    pros: ["Quick turnaround for TikTok/Reels creation", "Auto caption generation"],
    cons: ["Stock footage suggestions can occasionally be generic"],
    alternatives: [21, 25, 26]
  },
  {
    id: 25,
    slug: "lumen5",
    name: "Lumen5",
    category: "Video",
    url: "https://lumen5.com",
    desc: "AI video creator that turns blog posts and articles into engaging videos.",
    icon: "Zap",
    pricingType: "Freemium",
    hasApi: false,
    rating: 4.5,
    upvotes: 270,
    pros: ["Auto-summarizes text into video storyboard", "Vast stock library"],
    cons: ["720p output limitation on free plan"],
    alternatives: [24, 29, 30]
  },
  {
    id: 26,
    slug: "kapwing",
    name: "Kapwing",
    category: "Video",
    url: "https://kapwing.com",
    desc: "Online video editor with AI tools for subtitles, background removal, and more.",
    icon: "Film",
    pricingType: "Freemium",
    hasApi: false,
    rating: 4.7,
    upvotes: 415,
    pros: ["Collaborative browser-based workflow", "Auto-smart cut and subtitle translator"],
    cons: ["Free export includes small watermark"],
    alternatives: [21, 24]
  },
  {
    id: 27,
    slug: "pika-labs",
    name: "Pika Labs",
    category: "Video",
    url: "https://pika.art",
    desc: "Text-to-video generator for creating animations and cinematic effects.",
    icon: "Sparkles",
    pricingType: "Freemium",
    hasApi: true,
    rating: 4.8,
    upvotes: 540,
    prompts: [
      "A cinematic slow motion shot of an espresso drop falling into milky foam, 4k 60fps"
    ],
    pros: ["Precise area modification with Lip Sync", "Fast generation speeds"],
    cons: ["Short clip durations per generation"],
    alternatives: [9, 28]
  },
  {
    id: 28,
    slug: "kaiber",
    name: "Kaiber",
    category: "Video",
    url: "https://kaiber.ai",
    desc: "AI creative engine for generating videos based on your own photos and music.",
    icon: "Music",
    pricingType: "Paid",
    hasApi: false,
    rating: 4.6,
    upvotes: 350,
    pros: ["Audio-reactive animation features", "Distinct visual styles for music videos"],
    cons: ["No free plan"],
    alternatives: [9, 27]
  },
  {
    id: 29,
    slug: "fliki",
    name: "Fliki",
    category: "Video",
    url: "https://fliki.ai",
    desc: "Turn text into videos with realistic AI voices in minutes.",
    icon: "Mic",
    pricingType: "Freemium",
    hasApi: true,
    rating: 4.6,
    upvotes: 320,
    pros: ["1000+ realistic voices in 75 languages", "Text-to-podcast and video capability"],
    cons: ["5-minute monthly free video credit"],
    alternatives: [22, 23, 30]
  },
  {
    id: 30,
    slug: "invideo-ai",
    name: "InVideo AI",
    category: "Video",
    url: "https://invideo.io",
    desc: "A simple text-to-video tool that generates complete videos with voiceovers.",
    icon: "Video",
    pricingType: "Freemium",
    hasApi: false,
    rating: 4.7,
    upvotes: 490,
    prompts: [
      "Create a 60-second YouTube Short about 5 undiscovered facts about Mars with energetic narration"
    ],
    pros: ["Fully automated end-to-end video production", "Voice clone capability"],
    cons: ["Watermarked exports on free plan"],
    alternatives: [24, 25, 29]
  },
  {
    id: 41,
    slug: "github-copilot",
    name: "GitHub Copilot",
    category: "Coding",
    url: "https://github.com/features/copilot",
    desc: "AI pair programmer that provides real-time multi-line completions and chat context inside your IDE.",
    icon: "Code",
    pricingType: "Paid",
    hasApi: false,
    rating: 4.9,
    upvotes: 950,
    pros: ["Seamless VS Code, JetBrains, and Neovim integration", "High accuracy on standard patterns"],
    cons: ["Monthly subscription fee"],
    alternatives: [42, 43, 48]
  },
  {
    id: 42,
    slug: "cursor",
    name: "Cursor",
    category: "Coding",
    url: "https://cursor.com",
    desc: "The AI-native code editor built for full-repo indexing, terminal agents, and predictive edits.",
    icon: "Code",
    pricingType: "Freemium",
    hasApi: false,
    rating: 5.0,
    upvotes: 1180,
    pros: ["Full codebase understanding and indexing", "Multi-file generation and direct terminal debug"],
    cons: ["Requires switching from default VS Code install"],
    alternatives: [41, 46, 48]
  },
  {
    id: 48,
    slug: "codeium",
    name: "Codeium",
    category: "Coding",
    url: "https://codeium.com",
    desc: "Free, high-speed AI coding assistant with extensions for over 40 IDEs and enterprise support.",
    icon: "Code",
    pricingType: "Free",
    hasApi: true,
    rating: 4.8,
    upvotes: 620,
    pros: ["Generous free tier for individual developers", "Fast autocompletions"],
    cons: ["Chat indexing can be slower on massive monorepos"],
    alternatives: [41, 42, 43]
  },
  {
    id: 53,
    slug: "stable-diffusion",
    name: "Stable Diffusion",
    category: "Image Gen",
    url: "https://stability.ai",
    desc: "Open-source deep learning text-to-image model that can be run locally with zero cloud restrictions.",
    icon: "Wind",
    pricingType: "Open Source",
    hasApi: true,
    rating: 4.9,
    upvotes: 910,
    prompts: [
      "masterpiece, best quality, 1girl, cyberpunk jacket, glowing visor, rain reflection, octane render"
    ],
    pros: ["100% open weights for local offline execution", "Endless custom LoRAs and ControlNet ecosystem"],
    cons: ["Requires capable GPU hardware for local setups"],
    alternatives: [2, 4, 55]
  },
  {
    id: 81,
    slug: "notion-ai",
    name: "Notion AI",
    category: "Productivity",
    url: "https://notion.so",
    desc: "Connected AI assistant integrated directly into your workspace documents, notes, and task tables.",
    icon: "FileText",
    pricingType: "Paid",
    hasApi: true,
    rating: 4.8,
    upvotes: 720,
    pros: ["Understands context across all your workspace notes", "Automatic table autofill and summary"],
    cons: ["Add-on subscription cost on top of Notion plans"],
    alternatives: [83, 85, 90]
  },
  {
    id: 83,
    slug: "chatgpt",
    name: "ChatGPT",
    category: "Productivity",
    url: "https://chatgpt.com",
    desc: "Versatile conversational AI assistant for brainstorming, coding, analysis, and custom GPTs.",
    icon: "MessageSquare",
    pricingType: "Freemium",
    hasApi: true,
    rating: 4.9,
    upvotes: 1420,
    pros: ["Voice mode and vision analysis", "Custom GPTs and Python code interpreter"],
    cons: ["Usage caps on latest reasoning models during peak hours"],
    alternatives: [40, 101]
  },
  {
    id: 101,
    slug: "perplexity-ai",
    name: "Perplexity AI",
    category: "Research",
    url: "https://perplexity.ai",
    desc: "Conversational answer engine that searches the live web and provides real-time cited answers.",
    icon: "Search",
    pricingType: "Freemium",
    hasApi: true,
    rating: 4.9,
    upvotes: 980,
    pros: ["Verified academic and web citations for every fact", "Focus mode for Reddit, YouTube, and Papers"],
    cons: ["Pro search queries limited on free tier"],
    alternatives: [83, 102, 106]
  }
];

export const FAQS = {
  home: [
    {
      q: "What is Circle and what makes it unique?",
      a: "Circle is a curated AI ecosystem directory where you can discover, benchmark, compare side-by-side, and save verified AI software with live community rankings."
    },
    {
      q: "Is browsing Circle and saving tools free?",
      a: "Yes, browsing our full catalog of 120+ AI tools, testing comparisons, and building your personal AI Stack is 100% free with no account required."
    },
    {
      q: "How often is the AI directory updated?",
      a: "Our editorial team and automated crawlers update tool profiles, verified URLs, pricing models, and public API statuses on a daily basis."
    },
    {
      q: "How does the Side-by-Side Comparison feature work?",
      a: "Navigate to the Compare tab to select any two AI tools and instantly analyze their pricing models, API availability, benchmark ratings, pros, and trade-offs."
    },
    {
      q: "What is 'My AI Stack' and how do I use it?",
      a: "Click the bookmark icon on any tool card to save it to your browser storage. You can access your personalized suite and share it via a custom link."
    },
    {
      q: "Can I submit my own AI product or startup?",
      a: "Yes! Use the Submit page to send your tool details. Our review team verifies all submissions within 24 to 48 hours."
    }
  ],
  directory: [
    {
      q: "How do I filter AI tools by pricing or open-source status?",
      a: "Use the filter bar below the category pills to instantly narrow down software by Free, Freemium, Paid, Open Source, or API Available."
    },
    {
      q: "Can I search by keyword or specific features?",
      a: "Yes, our real-time search bar indexes tool titles, capability tags, supported models, and full descriptions instantly."
    },
    {
      q: "Are all listed external links verified and safe?",
      a: "Every tool link is manually audited to point strictly to official developer websites and registered domains."
    },
    {
      q: "How are community upvotes calculated?",
      a: "Users can upvote tools they use and love directly from the card. Upvote scores influence the Trending leaderboard on our home page."
    },
    {
      q: "How do I compare a tool I found in the directory?",
      a: "Click the scale/balance icon on any card in the directory to automatically load that tool into our side-by-side comparison engine."
    },
    {
      q: "What if a listed tool changes its pricing or features?",
      a: "You can submit an update request on our Submit page or notify our review team to correct any listing details."
    }
  ],
  submit: [
    {
      q: "What are the eligibility criteria for listing a tool?",
      a: "Your software must be functional, leverage machine learning or generative AI, and offer clear utility to end users or developers."
    },
    {
      q: "How long does the review and verification process take?",
      a: "Standard reviews are completed within 24 to 48 business hours. You will receive an email confirmation once listed."
    },
    {
      q: "Is there any fee to submit an AI tool to Circle?",
      a: "Basic listings and category indexing are completely free. Featured placement and spotlight badges are optional."
    },
    {
      q: "Can I submit open-source AI models or GitHub repositories?",
      a: "Yes! We actively support open-source projects. Select 'Open Source' as the pricing type during your submission."
    },
    {
      q: "What information should I provide for the fastest approval?",
      a: "Provide a working demo URL, a clear 2-sentence description of the core value proposition, key pros, and public API status."
    },
    {
      q: "Can I edit my tool's description or prompts after publishing?",
      a: "Yes, reach out via email with your tool name and the requested amendments, and our team will update the live listing."
    }
  ],
  about: [
    {
      q: "What is the mission behind Circle?",
      a: "Circle was built to democratize access to the rapidly accelerating AI universe by providing transparent, searchable, and unbiased tooling data."
    },
    {
      q: "What is on the upcoming product roadmap?",
      a: "Our upcoming milestones include community review threads, verified user performance benchmarks, automated price tracking, and an AI workflow generator."
    },
    {
      q: "How does Circle ensure quality over quantity in listings?",
      a: "We test tools before approval, filtering out non-functional wrappers and prioritizing apps that provide genuine value."
    },
    {
      q: "Who is behind the development of Circle?",
      a: "Circle is built and maintained by a dedicated team of engineers, designers, and AI researchers passionate about open-access technology."
    },
    {
      q: "Can organizations partner or integrate with Circle?",
      a: "Yes, we are open to partnerships with AI labs, developer platforms, and tooling directories. Contact us for partnership inquiries."
    },
    {
      q: "Is the data accessible for developers?",
      a: "We are developing a public API to enable developers to query categorized AI tool metadata and benchmark ratings directly."
    }
  ]
};

export const VALUES = [
  { title: "Innovation", desc: "We constantly seek out the most groundbreaking AI technologies.", icon: "Zap" },
  { title: "Accessibility", desc: "Making advanced AI tools easy to find, compare, and use for everyone.", icon: "Users" },
  { title: "Quality", desc: "Only functional, verified tools make it through our vetting process.", icon: "ShieldCheck" }
];

export function getToolBySlugOrId(idOrSlug: string): AITool | undefined {
  return AI_TOOLS.find((t) => t.id.toString() === idOrSlug || t.slug === idOrSlug);
}

export function getToolsByCategory(category?: string): AITool[] {
  if (!category || category === 'All') return AI_TOOLS;
  return AI_TOOLS.filter((t) => t.category.toLowerCase() === category.toLowerCase());
}