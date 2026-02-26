export const CATEGORIES = [
  "Design", "Web Builders", "Video", "Copywriting", "Coding",
  "Image Gen", "Audio", "Marketing", "Productivity", "Data",
  "Research", "Security"
];

export const AI_TOOLS = [
  // Design
  { id: 1, name: "Adobe Firefly", category: "Design", url: "https://firefly.adobe.com", desc: "Generative AI for creative workflows, integrated into Adobe Creative Cloud.", icon: "Palette" },
  { id: 2, name: "Midjourney", category: "Design", url: "https://midjourney.com", desc: "Advanced AI image generation known for its artistic and realistic styles.", icon: "Image" },
  { id: 3, name: "Canva Magic Design", category: "Design", url: "https://canva.com", desc: "AI-powered tool that generates customized templates and designs instantly.", icon: "Layout" },
  { id: 4, name: "DALL-E 3", category: "Design", url: "https://openai.com/dall-e-3", desc: "OpenAI's state-of-the-art text-to-image generator with precise prompt following.", icon: "Zap" },
  { id: 5, name: "Looka", category: "Design", url: "https://looka.com", desc: "AI-driven platform for logo design and full brand identity creation.", icon: "Target" },
  { id: 6, name: "Uizard", category: "Design", url: "https://uizard.io", desc: "Sketch-to-prototype UI designer that uses AI to speed up product design.", icon: "PenTool" },
  { id: 7, name: "Designs.ai", category: "Design", url: "https://designs.ai", desc: "All-in-one suite for generating logos, videos, banners, and mockups.", icon: "Layout" },
  { id: 8, name: "Figma AI", category: "Design", url: "https://figma.com", desc: "AI features that automate design tasks and help build prototypes faster.", icon: "Layers" },
  { id: 9, name: "Runway", category: "Design", url: "https://runwayml.com", desc: "A creative toolkit for generating images, videos, and artistic assets.", icon: "Video" },
  { id: 10, name: "Khroma", category: "Design", url: "https://khroma.co", desc: "AI color tool for designers that learns your preferences to create palettes.", icon: "Palette" },

  // Web Builders
  { id: 11, name: "Wix ADI", category: "Web Builders", url: "https://wix.com", desc: "Artificial Design Intelligence that builds a unique website in minutes.", icon: "Globe" },
  { id: 12, name: "Hostinger AI", category: "Web Builders", url: "https://hostinger.com", desc: "Drag-and-drop builder with AI tools for content, logos, and heatmaps.", icon: "Layout" },
  { id: 13, name: "Durable", category: "Web Builders", url: "https://durable.co", desc: "AI website builder for solo entrepreneurs that creates a site in 30 seconds.", icon: "Zap" },
  { id: 14, name: "Framer AI", category: "Web Builders", url: "https://framer.com", desc: "Generate entire websites from a single text prompt in seconds.", icon: "Layout" },
  { id: 15, name: "10Web", category: "Web Builders", url: "https://10web.io", desc: "AI-powered WordPress platform for automated website building and hosting.", icon: "Cloud" },
  { id: 16, name: "SITE123", category: "Web Builders", url: "https://site123.com", desc: "Simple and intuitive website builder with AI-assisted design and layout.", icon: "Globe" },
  { id: 17, name: "Appy Pie", category: "Web Builders", url: "https://appypie.com", desc: "No-code AI platform for building websites, apps, and chatbots.", icon: "Smartphone" },
  { id: 18, name: "Elementor AI", category: "Web Builders", url: "https://elementor.com", desc: "AI-driven content and code generation for WordPress website building.", icon: "Code" },
  { id: 19, name: "Squarespace AI", category: "Web Builders", url: "https://squarespace.com", desc: "Smart templates and copy generation to help you launch faster.", icon: "Layout" },
  { id: 20, name: "Dora AI", category: "Web Builders", url: "https://dora.run", desc: "Generate 3D animated websites from text prompts using AI.", icon: "Box" },

  // Video
  { id: 21, name: "Descript", category: "Video", url: "https://descript.com", desc: "AI-powered video editor that makes editing as easy as editing text.", icon: "Video" },
  { id: 22, name: "Synthesia", category: "Video", url: "https://synthesia.io", desc: "Create professional AI avatar videos from text in minutes.", icon: "Users" },
  { id: 23, name: "HeyGen", category: "Video", url: "https://heygen.com", desc: "AI video generation for marketing, sales, and training using avatars.", icon: "UserCircle" },
  { id: 24, name: "Pictory", category: "Video", url: "https://pictory.ai", desc: "Automatically create short, highly shareable branded videos from long-form content.", icon: "Scissors" },
  { id: 25, name: "Lumen5", category: "Video", url: "https://lumen5.com", desc: "AI video creator that turns blog posts and articles into engaging videos.", icon: "Zap" },
  { id: 26, name: "Kapwing", category: "Video", url: "https://kapwing.com", desc: "Online video editor with AI tools for subtitles, background removal, and more.", icon: "Film" },
  { id: 27, name: "Pika Labs", category: "Video", url: "https://pika.art", desc: "Text-to-video generator for creating animations and cinematic effects.", icon: "Sparkles" },
  { id: 28, name: "Kaiber", category: "Video", url: "https://kaiber.ai", desc: "AI creative engine for generating videos based on your own photos and music.", icon: "Music" },
  { id: 29, name: "Fliki", category: "Video", url: "https://fliki.ai", desc: "Turn text into videos with realistic AI voices in minutes.", icon: "Mic" },
  { id: 30, name: "InVideo AI", category: "Video", url: "https://invideo.io", desc: "A simple text-to-video tool that generates complete videos with voiceovers.", icon: "Video" },

  // Copywriting
  { id: 31, name: "Jasper", category: "Copywriting", url: "https://jasper.ai", desc: "AI content platform for marketing teams to create high-quality copy.", icon: "PenTool" },
  { id: 32, name: "Copy.ai", category: "Copywriting", url: "https://copy.ai", desc: "AI-powered tool for generating sales copy, blogs, and social media posts.", icon: "FileText" },
  { id: 33, name: "Writesonic", category: "Copywriting", url: "https://writesonic.com", desc: "AI writing assistant that creates SEO-optimized content and blogs.", icon: "Zap" },
  { id: 34, name: "Anyword", category: "Copywriting", url: "https://anyword.com", desc: "Data-driven copywriting platform that predicts how your copy will perform.", icon: "BarChart" },
  { id: 35, name: "Rytr", category: "Copywriting", url: "https://rytr.me", desc: "AI writing assistant that helps you create high-quality content in seconds.", icon: "Pen" },
  { id: 36, name: "Copysmith", category: "Copywriting", url: "https://copysmith.ai", desc: "AI content creation for eCommerce teams and agencies.", icon: "ShoppingBag" },
  { id: 37, name: "Wordtune", category: "Copywriting", url: "https://wordtune.com", desc: "AI writing tool that helps you rewrite and refine your sentences.", icon: "Type" },
  { id: 38, name: "Grammarly", category: "Copywriting", url: "https://grammarly.com", desc: "AI-powered writing assistant for grammar, tone, and clarity.", icon: "CheckCircle" },
  { id: 39, name: "Hemingway AI", category: "Copywriting", url: "https://hemingwayapp.com", desc: "Helps you make your writing bold and clear using AI-driven feedback.", icon: "Edit3" },
  { id: 40, name: "Claude", category: "Copywriting", url: "https://claude.ai", desc: "Anthropic's AI assistant capable of long-form writing and complex reasoning.", icon: "MessageSquare" },

  // Coding
  { id: 41, name: "GitHub Copilot", category: "Coding", url: "https://github.com/features/copilot", desc: "Your AI pair programmer that suggests code and entire functions.", icon: "Code" },
  { id: 42, name: "Cursor", category: "Coding", url: "https://cursor.com", desc: "The AI-first code editor built for pair programming with an LLM.", icon: "Code" },
  { id: 43, name: "Tabnine", category: "Coding", url: "https://tabnine.com", desc: "AI assistant for software developers that provides real-time code completions.", icon: "Terminal" },
  { id: 44, name: "Amazon Q Developer", category: "Coding", url: "https://aws.amazon.com/q/developer", desc: "AI-powered assistant for building, deploying, and operating applications on AWS.", icon: "Cpu" },
  { id: 45, name: "Replit Ghostwriter", category: "Coding", url: "https://replit.com", desc: "AI-powered tools for writing, debugging, and explaining code in Replit.", icon: "Zap" },
  { id: 46, name: "Sourcegraph Cody", category: "Coding", url: "https://sourcegraph.com/cody", desc: "AI coding assistant that understands your entire codebase.", icon: "Search" },
  { id: 47, name: "Blackbox AI", category: "Coding", url: "https://useblackbox.io", desc: "AI tool to search through millions of code snippets and auto-complete code.", icon: "Box" },
  { id: 48, name: "Codeium", category: "Coding", url: "https://codeium.com", desc: "Free, high-quality AI coding assistant with extensions for 40+ IDEs.", icon: "Code" },
  { id: 49, name: "Sourcery", category: "Coding", url: "https://sourcery.ai", desc: "AI tool that helps you refactor and improve your Python code automatically.", icon: "Wind" },
  { id: 50, name: "Pieces for Developers", category: "Coding", url: "https://pieces.app", desc: "AI-powered snippet management and workflow optimization tool.", icon: "Puzzle" },

  // Image Gen
  { id: 51, name: "Midjourney", category: "Image Gen", url: "https://midjourney.com", desc: "Highly artistic AI image generation tool popular for creative visuals.", icon: "Image" },
  { id: 52, name: "DALL-E 3", category: "Image Gen", url: "https://openai.com", desc: "OpenAI's latest text-to-image generator, now integrated into ChatGPT.", icon: "Image" },
  { id: 53, name: "Stable Diffusion", category: "Image Gen", url: "https://stability.ai", desc: "Open-source image generation model that can be run locally.", icon: "Wind" },
  { id: 54, name: "Adobe Firefly", category: "Image Gen", url: "https://firefly.adobe.com", desc: "Creator-focused AI tool for image editing and vector generation.", icon: "Palette" },
  { id: 55, name: "Leonardo.ai", category: "Image Gen", url: "https://leonardo.ai", desc: "Full-featured AI platform for character design, environments, and assets.", icon: "Sparkles" },
  { id: 56, name: "Ideogram", category: "Image Gen", url: "https://ideogram.ai", desc: "AI tool that excels at generating high-quality images with readable text.", icon: "Type" },
  { id: 57, name: "BlueWillow", category: "Image Gen", url: "https://bluewillow.ai", desc: "A free alternative to Midjourney for high-quality artistic images.", icon: "Cloud" },
  { id: 58, name: "Playground AI", category: "Image Gen", url: "https://playgroundai.com", desc: "Easy-to-use platform for generating and editing AI images and art.", icon: "Gamepad" },
  { id: 59, name: "Jasper Art", category: "Image Gen", url: "https://jasper.ai", desc: "AI art generator that turns your imagination into unique high-res images.", icon: "Palette" },
  { id: 60, name: "NightCafe", category: "Image Gen", url: "https://nightcafe.studio", desc: "AI art platform with daily challenges and multiple generation models.", icon: "Coffee" },

  // Audio
  { id: 61, name: "ElevenLabs", category: "Audio", url: "https://elevenlabs.io", desc: "Lifelike text-to-speech and voice cloning for creators and brands.", icon: "Mic" },
  { id: 62, name: "Murf AI", category: "Audio", url: "https://murf.ai", desc: "AI voice generator for creating high-quality professional voiceovers.", icon: "Volume2" },
  { id: 63, name: "Soundraw", category: "Audio", url: "https://soundraw.io", desc: "AI music generator for creators that allows you to customize royalty-free music.", icon: "Music" },
  { id: 64, name: "Krisp", category: "Audio", url: "https://krisp.ai", desc: "AI tool that removes background noise and echoes from your calls.", icon: "Shield" },
  { id: 65, name: "Otter.ai", category: "Audio", url: "https://otter.ai", desc: "AI transcription and meeting notes that capture every word.", icon: "FileText" },
  { id: 66, name: "Lovo.ai", category: "Audio", url: "https://lovo.ai", desc: "AI voice and content creation platform with high-quality TTS.", icon: "Mic" },
  { id: 67, name: "Mubert", category: "Audio", url: "https://mubert.com", desc: "AI-generated royalty-free music tailored for streamers and video makers.", icon: "Radio" },
  { id: 68, name: "Suno AI", category: "Audio", url: "https://suno.com", desc: "Generate complete songs with lyrics and vocals from a text prompt.", icon: "Music" },
  { id: 69, name: "Voice.ai", category: "Audio", url: "https://voice.ai", desc: "Real-time AI voice changer with a library of thousands of voices.", icon: "UserCircle" },
  { id: 70, name: "AIVA", category: "Audio", url: "https://aiva.ai", desc: "AI music composer that creates soundtracks for films and games.", icon: "Music" },

  // Marketing
  { id: 71, name: "HubSpot AI", category: "Marketing", url: "https://hubspot.com", desc: "AI-powered CRM and marketing tools to scale your business growth.", icon: "BarChart" },
  { id: 72, name: "Mailchimp AI", category: "Marketing", url: "https://mailchimp.com", desc: "Smart email recommendations and content generation for marketers.", icon: "Mail" },
  { id: 73, name: "Surfer SEO", category: "Marketing", url: "https://surferseo.com", desc: "AI SEO tool that analyzes SERPs to help you optimize your content.", icon: "LineChart" },
  { id: 74, name: "Jasper", category: "Marketing", url: "https://jasper.ai", desc: "Collaborative AI platform for creating marketing campaigns at scale.", icon: "Users" },
  { id: 75, name: "Lately.ai", category: "Marketing", url: "https://lately.ai", desc: "AI that turns long-form content into months of social media posts.", icon: "Share2" },
  { id: 76, name: "Brandwatch", category: "Marketing", url: "https://brandwatch.com", desc: "AI consumer intelligence platform for brand monitoring and trends.", icon: "Target" },
  { id: 77, name: "AdCreative.ai", category: "Marketing", url: "https://adcreative.ai", desc: "Generate conversion-focused ad creatives and social posts in seconds.", icon: "Zap" },
  { id: 78, name: "Ocoya", category: "Marketing", url: "https://ocoya.com", desc: "AI platform for creating and scheduling social media content.", icon: "Calendar" },
  { id: 79, name: "Simplified", category: "Marketing", url: "https://simplified.com", desc: "Design, write, and publish marketing content with one AI tool.", icon: "Layout" },
  { id: 80, name: "Phrasee", category: "Marketing", url: "https://phrasee.co", desc: "AI platform that generates high-performing marketing copy for email and SMS.", icon: "MessageCircle" },

  // Productivity
  { id: 81, name: "Notion AI", category: "Productivity", url: "https://notion.so", desc: "Connected AI assistant integrated directly into your workspace.", icon: "FileText" },
  { id: 82, name: "Motion", category: "Productivity", url: "https://usemotion.com", desc: "AI-powered calendar and task manager that prioritizes your day.", icon: "Calendar" },
  { id: 83, name: "ChatGPT", category: "Productivity", url: "https://chatgpt.com", desc: "Versatile AI assistant for brainstorming, research, and general productivity.", icon: "MessageSquare" },
  { id: 84, name: "Tome", category: "Productivity", url: "https://tome.app", desc: "AI storytelling tool for creating professional presentations and decks.", icon: "Layout" },
  { id: 85, name: "Taskade", category: "Productivity", url: "https://taskade.com", desc: "AI productivity platform for notes, tasks, and team collaboration.", icon: "CheckSquare" },
  { id: 86, name: "HyperWrite", category: "Productivity", url: "https://hyperwriteai.com", desc: "AI assistant that helps you write emails, documents, and research.", icon: "Pen" },
  { id: 87, name: "Superhuman AI", category: "Productivity", url: "https://superhuman.com", desc: "Fastest email experience with AI for triaging and summarizing.", icon: "Mail" },
  { id: 88, name: "Fireflies.ai", category: "Productivity", url: "https://fireflies.ai", desc: "AI voice assistant that records and transcribes meetings with insights.", icon: "Mic" },
  { id: 89, name: "Sunsama", category: "Productivity", url: "https://sunsama.com", desc: "Mindful daily planner with integrations to help focus on what matters.", icon: "Zap" },
  { id: 90, name: "Mem", category: "Productivity", url: "https://mem.ai", desc: "Self-organizing workspace that uses AI to organize your notes.", icon: "Brain" },

  // Data
  { id: 91, name: "Tableau", category: "Data", url: "https://tableau.com", desc: "Visual analytics platform with AI-driven insights and data storytelling.", icon: "BarChart" },
  { id: 92, name: "Power BI", category: "Data", url: "https://powerbi.microsoft.com", desc: "Microsoft's business analytics tool with AI for data visualizations.", icon: "PieChart" },
  { id: 93, name: "DataRobot", category: "Data", url: "https://datarobot.com", desc: "AI platform that helps organizations build and deploy machine learning models.", icon: "Database" },
  { id: 94, name: "MonkeyLearn", category: "Data", url: "https://monkeylearn.com", desc: "AI platform for text analysis and data visualization of customer feedback.", icon: "Search" },
  { id: 95, name: "Akkio", category: "Data", url: "https://akkio.com", desc: "No-code AI for data analysis, forecasting, and lead scoring.", icon: "LineChart" },
  { id: 96, name: "Polly", category: "Data", url: "https://polly.ai", desc: "AI-powered survey and data collection tool for team insights.", icon: "BarChart2" },
  { id: 97, name: "Obviously AI", category: "Data", url: "https://obviously.ai", desc: "Predictive analytics tool that builds AI models from your data in seconds.", icon: "Zap" },
  { id: 98, name: "Domo", category: "Data", url: "https://domo.com", desc: "Data app platform with AI capabilities for real-time business intelligence.", icon: "Activity" },
  { id: 99, name: "Mixpanel AI", category: "Data", url: "https://mixpanel.com", desc: "Product analytics with AI for tracking user behavior and retention.", icon: "UserPlus" },
  { id: 100, name: "Graphy", category: "Data", url: "https://graphy.app", desc: "Create beautiful, interactive charts and dashboards from your data.", icon: "ChartArea" },

  // Research
  { id: 101, name: "Perplexity AI", category: "Research", url: "https://perplexity.ai", desc: "AI search engine that provides direct answers with verified citations.", icon: "Search" },
  { id: 102, name: "Consensus", category: "Research", url: "https://consensus.app", desc: "AI search engine that finds answers in peer-reviewed scientific research.", icon: "BookOpen" },
  { id: 103, name: "Elicit", category: "Research", url: "https://elicit.org", desc: "AI research assistant that automates literature reviews and data extraction.", icon: "FileText" },
  { id: 104, name: "Scholarcy", category: "Research", url: "https://scholarcy.com", desc: "AI summarizer that turns long papers and articles into bite-sized highlights.", icon: "Book" },
  { id: 105, name: "ChatPDF", category: "Research", url: "https://chatpdf.com", desc: "Interact with any PDF document to extract information and answer questions.", icon: "FileText" },
  { id: 106, name: "You.com", category: "Research", url: "https://you.com", desc: "AI search engine with customizable agent behaviors for deep research.", icon: "Globe" },
  { id: 107, name: "ResearchGate", category: "Research", url: "https://researchgate.net", desc: "Professional network for scientists with AI-powered discovery and data.", icon: "Network" },
  { id: 108, name: "Semantic Scholar", category: "Research", url: "https://semanticscholar.org", desc: "AI-driven search and discovery for scientific literature.", icon: "Search" },
  { id: 109, name: "Scite.ai", category: "Research", url: "https://scite.ai", desc: "AI citation analysis platform that helps you verify research claims.", icon: "CheckCircle" },
  { id: 110, name: "Glean", category: "Research", url: "https://glean.com", desc: "Enterprise AI search that connects all your company's apps and data.", icon: "Search" },

  // Security
  { id: 111, name: "CrowdStrike Falcon", category: "Security", url: "https://crowdstrike.com", desc: "AI-native platform for endpoint protection and threat intelligence.", icon: "Shield" },
  { id: 112, name: "Darktrace", category: "Security", url: "https://darktrace.com", desc: "Self-learning AI that detects and responds to cyber threats in real-time.", icon: "Lock" },
  { id: 113, name: "SentinelOne", category: "Security", url: "https://sentinelone.com", desc: "AI-powered prevention, detection, and response across the enterprise.", icon: "ShieldCheck" },
  { id: 114, name: "Vectra AI", category: "Security", url: "https://vectra.ai", desc: "Cybersecurity platform that uses AI to stop attacks in progress.", icon: "Eye" },
  { id: 115, name: "Check Point AI", category: "Security", url: "https://checkpoint.com", desc: "AI-driven cybersecurity architecture for network and cloud protection.", icon: "Shield" },
  { id: 116, name: "Tessian", category: "Security", url: "https://tessian.com", desc: "Cloud email security platform that uses AI to prevent human-error risks.", icon: "Mail" },
  { id: 117, name: "Cloudflare AI Security", category: "Security", url: "https://cloudflare.com", desc: "Protects applications and APIs with AI-powered firewall and WAF.", icon: "Cloud" },
  { id: 118, name: "Abnormal Security", category: "Security", url: "https://abnormalsecurity.com", desc: "AI platform for protecting against advanced email cyberattacks.", icon: "AlertTriangle" },
  { id: 119, name: "Ironscales", category: "Security", url: "https://ironscales.com", desc: "AI-powered self-learning email security platform against phishing.", icon: "Shield" },
  { id: 120, name: "Snyk AI", category: "Security", url: "https://snyk.io", desc: "Developer-first security platform with AI for finding and fixing bugs.", icon: "Code" }
];

