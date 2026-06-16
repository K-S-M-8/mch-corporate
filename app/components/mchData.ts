export interface Subsidiary {
  id: string;
  divisionNum: string;
  category: string;
  name: string;
  headline: string;
  description: string;
  status: string;
}

export const mchSubsidiaries: Subsidiary[] = [
  {
    id: "construction",
    divisionNum: "DIVISION 01",
    category: "Industrial Engineering",
    name: "Construction & Infrastructure",
    headline: "Heavy Structural Development",
    description: "Executing large-scale civil engineering, structural design, and raw site development across primary regional industrial nodes.",
    status: "Active Framework"
  },
  {
    id: "investment-banking",
    divisionNum: "DIVISION 02",
    category: "Capital Markets",
    name: "Investment & Banking",
    headline: "Quantitative Liquidity Allocations",
    description: "Managing systemic institutional trade modeling and algorithmic asset management, focusing heavily on high-probability XAU/USD gold terminal execution.",
    status: "Operational"
  },
  {
    id: "agriculture",
    divisionNum: "DIVISION 03",
    category: "Agro-Processing",
    name: "Agricultural Systems",
    headline: "Sustainable Commodity Food Security",
    description: "Deploying modernized, technology-integrated agricultural management systems and primary commodity distribution to insulate group capital.",
    status: "Strategic Alignment"
  },
  {
    id: "logistics",
    divisionNum: "DIVISION 04",
    category: "Supply Chain",
    name: "Logistics & Transport",
    headline: "Intelligent Freight Corridors",
    description: "Structuring highly optimized, technology-driven physical cargo routing, regional transport distribution networks, and transit infrastructure.",
    status: "Planning Phase"
  },
  {
    id: "property",
    divisionNum: "DIVISION 05",
    category: "Real Estate",
    name: "Commercial Property Portfolio",
    headline: "The Twin-Tower HQ Framework",
    description: "Acquiring and engineering prime physical commercial real estate assets, anchored by the corporate master planning of the upcoming twin-tower head office.",
    status: "Development Phase"
  },
  {
    id: "security",
    divisionNum: "DIVISION 06",
    category: "Threat Intelligence",
    name: "Security & Asset Protection",
    headline: "AI Threat Identification Systems",
    description: "Integrating advanced AI-driven home security prototypes, live WebRTC video feed monitoring, and predictive physical infrastructure surveillance layers.",
    status: "Active Control"
  },
  {
    id: "ladnu-tech",
    divisionNum: "DIVISION 07",
    category: "Technology & Software R&D",
    name: "LADNU (Pty) Ltd",
    headline: "Autonomous Computing & System Architectures",
    description: "The core technology core of the group. Engineering autonomous agentic AI frameworks, localized database engines, and full-stack enterprise solutions.",
    status: "Active // SEFA Framework"
  },
  {
    id: "healthcare",
    divisionNum: "DIVISION 08",
    category: "Bio-Medical",
    name: "Healthcare & Technology",
    headline: "Clinical Systems Engineering",
    description: "Researching modern clinical software integrations, digital health tracking infrastructures, and specialized medical support systems.",
    status: "Strategic Planning"
  }
];

export const corporateGovernance = {
  director: "Keletso Shaun Mundalamo",
  companyName: "Mundalamo Corporate Holdings (Pty) Ltd",
  shortName: "Mundalamo Holdings", // <-- Add this line
  registrationNumber: "2025/089777/07",
  mandate: "Cultivating institutional legacies through highly diversified operational units, absolute regulatory compliance, and generational asset expansion."
};