import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3D Portfolio - Interactive Developer Experience',
  description: 'A stunning 3D animated portfolio showcasing modern web development skills with immersive water effects and smooth animations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="water-bg"></div>
        {children}
      </body>
    </html>
  );
}