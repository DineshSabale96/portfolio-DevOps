import { profile, skills, projects, experience, education, certifications } from './data'

export const knowledge = [
  { tags: ['about', 'who', 'yourself', 'background', 'summary', 'introduce', 'profile', 'recruiter'],
    text: `${profile.name} is a ${profile.role} based in ${profile.location}. ${profile.about.join(' ')}` },
  { tags: ['skill', 'skills', 'tools', 'tool', 'know', 'stack', 'technologies', 'devops', 'azure', 'gcp', 'google'],
    text: skills.map(s => `${s.group}: ${s.items.join(', ')}`).join('\n') },
  { tags: ['aws', 'amazon', 'cloud', 'ec2', 'eks', 'ecs', 'lambda', 's3', 'vpc', 'iam'],
    text: `AWS services used: ${skills[1].items.join(', ')}. Networking and security: ${skills[9].items.join(', ')}.` },
  { tags: ['kubernetes', 'k8s', 'helm', 'eks', 'hpa', 'rbac', 'pods'],
    text: experience[2].points.join(' ') },
  { tags: ['project', 'projects', 'built', 'banking', 'healthcare', 'microservices', 'terraform'],
    text: projects.map(p => `${p.name} (${p.stack.join(', ')}): ${p.description}`).join('\n\n') },
  { tags: ['experience', 'work', 'worked', 'job', 'hands', 'pipeline', 'pipelines', 'cicd', 'jenkins', 'gitlab', 'github'],
    text: experience.map(e => `${e.title}: ${e.points.join(' ')}`).join('\n') },
  { tags: ['education', 'degree', 'college', 'university', 'mca', 'bca', 'study', 'educational'],
    text: education.map(e => `${e.degree}, ${e.school} (${e.period}). ${e.description}`).join('\n') },
  { tags: ['certification', 'certifications', 'certificate', 'certified'],
    text: `Dinesh has not earned these yet. He is currently preparing for: ` + certifications.map(c => `${c.name} (${c.issuer})`).join('; ') + '.' },
  { tags: ['contact', 'email', 'hire', 'reach', 'phone', 'linkedin', 'location'],
    text: `Email: ${profile.email}. Phone: ${profile.phone}. Location: ${profile.location}. LinkedIn: ${profile.linkedin}. GitHub: ${profile.github}.` },
]

export const contextText = () => knowledge.map(k => k.text).join('\n\n')

function localAnswer(q) {
  const words = q.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/)
  const hits = knowledge.map(k => ({ k, s: k.tags.filter(t => words.includes(t)).length }))
    .filter(x => x.s).sort((a, b) => b.s - a.s)
  if (!hits.length) return `I can answer questions about ${profile.navName}'s skills, AWS and Kubernetes experience, projects, education and contact details.`
  return hits.slice(0, 2).map(h => h.k.text).join('\n\n')
}

// Calls the serverless endpoint (api/chat.js). Falls back to local answers if it is unreachable (e.g. local dev).
export async function ask(messages) {
  const url = import.meta.env.VITE_CHAT_API_URL || '/api/chat'
  try {
    const r = await fetch(url, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages }),
    })
    if (!r.ok) throw new Error(String(r.status))
    const { answer } = await r.json()
    if (!answer) throw new Error('empty')
    return { text: answer }
  } catch {
    return { text: localAnswer(messages[messages.length - 1].content), offline: true }
  }
}