export const FAQS = {
  home: [
    { q: "What is Circle?", a: "Circle is the premier directory for discovering and submitting the world's most advanced AI tools." },
    { q: "Is it free to use?", a: "Yes, browsing the directory is completely free for everyone." },
    { q: "How often is it updated?", a: "We add new AI tools daily to ensure you have access to the latest innovations." },
    { q: "Can I submit my own tool?", a: "Absolutely! Head over to the Submit page to get started." },
    { q: "Do you vet the tools?", a: "Yes, every tool submitted goes through a rigorous quality check by our team." },
    { q: "How can I contact support?", a: "You can reach us via the contact form or our community Discord." }
  ],
  directory: [
    { q: "How do I filter tools?", a: "Use the category tabs at the top of the directory to filter by use case." },
    { q: "Can I search for specific tools?", a: "Yes, use the search bar to find tools by name or description." },
    { q: "Are the links safe?", a: "We verify all URLs before listing them to ensure user safety." },
    { q: "What if a tool is missing?", a: "Please submit it! We love discovering new AI applications." },
    { q: "How are tools ranked?", a: "Tools are ranked based on user engagement and quality scores." }
  ],
  submit: [
    { q: "What are the requirements?", a: "Tools must be functional, AI-powered, and provide clear value to users." },
    { q: "How long does review take?", a: "Typically 24-48 hours for our team to review and list your tool." },
    { q: "Is there a submission fee?", a: "Basic listings are free. We offer premium placement for a small fee." },
    { q: "Can I update my listing?", a: "Yes, once listed, you can request updates to your tool's information." }
  ],
  about: [
    { q: "What is the roadmap?", a: "We're planning to add user reviews, tool comparisons, and an AI news hub." },
    { q: "Who built Circle?", a: "Circle was built by a team of AI enthusiasts dedicated to making AI accessible." },
    { q: "Can I invest in Circle?", a: "We are currently self-funded but open to strategic partnerships." },
    { q: "Is Circle open source?", a: "The directory is proprietary, but we contribute to various open-source AI projects." }
  ]
};

export const VALUES = [
  { title: "Innovation", desc: "We constantly seek out the most groundbreaking AI technologies.", icon: "Zap" },
  { title: "Accessibility", desc: "Making advanced AI tools easy to find and use for everyone.", icon: "Users" },
  { title: "Quality", desc: "Only the best tools make it through our rigorous vetting process.", icon: "ShieldCheck" }
];
