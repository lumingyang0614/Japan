# Japan Culture Travel History Platform

This is a multi-agent inspired prototype for Tokyo culture, travel, and history.
It ships with a FastAPI backend and a lightweight frontend that calls the API.

## Structure

- `backend/` FastAPI service and agent modules
- `frontend/` Static UI that calls the API

## Backend

```bash
cd backend
python -m venv .venv
.venv\\Scripts\\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

API base URL: `http://127.0.0.1:8000/api`

Useful endpoints:

- `GET /api/health`
- `GET /api/cities`
- `GET /api/areas`
- `GET /api/eras`
- `GET /api/timeline`
- `POST /api/query`

Example request:

```bash
curl -X POST http://127.0.0.1:8000/api/query ^
  -H "Content-Type: application/json" ^
  -d "{\"question\":\"Plan a half day in Asakusa\",\"city\":\"Tokyo\",\"area\":\"Asakusa\",\"interest\":\"history\"}"
```

## Frontend

Open `frontend/index.html` in a browser and update the API base URL if needed.

## Next steps

- Expand data and add real map/timeline visualization
- Add database storage and user profiles
- Add tests for each agent module
