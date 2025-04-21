"use client";

import { useState, useEffect } from 'react';

// Mock data for demonstration
const MOCK_SPRINT_DATA = {
  name: "Sprint 23",
  startDate: "2023-11-01",
  endDate: "2023-11-14",
  progress: 65,
  stories: [
    { id: "STORY-123", title: "Implement OAuth Login", status: "In Progress", assignee: "Alex", points: 8 },
    { id: "STORY-124", title: "Create Dashboard UI", status: "Done", assignee: "Sophia", points: 5 },
    { id: "STORY-125", title: "Fix API Rate Limiting", status: "Done", assignee: "Miguel", points: 3 },
    { id: "STORY-126", title: "Add Unit Tests", status: "To Do", assignee: "Unassigned", points: 5 },
    { id: "STORY-127", title: "Update Documentation", status: "In Progress", assignee: "Jordan", points: 2 },
  ],
  velocity: {
    current: 13,
    average: 15,
    trend: "decreasing"
  },
  aiInsights: [
    "Team is trending behind velocity due to unexpected complexity in OAuth implementation",
    "Documentation task could be parallelized with another team member to improve throughput",
    "Consider breaking down the unit tests story for better progress tracking"
  ]
};

export default function SprintSummary() {
  const [sprintData, setSprintData] = useState(MOCK_SPRINT_DATA);
  const [isLoading, setIsLoading] = useState(false);

  // In a real implementation, this would fetch data from the API
  useEffect(() => {
    const fetchSprintData = async () => {
      // Simulating API fetch with a timeout
      setIsLoading(true);
      // In a real app: const data = await api.sprints.getCurrent();
      setTimeout(() => {
        setSprintData(MOCK_SPRINT_DATA);
        setIsLoading(false);
      }, 500);
    };

    fetchSprintData();
  }, []);

  if (isLoading) {
    return <div className="flex justify-center p-10">Loading sprint data...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{sprintData.name}</h2>
        <div className="text-sm text-gray-600">
          {sprintData.startDate} to {sprintData.endDate}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium">Sprint Progress</span>
          <span className="text-sm font-medium">{sprintData.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${sprintData.progress}%` }}></div>
        </div>
      </div>

      {/* Stories Table */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Stories</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignee</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sprintData.stories.map((story) => (
                <tr key={story.id}>
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{story.id}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{story.title}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                    <span 
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        story.status === 'Done' ? 'bg-green-100 text-green-800' : 
                        story.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 
                        'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {story.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{story.assignee}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{story.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* AI Insights */}
      <div>
        <h3 className="text-lg font-semibold mb-3">AI Insights & Recommendations</h3>
        <ul className="list-disc pl-5 space-y-1">
          {sprintData.aiInsights.map((insight, index) => (
            <li key={index} className="text-sm text-gray-700">{insight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
