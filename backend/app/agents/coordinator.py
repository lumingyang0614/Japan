from __future__ import annotations

from app.agents import content, culture, geo, history, timeline, travel_planner
from app.models.common import AgentResult, QueryRequest, QueryResponse


INTENT_MAP = {
    "history": history.run,
    "culture": culture.run,
    "travel": travel_planner.run,
    "geo": geo.run,
    "timeline": lambda *_: timeline.run(),
    "content": content.run,
}


def infer_intents(request: QueryRequest) -> list[str]:
    if request.intent:
        return [request.intent.lower()]
    intents = []
    question = (request.question or "").lower()
    if any(key in question for key in ["plan", "route", "schedule"]):
        intents.append("travel")
    if any(key in question for key in ["history", "era", "period"]):
        intents.append("history")
    if any(key in question for key in ["culture", "festival", "food", "temple"]):
        intents.append("culture")
    if request.era:
        intents.append("history")
    if request.area:
        intents.extend(["geo", "culture"])
    if not intents:
        intents.append("content")
    return list(dict.fromkeys(intents))


def run(request: QueryRequest) -> QueryResponse:
    intents = infer_intents(request)
    results: list[AgentResult] = []

    for intent in intents:
        if intent == "history":
            payload = history.run(request.city, request.era)
        elif intent == "culture":
            payload = culture.run(request.city, request.area)
        elif intent == "geo":
            payload = geo.run(request.city, request.area)
        elif intent == "travel":
            payload = travel_planner.run(request.city, request.area, request.interest)
        elif intent == "timeline":
            payload = timeline.run(request.city)
        elif intent == "content":
            payload = content.run(
                request.city, request.question, request.area, request.era
            )
        else:
            payload = {"note": f"Unknown intent: {intent}"}
        results.append(AgentResult(agent=intent, payload=payload))

    summary = " | ".join([r.agent for r in results]) or "no-results"
    return QueryResponse(summary=summary, results=results)
