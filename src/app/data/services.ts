import { JSX } from 'react';
import { IconType } from 'react-icons';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaShieldAlt, FaChartLine, FaRobot, FaPaintBrush, FaVideo, FaImage, FaBook, FaCalendarAlt } from 'react-icons/fa';
import { SiCanva } from 'react-icons/si';

export interface Service {
  icon: IconType;
  title: string;
  description: string;
  category: 'tech' | 'design' | 'media';
}

export const services: Service[] = [
  // Tech Solutions
  {
    icon: FaLaptopCode,
    title: 'Web & Mobile Solutions',
    description: 'Custom websites and mobile apps built with cutting-edge technologies for businesses and personal use.',
    category: 'tech'
  },
  {
    icon: FaCloud,
    title: 'Cloud & Security',
    description: 'Secure cloud infrastructure and comprehensive digital protection for your business.',
    category: 'tech'
  },

  // Design Services
  {
    icon: FaPaintBrush,
    title: 'Graphic & Print Design',
    description: 'Complete design solutions including social media graphics, business cards, flyers, and invitations.',
    category: 'design'
  },
  {
    icon: FaCalendarAlt,
    title: 'Event Branding',
    description: 'Elegant wedding invitations and special event announcements with cohesive branding.',
    category: 'design'
  },

  // Media Production
  {
    icon: FaVideo,
    title: 'Video & Photo Production',
    description: 'Professional video creation and photo editing for marketing and social media.',
    category: 'media'
  },
  {
    icon: FaChartLine,
    title: 'Digital Marketing',
    description: 'Complete digital strategy including social media management and content creation.',
    category: 'media'
  }
];