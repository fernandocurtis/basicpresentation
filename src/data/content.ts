export const agenda = [
  {
    id: "glossary",
    number: "01",
    title: "A Quick Glossary",
    dek: "The terms you'll hear constantly — cache, hosting, DNS, and more — defined simply",
  },
  {
    id: "diagnosing",
    number: "02",
    title: "Diagnosing Issues",
    dek: "Hosting vs. DNS vs. website, common causes, and the QA process behind “ready”",
  },
  {
    id: "dev-language",
    number: "03",
    title: "Speaking Dev's Language",
    dek: "Core WordPress concepts every AM should know",
  },
  {
    id: "ownership",
    number: "04",
    title: "Who Handles What",
    dek: "Requests you can own vs. requests to hand to development",
  },
];

export const glossaryTerms = [
  {
    term: "Cache",
    icon: "Layers",
    def: "A stored copy of a page that loads faster — and the reason changes sometimes “don’t show up” until it’s cleared.",
  },
  {
    term: "Hosting",
    icon: "Server",
    def: "The server space where a website’s files and database actually live.",
  },
  {
    term: "DNS",
    icon: "Globe",
    def: "The system that translates a domain name (like ragecollective.com) into a server address.",
  },
  {
    term: "Plugin",
    icon: "Puzzle",
    def: "An add-on that gives WordPress extra functionality — forms, SEO tools, galleries, and more.",
  },
  {
    term: "Staging Site",
    icon: "FlaskConical",
    def: "A private copy of the site used to build and test changes before they go live.",
  },
  {
    term: "Backend",
    icon: "LayoutDashboard",
    def: "The admin side of the site (wp-admin) where content, settings, and data are managed.",
  },
  {
    term: "Frontend",
    icon: "MonitorSmartphone",
    def: "The public-facing side of the site — what a visitor actually sees and interacts with.",
  },
];

export const hostingVsDomain = {
  domain: {
    label: "Domain",
    tagline: "The name people type",
    points: [
      "e.g. ragecollective.com — the address visitors type or search",
      "Registered through a domain registrar (GoDaddy, Namecheap, etc.)",
      "Can be moved to new hosting without changing the domain itself",
    ],
  },
  hosting: {
    label: "Hosting",
    tagline: "Where the site actually lives",
    points: [
      "The server storing the site’s files, images, and database",
      "Rented from a hosting provider (SiteGround, WP Engine, etc.)",
      "What’s actually down if the site is unreachable for everyone",
    ],
  },
  analogy:
    "The domain is the business’s address, hosting is the building at that address — and DNS is what connects the two.",
};

export const propagation = {
  question: "“I updated the site and I can see it — but my client in another city still sees the old version.” Here’s why.",
  causes: [
    {
      label: "Edge Caching (CDN)",
      icon: "Radar",
      points: [
        "Many sites use a CDN — copies of the site cached at server locations (“edge nodes”) around the world, so each visitor loads from the nearest one",
        "When the site updates, each edge location refreshes on its own schedule, so nearby cities can update before farther ones",
      ],
    },
    {
      label: "DNS Propagation",
      icon: "Globe2",
      points: [
        "When a domain or DNS record changes, that update has to spread across every ISP and DNS server worldwide, not just one place",
        "Different networks pick it up at different times — usually minutes, occasionally up to 24-48 hours",
      ],
    },
  ],
  bottomLine:
    "This isn’t a bug — it’s propagation. Give it time (often under an hour), or ask the dev team to manually purge the CDN cache if it’s urgent.",
};

export const triageLayers = [
  {
    label: "Hosting",
    icon: "Server",
    question: "Is the SERVER reachable?",
    signature: "Site down for everyone, everywhere",
    signs: ["Server error (500) or database error", "“Site can’t be reached” errors"],
    check: "Check the host’s status page first",
  },
  {
    label: "DNS",
    icon: "Globe",
    question: "Does the DOMAIN resolve?",
    signature: "Works on some networks, not others",
    signs: ["“Site can’t be reached” on some devices/networks only"],
    check: "Check recent domain/nameserver changes",
  },
  {
    label: "The Website",
    icon: "MonitorSmartphone",
    question: "Does the SITE itself work?",
    signature: "Server up, domain resolves, page broken",
    signs: ["Plugin conflict or bad update"],
    check: "Check the error against a recent change",
  },
];

export const commonCauses = [
  {
    title: "Hosting outage",
    icon: "ServerCrash",
    desc: "Server downtime, resource limits, or a host-side failure",
  },
  {
    title: "DNS or domain issue",
    icon: "Globe",
    desc: "Expired domain, DNS misconfiguration, or propagation delay",
  },
  {
    title: "Plugin or theme conflict",
    icon: "Puzzle",
    desc: "A recent update breaks compatibility with the site",
  },
  {
    title: "Security issue",
    icon: "ShieldAlert",
    desc: "Malware infection — host or firewall may take the site offline",
  },
  {
    title: "Failed update",
    icon: "Wrench",
    desc: "A WordPress core, plugin, or theme update fails mid-process",
  },
  {
    title: "Database error",
    icon: "Database",
    desc: "“Error establishing a database connection” or similar",
  },
];

