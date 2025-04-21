# AI Scrum Master & Software Delivery Automation Platform

An AI-powered platform that acts as a virtual Scrum Master, capable of managing the end-to-end coordination and communication overhead involved in software development.

## Overview

This platform automates task creation, sprint planning, ticket updates, asynchronous team communications (across time zones), progress reporting, and more — enabling developers to focus purely on high-leverage tasks like coding, debugging, and reviewing.

## Key Capabilities

1. **Automated Ticket Management**
   * Understands high-level goals from stakeholder input and generates structured epics, user stories, and tasks
   * Auto-assigns tasks based on availability, expertise, and workload
   * Auto-updates tickets based on Git commits, PRs, or Slack/Teams updates

2. **AI Sprint Planning**
   * Auto-generates sprint plans with estimations based on historical velocity and team member availability
   * Suggests backlog priorities using predictive impact analysis

3. **Async Standups & Check-ins**
   * Runs AI-powered asynchronous daily standups
   * Summarizes team updates and flags blockers
   * Syncs with multiple time zones and adjusts communication styles for regional nuance

4. **Automated Cross-Team Communication**
   * Serves as a 24/7 liaison between globally distributed teams
   * Translates technical discussions into summaries and action points
   * Integrates with tools like Slack, MS Teams, and email

5. **Documentation & Reporting**
   * Auto-generates release notes, sprint summaries, and team performance metrics
   * Uses LLMs to keep documentation up to date based on codebase changes and discussions

6. **Voice & Natural Language Interfaces**
   * Allows voice/text input for ad-hoc ticket creation and updates
   * AI chatbot interface for Q&A on sprint status, backlog, or dependencies

## Tech Stack

### Backend
- **Python 3.11+**
- **FastAPI** for high-performance API endpoints
- **Pydantic** for data validation
- **MongoDB** for document storage
- **Redis** for caching and rate limiting
- **LangChain/LlamaIndex** for LLM orchestration
- **Anthropic Claude & OpenAI GPT** models for NLP
- **Pinecone** for vector database storage

### Frontend
- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **NextAuth.js** for authentication
- **SWR/React Query** for data fetching

### DevOps
- **Docker** & **Docker Compose** for containerization
- **GitHub Actions** for CI/CD (optional)
- **Kubernetes** for production deployment (optional)

## Getting Started

### Prerequisites
- Docker and Docker Compose
- Node.js 18+
- Python 3.11+
- OpenAI and/or Anthropic API keys
- Pinecone API key (for vector database)

### Environment Setup

1. Clone the repository:
```bash
git clone https://github.com/jignesh88/agentic-scrum-master-poc.git
cd agentic-scrum-master-poc
```

2. Create environment files:
```bash
# Backend .env file
cp backend/.env.example backend/.env

# Frontend .env file
cp frontend/.env.example frontend/.env.local
```

3. Update the environment files with your API keys and configuration.

### Running with Docker Compose (Recommended)

The easiest way to run the entire stack is using Docker Compose:

```bash
docker-compose up -d
```

This will start:
- Backend API service (http://localhost:8000)
- Frontend Next.js app (http://localhost:3000)
- MongoDB database
- Redis cache
- MongoDB admin UI (http://localhost:8081)
- Redis commander UI (http://localhost:8082)

### Manual Setup (Development)

#### Backend Setup
```bash
cd backend

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # Unix/Mac
# or
.\venv\Scripts\activate  # Windows

# Install dependencies
pip install -r requirements.txt

# Run the FastAPI server
uvicorn app.main:app --reload
```

#### Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Run the development server
npm run dev
```

## Project Structure

```
agentic-scrum-master-poc/
├── backend/                # Python FastAPI backend
│   ├── app/
│   │   ├── api/            # API endpoints
│   │   ├── core/           # Core configuration
│   │   ├── models/         # Database models
│   │   ├── services/       # Business logic
│   │   ├── schemas/        # Pydantic schemas
│   │   └── main.py         # Application entry point
│   ├── requirements.txt    # Python dependencies
│   └── Dockerfile          # Backend container definition
├── frontend/               # Next.js frontend
│   ├── app/                # Next.js App Router
│   ├── components/         # React components
│   ├── lib/                # Utility functions
│   ├── styles/             # CSS and styling
│   ├── types/              # TypeScript type definitions
│   ├── package.json        # Node.js dependencies
│   └── Dockerfile          # Frontend container definition
├── docker-compose.yml      # Docker Compose configuration
└── README.md               # Project documentation
```

## Usage Examples

### Example: Creating a New Feature

You can ask the AI Scrum Master:
```
"We need to add OAuth login to our platform"
```

The AI will:
1. Create a well-structured epic with sub-tasks and estimates
2. Assign the work intelligently to team members
3. Notify the PM and designer for approval
4. Post daily updates to the team
5. Generate release notes when complete

## Security Considerations

This platform implements several security best practices:
- JWT-based authentication with token rotation
- API rate limiting
- Input validation with Pydantic
- Secure password hashing
- CORS protection
- Security headers
- Non-root Docker containers

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
