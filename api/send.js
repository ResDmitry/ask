// /api/send — serverless route for Vercel
export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') return res.status(405).send('Method not allowed');
    const { text, topic } = req.body || {};
    if (!text || !String(text).trim()) return res.status(400).send('Empty text');

    const token = process.env.TELEGRAM_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) return res.status(500).send('Env not configured');

    const title = topic && String(topic).trim() ? `📝 ТЕМА: ${topic.trim()}\n` : '';
    const payloadText = `${title}✉️ АНОНИМНЫЙ ВОПРОС:\n${text}`.slice(0, 3900); // защита от слишком длинных

    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: payloadText })
    });
    if (!r.ok) {
      const body = await r.text();
      return res.status(502).send('Telegram error: '+body);
    }
    res.status(200).send('ok');
  } catch (e) {
    res.status(500).send('Server error');
  }
}
