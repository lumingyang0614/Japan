from __future__ import annotations

from fastapi import APIRouter, HTTPException

from app.data.cities import get_city

router = APIRouter()


@router.get("/eras")
def list_eras(city: str | None = None) -> dict:
    city_data = get_city(city)
    return {"city": city_data["city"], "eras": city_data["eras"]}


@router.get("/eras/{era_name}")
def get_era(era_name: str, city: str | None = None) -> dict:
    city_data = get_city(city)
    for era in city_data["eras"]:
        if era["name"].lower() == era_name.lower():
            return {"city": city_data["city"], "era": era}
    raise HTTPException(status_code=404, detail="Era not found")
