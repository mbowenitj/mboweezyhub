import { IconType } from "react-icons";
import {
  FaLaptopCode,
  FaChartLine,
  FaPaintBrush,
  FaCalendarAlt,
  FaHashtag,
  FaPrint,
} from "react-icons/fa";

export interface Service {
  icon: IconType;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: "tech" | "design" | "media";
  link?: string;
  features?: string[];
  imagePath: string;
}

// First create the array with proper typing
const servicesData: Omit<Service, 'link'>[] = [
  // Tech Solutions
  {
    icon: FaLaptopCode,
    title: "Web & Mobile Development",
    subtitle: "Build your digital presence",
    description: "Custom digital solutions for businesses and individuals.",
    longDescription: `We specialize in creating responsive, high-performance websites and mobile applications tailored to your specific needs. Our full-stack development process includes comprehensive planning, UI/UX design, coding, testing, and ongoing maintenance.

Whether you need a simple brochure website or a complex enterprise application, our team uses modern technologies like React, Next.js, Flutter, and Node.js to deliver exceptional results. We implement robust backend systems, API integrations, and cloud solutions.

All our projects include SEO optimization, performance tuning, and security hardening. We also provide hosting solutions and 24/7 monitoring to ensure your digital presence remains cutting-edge and always available.`,
    category: "tech",
    features: [
      "Responsive design",
      "Cross-platform apps",
      "SEO optimization",
      "API integrations",
      "Ongoing maintenance"
    ],
    imagePath: "/images/services/development.jpg"
  },

  // Design Services
  {
    icon: FaPaintBrush,
    title: "Graphic Design",
    subtitle: "Visual identity that stands out",
    description: "Professional visual branding solutions.",
    longDescription: `Our graphic design services help establish your brand identity through compelling visuals. We begin with a comprehensive brand analysis to understand your market position and competition.

We create complete brand packages including logos, business cards, letterheads, social media kits, and brand guidelines that communicate your unique value proposition. Our designers work in multiple styles from minimalist to illustrative, ensuring the perfect match for your brand personality.

For print materials, we handle everything from concept to print-ready files, working with trusted printing partners to ensure perfect color reproduction and quality. We also provide digital asset packages optimized for all platforms.`,
    category: "design",
    features: [
      "Logo design",
      "Complete brand identity",
      "Print collateral",
      "Social media kits",
      "Style guides"
    ],
    imagePath: "/images/services/ux.jpg"
  },

  {
    icon: FaHashtag,
    title: "Social Media Content",
    subtitle: "Grow your online presence",
    description: "Engaging content for digital platforms.",
    longDescription: `We create scroll-stopping content tailored for each social media platform's unique requirements. Our content strategy begins with audience analysis and competitive research to develop content that resonates.

Our services include content calendars, post designs, stories, reels/shorts creation, and performance analytics. We specialize in platform-specific optimizations for Instagram, Facebook, LinkedIn, TikTok, and Twitter.

We produce a mix of static graphics, animations, and short-form videos designed to increase engagement and followers. Monthly performance reports help refine our strategy for continuous improvement.`,
    category: "media",
    features: [
      "Content strategy",
      "Platform-specific designs",
      "Video content",
      "Performance analytics",
      "Monthly reports"
    ],
    imagePath: "/images/services/social-media.jpg"
  },

  {
    icon: FaPrint,
    title: "Print Design",
    subtitle: "Tangible brand experiences",
    description: "High-quality physical marketing materials.",
    longDescription: `From business cards to large-format banners, we design print materials that make an impact. We handle the entire process from concept to delivery, ensuring perfect color matching and print quality.

Our services include business stationery, promotional materials (flyers, brochures), signage, packaging, and branded merchandise. We work with premium paper stocks and specialty printing techniques like foil stamping and embossing.

We manage relationships with trusted printers to get you the best quality at competitive prices, with options for sustainable materials and printing processes.`,
    category: "design",
    features: [
      "Business stationery",
      "Promotional materials",
      "Signage & banners",
      "Packaging design",
      "Branded merchandise"
    ],
    imagePath: "/images/services/print-designs.jpg"
  },

  // Event Services
  {
    icon: FaCalendarAlt,
    title: "Event Branding",
    subtitle: "Elevate your special occasion",
    description: "Memorable designs for special occasions.",
    longDescription: `We create cohesive branding for weddings, corporate events, conferences, and special occasions. Our event branding packages include invitation suites, programs, signage, and digital assets.

For weddings, we design elegant stationery from save-the-dates to thank you cards, with options for custom illustrations and premium printing techniques. Corporate events receive professional branding that aligns with company identity.

We coordinate with vendors to ensure all physical materials match perfectly, and provide digital assets for websites and social media promotion. Optional add-ons include custom illustrations and day-of stationery.`,
    category: "design",
    features: [
      "Invitation suites",
      "Event signage",
      "Programs & menus",
      "Digital assets",
      "Vendor coordination"
    ],
    imagePath: "/images/services/events.jpg"
  },

  // Marketing Services
  {
    icon: FaChartLine,
    title: "Digital Marketing",
    subtitle: "Grow your business online",
    description: "Data-driven online growth strategies.",
    longDescription: `Our full-service digital marketing drives measurable results through strategic campaigns. We begin with comprehensive market research and competitor analysis to identify your unique opportunities.

Services include SEO optimization, content marketing, paid advertising (Google Ads, social media ads), email marketing, and conversion rate optimization. We implement tracking to measure ROI across all channels.

Monthly reports show key metrics and insights, with strategy adjustments based on performance data. We specialize in creating cohesive campaigns that work across multiple platforms for maximum impact.`,
    category: "media",
    features: [
      "SEO strategy",
      "Content marketing",
      "Paid advertising",
      "Email campaigns",
      "Performance analytics"
    ],
    imagePath: "/images/services/digital-marketing.jpg"
  }
];

// Then apply the transformation with proper typing
export const services: Service[] = servicesData.map(service => ({
  ...service,
  link: `/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`
}));