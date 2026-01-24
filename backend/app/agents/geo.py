from __future__ import annotations

from app.data.cities import get_city


def run(city_name: str | None, area_name: str | None) -> dict:
    city = get_city(city_name)
    if not area_name:
        return {
            "note": "No area specified",
            "city": city["city"],
            "areas": list(city["areas"].keys()),
        }
    for name, area in city["areas"].items():
        if name.lower() == area_name.lower():
            return {"city": city["city"], "area": name, "coords": area["coords"]}
    return {"note": f"Unknown area: {area_name}", "city": city["city"]}
