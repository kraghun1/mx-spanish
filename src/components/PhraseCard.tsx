import type { Phrase } from '../data/phrases'
import { speakSpanish } from '../lib/speech'

type Props = {
  phrase: Phrase
  categoryLabel: string
  index: number
}

export function PhraseCard({ phrase, categoryLabel, index }: Props) {
  return (
    <article
      className="phrase-card"
      style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}
    >
      <p className="phrase-meta">{categoryLabel}</p>
      <p className="phrase-en">{phrase.en}</p>
      <p className="phrase-es" lang="es">
        {phrase.es}
      </p>
      {phrase.tip ? <p className="phrase-tip">{phrase.tip}</p> : null}
      <button
        type="button"
        className="listen-btn"
        onClick={() => speakSpanish(phrase.es)}
        aria-label={`Listen to: ${phrase.es}`}
      >
        <span className="listen-icon" aria-hidden="true" />
        Listen
      </button>
    </article>
  )
}
