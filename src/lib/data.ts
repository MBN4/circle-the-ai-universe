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
    desc: "Artificial Design Intelligence that builds a fully customized website tailored to your business.",
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
    desc: "Drag-and-drop website builder equipped with AI content generation, logo maker, and heatmap analyzer.",
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
    desc: "AI website builder for solo entrepreneurs that creates a complete business website in 30 seconds.",
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
    desc: "Generate responsive, fluidly animated landing pages and sites from a single prompt.",
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
    desc: "AI-powered WordPress platform for automated website creation, cloning, and hosting.",
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
    desc: "Simple and intuitive website builder with AI-assisted layout and structure generation.",
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
    desc: "No-code AI platform for building websites, mobile apps, and customer service chatbots.",
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
    desc: "AI-driven content, custom CSS, and code generation integrated into the Elementor builder.",
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
    desc: "Smart templates and copy generation to help entrepreneurs launch professional sites quickly.",
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
    desc: "Generate 3D animated websites and interactive models from plain text prompts.",
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
    desc: "AI-powered video editor that makes editing video as simple as editing a text transcript.",
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
    desc: "Create professional AI avatar videos from script text in over 120 languages.",
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
    desc: "AI video generation for marketing and sales with photorealistic digital avatars and translation.",
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
    desc: "Automatically extract short viral clips and reels from long webinars and podcasts.",
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
    desc: "AI video creator that turns blog posts and text articles into engaging marketing videos.",
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
    desc: "Cloud-based video editor with AI tools for automatic subtitling, silence removal, and resizing.",
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
    desc: "Text-to-video and image-to-video generator for creating cinematic animations and effects.",
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
    desc: "Creative engine for generating artistic animated videos based on uploaded music and art.",
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
    desc: "Convert text into voiceover-powered videos with realistic AI voices in minutes.",
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
    desc: "Generate complete scripted YouTube videos with narration, stock clips, and music from a prompt.",
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
    { q: "What is Circle?", a: "Circle is the premier directory for discovering, comparing, and submitting advanced AI software." },
    { q: "Is it free to use?", a: "Yes, browsing the directory and saving your personal AI stack is completely free." },
    { q: "How often is it updated?", a: "We add and verify new AI tools daily to ensure you have access to the latest models." },
    { q: "Can I compare tools?", a: "Yes! Use the Compare feature to analyze pricing, APIs, pros and cons side by side." }
  ],
  directory: [
    { q: "How do I filter tools?", a: "Use the category tabs and pricing filters (Free, Freemium, Paid, Open Source) to find exact matches." },
    { q: "Can I bookmark tools?", a: "Click the bookmark icon on any card to save it to your personal Stack." }
  ],
  submit: [
    { q: "What are the requirements?", a: "Tools must be functional, AI-driven, and provide clear value." },
    { q: "How long does review take?", a: "Typically 24-48 hours for our team to review and verify your tool." }
  ],
  about: [
    { q: "What is the roadmap?", a: "We are actively expanding AI comparisons, community upvotes, and custom prompt libraries." }
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