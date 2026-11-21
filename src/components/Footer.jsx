import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 text-center">
      <p className="font-display text-lg font-bold">{profile.name}</p>
      <p className="text-dim">{profile.role}</p>
      <p className="mt-3 italic text-mist/80">"Building automation. Deploying innovation. Scaling infrastructure."</p>
      <div className="mt-5 flex justify-center gap-5">
        <a aria-label="GitHub" className="hover:text-amber" href={profile.github} target="_blank" rel="noreferrer"><Github size={20} /></a>
        <a aria-label="LinkedIn" className="hover:text-amber" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
        <a aria-label="Email" className="hover:text-amber" href={`mailto:${profile.email}`}><Mail size={20} /></a>
      </div>
      <p className="mt-6 text-xs text-dim">© {new Date().getFullYear()} {profile.name}. .</p>
    </footer>
  )
}
