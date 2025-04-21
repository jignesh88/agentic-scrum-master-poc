from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime

class StandupCreate(BaseModel):
    user_id: str
    date: str = Field(description="Date in ISO format (YYYY-MM-DD)", examples=["2023-11-05"])
    yesterday_work: str = Field(description="Work completed yesterday", examples=["Implemented feature X and fixed bug Y"])
    today_work: str = Field(description="Planned work for today", examples=["Will work on feature Z and review PRs"])
    blockers: Optional[str] = Field(None, description="Any blockers or challenges", examples=["Waiting for API access"])

class StandupResponse(BaseModel):
    id: str
    user_id: str
    date: str
    yesterday_work: str
    today_work: str
    blockers: Optional[str] = None
    ai_summary: Optional[str] = None
    created_at: str

class StandupSummary(BaseModel):
    date: str
    team_members: List[str]
    summary: str
    action_items: List[str]
    blockers: List[str]
    generated_at: str