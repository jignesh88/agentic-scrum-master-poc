from fastapi import APIRouter

from app.api.routes.standup import router as standup_router

router = APIRouter()

router.include_router(standup_router, prefix="/standups", tags=["standups"])
