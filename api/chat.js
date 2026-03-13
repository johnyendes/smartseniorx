// SmartSeniorX — AI Chat Proxy
// Deploy on Vercel. Set ANTHROPIC_KEY in Vercel Environment Variables.
// Once deployed, set CONFIG.CHAT_ENDPOINT = '/api/chat' in index.html

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.ANTHROPIC_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'ANTHROPIC_KEY not configured' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        system: `You are the SmartSeniorX AI Advisor — a knowledgeable, friendly retirement planning assistant. 
You specialize in: Medicare, Social Security timing, RMDs, retirement tax strategy, expat retirement, 
estate planning, and aging solo. Always provide clear, actionable guidance. 
Cite official sources (SSA, IRS, Medicare.gov) when relevant. 
Note when users should consult a licensed professional. 
Keep responses concise — 2-4 paragraphs maximum.`,
        messages: req.body.messages || []
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || 'API error' });
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error', detail: err.message });
  }
}
