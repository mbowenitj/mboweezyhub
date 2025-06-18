export interface Testimonial {
  name: string;
  company: string;
  text: string;
  rating: number;
  avatarColor?: string; // Optional for custom avatar colors
}

const testimonials: Testimonial[] = [
  {
    name: 'Koena M',
    company: '-',
    text: 'The team was so helpful and professional in creating my personal voice over video and I will be using their services again soon. Much appreciated',
    rating: 5,
    avatarColor: '#3B82F6' // Blue
  },
  {
    name: 'Thapelo A',
    company: '-',
    text: 'Thank you very much for your professional services. You really know how to capture one ideas. Thank you!',
    rating: 5,
    avatarColor: '#8B5CF6' // Purple
  },
  {
    name: 'Ali S',
    company: '-',
    text: 'Mboweezy Hub created an excellent wedding invitation video and program. Their open communication made the process enjoyable and smooth. They definitely met our expectations and made our special day memorable. We highly recommend Mboweezy Hub',
    rating: 5,
    avatarColor: '#EC4899' // Pink
  },
  {
    name: 'Eugene M',
    company: 'Offload App',
    text: 'Mboweezy Hub transformed our online presence completely. Their team delivered exceptional results on time and within budget.',
    rating: 5,
    avatarColor: '#10B981' // Emerald
  },
  {
    name: 'Phinda R',
    company: '-',
    text: 'The mobile app developed by Mboweezy Hub exceeded our expectations. User engagement has increased by 300%.',
    rating: 5,
    avatarColor: '#F59E0B' // Amber
  },
  {
    name: 'Thoko S',
    company: 'Magona Media',
    text: 'Reliable service and excellent support throughout our project. Will definitely work with them again.',
    rating: 5,
    avatarColor: '#EF4444' // Red
  }
];

export default testimonials;