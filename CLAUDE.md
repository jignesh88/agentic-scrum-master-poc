# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- Backend: `cd backend && uvicorn app.main:app --reload`
- Frontend: `cd frontend && npm run dev`
- Full stack: `docker-compose up -d`

## Code Style Guidelines

### Python (Backend)
- Use Python 3.11+ with FastAPI
- Follow PEP 8 naming: snake_case for variables/functions, PascalCase for classes
- Imports: standard library → third-party → local, alphabetized within groups
- Type annotations required with typing module and Pydantic
- Error handling: use FastAPI's HTTPException with consistent status codes
- Security: store configs in environment variables, follow app.core.security patterns

### TypeScript/React (Frontend)
- Use Next.js 14+ App Router patterns
- Naming: PascalCase for components, camelCase for functions/variables
- Imports: React → Next.js → components/libs
- Styles: Tailwind CSS classes
- Organize components by feature (in components/ directory)

## Testing
- Backend: Use pytest in the backend directory
- Frontend: Use Vitest/Jest for unit tests, Cypress for e2e