# COOL — Next.js / React rebuild

This is the next-generation rebuild of the uploaded COOL project. It uses Next.js App Router + React and keeps the provider/game integration behind server-side adapters.

## Pages
- Home with hero + live-casino/slot rails
- Slots
- Live Casino
- Casino
- Sports
- Live Sports
- E-sports
- Tournaments

Each page has its own route and loads its catalogue through `/api/catalog`. Infinite scrolling uses cursor pagination and de-duplicates items.

## Game launch
Cards open a same-page modal containing an iframe. Users select **Real mode** or **Demo mode** before launch. The server builds the launch URL with partner/game/provider/mode parameters. Real credentials/tokens should remain server-side. If a provider sends `X-Frame-Options`/CSP that disallows framing, the browser will enforce that restriction; the UI does not bypass it.

## Swarm
The custom Next server exposes `/ws/swarm` and `/ws/legacy` proxy paths. Configure the upstreams in `.env`. The frontend can use these endpoints without exposing provider secrets.

## Payments
A PayID/PID adapter boundary is included, but live-money processing is disabled by default. A real implementation needs the payment provider's documented API, merchant credentials, webhook/signature rules and compliance configuration. No fabricated payment API calls are made.

## Run
```bash
npm install
cp .env.example .env
npm run dev
```
For production:
```bash
npm run build
NODE_ENV=production npm start
```

## Notes on provider endpoints
The uploaded rebuild's `source-config.json` is preserved as the integration reference. Provider-specific production URLs/credentials are intentionally environment/config driven. The demo provider registry keeps the app usable without private credentials.
