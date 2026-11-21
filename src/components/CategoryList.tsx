import { CATEGORIES, type CategoryId } from '../data/phrases'

type Props = {
  active: CategoryId | 'all'
  onSelect: (id: CategoryId | 'all') => void
}

export function CategoryList({ active, onSelect }: Props) {
  return (
    <div className="category-scroll" role="tablist" aria-label="Phrase categories">
      <button
        type="button"
        role="tab"
        aria-selected={active === 'all'}
        className={`chip ${active === 'all' ? 'chip-active' : ''}`}
        onClick={() => onSelect('all')}
      >
        All
      </button>
      {CATEGORIES.map((c) => (
        <button
          key={c.id}
          type="button"
          role="tab"
          aria-selected={active === c.id}
          className={`chip ${active === c.id ? 'chip-active' : ''}`}
          onClick={() => onSelect(c.id)}
        >
          {c.label}
        </button>
      ))}
    </div>
  )
}
