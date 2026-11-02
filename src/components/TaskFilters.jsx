export default function TaskFilters({ query, onQueryChange, filter, onFilterChange }) {
  return <div className="filters"><label><span className="sr-only">Search sessions</span><input type="search" placeholder="Find a session…" value={query} onChange={event => onQueryChange(event.target.value)}/></label><div className="filter-tabs" aria-label="Session filters">{['All','Planned','Completed'].map(option => <button key={option} aria-pressed={filter === option} onClick={() => onFilterChange(option)}>{option}</button>)}</div></div>;
}
