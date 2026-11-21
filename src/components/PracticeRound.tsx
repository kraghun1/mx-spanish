import { useMemo, useState } from 'react'
import { PHRASES, type Phrase } from '../data/phrases'
import { loadProgress, recordAnswer, type Progress } from '../lib/progress'
import { speakSpanish } from '../lib/speech'

type Mode = 'listen-en' | 'en-es'

type Question = {
  phrase: Phrase
  choices: string[]
  answer: string
  mode: Mode
}

function shuffle<T>(items: T[]): T[] {
  const next = [...items]
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[next[i], next[j]] = [next[j], next[i]]
  }
  return next
}

function buildQuestion(mode: Mode): Question {
  const phrase = PHRASES[Math.floor(Math.random() * PHRASES.length)]
  const pool = PHRASES.filter((p) => p.id !== phrase.id)
  const distractors = shuffle(pool)
    .slice(0, 3)
    .map((p) => (mode === 'listen-en' ? p.en : p.es))
  const answer = mode === 'listen-en' ? phrase.en : phrase.es
  return {
    phrase,
    answer,
    mode,
    choices: shuffle([answer, ...distractors]),
  }
}

export function PracticeRound() {
  const [mode, setMode] = useState<Mode>('listen-en')
  const [question, setQuestion] = useState<Question>(() => buildQuestion('listen-en'))
  const [selected, setSelected] = useState<string | null>(null)
  const [streak, setStreak] = useState(0)
  const [progress, setProgress] = useState<Progress>(() => loadProgress())

  const prompt = useMemo(() => {
    if (question.mode === 'listen-en') {
      return 'Listen, then pick the English meaning'
    }
    return 'Pick the Spanish for this English phrase'
  }, [question.mode])

  function nextQuestion(nextMode: Mode = mode) {
    setSelected(null)
    setQuestion(buildQuestion(nextMode))
  }

  function changeMode(nextMode: Mode) {
    setMode(nextMode)
    setStreak(0)
    nextQuestion(nextMode)
  }

  function choose(choice: string) {
    if (selected) return
    const correct = choice === question.answer
    const nextStreak = correct ? streak + 1 : 0
    setSelected(choice)
    setStreak(nextStreak)
    setProgress(recordAnswer(progress, correct, nextStreak))
  }

  return (
    <section className="practice">
      <div className="mode-row" role="group" aria-label="Practice mode">
        <button
          type="button"
          className={`chip ${mode === 'listen-en' ? 'chip-active' : ''}`}
          onClick={() => changeMode('listen-en')}
        >
          Hear → English
        </button>
        <button
          type="button"
          className={`chip ${mode === 'en-es' ? 'chip-active' : ''}`}
          onClick={() => changeMode('en-es')}
        >
          English → Spanish
        </button>
      </div>

      <p className="practice-stats">
        Score {progress.correct}/{progress.attempted}
        {progress.attempted > 0
          ? ` · ${Math.round((progress.correct / progress.attempted) * 100)}%`
          : ''}
        {' · '}
        Streak {streak}
        {progress.bestStreak > 0 ? ` · Best ${progress.bestStreak}` : ''}
      </p>

      <div className="practice-card">
        <p className="practice-prompt">{prompt}</p>

        {question.mode === 'listen-en' ? (
          <button
            type="button"
            className="listen-btn listen-btn-lg"
            onClick={() => speakSpanish(question.phrase.es)}
          >
            <span className="listen-icon" aria-hidden="true" />
            Play Spanish
          </button>
        ) : (
          <p className="practice-en">{question.phrase.en}</p>
        )}

        <div className="choice-grid" role="list">
          {question.choices.map((choice) => {
            const isAnswer = choice === question.answer
            const isPick = selected === choice
            let className = 'choice-btn'
            if (selected) {
              if (isAnswer) className += ' choice-correct'
              else if (isPick) className += ' choice-wrong'
            }
            return (
              <button
                key={choice}
                type="button"
                className={className}
                disabled={Boolean(selected)}
                onClick={() => choose(choice)}
                lang={question.mode === 'en-es' ? 'es' : undefined}
              >
                {choice}
              </button>
            )
          })}
        </div>

        {selected ? (
          <div className="practice-feedback">
            <p>
              {selected === question.answer ? 'Correct.' : 'Not quite.'}{' '}
              <span lang="es">{question.phrase.es}</span> — {question.phrase.en}
            </p>
            <div className="feedback-actions">
              <button
                type="button"
                className="listen-btn"
                onClick={() => speakSpanish(question.phrase.es)}
              >
                <span className="listen-icon" aria-hidden="true" />
                Listen again
              </button>
              <button type="button" className="primary-btn" onClick={() => nextQuestion()}>
                Next
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
