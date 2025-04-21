import SprintSummary from '../../components/dashboard/SprintSummary';

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Sprint Dashboard</h1>
      <SprintSummary />
    </div>
  );
}
