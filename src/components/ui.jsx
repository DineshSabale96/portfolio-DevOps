import { motion } from 'framer-motion'

export function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl border-t border-line px-5 py-20">
      <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}>
        <h2 className="font-display text-3xl font-bold md:text-4xl">{title}</h2>
        {intro && <p className="mt-2 max-w-2xl text-dim">{intro}</p>}
        <div className="mt-10">{children}</div>
      </motion.div>
    </section>
  )
}

export const Chip = ({ children }) => (
  <span className="rounded border border-line bg-ink/50 px-2.5 py-1 font-mono text-xs text-mist/90 transition hover:border-gold hover:text-gold">{children}</span>
)
