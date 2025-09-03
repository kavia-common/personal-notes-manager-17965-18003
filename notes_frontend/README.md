# Personal Notes Manager Frontend

Next.js app with authentication, CRUD notes, and search. Minimal, responsive UI.

## Scripts
- `npm run dev` – start dev server
- `npm run build` – production build
- `npm start` – start production server

## Routes
- `/` – Landing page
- `/login` – Log in
- `/register` – Create account
- `/app` – Notes application (protected)

## Demo data
This demo uses `localStorage` for auth and notes. Replace logic in `src/lib/storage.ts` with real API calls for production use.

## UI
- Primary: `#2563eb`
- Accent: `#f59e42`
- Secondary: `#64748b`

Layout: Header (actions), Sidebar (search + list), Main editor.
