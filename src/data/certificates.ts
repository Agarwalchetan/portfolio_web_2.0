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
    issuer: 'Udemy',
    date: 'January 2023',
    pdfUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    title: 'Advanced JavaScript Concepts',
    issuer: 'Coursera',
    date: 'March 2023',
    pdfUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    title: 'Data Structures and Algorithms',
    issuer: 'Educative',
    date: 'May 2023',
    pdfUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 4,
    title: 'Web Development Bootcamp',
    issuer: 'Codeacademy',
    date: 'July 2023',
    pdfUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];