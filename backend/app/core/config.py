from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class Settings:
    app_name: str = "Japan Culture Travel History Platform"
    api_prefix: str = "/api"
    cors_allow_origins: tuple[str, ...] = ("*",)


SETTINGS = Settings()
