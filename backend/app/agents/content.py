from __future__ import annotations

from app.data.cities import get_city


def run(
    city_name: str | None,
    question: str | None,
    area_name: str | None,
    era_name: str | None,
) -> dict:
    city = get_city(city_name)
    area = None
    if area_name:
        area = next(
            (k for k in city["areas"] if k.lower() == area_name.lower()), None
        )
    era = None
    if era_name:
        era = next(
            (e for e in city["eras"] if e["name"].lower() == era_name.lower()), None
        )
    narrative_parts = []
    if era:
        narrative_parts.append(
            f"You are looking at {city['city']} during the {era['name']} era."
        )
    if area:
        narrative_parts.append(f"The focus area is {area}.")
    if question:
        narrative_parts.append(f"Question context: {question}")
    if not narrative_parts:
        narrative_parts.append("Provide a question, area, or era to generate content.")
    return {"city": city["city"], "narrative": " ".join(narrative_parts)}
