let cachedVoice: SpeechSynthesisVoice | null | undefined

function pickSpanishVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    return null
  }

  if (cachedVoice !== undefined) {
    return cachedVoice
  }

  const voices = window.speechSynthesis.getVoices()
  const preferred =
    voices.find((v) => v.lang.toLowerCase() === 'es-mx') ||
    voices.find((v) => v.lang.toLowerCase().startsWith('es-mx')) ||
    voices.find((v) => v.lang.toLowerCase() === 'es-es') ||
    voices.find((v) => v.lang.toLowerCase().startsWith('es'))

  cachedVoice = preferred ?? null
  return cachedVoice
}

/** Warm the voice list; browsers often load voices asynchronously. */
export function warmSpeechVoices(): void {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.getVoices()
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoice = undefined
    pickSpanishVoice()
  }
}

function buildUtterance(text: string, rate: number): SpeechSynthesisUtterance {
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'es-MX'
  utterance.rate = rate

  const voice = pickSpanishVoice()
  if (voice) {
    utterance.voice = voice
    utterance.lang = voice.lang
  }

  return utterance
}

export function speakSpanish(text: string, rate = 0.92): void {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    return
  }

  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(buildUtterance(text, rate))
}

export type SpeakProgressHandlers = {
  onStart?: () => void
  /** Fires as Spanish words are spoken; charIndex is into the Spanish string. */
  onBoundary?: (charIndex: number) => void
  onEnd?: () => void
  onError?: () => void
}

export function speakSpanishTracked(
  text: string,
  handlers: SpeakProgressHandlers,
  rate = 0.85,
): void {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    handlers.onError?.()
    return
  }

  const utterance = buildUtterance(text, rate)

  utterance.onstart = () => handlers.onStart?.()
  utterance.onboundary = (event) => {
    if (event.name === 'word' || event.name === 'sentence' || !event.name) {
      handlers.onBoundary?.(event.charIndex)
    }
  }
  utterance.onend = () => handlers.onEnd?.()
  utterance.onerror = () => handlers.onError?.()

  window.speechSynthesis.speak(utterance)
}

export function stopSpeaking(): void {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
}

export function pauseSpeaking(): void {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.pause()
}

export function resumeSpeaking(): void {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.resume()
}

export function splitWords(text: string): string[] {
  return text.trim().split(/\s+/).filter(Boolean)
}

/** Map Spanish speech progress to how many English caption words to reveal. */
export function englishWordsRevealed(
  spanishText: string,
  charIndex: number,
  englishWords: string[],
): number {
  if (englishWords.length === 0) return 0
  const span = Math.max(spanishText.length, 1)
  const progress = Math.min(1, Math.max(0, charIndex / span))
  const count = Math.max(1, Math.ceil(progress * englishWords.length))
  return Math.min(englishWords.length, count)
}
