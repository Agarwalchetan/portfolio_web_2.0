export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  pdfUrl?: string;
  imageUrl: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'React - The Complete Guide',
    issuer: 'HackerRank',
    date: 'December 2024',
    pdfUrl: 'https://www.hackerrank.com/certificates/7af4bb6ed30a',
    imageUrl: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    title: 'National Road Safety Hackathon',
    issuer: 'NHAI',
    date: '2025',
    pdfUrl: 'https://unstop.com/certificate-preview/9b1b7ed2-3f54-4edf-8889-6cf291e7f61f',
    imageUrl: '/images/Certifications/NHAI.jpg',
  },
  {
    id: 3,
    title: 'AI Certified',
    issuer: 'hp',
    date: '2024',
    pdfUrl: 'https://www.linkedin.com/in/agarwalchetan10/details/certifications/1735066473662/single-media-viewer/?profileId=ACoAAFIOaasBtFgpsyZmUAv-g7IL5EC54wNubys',
    imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 4,
    title: 'Hackcrux-GDG',
    issuer: 'GDG-LNMIIT',
    date: 'March 2025',
    pdfUrl: 'https://certificate.givemycertificate.com/c/8a6d0346-58ae-424c-b027-0ab7d0774321',
    imageUrl: '/images/Certifications/hackcrux.png',
  },
];