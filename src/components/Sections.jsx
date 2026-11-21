import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ChevronDown, GraduationCap, Award, Cloud, Server, Container, Blocks, Workflow, Activity, Terminal, Code, GitBranch, Shield, Cog } from 'lucide-react'

const icons = { Cloud, Server, Container, Blocks, Workflow, Activity, Terminal, Code, GitBranch, Shield }
import { Section, Chip } from './ui'
import { profile, skills, projects, experience, education, certifications, certificationsIntro } from '../data'

export function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 text-lg leading-relaxed text-mist/90">{profile.about.map((p, i) => <p key={i}>{p}</p>)}</div>
        <dl className="glass space-y-4 self-start p-5 text-sm">
          <div><dt className="text-dim">Role</dt><dd>{profile.role}</dd></div>
          <div><dt className="text-dim">Location</dt><dd>{profile.location}</dd></div>
          <div><dt className="text-dim">Studying</dt><dd>MCA (Cloud Computing), Savitribai Phule Pune University</dd></div>
        </dl>
      </div>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" title="Technical skills">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map(s => {
          const Icon = icons[s.icon] || Cog
          return (
            <motion.div key={s.group} whileHover={{ y: -3 }} className="glass p-5 transition hover:border-gold/40">
              <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-bold"><Icon size={18} className="text-amber" />{s.group}</h3>
              <div className="flex flex-wrap gap-2">{s.items.map(i => <Chip key={i}>{i}</Chip>)}</div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}

export function Projects() {
  const [open, setOpen] = useState(0)
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-4">
        {projects.map((p, i) => {
          const isOpen = open === i, hasMore = p.points.length > 0
          return (
            <article key={p.name} className="glass p-6">
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <div className="mt-3 flex flex-wrap gap-2">{p.stack.map(t => <Chip key={t}>{t}</Chip>)}</div>
              <p className="mt-4 max-w-3xl text-mist/90">{p.description}</p>
              {hasMore && (
                <>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} className="mt-4 inline-flex items-center gap-1 text-sm text-amber">
                    Key contributions <ChevronDown size={16} className={`transition ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        className="mt-3 list-disc space-y-1.5 overflow-hidden pl-5 text-sm text-mist/85">
                        {p.points.map(x => <li key={x}>{x}</li>)}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </>
              )}
              {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="btn-ghost mt-5 !py-1.5 text-sm"><Github size={16} />View on GitHub</a>}
            </article>
          )
        })}
      </div>
    </Section>
  )
}

export function Experience() {
  return (
    <Section id="experience" title="Hands-on DevOps experience">
      <ol className="relative ml-2 border-l border-line">
        {experience.map(e => (
          <motion.li key={e.title} className="relative pb-9 pl-8 last:pb-0" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="absolute -left-[6px] top-1.5 h-3 w-3 rounded-full border-2 border-amber bg-ink" />
            <h3 className="font-display text-xl font-bold">{e.title}</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-mist/85">{e.points.map(p => <li key={p}>{p}</li>)}</ul>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-4 md:grid-cols-2">
        {education.map(e => (
          <div key={e.degree} className="glass p-6">
            <GraduationCap className="mb-3 text-amber" />
            <h3 className="font-display text-lg font-bold">{e.degree}</h3>
            <p className="mt-1 text-mist/90">{e.school}</p>
            <p className="font-mono text-sm text-dim">{e.period}</p>
            <p className="mt-3 text-sm text-mist/80">{e.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Certifications() {
  return (
    <Section id="certifications" title="Certifications & Learning Path" intro={certificationsIntro}>
      {certifications.length ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map(c => (
            <div key={c.name} className="glass p-5">
              <Award className="mb-2 text-amber" size={20} />
              <h3 className="font-medium">{c.name}</h3>
              <p className="text-sm text-dim">{c.issuer}</p>
              <p className="mt-3 inline-block rounded-full border border-amber/40 px-2.5 py-0.5 text-xs text-amber">{c.status}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="glass p-6 text-dim">Certifications will be listed here.</p>
      )}
    </Section>
  )
}
