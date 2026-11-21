import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, X, Send, Loader2 } from 'lucide-react'
import { ask } from '../assistant'

const suggestions = [
  'What DevOps tools does Dinesh know?',
  'Explain his AWS projects.',
  'What Kubernetes experience does he have?',
  'What is his educational background?',
]

export default function Assistant() {
  const [open, setOpen] = useState(false)
  const [busy, setBusy] = useState(false)
  const [input, setInput] = useState('')
  const [msgs, setMsgs] = useState([{ role: 'assistant', content: "Hi, I'm the DevOps AI Assistant. Ask me about Dinesh's skills, projects, AWS and Kubernetes experience, or education." }])
  const end = useRef(null)
  useEffect(() => { end.current?.scrollIntoView({ behavior: 'smooth' }) }, [msgs, busy, open])

  const send = async q => {
    if (!q.trim() || busy) return
    const next = [...msgs, { role: 'user', content: q }]
    setMsgs(next); setInput(''); setBusy(true)
    const history = next.slice(1) // drop the greeting
    const r = await ask(history)
    setMsgs(m => [...m, { role: 'assistant', content: r.text }])
    setBusy(false)
  }

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 14, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 14 }}
            role="dialog" aria-label="DevOps AI Assistant"
            className="glass mb-3 flex h-[30rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col !bg-panel/95 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <span className="flex items-center gap-2 font-display font-bold"><Bot size={18} className="text-amber" />DevOps AI Assistant</span>
              <button onClick={() => setOpen(false)} aria-label="Close assistant"><X size={18} /></button>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm" aria-live="polite">
              {msgs.map((m, i) => (
                <p key={i} className={`whitespace-pre-line rounded-lg px-3 py-2 ${m.role === 'user' ? 'ml-8 bg-amber text-ink' : 'mr-6 bg-ink/70'}`}>{m.content}</p>
              ))}
              {busy && <p className="mr-6 flex items-center gap-2 rounded-lg bg-ink/70 px-3 py-2 text-dim"><Loader2 size={14} className="animate-spin" />Thinking…</p>}
              {msgs.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {suggestions.map(s => <button key={s} onClick={() => send(s)} className="rounded-full border border-line px-3 py-1 text-left text-xs hover:border-amber hover:text-amber">{s}</button>)}
                </div>
              )}
              <div ref={end} />
            </div>
            <form onSubmit={e => { e.preventDefault(); send(input) }} className="flex gap-2 border-t border-white/10 p-3">
              <input value={input} onChange={e => setInput(e.target.value)} maxLength={300} placeholder="Ask about Dinesh" aria-label="Your question"
                className="flex-1 rounded-md border border-line bg-ink px-3 py-2 text-sm outline-none focus:border-amber" />
              <button className="btn-primary !px-3 !py-2" aria-label="Send question" disabled={busy}><Send size={16} /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={() => setOpen(o => !o)} aria-expanded={open} className="btn-primary ml-auto !rounded-full shadow-lg">
        <Bot size={18} />{open ? 'Close' : 'Ask AI'}
      </button>
    </div>
  )
}
