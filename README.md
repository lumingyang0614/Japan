# Okinawa Road Trip (Static Website)

This is a static itinerary website (6-day trip) designed for GitHub Pages.

## Structure

- `index.html` main page (GitHub Pages entry)
- `styles.css` layout and styling
- `app.js` itinerary data + rendering logic
- `frontend/` original source copies (same content)

## View Locally

Open in a browser:

- `index.html`

## How to Edit the Itinerary

Edit `tripDays` in `app.js`. Each stop includes:

- `time` time
- `title` place name
- `subtitle` type
- `description` short description
- `stay` stay minutes
- `location` area
- `image` image URL
- `notes` extra notes
- `mapQuery` / `mapLinks` / `mapEmbeds` (optional map links or embeds)

## Deploy to GitHub Pages

1. Push the repo to GitHub
2. Go to Settings → Pages
3. Source: `Deploy from a branch`
4. Branch: `main`, Folder: `/`
5. Save and wait a few minutes for the URL

## Next Steps

- Customize the theme or add more days
- Replace with your own photos and map links
