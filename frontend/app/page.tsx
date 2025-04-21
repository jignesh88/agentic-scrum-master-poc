import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">AI Scrum Master</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <Link 
            href="/standup" 
            className="group rounded-lg border border-gray-300 px-5 py-4 hover:border-gray-400 hover:bg-gray-100 transition-colors">
            <h2 className="mb-3 text-2xl font-semibold">
              Daily Standup{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </h2>
            <p className="m-0 text-sm opacity-70">
              Submit your daily standup or view team summaries.
            </p>
          </Link>

          <Link
            href="/dashboard"
            className="group rounded-lg border border-gray-300 px-5 py-4 hover:border-gray-400 hover:bg-gray-100 transition-colors">
            <h2 className="mb-3 text-2xl font-semibold">
              Dashboard{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </h2>
            <p className="m-0 text-sm opacity-70">
              View sprint progress and team metrics.
            </p>
          </Link>
          
          <Link
            href="/chat"
            className="group rounded-lg border border-gray-300 px-5 py-4 hover:border-gray-400 hover:bg-gray-100 transition-colors">
            <h2 className="mb-3 text-2xl font-semibold">
              AI Chat{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </h2>
            <p className="m-0 text-sm opacity-70">
              Chat with your AI Scrum Master for instant help.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
