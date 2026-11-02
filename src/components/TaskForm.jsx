import { useState } from 'react';
export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('Computer science');
  const [minutes, setMinutes] = useState('30');
  const [error, setError] = useState('');
  function submit(event) {
    event.preventDefault();
    const duration = Number(minutes);
    if (!title.trim() || !Number.isInteger(duration) || duration < 5 || duration > 240) {
      setError('Add a task name and a duration between 5 and 240 minutes.'); return;
    }
    onAdd({ id: crypto.randomUUID(), title: title.trim(), subject, minutes: duration, done: false });
    setTitle(''); setError('');
  }
  return <section className="panel" id="new-task"><p className="eyebrow">MAKE A LITTLE ROOM</p><h2>What’s on your mind?</h2><p className="muted">Turn a big goal into one small session.</p><form onSubmit={submit}><label>Session name<input value={title} onChange={event => setTitle(event.target.value)} placeholder="e.g. Review React hooks" maxLength={100} required/></label><div className="form-row"><label>Subject<select value={subject} onChange={event => setSubject(event.target.value)}>{['Computer science','Mathematics','Writing','Other'].map(item => <option key={item}>{item}</option>)}</select></label><label>Minutes<input type="number" min="5" max="240" step="1" value={minutes} onChange={event => setMinutes(event.target.value)} required/></label></div>{error && <p role="alert" className="error">{error}</p>}<button className="primary" type="submit">Add to my day <span>↗</span></button></form></section>;
}
