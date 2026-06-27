import type { Metadata, Viewport } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: 'Basavaprabhu Kudenatti | Full Stack MERN Developer',
  description: 'Portfolio of Basavaprabhu Kudenatti, an MCA student and Full Stack MERN Developer focused on Java, databases, DSA, and real-world web applications.',
  keywords: ['Basavaprabhu Kudenatti', 'Full Stack MERN Developer', 'MCA Student', 'Java Developer', 'Database Developer', 'React', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Bengaluru'],
  authors: [{ name: 'Basavaprabhu Kudenatti' }],
  openGraph: {
    type: 'website',
    title: 'Basavaprabhu Kudenatti | Full Stack MERN Developer',
    description: 'MCA student at BMS Institute of Technology & Management focused on Java, databases, MERN stack development, and DSA.',
    images: [
      {
        url: '/favicon.svg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Basavaprabhu Kudenatti | Full Stack MERN Developer',
    description: 'MCA student and Full Stack MERN Developer focused on Java, databases, DSA, and real-world web applications.',
    images: ['/favicon.svg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <body className="bg-darkBg text-lightText font-sans selection:bg-accentNeon/30 selection:text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
