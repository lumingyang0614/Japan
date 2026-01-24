from __future__ import annotations

from app.data.cities import get_city


DEFAULT_STEPS = [
    "Start with a short walk to get oriented",
    "Visit the top highlight that matches your interest",
    "Take a break at a local cafe or market street",
    "Finish with a scenic spot or photo stop",
]


def run(city_name: str | None, area_name: str | None, interest: str | None) -> dict:
    city = get_city(city_name)
    if not area_name:
        return {
            "note": "No area specified",
            "city": city["city"],
            "areas": list(city["areas"].keys()),
        }
    for name, area in city["areas"].items():
        if name.lower() == area_name.lower():
            focus = interest or "general"
            return {
                "city": city["city"],
                "area": name,
                "interest": focus,
                "steps": DEFAULT_STEPS,
                "highlights": area["highlights"],
            }
    return {"note": f"Unknown area: {area_name}", "city": city["city"]}
