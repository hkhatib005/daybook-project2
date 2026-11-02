import { useState } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import TaskFilters from './components/TaskFilters';
const initialTasks = [
  { id: 'react-review', title: 'Review components and props', subject: 'Computer science', minutes: 30, done: false },
  { id: 'practice-problems', title: 'Work through practice problems', subject: 'Mathematics', minutes: 45, done: false },
  { id: 'outline-essay', title: 'Outline the next essay', subject: 'Writing', minutes: 20, done: true },
];
export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const visibleTasks = tasks.filter(task => (filter === 'All' || (filter === 'Completed' ? task.done : !task.done)) && `${task.title} ${task.subject}`.toLowerCase().includes(query.trim().toLowerCase()));
  function addTask(task) { setTasks(current => [...current, task]); }
  function toggleTask(id) { setTasks(current => current.map(task => task.id === id ? { ...task, done: !task.done } : task)); }
  function removeTask(id) { setTasks(current => current.filter(task => task.id !== id)); }
  return <><Header/><main><section className="intro"><p className="eyebrow">A FRESH PAGE, EVERY DAY</p><h1>Make time for<br/><em>what comes next.</em></h1><p>A calmer place to plan your studies.<br/>One focused session at a time.</p><span className="sun" aria-hidden="true">✳</span></section><div className="layout"><aside><TaskForm onAdd={addTask}/></aside><section aria-labelledby="sessions-title"><div className="section-heading"><div><p className="eyebrow">YOUR STUDY PLAN</p><h2 id="sessions-title">Today’s sessions</h2></div><span>{tasks.length} sessions</span></div><TaskFilters query={query} onQueryChange={setQuery} filter={filter} onFilterChange={setFilter}/><TaskList tasks={visibleTasks} onToggle={toggleTask} onRemove={removeTask}/></section></div></main><Footer/></>;
}
