from __future__ import annotations

from pydantic import BaseModel, Field


class QueryRequest(BaseModel):
    question: str | None = Field(default=None, description="User question")
    city: str | None = Field(default=None, description="City name")
    area: str | None = Field(default=None, description="Area name")
    era: str | None = Field(default=None, description="Era name")
    intent: str | None = Field(
        default=None, description="history|culture|travel|geo|timeline|content"
    )
    interest: str | None = Field(default=None, description="Interest focus")


class AgentResult(BaseModel):
    agent: str
    payload: dict


class QueryResponse(BaseModel):
    summary: str
    results: list[AgentResult]
