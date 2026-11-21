import { useEffect, useState } from 'react'
import { ListenAlong } from './components/ListenAlong'
import { Phrasebook } from './components/Phrasebook'
import { PracticeRound } from './components/PracticeRound'
import { warmSpeechVoices } from './lib/speech'
import './App.css'

type Tab = 'phrasebook' | 'practice' | 'listen'

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
          Browse phrases, practice, or listen to short scenes with streaming English captions.
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
          <button
            type="button"
            className={`tab ${tab === 'listen' ? 'tab-active' : ''}`}
            onClick={() => setTab('listen')}
          >
            Listen
          </button>
        </nav>
      </header>

      <main>
        {tab === 'phrasebook' ? (
          <Phrasebook />
        ) : tab === 'practice' ? (
          <PracticeRound />
        ) : (
          <ListenAlong />
        )}
      </main>

      <footer className="footer">
        Audio uses your device’s Spanish voice (es-MX when available).
      </footer>
    </div>
  )
}
