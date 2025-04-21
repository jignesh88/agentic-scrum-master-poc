import Link from 'next/link';

export default function StandupSuccessPage() {
  return (
    <div className="container mx-auto py-10 px-4 text-center">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4 text-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold mb-4">Standup Submitted!</h1>
        
        <p className="text-gray-600 mb-6">
          Your daily standup has been recorded. The AI will analyze your update and include it in today's summary.
        </p>
        
        <div className="flex flex-col space-y-4">
          <Link 
            href="/dashboard"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            View Dashboard
          </Link>
          
          <Link 
            href="/"
            className="text-blue-600 hover:underline"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
