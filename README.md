# app-redirect

`app.balmorehernandez.com` → **https://balmorehernandez.com/fitness/**

The fitness app moved from `app.balmorehernandez.com` (repo `BalmoreHernandez/fitness`, formerly
`app-fitness-principiantes`) to `balmorehernandez.com/fitness/`. This repo keeps the old address working:

- `index.html` / `404.html`: redirect to the same path and `?query` on the new address. If the visitor has saved
  data from the old address (localStorage `fitnessPrincipiantes_v1`), it travels in the `#bhimport=` hash
  (never sent to a server) and the fitness app imports it once, only if it has no data yet.
- `sw.js`: replaces the old service worker at the same URL, deletes this origin's caches and unregisters itself,
  so installed users don't stay on a stale cached copy. The redirect page also unregisters it directly.
- `CNAME`: `app.balmorehernandez.com` (GoDaddy: `CNAME app → balmorehernandez.github.io`, unchanged).

Installed home-screen apps from the old address open the redirect and land on the new address in the browser;
reinstall from balmorehernandez.com/fitness/ to get the app icon back.
