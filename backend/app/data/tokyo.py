from __future__ import annotations


TOKYO = {
    "city": "Tokyo",
    "areas": {
        "Asakusa": {
            "themes": ["temple", "old-town", "festival"],
            "highlights": ["Senso-ji", "Nakamise", "Sumida River"],
            "coords": {"lat": 35.7148, "lng": 139.7967},
        },
        "Ueno": {
            "themes": ["museum", "park", "zoo"],
            "highlights": ["Ueno Park", "Tokyo National Museum", "Ameya-Yokocho"],
            "coords": {"lat": 35.7138, "lng": 139.7730},
        },
        "Imperial Palace": {
            "themes": ["history", "gardens", "architecture"],
            "highlights": ["East Gardens", "Nijubashi Bridge", "Chidorigafuchi"],
            "coords": {"lat": 35.6852, "lng": 139.7528},
        },
        "Shinjuku": {
            "themes": ["city-life", "nightlife", "transport"],
            "highlights": ["Shinjuku Gyoen", "Kabukicho", "Observation Decks"],
            "coords": {"lat": 35.6938, "lng": 139.7034},
        },
        "Shibuya": {
            "themes": ["youth", "shopping", "pop-culture"],
            "highlights": ["Shibuya Crossing", "Center-gai", "Hachiko Statue"],
            "coords": {"lat": 35.6595, "lng": 139.7005},
        },
        "Akihabara": {
            "themes": ["anime", "games", "electronics"],
            "highlights": ["Electric Town", "Retro Game Stores", "Maid Cafes"],
            "coords": {"lat": 35.6984, "lng": 139.7730},
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
        {"era": "Reiwa", "event": "Resilient city planning and global events"},
    ],
    "culture": {
        "Asakusa": ["Buddhism", "festivals", "traditional crafts"],
        "Ueno": ["museums", "park culture", "seasonal hanami"],
        "Imperial Palace": ["imperial history", "gardens", "ceremony"],
        "Shinjuku": ["urban nightlife", "business hub", "transport culture"],
        "Shibuya": ["youth trends", "street fashion", "music"],
        "Akihabara": ["anime", "games", "electronics subculture"],
    },
}
