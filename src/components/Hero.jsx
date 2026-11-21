import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Check, RotateCcw, Download, FolderGit2, Mail } from 'lucide-react'
import { profile } from '../data'

const stages = [
  { name: 'Checkout', log: 'Git Clone Portfolio', cmd: 'git clone dinesh-portfolio' },
  { name: 'Build', log: 'Compiling Cloud & DevOps Projects', cmd: 'npm run build' },
  { name: 'Test', log: 'Infrastructure & Deployment Validation', cmd: 'terraform validate && kubectl diff' },
  { name: 'Deploy', log: 'Live and Ready', cmd: 'docker push && deploy' },
]

function Pipeline() {
  const reduce = useReducedMotion()
  const [step, setStep] = useState(reduce ? stages.length : 0)
  const done = step >= stages.length
  useEffect(() => {
    if (reduce || done) return
    const t = setTimeout(() => setStep(s => s + 1), 900)
    return () => clearTimeout(t)
  }, [step, reduce, done])

  return (
    <div className="glass overflow-hidden font-mono text-sm shadow-2xl" role="status" aria-live="polite">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-400/80" /><span className="h-3 w-3 rounded-full bg-amber/80" /><span className="h-3 w-3 rounded-full bg-pass/80" />
        <span className="ml-3 text-dim">Pipeline: #dinesh-portfolio</span>
        <span className={`ml-auto ${done ? 'text-pass' : 'text-amber'}`}>{done ? 'passed' : 'running'}</span>
      </div>
      <ul className="space-y-4 p-5">
        {stages.map((s, i) => {
          const ok = i < step, active = i === step
          return (
            <li key={s.name}>
              <div className="flex items-center gap-3">
                <span className="grid h-5 w-5 place-items-center">
                  {ok ? <Check size={16} className="text-pass" />
                    : active ? <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-amber border-t-transparent" />
                    : <span className="h-2 w-2 rounded-full bg-line" />}
                </span>
                <span className={ok ? 'text-mist' : active ? 'text-amber' : 'text-dim'}>{s.name} <span className="text-dim">– {s.log}</span></span>
              </div>
              {(ok || active) && <p className="ml-8 mt-1 text-xs text-gold/80">$ {s.cmd}</p>}
            </li>
          )
        })}
      </ul>
      <div className="border-t border-white/10 px-5 py-3">
        <button onClick={() => setStep(0)} disabled={!done && !reduce} className="inline-flex items-center gap-2 text-xs text-dim hover:text-amber disabled:opacity-40">
          <RotateCcw size={13} /> Re-run Pipeline
        </button>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 pt-16 md:grid-cols-[1.1fr_0.9fr] md:pt-24">
      <div>
        <p className="mb-4 font-mono text-sm text-gold">{profile.role}</p>
        <h1 className="font-display text-5xl font-bold leading-[1.03] tracking-tight md:text-6xl">{profile.name}</h1>
        <p className="mt-5 max-w-xl font-display text-2xl text-mist/90">{profile.headline}</p>
        <p className="mt-4 max-w-xl text-dim">{profile.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary"><FolderGit2 size={17} />View Projects</a>
          <a href="#contact" className="btn-ghost"><Mail size={17} />Get in Touch</a>
          <a href={profile.resumeUrl} download className="btn-ghost"><Download size={17} />Download Resume</a>
        </div>
      </div>
      <Pipeline />
    </section>
  )
}
