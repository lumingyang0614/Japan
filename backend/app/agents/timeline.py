from __future__ import annotations

from app.data.cities import get_city


def run(city_name: str | None) -> dict:
    city = get_city(city_name)
    return {"city": city["city"], "timeline": city["eras"]}
