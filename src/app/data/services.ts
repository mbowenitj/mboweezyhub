import { IconType } from "react-icons";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaPrint,
  FaTshirt,
  FaMugHot,
} from "react-icons/fa";

export interface Service {
  icon: IconType;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: "tech" | "design";
  link?: string;
  features?: string[];
  imagePath: string;
}

const servicesData: Omit<Service, 'link'>[] = [
  // 1. Tech Solution
  {
    icon: FaLaptopCode,
    title: "Web & Mobile Development",
    subtitle: "Build your digital presence",
    description: "Custom websites and mobile applications",
    longDescription: `We create responsive, high-performance digital solutions tailored to your business needs with modern technologies.`,
    category: "tech",
    features: [
      "Responsive websites",
      "Mobile apps",
      "Performance optimized",
      "Ongoing maintenance",
      "Cross-platform"
    ],
    imagePath: "/images/services/web-development.jpg"
  },

  // 2. Brand Identity
  {
    icon: FaPaintBrush,
    title: "Logo & Branding",
    subtitle: "Professional visual identity",
    description: "Memorable logos and complete brand systems",
    longDescription: `We create distinctive brand identities that capture your business essence and stand out in the market.`,
    category: "design",
    features: [
      "Multiple logo concepts",
      "Brand style guide",
      "Business cards",
      "Stationery designs",
      "Full copyright ownership"
    ],
    imagePath: "/images/services/business-cards.jpg"
  },

  // 3. Print & Marketing
  {
    icon: FaPrint,
    title: "Print & Marketing Materials",
    subtitle: "Physical marketing collateral",
    description: "Flyers, brochures and business materials",
    longDescription: `High-quality print designs that effectively promote your business while maintaining brand consistency.`,
    category: "design",
    features: [
      "Business cards",
      "Brochures",
      "Flyers",
      "Posters",
      "Print-ready files"
    ],
    imagePath: "/images/services/print-designs.jpg"
  },

  // 4. Digital Media
  {
    icon: FaPrint,
    title: "Digital Presentations",
    subtitle: "Engaging slide decks",
    description: "Professional presentations for any purpose",
    longDescription: `Compelling presentations that effectively communicate your message with clear visual hierarchy.`,
    category: "design",
    features: [
      "Business pitches",
      "Investor decks",
      "Academic slides",
      "Branded templates",
      "Animation effects"
    ],
    imagePath: "/images/services/presentation.png"
  },

  // 5. Apparel Design
  {
    icon: FaTshirt,
    title: "Apparel Design",
    subtitle: "Custom clothing graphics",
    description: "T-shirts and wearable merchandise",
    longDescription: `Custom apparel designs perfect for company merchandise, events, or promotional campaigns.`,
    category: "design",
    features: [
      "T-shirt designs",
      "Hoodie prints",
      "Event merchandise",
      "Branded wearables",
      "Print-ready files"
    ],
    imagePath: "/images/services/apparel.jpg"
  },

  // 6. Promotional Products
  {
    icon: FaMugHot,
    title: "Promotional Products",
    subtitle: "Branded merchandise",
    description: "Mugs, calendars and gift items",
    longDescription: `Custom designs for promotional products that showcase your brand as practical gifts.`,
    category: "design",
    features: [
      "Custom mugs",
      "Branded calendars",
      "Drinkware designs",
      "Corporate gifts",
      "Print-ready files"
    ],
    imagePath: "/images/services/calendar.jpg"
  }
];

export const services: Service[] = servicesData.map(service => ({
  ...service,
  link: `/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`
}));