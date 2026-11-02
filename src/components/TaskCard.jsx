export default function TaskCard({ task, onToggle, onRemove }) {
  return <li className={task.done ? 'task done' : 'task'}><label className="completion"><input type="checkbox" checked={task.done} onChange={() => onToggle(task.id)}/><span className="sr-only">Complete {task.title}</span></label><div className="task-content"><span className="tag">{task.subject}</span><h3>{task.title}</h3><p>{task.minutes} min <span>· {task.done ? 'Completed' : 'Ready when you are'}</span></p></div><button className="remove" aria-label={`Remove ${task.title}`} onClick={() => onRemove(task.id)}>×</button></li>;
}
