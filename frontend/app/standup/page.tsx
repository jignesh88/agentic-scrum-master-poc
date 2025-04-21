import StandupForm from '../../components/standup/StandupForm';

export default function StandupPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Daily Standup</h1>
      <StandupForm />
    </div>
  );
}
