from __future__ import annotations

from fastapi import APIRouter

from app.agents.timeline import run as timeline_run

router = APIRouter()


@router.get("/timeline")
def timeline(city: str | None = None) -> dict:
    return timeline_run(city)
