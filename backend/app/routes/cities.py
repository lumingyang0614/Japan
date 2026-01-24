from __future__ import annotations

from fastapi import APIRouter, HTTPException

from app.data.cities import CITIES, get_city

router = APIRouter()


@router.get("/cities")
def list_cities() -> dict:
    return {"cities": sorted(CITIES.keys())}


@router.get("/cities/{city_name}")
def get_city_detail(city_name: str) -> dict:
    city = get_city(city_name)
    if city["city"].lower() != city_name.lower():
        raise HTTPException(status_code=404, detail="City not found")
    return {"city": city}
