export interface Subsidiary {
  id: string;
  name: string;
  sector: "Primary" | "Secondary" | "Tertiary";
  industry: string;
  tagline: string;
  description: string;
  coreCapabilities: string[];
  route: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface CorporateValue {
  title: string;
  definition: string;
}

export const CORPORATE_IDENTITY = {
  legalName: "Mundalamo Corporate Holdings (Pty) Ltd.",
  tagline: "The Foundation of a Better World",
  founder: "Mr. KSB Mundalamo",
  establishedYear: 2025,
  globalHeadquarters: "Johannesburg, South Africa",
  registrationNumber: "2025/089777/07",
  institutionalEmail: "executive@mundalamo.co.za",
  philosophy: "Architecting a Unified Future, From Africa to the World"
};

export const NAV_LINKS: NavLink[] = [
  { label: "Executive Briefing", path: "/" },
  { label: "The Portfolio", path: "/subsidiaries" },
  { label: "Governance Structure", path: "/governance" },
  { label: "Our Mandate", path: "/about" },
  { label: "Talent Acquisition", path: "/careers" },
  { label: "Institutional Channel", path: "/contact" },
];

export const CORPORATE_VALUES: CorporateValue[] = [
  { title: "Visionary Leadership", definition: "Guided by foresight and an unwavering commitment to unlocking human potential, initially in Africa, then across the globe." },
  { title: "Integrated Excellence", definition: "Fostering massive multi-sector synergy and achieving superior outcomes through collaborative effort across our owned entities." },
  { title: "Global Empowerment", definition: "Creating opportunities, nurturing elite talent, and elevating lives, first on the African continent, then scaling worldwide." },
  { title: "Ethical Stewardship", definition: "Operating with absolute integrity, profound responsibility, and deep respect for all communities and environments." },
  { title: "Relentless Innovation", definition: "Empowering our subsidiaries to continuously pioneer advancements as an institutional core requirement." },
  { title: "Unifying Impact", definition: "Dedicated to high-impact projects that transcend regional gain, fostering global cohesion and shared prosperity." }
];

export const SUBSIDIARIES: Subsidiary[] = [
  {
    id: "ladnu",
    name: "LADNU",
    sector: "Tertiary",
    industry: "Advanced Technology Services & R&D",
    tagline: "Our Strategic Innovation Asset",
    description: "Dedicated to pioneering proprietary, cutting-edge AI, machine learning, robotics, biometrics, and IoT solutions. Its advanced research forms a vital strategic capability integrated across the entire holding portfolio, enabling every group entity to lead its respective market sector.",
    coreCapabilities: ["Artificial Intelligence & Machine Learning", "Robotics & Automation Engineering", "Biometrics & IoT Implementations", "Proprietary Intellectual Property Cultivation"],
    route: "/subsidiaries#ladnu"
  },
  {
    id: "alamo-security",
    name: "Alamo Security Solutions",
    sector: "Tertiary",
    industry: "Security Technology Services",
    tagline: "A Formidable Force in Protection",
    description: "Provides advanced, proactive, and intelligent security architectures for industrial, commercial, and residential operations. Built to transform public safety and fortify critical infrastructure, utilizing robust physical-digital frameworks adaptable for global urban centers.",
    coreCapabilities: ["Proactive Threat Mitigation Protocols", "Critical Infrastructure Fortification", "Intelligent Surveillance Architectures", "Industrial Asset Protection"],
    route: "/subsidiaries#alamo"
  },
  {
    id: "omaladnum",
    name: "Omaladnum",
    sector: "Tertiary",
    industry: "Real Estate & Intelligent Spaces",
    tagline: "The Architects of Intelligent Living",
    description: "Redefining urban and rural property development by focusing on highly sustainable, secure, and future-proof environments. Building smart communities designed for superior quality of life as scalable blueprints for sustainable global living.",
    coreCapabilities: ["Sustainable Urban & Rural Master Planning", "Future-Proof Secure Property Portfolios", "Smart Community Infrastructure", "Eco-Conscious Land Development"],
    route: "/subsidiaries#omaladnum"
  },
  {
    id: "d-num",
    name: "D-Num",
    sector: "Secondary",
    industry: "Construction & Infrastructure Development",
    tagline: "The Builders of Tomorrow's Physical Backbone",
    description: "Constructs state-of-the-art smart cities, highly resilient infrastructure networks, and advanced industrial facilities. Emphasizes absolute precision, structural safety, and high-efficiency models designed to solve complex global infrastructure deficits.",
    coreCapabilities: ["Smart City Engineering & Execution", "Resilient Civil Infrastructure Networks", "Advanced Industrial Facility Construction", "High-Precision Structural Engineering"],
    route: "/subsidiaries#dnum"
  },
  {
    id: "ladnum-agri",
    name: "Ladnum",
    sector: "Primary",
    industry: "Agriculture & Food Production",
    tagline: "Nurturing Africa's Food Security",
    description: "Revolutionizing the agricultural sector through modern farming tech, data-driven optimization, and highly resource-efficient cultivation techniques designed to systematically maximize crop yields, stabilize food systems, and empower rural economies.",
    coreCapabilities: ["Modern High-Yield Agrotech Implementation", "Resource-Optimized Sustainable Cultivation", "Food Security Logistics Systems", "Multi-Climate Agricultural Modeling"],
    route: "/subsidiaries#ladnum"
  },
  {
    id: "omala",
    name: "Omala",
    sector: "Tertiary",
    industry: "Transport & Intelligent Logistics",
    tagline: "Connecting Global Supply Chain Networks",
    description: "Focuses on optimizing heavy supply chains, enhancing complex fleet management pipelines, and ensuring the highly efficient, secure movement of cargo and passengers across vast continental and international distances.",
    coreCapabilities: ["Supply Chain Matrix Optimization", "Intelligent Fleet Management Platforms", "Cross-Border Transit Logistics Networks", "High-Efficiency Commercial Commerce Routing"],
    route: "/subsidiaries#omala"
  },
  {
    id: "malad-investment",
    name: "Malad",
    sector: "Tertiary",
    industry: "Financial Services & Private Equity",
    tagline: "Fueling Enterprise Potential and Beyond",
    description: "The strategic investment arm of MCH. Identifies, structures, and backs high-potential ventures that align with our group's unified vision, ensuring that high-growth innovations receive the sovereign capital and boardroom guidance needed to scale globally.",
    coreCapabilities: ["Strategic Venture Capital Injections", "Private Equity Deal Structuring", "High-Growth Asset Acceleration", "Sovereign Market Capital Optimization"],
    route: "/subsidiaries#malad"
  },
  {
    id: "unda",
    name: "Unda",
    sector: "Tertiary",
    industry: "Healthcare & Biotechnology Services",
    tagline: "Advancing Global Health and Wellness",
    description: "Committed to developing cutting-edge diagnostic tools, personalized medical health systems, and high-efficiency medical delivery frameworks. Pioneering bioscience innovations specifically tailored to solve complex medical disparities globally.",
    coreCapabilities: ["Cutting-Edge Molecular Diagnostics", "Personalized Bioscience Research", "High-Efficiency Medical Delivery Frameworks", "Global Health Equity Solutions"],
    route: "/subsidiaries#unda"
  }
];

export const corporateGovernance = {
  director: "Keletso Shaun Mundalamo",
  companyName: "Mundalamo Corporate Holdings (Pty) Ltd",
  shortName: "Mundalamo Holdings", // <-- Add this line
  registrationNumber: "2025/089777/07",
  mandate: "Cultivating institutional legacies through highly diversified operational units, absolute regulatory compliance, and generational asset expansion."
};

export interface GovernancePrinciple {
  title: string;
  text: string;
}

export const GOVERNANCE_PRINCIPLES: GovernancePrinciple[] = [
  {
    title: "Absolute Operational Integrity",
    text: "We execute strict risk mitigation protocols across both our quantitative capital operations and our software engineering pipelines, ensuring all intellectual property and systematic assets remain highly secure."
  },
  {
    title: "Regulatory & Statutory Compliance",
    text: "Maintaining strict alignment with the Companies and Intellectual Property Commission (CIPC) of South Africa and modeling our quantitative frameworks around international institutional standards."
  }
];