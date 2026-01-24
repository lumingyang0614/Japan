#!/usr/bin/env python3
from __future__ import annotations

import sys
from textwrap import dedent


DATA = {
    "city": "Tokyo",
    "areas": {
        "Asakusa": {
            "themes": ["temple", "old-town", "festival"],
            "highlights": [
                "Senso-ji",
                "Nakamise street",
                "Sumida riverside",
            ],
        },
        "Ueno": {
            "themes": ["museum", "park", "zoo"],
            "highlights": [
                "Ueno Park",
                "Tokyo National Museum",
                "Ameya-Yokocho",
            ],
        },
        "Imperial Palace": {
            "themes": ["history", "gardens", "architecture"],
            "highlights": [
                "East Gardens",
                "Nijubashi Bridge",
                "Chidorigafuchi",
            ],
        },
        "Shinjuku": {
            "themes": ["city-life", "nightlife", "transport"],
            "highlights": [
                "Shinjuku Gyoen",
                "Kabukicho",
                "Observation decks",
            ],
        },
        "Shibuya": {
            "themes": ["youth", "shopping", "pop-culture"],
            "highlights": [
                "Shibuya Crossing",
                "Center-gai",
                "Hachiko statue",
            ],
        },
        "Akihabara": {
            "themes": ["anime", "games", "electronics"],
            "highlights": [
                "Electric Town",
                "Retro game stores",
                "Maid cafes",
            ],
        },
    },
    "eras": [
        {"name": "Edo", "range": "1603-1868", "tagline": "Shogunate capital"},
        {"name": "Meiji", "range": "1868-1912", "tagline": "Modernization begins"},
        {"name": "Showa", "range": "1926-1989", "tagline": "War and recovery"},
        {"name": "Heisei", "range": "1989-2019", "tagline": "Bubble to stability"},
        {"name": "Reiwa", "range": "2019-present", "tagline": "Contemporary Tokyo"},
    ],
    "events": [
        {"era": "Edo", "event": "Edo becomes the political center"},
        {"era": "Meiji", "event": "Tokyo named the imperial capital"},
        {"era": "Showa", "event": "Great Kanto Earthquake recovery"},
        {"era": "Showa", "event": "Postwar reconstruction accelerates"},
        {"era": "Heisei", "event": "Urban redevelopment and rail expansion"},
        {"era": "Reiwa", "event": "Global events and resilient city planning"},
    ],
}


def print_header() -> None:
    print("Japan Culture · Travel · History Intelligent Platform (CLI)")
    print("City:", DATA["city"])


def list_areas() -> None:
    print("Areas:")
    for name in DATA["areas"]:
        print(f" - {name}")


def list_eras() -> None:
    print("Eras:")
    for era in DATA["eras"]:
        print(f" - {era['name']} ({era['range']}): {era['tagline']}")


def show_timeline() -> None:
    print("Timeline:")
    for era in DATA["eras"]:
        print(f" {era['range']}: {era['name']} - {era['tagline']}")


def show_events(era_name: str) -> None:
    matched = [e for e in DATA["events"] if e["era"].lower() == era_name.lower()]
    if not matched:
        print(f"No events found for era: {era_name}")
        return
    print(f"Events for {era_name}:")
    for e in matched:
        print(f" - {e['event']}")


def show_area_profile(area_name: str) -> None:
    area = next(
        (v for k, v in DATA["areas"].items() if k.lower() == area_name.lower()),
        None,
    )
    if not area:
        print(f"Unknown area: {area_name}")
        return
    print(f"Area: {area_name}")
    print("Themes:", ", ".join(area["themes"]))
    print("Highlights:")
    for h in area["highlights"]:
        print(f" - {h}")


def plan_half_day(area_name: str, interest: str) -> None:
    area = next(
        (v for k, v in DATA["areas"].items() if k.lower() == area_name.lower()),
        None,
    )
    if not area:
        print(f"Unknown area: {area_name}")
        return
    steps = [
        "Start with a short walk to get oriented",
        "Visit the top highlight that matches your interest",
        "Take a break at a local cafe or market street",
        "Finish with a scenic spot or photo stop",
    ]
    print(f"Half-day plan for {area_name} ({interest}):")
    for i, s in enumerate(steps, 1):
        print(f" {i}. {s}")
    print("Suggested highlights:")
    for h in area["highlights"]:
        print(f" - {h}")


def print_help() -> None:
    print(
        dedent(
            """
            Commands:
              help                              Show this help
              areas                             List areas
              eras                              List eras
              timeline                          Show timeline
              events <era>                      List events for an era
              area <area-name>                  Show area profile
              plan <area-name> <interest>       Make a half-day plan
              quit                              Exit
            """
        ).strip()
    )


def repl() -> None:
    print_header()
    print_help()
    while True:
        try:
            raw = input("\n> ").strip()
        except (EOFError, KeyboardInterrupt):
            print("\nBye.")
            return
        if not raw:
            continue
        if raw.lower() in {"quit", "exit"}:
            print("Bye.")
            return
        if raw.lower() == "help":
            print_help()
            continue
        if raw.lower() == "areas":
            list_areas()
            continue
        if raw.lower() == "eras":
            list_eras()
            continue
        if raw.lower() == "timeline":
            show_timeline()
            continue
        if raw.lower().startswith("events "):
            _, era_name = raw.split(" ", 1)
            show_events(era_name)
            continue
        if raw.lower().startswith("area "):
            _, area_name = raw.split(" ", 1)
            show_area_profile(area_name)
            continue
        if raw.lower().startswith("plan "):
            parts = raw.split(" ", 2)
            if len(parts) < 3:
                print("Usage: plan <area-name> <interest>")
                continue
            _, area_name, interest = parts
            plan_half_day(area_name, interest)
            continue
        print("Unknown command. Type 'help' for options.")


def main() -> int:
    repl()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
