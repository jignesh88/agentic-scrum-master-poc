"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function StandupForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user_id: '',
    yesterday_work: '',
    today_work: '',
    blockers: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add current date to the form data
      const today = new Date().toISOString().split('T')[0];
      
      const response = await fetch('http://localhost:8000/api/standups/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          date: today
        }),
      });

      if (response.ok) {
        router.push('/standup/success');
      } else {
        throw new Error('Failed to submit standup');
      }
    } catch (error) {
      console.error('Error submitting standup:', error);
      alert('Failed to submit your standup. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Daily Standup</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="user_id" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="user_id"
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="yesterday_work" className="block text-sm font-medium text-gray-700 mb-1">
            What did you accomplish yesterday?
          </label>
          <textarea
            id="yesterday_work"
            name="yesterday_work"
            value={formData.yesterday_work}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="today_work" className="block text-sm font-medium text-gray-700 mb-1">
            What will you work on today?
          </label>
          <textarea
            id="today_work"
            name="today_work"
            value={formData.today_work}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="blockers" className="block text-sm font-medium text-gray-700 mb-1">
            Any blockers or challenges? (optional)
          </label>
          <textarea
            id="blockers"
            name="blockers"
            value={formData.blockers}
            onChange={handleChange}
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Standup'}
          </button>
        </div>
      </form>
    </div>
  );
}
