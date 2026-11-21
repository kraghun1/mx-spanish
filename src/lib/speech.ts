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

export function speakSpanish(text: string): void {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    return
  }

  window.speechSynthesis.cancel()

  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'es-MX'
  utterance.rate = 0.92

  const voice = pickSpanishVoice()
  if (voice) {
    utterance.voice = voice
    utterance.lang = voice.lang
  }

  window.speechSynthesis.speak(utterance)
}

export function stopSpeaking(): void {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
}
