import { useMemo, useState } from 'react'
import { CATEGORIES, PHRASES, type CategoryId } from '../data/phrases'
import { CategoryList } from './CategoryList'
import { PhraseCard } from './PhraseCard'

export function Phrasebook() {
  const [category, setCategory] = useState<CategoryId | 'all'>('all')

  const phrases = useMemo(() => {
    if (category === 'all') return PHRASES
    return PHRASES.filter((p) => p.category === category)
  }, [category])

  const labelFor = (id: CategoryId) =>
    CATEGORIES.find((c) => c.id === id)?.label ?? id

  return (
    <section className="phrasebook">
      <CategoryList active={category} onSelect={setCategory} />
      <div className="phrase-list">
        {phrases.map((phrase, index) => (
          <PhraseCard
            key={phrase.id}
            phrase={phrase}
            categoryLabel={labelFor(phrase.category)}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
