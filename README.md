# SmartSeniorX — Vercel Deployment

## Deploy in 3 Steps

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "SmartSeniorX initial deploy"
git remote add origin https://github.com/YOUR_USERNAME/smartseniorx.git
git push -u origin main
```

### 2. Connect to Vercel
- Go to vercel.com → New Project → Import from GitHub
- Select this repo → Deploy (no build settings needed)

### 3. Set Environment Variables in Vercel
In Vercel dashboard → Settings → Environment Variables:
```
ANTHROPIC_KEY = sk-ant-...your key...
```

## Activate Features After Deploy

In `index.html`, find the `CONFIG` object at the top of the `<script>` tag and update:

```javascript
const CONFIG = {
  CHAT_ENDPOINT:  '/api/chat',              // ← uncomment after proxy is live
  CONVERTKIT_URL: 'https://api.convertkit.com/forms/XXXXX/subscribe',  // your form ID
  STRIPE_LINKS: {
    'Member $9':   'https://buy.stripe.com/REPLACE_MEMBER',
    // ... replace all REPLACE_* values with real Stripe payment links
  }
};
```

## File Structure
```
smartseniorx-vercel/
├── index.html        ← The entire site (621KB, self-contained)
├── vercel.json       ← Routing + security headers
├── api/
│   └── chat.js       ← AI proxy (requires ANTHROPIC_KEY env var)
└── README.md
```

## Affiliate URLs to Update (after approval)
In `index.html`, find `AFFILIATE_URLS` and replace placeholder URLs:
- SafetyWing: safetywing.com/?referenceID=smartseniorx
- Wise: wise.com/invite/smartseniorx
- Cigna, Booking.com, Tranio, International Living, TurboTax

## DNS (after Vercel deploy)
Point smartseniorx.com to Vercel:
- Add CNAME record: `www` → `cname.vercel-dns.com`
- Add A record: `@` → `76.76.21.21`
