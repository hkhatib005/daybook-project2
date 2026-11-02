export default function StudyProgress({ tasks, goal, onGoalChange }) {
  const completed = tasks.filter(task => task.done);
  const minutes = completed.reduce((sum, task) => sum + task.minutes, 0);
  const planned = tasks.reduce((sum, task) => sum + task.minutes, 0);
  const percent = Math.min(100, Math.round(minutes / goal * 100));
  return <section className="progress-panel" aria-labelledby="progress-title"><p className="eyebrow">THE SMALL WINS ADD UP</p><h2 id="progress-title">Your daily rhythm</h2><div className="progress-number">{minutes}<span> / {goal} min</span></div><progress value={Math.min(minutes, goal)} max={goal} aria-label="Daily study goal"/><p className="muted">{completed.length} of {tasks.length} sessions complete · {planned} min planned</p><label className="goal-label">Daily goal<select value={goal} onChange={event => onGoalChange(Number(event.target.value))}>{[30,60,90,120,180].map(value => <option key={value} value={value}>{value} minutes</option>)}</select></label>{percent >= 100 && <p className="celebration" role="status">✳ Goal reached. Make room for a well-earned break.</p>}</section>;
}
