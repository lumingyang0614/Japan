from __future__ import annotations

from fastapi import APIRouter, HTTPException

from app.data.cities import get_city

router = APIRouter()


@router.get("/areas")
def list_areas(city: str | None = None) -> dict:
    city_data = get_city(city)
    return {"city": city_data["city"], "areas": list(city_data["areas"].keys())}


@router.get("/areas/{area_name}")
def get_area(area_name: str, city: str | None = None) -> dict:
    city_data = get_city(city)
    for name, area in city_data["areas"].items():
        if name.lower() == area_name.lower():
            return {"city": city_data["city"], "area": name, "data": area}
    raise HTTPException(status_code=404, detail="Area not found")
