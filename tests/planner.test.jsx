// @vitest-environment jsdom
import { afterEach, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';
afterEach(cleanup);
it('adds a session, shares completion with progress, and removes it', async () => {
  const user = userEvent.setup(); render(<App/>);
  await user.type(screen.getByLabelText('Session name'), 'Study useState');
  await user.click(screen.getByRole('button', { name: 'Add to my day' }));
  expect(screen.getByRole('heading', { name: 'Study useState' })).toBeTruthy();
  await user.click(screen.getByRole('checkbox', { name: 'Complete Study useState' }));
  expect(screen.getByText('2 of 4 sessions complete · 125 min planned')).toBeTruthy();
  await user.click(screen.getByRole('button', { name: 'Remove Study useState' }));
  expect(screen.queryByRole('heading', { name: 'Study useState' })).toBeNull();
  expect(screen.getByText('1 of 3 sessions complete · 95 min planned')).toBeTruthy();
});
it('filters the derived list and shows a useful empty state', async () => {
  const user = userEvent.setup(); render(<App/>);
  await user.click(screen.getByRole('button', { name: 'Completed', exact: true }));
  expect(screen.getByRole('heading', { name: 'Outline the next essay' })).toBeTruthy();
  expect(screen.queryByRole('heading', { name: 'Review components and props' })).toBeNull();
  await user.type(screen.getByRole('searchbox'), 'unmatched');
  expect(screen.getByText('A little breathing room.')).toBeTruthy();
});
it('updates the goal and celebrates completion', async () => {
  const user = userEvent.setup(); render(<App/>);
  await user.selectOptions(screen.getByLabelText('Daily goal'), '30');
  await user.click(screen.getByRole('checkbox', { name: 'Complete Review components and props' }));
  expect(screen.getByRole('status').textContent).toContain('Goal reached');
  expect(screen.getByRole('progressbar').getAttribute('max')).toBe('30');
});
