import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { Section } from './ui'
import { profile } from '../data'

const field = 'w-full rounded-md border border-line bg-ink/60 px-3 py-2 outline-none focus:border-amber'

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const set = k => e => setF({ ...f, [k]: e.target.value })

  const submit = e => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(f.email) || f.message.trim().length < 5) return setStatus('error')
    setStatus('sending')
    const body = `${f.message}\n\nFrom: ${f.name} <${f.email}>`
    setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio message from ' + f.name)}&body=${encodeURIComponent(body)}`
      setStatus('success')
    }, 400)
  }

  return (
    <Section id="contact" title="Contact" intro="Open to DevOps and Cloud Engineering opportunities.">
      <div className="grid gap-8 md:grid-cols-2">
        <ul className="space-y-4">
          <li><a className="flex items-center gap-3 hover:text-amber" href={`mailto:${profile.email}`}><Mail size={18} className="text-amber" />{profile.email}</a></li>
          <li><a className="flex items-center gap-3 hover:text-amber" href={`tel:${profile.phone.replace(/\s/g, '')}`}><Phone size={18} className="text-amber" />{profile.phone}</a></li>
          <li className="flex items-center gap-3"><MapPin size={18} className="text-amber" />{profile.location}</li>
          <li className="flex gap-3 pt-2">
            <a className="btn-ghost !py-1.5" href={profile.github} target="_blank" rel="noreferrer"><Github size={16} />GitHub</a>
            <a className="btn-ghost !py-1.5" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn</a>
          </li>
        </ul>
        <form onSubmit={submit} className="glass space-y-4 p-6" noValidate>
          <label className="block"><span className="mb-1 block text-sm text-dim">Name</span><input required className={field} value={f.name} onChange={set('name')} /></label>
          <label className="block"><span className="mb-1 block text-sm text-dim">Email</span><input type="email" required className={field} value={f.email} onChange={set('email')} /></label>
          <label className="block"><span className="mb-1 block text-sm text-dim">Message</span><textarea required rows={4} className={field} value={f.message} onChange={set('message')} /></label>
          <button className="btn-primary" disabled={status === 'sending'}>
            {status === 'sending' && <Loader2 size={16} className="animate-spin" />}Send Message
          </button>
          <p role="status" aria-live="polite" className="text-sm">
            {status === 'success' && <span className="flex items-center gap-2 text-pass"><CheckCircle2 size={16} />Your email app should open with the message ready to send.</span>}
            {status === 'error' && <span className="flex items-center gap-2 text-red-300"><AlertCircle size={16} />Enter a valid email and a message of at least 5 characters.</span>}
          </p>
        </form>
      </div>
    </Section>
  )
}
