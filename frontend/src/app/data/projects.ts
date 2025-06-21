export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  imagePath: string
  slideImages?: string[]
  isVideo: boolean
  youtubeId: string
  aspectRatio?: "landscape" | "portrait" | "square"
  slug?: string
  content?: string
  externalUrl?: string
  linkTarget?: "_blank" | "_self"
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Company Portfolio Website",
    description:
      "Showcase site for our digital services in web, app development, and creative design.",
    tags: [
      "React",
      "Tailwind CSS",
      "Web Design",
      "SEO",
      "Email Integration",
      "Afrihost",
    ],
    image: "/images/projects/company-site.png",
    imagePath: "/images/projects/company-site.png",
    isVideo: false,
    youtubeId: "",
    aspectRatio: "landscape",
    externalUrl: "https://www.mboweezyhub.co.za",
    linkTarget: "_blank",
  },

  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A full-featured online Book store",
    tags: ["WordPress", "E-Commerce", "Product Catalog", "Afrihost"],
    image: "/images/projects/magonamedia.png",
    imagePath: "/images/projects/company-site.png",
    isVideo: false,
    youtubeId: "",
    aspectRatio: "landscape",
    externalUrl: "https://www.magonamedia.co.za",
    linkTarget: "_blank",
  },

  {
    id: 3,
    title: "Bakkie Offload - Website",
    description:
      "Responsive logistics website with booking features and analytics tracking",
    tags: [
      "React",
      "Tailwind CSS",
      "Booking System",
      "Analytics",
      "Email Integration",
      "Afrihost",
    ],
    image: "/images/projects/bakkie-offload.png",
    imagePath: "/images/projects/company-site.png",
    isVideo: false,
    youtubeId: "",
    aspectRatio: "landscape",
    externalUrl: "https://www.bakkieoffload.com",
    linkTarget: "_blank",
    slug: "bakkie-website",
    content: `
    We built the Bakkie Offload website to support seamless booking and service awareness for a local on-demand delivery platform.

    Key Features:
    - Responsive React frontend styled with Tailwind CSS
    - Integrated contact and booking form using EmailJS
    - Google Analytics for user behavior tracking and SEO performance
    - Hosted with Afrihost for fast, reliable access in Southern Africa

    The site is clean, mobile-friendly, and conversion-focused—setting the digital foundation for the business.
  `,
  },

  {
    id: 12,
    title: "Phulumutsa Theatre-Based Team Building Business Template",
    description:
      "Transformative media and communications for reshaping workplace culture through embodied theatre methods.",
    tags: [
      "Media Production",
      "Communications",
      "Corporate Culture",
      "Team Building",
      "Storytelling",
      "Theatre-Based Training",
    ],
    image: "/images/projects/phulumutsa-thumb.jpg",
    imagePath: "/images/projects/phulumutsa-thumb.jpg",
    externalUrl: "",
    linkTarget: "_blank",
    slug: "phulumutsa-team-building",
    aspectRatio: "landscape",
    isVideo: false, 
    youtubeId: "",
    slideImages: [
      "/images/projects/phulumutsa-slide1.png",
      "/images/projects/phulumutsa-slide2.png",
      "/images/projects/phulumutsa-slide3.png",
      "/images/projects/phulumutsa-slide4.png",
      // "/images/projects/phulumutsa-slide5.png",
    ],
    content: `
Phulumutsa isn't just another team-building service — it's a cultural transformation experience rooted in truth, theatre, and storytelling.

Unlike traditional team-building that hides dysfunction under adrenaline and fun, Phulumutsa confronts workplace challenges head-on. Through embodied performance, participants explore real issues and rehearse real-world solutions.

Key Elements:
- Theatre-based facilitation using roleplay, storytelling, and improvisation
- Cultural recalibration workshops for businesses and schools
- Empathy-driven media campaigns and communications strategies
- Team alignment through creative, embodied interaction

We don’t escape the problem — we step into it, together. This is emotional rehearsal for lasting change — building workplaces that breathe, heal, and grow.
  `,
  },

  {
    id: 4,
    title: "Shosholoza Teamsheet - Progressive Web App",
    description: "PWA for creating, managing, and sharing team lineups",
    tags: ["React", "PWA", "Team Management", "Firebase", "Afrihost"],
    image: "/images/projects/shoza-app.png",
    imagePath: "/images/projects/company-site.png",
    isVideo: false,
    youtubeId: "",
    aspectRatio: "portrait",
    externalUrl: "https://shosholozafc.org.za/teamsheet",
    linkTarget: "_blank",
  },
  {
    id: 5,
    title: "Siscky's Kitchen Menu Poster",
    description:
      "A vibrant and appetizing menu poster designed for Siscky's Kitchen, showcasing flavorful dishes with bold branding.",
    tags: [
      "Menu Design",
      "Food Poster",
      "Culinary Branding",
      "Print Layout",
      "Local Eatery",
    ],
    image: "/images/projects/sostro-menu.jpg",
    imagePath: "/images/projects/company-site.png",
    isVideo: false,
    youtubeId: "-R4wN2qX75U", // replace if there's a unique video for this poster
    aspectRatio: "portrait",
    externalUrl: "",
    linkTarget: "_blank",
    slug: "sisckys-kitchen-menu",
    content: `
    This eye-catching menu poster was created for Siscky's Kitchen—a vibrant local kitchen known for its hearty meals and authentic South African flavors.

    Key Highlights:
    - Bold, appetizing visuals to attract foot traffic
    - Clear layout for easy scanning of daily specials and signature dishes
    - Designed in Canva for high-quality print and digital use
    - Perfect for display at pop-up stalls, food markets, and social media

    The design reflects Siscky's energetic brand and culinary passion, helping connect with hungry customers at first glance.
  `,
  },
  {
    id: 6,
    title: "Chef's Menu Booklet",
    description:
      "A professionally designed printed menu booklet curated for a fine dining experience by a South African chef.",
    tags: [
      "Menu Design",
      "Culinary Branding",
      "Print Layout",
      "Fine Dining",
      "Chef Portfolio",
    ],
    image: "/images/projects/chefs-menu-thumb.jpg",
    imagePath: "/images/projects/company-site.png",
    isVideo: true,
    youtubeId: "-R4wN2qX75U",
    aspectRatio: "portrait",
    externalUrl: "",
    linkTarget: "_blank",
  },
  {
    id: 7,
    title: "Valentine's Day Poster",
    description:
      "Romantic event poster design for a themed Valentine's Day campaign",
    tags: ["Poster Design", "Event Marketing", "Social Media Graphics"],
    image: "/images/projects/valentines-poster.png",
    imagePath: "/images/projects/company-site.png",
    isVideo: false,
    youtubeId: "",
    aspectRatio: "portrait",
    externalUrl: "",
    linkTarget: "_blank",
  },
  {
    id: 8,
    title: "Restaurant Food Menu",
    description: "Custom-designed food and drinks menu for a local eatery",
    tags: ["Menu Design", "Print Design", "Branding", "Restaurant Marketing"],
    image: "/images/projects/food-menu.png",
    imagePath: "/images/projects/company-site.png",
    youtubeId: "",
    isVideo: false,
    aspectRatio: "portrait",
    externalUrl: "",
    linkTarget: "_blank",
  },
  {
    id: 9,
    title: "Marriage Programme Design",
    description:
      "Elegant printed programme designed for a wedding ceremony and reception",
    tags: [
      "Programme Design",
      "Wedding Stationery",
      "Print Layout",
      "Event Branding",
    ],
    image: "/images/projects/marriage-programme.jpeg",
    imagePath: "/images/projects/company-site.png",
    isVideo: false,
    youtubeId: "",
    aspectRatio: "portrait",
    externalUrl: "",
    linkTarget: "_blank",
  },
  {
    id: 10,
    title: "Wedding Invitation Video",
    description:
      "An elegant and heartfelt digital wedding invitation celebrating the union of a special couple.",
    tags: [
      "Wedding Invitation",
      "Event Design",
      "Video Invitation",
      "Digital Invite",
      "Romantic Theme",
    ],
    image: "/images/projects/wedding-invite-thumb.jpg",
    imagePath: "/images/projects/company-site.png",
    isVideo: true,
    youtubeId: "M28gl5czdlc",
    aspectRatio: "portrait",
    externalUrl: "",
    // linkTarget: "_blank",
    slug: "wedding-invitation",
    content: `
    This beautifully crafted digital invitation was designed to set the tone for an unforgettable wedding celebration.

    Key Features:
    - Cinematic visuals with soft romantic transitions
    - Personalized couple details, venue, and date
    - Delivered in high-resolution MP4 format, optimized for WhatsApp and email sharing
    The invitation blends tradition and modern flair—perfect for announcing love in a meaningful, stylish way.
  `,
  },
  {
    id: 11,
    title: "Wedding Invitation Video",
    description:
      "An elegant and heartfelt digital wedding invitation celebrating the union of a special couple.",
    tags: [
      "Wedding Invitation",
      "Event Design",
      "Video Invitation",
      "Digital Invite",
      "Romantic Theme",
    ],
    image: "/images/projects/wedding-invite-thumb.jpg",
    imagePath: "/images/projects/company-site.png",
    isVideo: true,
    youtubeId: "7L0P4Dpzi0M",
    aspectRatio: "landscape",
    externalUrl: "",
    // linkTarget: "_blank",
    slug: "wedding-invitation",
    content: `
    This beautifully crafted digital invitation was designed to set the tone for an unforgettable wedding celebration.

    Key Features:
    - Cinematic visuals with soft romantic transitions
    - Personalized couple details, venue, and date
    - Delivered in high-resolution MP4 format, optimized for WhatsApp and email sharing
    The invitation blends tradition and modern flair—perfect for announcing love in a meaningful, stylish way.
  `,
  },
  {
  id: 13,
  title: "Professional Profile Video - Koena Mathopa",
  description: "A compelling personal branding video featuring professional voice-over narration to showcase expertise and personality.",
  tags: [
    "Personal Branding",
    "Voice Over",
    "Professional Narration",
    "Video Production",
    "Profile Video",
    "Career Highlights"
  ],
  image: "/images/projects/koena-profile-thumb.jpg",
  imagePath: "/images/projects/koena-profile-full.jpg",
  isVideo: true,
  youtubeId: "C5mCR4zdV-8",
  aspectRatio: "landscape", // Keeping landscape for professional videos
  externalUrl: "",
  slug: "koena-mathopa-profile-video",
  content: `
  This professional profile video features my custom voice-over work, perfectly complementing Koena Mathopa's personal brand and career narrative.

  Voice-Over Production Highlights:
  - Professional studio-quality narration recording
  - Clear, authoritative yet approachable vocal tone
  - Precise pacing to match visual content
  - Emotional inflection at key moments
  - Audio mixing optimized for various platforms

  Video Features:
  - Seamless integration of voice-over with visuals
  - Highlight reel of professional achievements
  - Personal introduction and value proposition
  - Multi-platform optimized format
  - Engaging script-to-visual flow

  The combination of compelling visuals and professional narration creates a powerful personal branding tool that makes a memorable impact.
  `,
  slideImages: [
    "/images/projects/koena-profile-slide1.jpg",
    "/images/projects/koena-profile-slide2.jpg",
    "/images/projects/koena-profile-slide3.jpg"
  ]
}
]
