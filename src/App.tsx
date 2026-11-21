import { useEffect, useState } from 'react'
import { Phrasebook } from './components/Phrasebook'
import { PracticeRound } from './components/PracticeRound'
import { warmSpeechVoices } from './lib/speech'
import './App.css'

type Tab = 'phrasebook' | 'practice'

export default function App() {
  const [tab, setTab] = useState<Tab>('phrasebook')

  useEffect(() => {
    warmSpeechVoices()
  }, [])

  return (
    <div className="app">
      <header className="hero">
        <p className="brand">Mexico Spanish</p>
        <h1>Speak enough for the trip</h1>
        <p className="tagline">
          Browse useful phrases, tap to hear them, then practice before you go.
        </p>
        <nav className="tabs" aria-label="App modes">
          <button
            type="button"
            className={`tab ${tab === 'phrasebook' ? 'tab-active' : ''}`}
            onClick={() => setTab('phrasebook')}
          >
            Phrasebook
          </button>
          <button
            type="button"
            className={`tab ${tab === 'practice' ? 'tab-active' : ''}`}
            onClick={() => setTab('practice')}
          >
            Practice
          </button>
        </nav>
      </header>

      <main>{tab === 'phrasebook' ? <Phrasebook /> : <PracticeRound />}</main>

      <footer className="footer">
        Audio uses your device’s Spanish voice (es-MX when available).
      </footer>
    </div>
  )
}
