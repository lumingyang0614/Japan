from __future__ import annotations

from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from app.core.config import SETTINGS
from app.routes import areas, cities, eras, health, query, timeline


def create_app() -> FastAPI:
    app = FastAPI(title=SETTINGS.app_name)
    app.add_middleware(
        CORSMiddleware,
        allow_origins=list(SETTINGS.cors_allow_origins),
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    app.include_router(health.router, prefix=SETTINGS.api_prefix)
    app.include_router(cities.router, prefix=SETTINGS.api_prefix)
    app.include_router(areas.router, prefix=SETTINGS.api_prefix)
    app.include_router(eras.router, prefix=SETTINGS.api_prefix)
    app.include_router(timeline.router, prefix=SETTINGS.api_prefix)
    app.include_router(query.router, prefix=SETTINGS.api_prefix)

    frontend_dir = Path(__file__).resolve().parents[2] / "frontend"
    if frontend_dir.exists():
        app.mount(
            "/static",
            StaticFiles(directory=str(frontend_dir)),
            name="frontend",
        )

        @app.get("/")
        def root() -> FileResponse:
            return FileResponse(frontend_dir / "index.html")
    return app


app = create_app()
