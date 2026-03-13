# Contributing to SmartSeniorX

## Making Changes to the Site

All site content, tools, and styles live in a single file: **`index.html`**

### Edit Workflow
1. Open `index.html` in any text editor (VS Code recommended)
2. Make your changes
3. Test locally by opening `index.html` in a browser
4. Commit and push — Vercel auto-deploys within 30 seconds

### Key Sections in index.html
Search for these markers to find each section quickly:

| Section | Search For |
|---|---|
| Site config (API keys, Stripe links) | `const CONFIG = {` |
| Hero section | `id="hero"` |
| Tools & calculators | `id="tools"` |
| AI Advisor chat | `id="ai-advisor"` |
| Country guides | `id="expat"` |
| Email series signup | `id="newsletter"` |
| Safety Center | `id="safety-center"` |
| Membership/pricing | `id="membership"` |
| Footer | `<footer` |

### Activating Features (Placeholders to Replace)
| Find This | Replace With |
|---|---|
| `CHAT_ENDPOINT: null` | `CHAT_ENDPOINT: '/api/chat'` |
| `forms/XXXXX/subscribe` | Your ConvertKit form ID |
| `REPLACE_MEMBER` | Stripe payment link |
| `G-XXXXXXXXXX` | GA4 Measurement ID |

### AI Proxy (api/chat.js)
The AI Advisor routes through `/api/chat` — a Vercel serverless function.
Requires `ANTHROPIC_KEY` set in Vercel Environment Variables.

## Deployment
Every push to `main` auto-deploys via Vercel.
See README.md for full setup instructions.
