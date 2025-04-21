import ChatInterface from '../../components/chat/ChatInterface';

export default function ChatPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">AI Scrum Master Chat</h1>
      <ChatInterface />
    </div>
  );
}
