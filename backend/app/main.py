from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.api.routes.api import router as api_router

app = FastAPI(title=settings.PROJECT_NAME, version=settings.VERSION)

# Set up CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "ok", "version": settings.VERSION}

# Include API routes
app.include_router(api_router, prefix=settings.API_PREFIX)
