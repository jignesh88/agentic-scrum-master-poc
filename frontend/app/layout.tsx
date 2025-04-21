import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Scrum Master',
  description: 'An AI-powered platform that acts as a virtual Scrum Master',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-2xl font-bold">AI Scrum Master</a>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/standup" className="hover:underline">Standup</a></li>
                <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
                <li><a href="/chat" className="hover:underline">AI Chat</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
