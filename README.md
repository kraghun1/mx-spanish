# Mexico Spanish

A simple phrasebook + practice app for spoken Spanish on a trip to Mexico.

- **Phrasebook** — browse trip phrases by situation and tap **Listen** for audio
- **Practice** — hear Spanish → pick English, or see English → pick Spanish
- **Listen** — short Spanish scenes with streaming English captions

Audio uses the browser’s Web Speech API (`es-MX` when available). No backend or API keys.

## Local

```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)

Push to `main`. The Actions workflow builds and deploys to:

`https://<your-user>.github.io/mx-spanish/`

In the repo: **Settings → Pages → Source: GitHub Actions**.
