import { IconType } from "react-icons"
import {
  FaLaptopCode,
  FaPaintBrush,
  FaPrint,
  FaCloud,
  FaFilePowerpoint,
  FaBullhorn,
} from "react-icons/fa"

export interface Service {
  icon: IconType
  title: string
  subtitle: string
  description: string
  longDescription: string
  category: "tech" | "design"
  link?: string
  features?: string[]
  imagePath: string
  seoKeywords: string[]
}

const servicesData: Omit<Service, "link">[] = [
  // 1. Web & Mobile Development
  {
    icon: FaLaptopCode,
    title: "Web & Mobile Development",
    subtitle: "Build your digital presence",
    description: "Custom websites and mobile apps tailored to your business goals.",
    longDescription: `We design and develop responsive websites and high-performance mobile applications that reflect your brand and meet your users’ needs. From design to deployment, we deliver modern, scalable digital solutions.`,
    category: "tech",
    features: [
      "Responsive websites",
      "iOS & Android apps",
      "Custom web portals",
      "Cross-platform compatibility",
      "Ongoing maintenance & support",
    ],
    seoKeywords: [
      "website development South Africa",
      "custom mobile apps",
      "responsive web design",
      "app developers for startups",
      "cross-platform mobile development",
    ],
    imagePath: "/images/services/web-development.jpg",
  },

  // 2. Cloud Hosting & Infrastructure
  {
    icon: FaCloud,
    title: "Cloud Hosting & Infrastructure",
    subtitle: "Reliable, secure cloud solutions",
    description: "Scalable hosting environments built for performance and uptime.",
    longDescription: `We provide secure and scalable cloud infrastructure for your digital platforms. Enjoy high availability, real-time monitoring, daily backups, and SSL-secured environments for peace of mind and optimal performance.`,
    category: "tech",
    features: [
      "99.9% uptime guarantee",
      "Auto-scaling",
      "Daily backups",
      "SSL encryption",
      "24/7 monitoring & support",
    ],
    seoKeywords: [
      "cloud hosting South Africa",
      "secure web hosting",
      "affordable cloud infrastructure",
      "high uptime website hosting",
      "managed hosting solutions",
    ],
    imagePath: "/images/services/cloud-hosting.jpg",
  },

  // 3. Branding & Identity Design
  {
    icon: FaPaintBrush,
    title: "Logo & Brand Identity",
    subtitle: "Stand out with a memorable brand",
    description: "Professional logos and branding systems to define your identity.",
    longDescription: `We craft unique brand identities that reflect your vision and values. From custom logos to business stationery and brand guides, we ensure your business looks professional and consistent across all channels.`,
    category: "design",
    features: [
      "Logo design (multiple concepts)",
      "Brand guidelines",
      "Stationery design",
      "Business cards",
      "Full copyright transfer",
    ],
    seoKeywords: [
      "logo design South Africa",
      "brand identity services",
      "custom business branding",
      "professional logo designers",
      "branding for startups",
    ],
    imagePath: "/images/services/business-cards.jpg",
  },

  // 4. Marketing & Print Materials
  {
    icon: FaPrint,
    title: "Marketing & Print Materials",
    subtitle: "Professional print & promotional designs",
    description: "Flyers, brochures, business cards, and branded merchandise.",
    longDescription: `We design high-quality physical marketing materials and branded merchandise that make a lasting impression. Whether for trade shows, campaigns, or everyday use, we ensure every item speaks your brand's language.`,
    category: "design",
    features: [
      "Flyers & brochures",
      "Business cards",
      "Posters & banners",
      "Custom apparel (T-shirts, hoodies)",
      "Branded mugs & calendars",
    ],
    seoKeywords: [
      "print design services",
      "marketing collateral design",
      "flyer and brochure designers",
      "custom merchandise design",
      "business printing South Africa",
    ],
    imagePath: "/images/services/print-designs.jpg",
  },

  // 5. Presentations & Digital Content
  {
    icon: FaFilePowerpoint,
    title: "Presentations & Digital Content",
    subtitle: "Captivating visual storytelling",
    description: "Polished slides and visuals for business, academic, or pitch needs.",
    longDescription: `We create engaging digital presentations and visual content that help you communicate with clarity and impact. Ideal for business pitches, investor decks, webinars, and social campaigns.`,
    category: "design",
    features: [
      "Pitch & investor decks",
      "Business presentations",
      "Academic slides",
      "Branded slide templates",
      "Motion & animation effects",
    ],
    seoKeywords: [
      "presentation design services",
      "business pitch deck designers",
      "PowerPoint design South Africa",
      "investor presentation design",
      "animated slides design",
    ],
    imagePath: "/images/services/presentation.png",
  },

  // 6. Digital Marketing & Social Media
  {
    icon: FaBullhorn,
    title: "Digital Marketing & Social Media",
    subtitle: "Grow your online presence",
    description: "Content design and strategy for social media and online platforms.",
    longDescription: `We design visually striking content for social media, websites, and online campaigns. From post templates to video teasers, we help you build an engaging online presence that aligns with your brand strategy.`,
    category: "design",
    features: [
      "Social media graphics",
      "Video content & reels",
      "Post & ad design templates",
      "Marketing campaign visuals",
      "Content strategy support",
    ],
    seoKeywords: [
      "digital marketing design",
      "social media content creation",
      "Instagram graphics design",
      "online advertising creatives",
      "video content for social media",
    ],
    imagePath: "/images/services/social-media.jpg",
  },
];



export const services: Service[] = servicesData.map((service) => ({
  ...service,
  link: `/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`
}))
