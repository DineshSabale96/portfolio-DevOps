import { useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { profile } from '../data'
import Logo from './Logo'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Certifications', 'Contact']

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-ink/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3" aria-label="Main">
        <a href="#top" aria-label={`${profile.navName}, back to top`} className="transition hover:opacity-80"><Logo /></a>
        <ul className="hidden items-center gap-6 text-sm text-dim lg:flex">
          {links.map(l => <li key={l}><a className="transition hover:text-amber" href={`#${l.toLowerCase()}`}>{l}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <a href={profile.resumeUrl} download className="btn-primary !px-3 !py-1.5 text-sm"><Download size={15} />Download Resume</a>
          <button className="p-2 lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(o => !o)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-line bg-ink px-5 py-3 lg:hidden">
          {links.map(l => (
            <li key={l}><a onClick={() => setOpen(false)} className="block py-2 text-dim hover:text-amber" href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
        </ul>
      )}
    </header>
  )
}
