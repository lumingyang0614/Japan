from __future__ import annotations


CITIES = {
    "Tokyo": {
        "city": "Tokyo",
        "areas": {
            "Asakusa": {
                "themes": ["temple", "old-town", "festival"],
                "highlights": ["Senso-ji", "Nakamise", "Sumida River"],
                "culture": ["Buddhism", "street food", "crafts"],
                "description": "Historic district with temples, markets, and riverside walks.",
                "coords": {"lat": 35.7148, "lng": 139.7967},
            },
            "Ueno": {
                "themes": ["museum", "park", "zoo"],
                "highlights": ["Ueno Park", "Tokyo National Museum", "Ameya-Yokocho"],
                "culture": ["museum culture", "hanami", "street markets"],
                "description": "Museums, large park, and a lively market street.",
                "coords": {"lat": 35.7138, "lng": 139.7730},
            },
            "Imperial Palace": {
                "themes": ["history", "gardens", "architecture"],
                "highlights": ["East Gardens", "Nijubashi Bridge", "Chidorigafuchi"],
                "culture": ["imperial history", "gardens", "ceremony"],
                "description": "Historic palace grounds with expansive gardens.",
                "coords": {"lat": 35.6852, "lng": 139.7528},
            },
            "Shinjuku": {
                "themes": ["city-life", "nightlife", "transport"],
                "highlights": ["Shinjuku Gyoen", "Kabukicho", "Observation Decks"],
                "culture": ["nightlife", "business hub", "rail culture"],
                "description": "High-rise district with nightlife and major transit hubs.",
                "coords": {"lat": 35.6938, "lng": 139.7034},
            },
            "Shibuya": {
                "themes": ["youth", "shopping", "pop-culture"],
                "highlights": ["Shibuya Crossing", "Center-gai", "Hachiko Statue"],
                "culture": ["street fashion", "music", "youth trends"],
                "description": "Fast-paced center of youth culture and shopping.",
                "coords": {"lat": 35.6595, "lng": 139.7005},
            },
            "Akihabara": {
                "themes": ["anime", "games", "electronics"],
                "highlights": ["Electric Town", "Retro Game Stores", "Maid Cafes"],
                "culture": ["anime", "games", "electronics subculture"],
                "description": "Electronics and pop culture hub with niche shops.",
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
    },
    "Kyoto": {
        "city": "Kyoto",
        "areas": {
            "Gion": {
                "themes": ["traditional", "arts", "heritage"],
                "highlights": ["Hanamikoji", "Yasaka Shrine", "Tea houses"],
                "culture": ["geiko culture", "seasonal festivals", "crafts"],
                "description": "Historic entertainment district with preserved streets.",
                "coords": {"lat": 35.0037, "lng": 135.7788},
            },
            "Arashiyama": {
                "themes": ["nature", "temple", "scenic"],
                "highlights": ["Bamboo Grove", "Togetsukyo Bridge", "Tenryu-ji"],
                "culture": ["nature walks", "temple gardens", "boat rides"],
                "description": "Riverside area known for bamboo forests and temples.",
                "coords": {"lat": 35.0094, "lng": 135.6668},
            },
            "Higashiyama": {
                "themes": ["temple", "heritage", "walking"],
                "highlights": ["Kiyomizu-dera", "Ninenzaka", "Sannenzaka"],
                "culture": ["heritage lanes", "tea culture", "crafts"],
                "description": "Hillside district of temples and preserved streets.",
                "coords": {"lat": 34.9949, "lng": 135.7849},
            },
            "Fushimi": {
                "themes": ["shrine", "sake", "hiking"],
                "highlights": ["Fushimi Inari", "Torii trails", "Sake district"],
                "culture": ["shrine rituals", "sake brewing", "hiking"],
                "description": "Shrine complex with iconic torii paths.",
                "coords": {"lat": 34.9671, "lng": 135.7727},
            },
        },
        "eras": [
            {"name": "Heian", "range": "794-1185", "tagline": "Imperial capital"},
            {"name": "Kamakura", "range": "1185-1333", "tagline": "Samurai rise"},
            {"name": "Muromachi", "range": "1336-1573", "tagline": "Cultural flowering"},
            {"name": "Edo", "range": "1603-1868", "tagline": "Temple city"},
            {"name": "Modern", "range": "1868-present", "tagline": "Preserved heritage"},
        ],
        "events": [
            {"era": "Heian", "event": "Kyoto established as imperial capital"},
            {"era": "Muromachi", "event": "Zen culture and garden design expand"},
            {"era": "Edo", "event": "Pilgrimage routes and temple districts grow"},
            {"era": "Modern", "event": "Heritage preservation and tourism focus"},
        ],
    },
    "Osaka": {
        "city": "Osaka",
        "areas": {
            "Namba": {
                "themes": ["food", "nightlife", "shopping"],
                "highlights": ["Dotonbori", "Kuromon Market", "Canal walks"],
                "culture": ["street food", "comedy", "nightlife"],
                "description": "Neon-lit district known for food and entertainment.",
                "coords": {"lat": 34.6654, "lng": 135.5013},
            },
            "Umeda": {
                "themes": ["business", "transport", "shopping"],
                "highlights": ["Umeda Sky", "Grand Front", "Rail hub"],
                "culture": ["modern architecture", "business culture", "railways"],
                "description": "Northern hub of transport and modern malls.",
                "coords": {"lat": 34.7050, "lng": 135.4983},
            },
            "Osaka Castle": {
                "themes": ["history", "park", "castle"],
                "highlights": ["Castle tower", "Moat park", "Museum"],
                "culture": ["samurai history", "seasonal events", "gardens"],
                "description": "Historic castle complex surrounded by parkland.",
                "coords": {"lat": 34.6873, "lng": 135.5262},
            },
            "Shinsekai": {
                "themes": ["retro", "street-food", "local"],
                "highlights": ["Tsutenkaku", "Kushikatsu", "Arcades"],
                "culture": ["retro Osaka", "local eateries", "games"],
                "description": "Retro district with street food and nostalgic vibes.",
                "coords": {"lat": 34.6525, "lng": 135.5063},
            },
        },
        "eras": [
            {"name": "Sengoku", "range": "1467-1600", "tagline": "Warring states"},
            {"name": "Edo", "range": "1603-1868", "tagline": "Merchant capital"},
            {"name": "Modern", "range": "1868-present", "tagline": "Industrial powerhouse"},
        ],
        "events": [
            {"era": "Edo", "event": "Osaka grows as a merchant and food city"},
            {"era": "Modern", "event": "Port and industrial expansion"},
        ],
    },
    "Nara": {
        "city": "Nara",
        "areas": {
            "Nara Park": {
                "themes": ["nature", "temple", "heritage"],
                "highlights": ["Todai-ji", "Deer park", "Kasuga Taisha"],
                "culture": ["temple culture", "gardens", "crafts"],
                "description": "Ancient temples and deer-filled parklands.",
                "coords": {"lat": 34.6851, "lng": 135.8430},
            },
            "Naramachi": {
                "themes": ["old-town", "crafts", "walking"],
                "highlights": ["Machiya houses", "Local cafes", "Museums"],
                "culture": ["crafts", "heritage streets", "local food"],
                "description": "Traditional townhouses and artisan streets.",
                "coords": {"lat": 34.6802, "lng": 135.8329},
            },
        },
        "eras": [
            {"name": "Nara", "range": "710-794", "tagline": "First permanent capital"},
            {"name": "Heian", "range": "794-1185", "tagline": "Temple legacy"},
            {"name": "Modern", "range": "1868-present", "tagline": "Heritage tourism"},
        ],
        "events": [
            {"era": "Nara", "event": "Buddhist institutions established"},
            {"era": "Modern", "event": "Preservation of temple complexes"},
        ],
    },
    "Kamakura": {
        "city": "Kamakura",
        "areas": {
            "Great Buddha": {
                "themes": ["temple", "iconic", "history"],
                "highlights": ["Kotoku-in", "Daibutsu", "Temple grounds"],
                "culture": ["Buddhist heritage", "crafts", "history walks"],
                "description": "Iconic bronze statue and temple site.",
                "coords": {"lat": 35.3169, "lng": 139.5353},
            },
            "Hase": {
                "themes": ["temple", "coast", "walking"],
                "highlights": ["Hase-dera", "Coastal views", "Cafes"],
                "culture": ["temple gardens", "sea views", "local food"],
                "description": "Coastal district with temples and scenic paths.",
                "coords": {"lat": 35.3124, "lng": 139.5342},
            },
            "Komachi": {
                "themes": ["shopping", "food", "local"],
                "highlights": ["Komachi-dori", "Street snacks", "Souvenirs"],
                "culture": ["local cuisine", "shopping streets", "crafts"],
                "description": "Main shopping street with casual eateries.",
                "coords": {"lat": 35.3194, "lng": 139.5506},
            },
        },
        "eras": [
            {"name": "Kamakura", "range": "1185-1333", "tagline": "Samurai government"},
            {"name": "Edo", "range": "1603-1868", "tagline": "Temple pilgrimage"},
            {"name": "Modern", "range": "1868-present", "tagline": "Coastal heritage"},
        ],
        "events": [
            {"era": "Kamakura", "event": "Shogunate rule established"},
            {"era": "Modern", "event": "Tourism centered on temples and coast"},
        ],
    },
}


def get_city(city_name: str | None) -> dict:
    if not city_name:
        return CITIES["Tokyo"]
    for key, city in CITIES.items():
        if key.lower() == city_name.lower():
            return city
    return CITIES["Tokyo"]
