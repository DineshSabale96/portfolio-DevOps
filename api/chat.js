// Vercel serverless function. The API key lives in Vercel env vars, never in the browser.
import { profile, skills, projects, experience, education, certifications } from '../src/data.js'

const context = [
  `${profile.name}, ${profile.role}, ${profile.location}. ${profile.about.join(' ')}`,
  'SKILLS:\n' + skills.map(s => `${s.group}: ${s.items.join(', ')}`).join('\n'),
  'PROJECTS:\n' + projects.map(p => `${p.name} [${p.stack.join(', ')}]\n${p.description}\n${p.points.join('\n')}`).join('\n\n'),
  'EXPERIENCE:\n' + experience.map(e => `${e.title}: ${e.points.join(' ')}`).join('\n'),
  'EDUCATION:\n' + education.map(e => `${e.degree}, ${e.school}, ${e.period}. ${e.description}`).join('\n'),
  'CERTIFICATIONS: ' + 'None earned yet. Currently preparing for (planned / in preparation): ' + certifications.map(c => `${c.name} (${c.issuer})`).join('; '),
  `CONTACT: ${profile.email}, ${profile.phone}, ${profile.linkedin}, ${profile.github}`,
].join('\n\n')

const system = `You are the DevOps AI Assistant on ${profile.name}'s portfolio website. Help recruiters understand his technical background.
Answer ONLY from the portfolio data below. If the answer is not in the data, say you don't have that information and suggest contacting him. Certifications are only planned, never say he holds them. Never invent employers, dates, certifications or metrics. Keep answers concise and clear; you may explain AWS and Kubernetes terms briefly when asked.

PORTFOLIO DATA:
${context}`

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const key = process.env.ANTHROPIC_API_KEY
  if (!key) return res.status(503).json({ error: 'Assistant is not configured' })

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}
  const messages = (Array.isArray(body.messages) ? body.messages : [])
    .filter(m => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .slice(-8).map(m => ({ role: m.role, content: m.content.slice(0, 600) }))
  if (!messages.length || messages[messages.length - 1].role !== 'user')
    return res.status(400).json({ error: 'Invalid request' })

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: process.env.CHAT_MODEL || 'claude-sonnet-5-5', max_tokens: 500, system, messages }),
    })
    if (!r.ok) return res.status(502).json({ error: 'Upstream error' })
    const data = await r.json()
    const answer = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('\n')
    return res.status(200).json({ answer })
  } catch {
    return res.status(500).json({ error: 'Server error' })
  }
}
