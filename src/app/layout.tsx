import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Vinoth\'s',
  description: 'Vinoth\'s personal website and blog.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
    <body>
    {children}
    </body>
    </html>
  );
}