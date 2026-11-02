import TaskCard from './TaskCard';
export default function TaskList({ tasks, onToggle, onRemove }) {
  return tasks.length ? <ul className="tasks">{tasks.map(task => <TaskCard key={task.id} task={task} onToggle={onToggle} onRemove={onRemove}/>)}</ul> : <div className="empty"><span>✳</span><h3>A little breathing room.</h3><p>Add a study session to start planning your day.</p></div>;
}
