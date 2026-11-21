import { useEffect, useRef, useState } from 'react'
import { PASSAGES, type Passage } from '../data/passages'
import {
  englishWordsRevealed,
  pauseSpeaking,
  resumeSpeaking,
  speakSpanishTracked,
  splitWords,
  stopSpeaking,
} from '../lib/speech'

type RateOption = 'slow' | 'normal'

type PlayState = 'idle' | 'playing' | 'paused' | 'done'

export function ListenAlong() {
  const [passageId, setPassageId] = useState(PASSAGES[0].id)
  const [rate, setRate] = useState<RateOption>('slow')
  const [showSpanish, setShowSpanish] = useState(true)
  const [playState, setPlayState] = useState<PlayState>('idle')
  const [sentenceIndex, setSentenceIndex] = useState(0)
  const [revealedCount, setRevealedCount] = useState(0)
  const [activeWord, setActiveWord] = useState(-1)

  const cancelledRef = useRef(false)
  const generationRef = useRef(0)

  const passage = PASSAGES.find((p) => p.id === passageId) ?? PASSAGES[0]
  const sentence = passage.sentences[sentenceIndex]
  const englishWords = sentence ? splitWords(sentence.en) : []
  const speechRate = rate === 'slow' ? 0.78 : 0.92

  useEffect(() => {
    return () => {
      cancelledRef.current = true
      stopSpeaking()
    }
  }, [])

  function resetCaption() {
    setRevealedCount(0)
    setActiveWord(-1)
  }

  function selectPassage(next: Passage) {
    generationRef.current += 1
    cancelledRef.current = true
    stopSpeaking()
    cancelledRef.current = false
    setPassageId(next.id)
    setSentenceIndex(0)
    setPlayState('idle')
    resetCaption()
  }

  function speakFrom(startIndex: number, generation: number) {
    const lines = passage.sentences
    if (startIndex >= lines.length) {
      if (generation !== generationRef.current) return
      setPlayState('done')
      setRevealedCount(englishWords.length)
      setActiveWord(-1)
      return
    }

    const line = lines[startIndex]
    const words = splitWords(line.en)
    setSentenceIndex(startIndex)
    setRevealedCount(0)
    setActiveWord(-1)
    setPlayState('playing')

    // Fallback timer if the browser skips boundary events
    const estimatedMs = Math.max(2200, line.es.split(/\s+/).length * (rate === 'slow' ? 520 : 380))
    let fallbackId = window.setInterval(() => {
      if (generation !== generationRef.current) return
      setRevealedCount((prev) => {
        if (prev >= words.length) return prev
        const next = prev + 1
        setActiveWord(next - 1)
        return next
      })
    }, estimatedMs / Math.max(words.length, 1))

    speakSpanishTracked(
      line.es,
      {
        onStart: () => {
          if (generation !== generationRef.current) return
          setRevealedCount(1)
          setActiveWord(0)
        },
        onBoundary: (charIndex) => {
          if (generation !== generationRef.current) return
          window.clearInterval(fallbackId)
          fallbackId = 0
          const count = englishWordsRevealed(line.es, charIndex, words)
          setRevealedCount(count)
          setActiveWord(Math.max(0, count - 1))
        },
        onEnd: () => {
          if (fallbackId) window.clearInterval(fallbackId)
          if (generation !== generationRef.current || cancelledRef.current) return
          setRevealedCount(words.length)
          setActiveWord(-1)
          window.setTimeout(() => speakFrom(startIndex + 1, generation), 280)
        },
        onError: () => {
          if (fallbackId) window.clearInterval(fallbackId)
          if (generation !== generationRef.current) return
          setPlayState('idle')
        },
      },
      speechRate,
    )
  }

  function play() {
    cancelledRef.current = false
    const generation = ++generationRef.current
    const start = playState === 'done' ? 0 : sentenceIndex
    speakFrom(start, generation)
  }

  function pause() {
    pauseSpeaking()
    setPlayState('paused')
  }

  function resume() {
    resumeSpeaking()
    setPlayState('playing')
  }

  function stop() {
    generationRef.current += 1
    cancelledRef.current = true
    stopSpeaking()
    cancelledRef.current = false
    setPlayState('idle')
    setSentenceIndex(0)
    resetCaption()
  }

  return (
    <section className="listen">
      <p className="listen-intro">
        Play a short scene in Spanish. English captions stream underneath so your ears can lead.
      </p>

      <div className="category-scroll" role="listbox" aria-label="Listening passages">
        {PASSAGES.map((p) => (
          <button
            key={p.id}
            type="button"
            className={`chip ${passageId === p.id ? 'chip-active' : ''}`}
            onClick={() => selectPassage(p)}
          >
            {p.title}
          </button>
        ))}
      </div>

      <article className="listen-stage">
        <header className="listen-header">
          <h2>{passage.title}</h2>
          <p>{passage.blurb}</p>
        </header>

        <div className="listen-controls">
          {playState === 'playing' ? (
            <button type="button" className="primary-btn" onClick={pause}>
              Pause
            </button>
          ) : playState === 'paused' ? (
            <button type="button" className="primary-btn" onClick={resume}>
              Resume
            </button>
          ) : (
            <button type="button" className="primary-btn" onClick={play}>
              {playState === 'done' ? 'Play again' : 'Play'}
            </button>
          )}
          <button type="button" className="listen-btn" onClick={stop} disabled={playState === 'idle'}>
            Stop
          </button>
        </div>

        <div className="mode-row" role="group" aria-label="Playback options">
          <button
            type="button"
            className={`chip ${rate === 'slow' ? 'chip-active' : ''}`}
            onClick={() => setRate('slow')}
            disabled={playState === 'playing' || playState === 'paused'}
          >
            Slow
          </button>
          <button
            type="button"
            className={`chip ${rate === 'normal' ? 'chip-active' : ''}`}
            onClick={() => setRate('normal')}
            disabled={playState === 'playing' || playState === 'paused'}
          >
            Normal
          </button>
          <button
            type="button"
            className={`chip ${showSpanish ? 'chip-active' : ''}`}
            onClick={() => setShowSpanish((v) => !v)}
          >
            {showSpanish ? 'Spanish on' : 'Spanish off'}
          </button>
        </div>

        <p className="listen-progress">
          Sentence {Math.min(sentenceIndex + 1, passage.sentences.length)} of{' '}
          {passage.sentences.length}
          {playState === 'done' ? ' · Done' : ''}
        </p>

        {showSpanish && sentence ? (
          <p className="listen-spanish" lang="es">
            {sentence.es}
          </p>
        ) : null}

        <div className="caption-panel" aria-live="polite">
          <p className="caption-label">English captions</p>
          <p className="caption-line">
            {englishWords.length === 0 ? (
              <span className="caption-placeholder">Press Play to start listening.</span>
            ) : (
              englishWords.map((word, i) => {
                const revealed = i < revealedCount
                const current = i === activeWord && playState === 'playing'
                return (
                  <span
                    key={`${sentenceIndex}-${i}-${word}`}
                    className={`caption-word${revealed ? ' is-revealed' : ''}${current ? ' is-current' : ''}`}
                  >
                    {word}
                  </span>
                )
              })
            )}
          </p>
        </div>
      </article>
    </section>
  )
}