export const firstResponse = [
  {
    title: "Confirm it’s really down",
    icon: "Zap",
    desc: "Check the site yourself — try another browser, device, or network (not just the client’s report)",
  },
  {
    title: "Check if it’s just you",
    icon: "Radar",
    desc: "Use a third-party “is it down” checker to rule out local/ISP issues",
  },
  {
    title: "Check the host status page",
    icon: "Server",
    desc: "Look for a known outage or maintenance window on the hosting provider",
  },
  {
    title: "Check for recent changes",
    icon: "Clock",
    desc: "Any updates, deployments, or domain/DNS edits in the last 24-48 hours?",
  },
  {
    title: "Escalate with details",
    icon: "MessageSquare",
    desc: "Pass the dev team the error message, timing, and what you’ve already ruled out",
  },
];

export const qaProcess = [
  {
    title: "Build on Staging",
    icon: "FlaskConical",
    desc: "All development happens on a staging site — the live site is never touched directly",
  },
  {
    title: "Internal QA Pass",
    icon: "ClipboardCheck",
    desc: "The dev team runs the full QA checklist: links, forms, responsiveness, speed",
  },
  {
    title: "Client / AM Review",
    icon: "Users",
    desc: "Account Manager and client review the staging site against the original scope",
  },
  {
    title: "Go Live",
    icon: "Rocket",
    desc: "Approved changes are pushed to production, then spot-checked live",
  },
];

export const qaChecklist = [
  "All links and buttons work (no 404s)",
  "Forms submit and notifications arrive",
  "Content matches approved copy — no placeholder text",
  "Images load and are properly sized/compressed",
  "Responsive on mobile, tablet, and desktop",
  "Page speed and Core Web Vitals checked",
  "Browser compatibility (Chrome, Safari, Firefox)",
  "SEO basics: titles, meta descriptions, alt text",
];

export const reviewRedFlags = [
  {
    title: "Broken links or images",
    icon: "Unlink",
    desc: "Click through primary navigation and key CTAs",
  },
  {
    title: "Typos and placeholder text",
    icon: "FileText",
    desc: "“Lorem ipsum,” [insert copy], or mismatched brand names",
  },
  {
    title: "Inconsistent formatting",
    icon: "PaintBucket",
    desc: "Mismatched fonts, spacing, or button styles across pages",
  },
  {
    title: "Mobile display issues",
    icon: "Smartphone",
    desc: "Text overlapping, images cut off, menus not collapsing",
  },
  {
    title: "Slow-loading pages",
    icon: "Clock",
    desc: "Large uncompressed images are the most common cause",
  },
  {
    title: "Non-functional forms",
    icon: "MessageSquare",
    desc: "Submit a test entry and confirm the notification arrives",
  },
];

export const devConcepts = [
  {
    title: "WordPress core vs. theme vs. plugins",
    icon: "Code2",
    desc: "Three separate layers — an issue in one rarely means the others are broken",
  },
  {
    title: "What an update actually touches",
    icon: "Settings",
    desc: "Core, theme, and plugin updates can each break a site independently",
  },
  {
    title: "Staging vs. production",
    icon: "FlaskConical",
    desc: "Changes are tested on a copy of the site before going live",
  },
  {
    title: "Backend vs. frontend",
    icon: "LayoutDashboard",
    desc: "What visitors see vs. where content and settings are managed",
  },
  {
    title: "Why clearing cache fixes “nothing changed”",
    icon: "Layers",
    desc: "Cached pages can hide real updates from view",
  },
  {
    title: "Why unexplained changes can mean malware",
    icon: "ShieldAlert",
    desc: "Unexpected redirects or new admin users are red flags",
  },
];

export const bestPractices = [
  {
    title: "Never edit the live site directly",
    icon: "Ban",
    desc: "Small “quick fixes” on production are the most common cause of unplanned downtime",
  },
  {
    title: "Always test after any change",
    icon: "CheckCircle2",
    desc: "A visual check on desktop and mobile catches most issues before a client sees them",
  },
  {
    title: "Backups exist for a reason",
    icon: "ShieldCheck",
    desc: "Confirm a recent backup exists before any major update or migration",
  },
  {
    title: "Big changes need a maintenance window",
    icon: "Clock",
    desc: "Avoid client-visible changes during business hours when possible",
  },
];

export const ownershipItems = [
  { label: "Text or copy edits on existing pages", owner: "am" },
  { label: "Swapping an image the client provides", owner: "am" },
  { label: "Updating contact info, hours, or a phone number", owner: "am" },
  { label: "Minor content reordering within a page", owner: "am" },
  { label: "Adding/removing a team member or testimonial", owner: "am" },
  { label: "Scheduling a blog post the client wrote", owner: "am" },
  { label: "Anything involving plugins, themes, or code", owner: "dev" },
  { label: "Site is down, slow, or showing errors", owner: "dev" },
  { label: "DNS, domain, or hosting changes", owner: "dev" },
  { label: "New pages, forms, or functionality", owner: "dev" },
  { label: "Security concerns or suspected malware", owner: "dev" },
  { label: "Anything that touches the database directly", owner: "dev" },
] as const;
