from __future__ import annotations

from fastapi import APIRouter

from app.agents.coordinator import run as run_coordinator
from app.models.common import QueryRequest, QueryResponse

router = APIRouter()


@router.post("/query", response_model=QueryResponse)
def query(request: QueryRequest) -> QueryResponse:
    return run_coordinator(request)
