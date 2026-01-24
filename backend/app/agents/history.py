from __future__ import annotations

from app.data.cities import get_city


def run(city_name: str | None, era_name: str | None) -> dict:
    city = get_city(city_name)
    if not era_name:
        return {"note": "No era specified", "city": city["city"], "eras": city["eras"]}
    era = next(
        (e for e in city["eras"] if e["name"].lower() == era_name.lower()),
        None,
    )
    events = [e for e in city["events"] if e["era"].lower() == era_name.lower()]
    if not era:
        return {
            "note": f"Unknown era: {era_name}",
            "city": city["city"],
            "events": events,
        }
    return {"city": city["city"], "era": era, "events": events}
