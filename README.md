# Daybook — Project 2 React Fundamentals

A cohesive study planner: add sessions, complete or remove them, search and filter your plan, and see progress toward a configurable daily goal.

## Run locally

Use Node 22 or newer.

```sh
npm ci
npm run dev
npm test
npm run build
```

Vite prints the local development address. `npm run preview` serves the production build.

## Repository and live site

Repository: https://github.com/hkhatib005/daybook-project2

Live Netlify URL: https://statuesque-lokum-966bef.netlify.app/

Deployment: built locally with `npm run build` and uploaded to Netlify. GitHub auto-deploy is not connected. The deployed app is publicly accessible.

Netlify build command: `npm run build`.
Publish directory: `dist`.
The repository includes `netlify.toml` with these settings. Import this repository into Netlify, choose `main`, and deploy. A private repository requires granting the instructor access; it will not open anonymously.

## Component tree and requirements

`App` composes `Header`, `TaskForm`, `TaskFilters`, `TaskList`, `StudyProgress`, and `Footer`. `TaskList` renders `TaskCard`. Each component is in its own file.

- `App` owns independent `tasks`, `query`, `filter`, and `goal` state.
- `TaskForm` owns controlled title, subject and duration inputs, and validates before adding a session.
- Task state is lifted to `App`: `TaskList` and `StudyProgress` receive the same task collection through props. Completion updates both the list and progress summary.
- Tasks use stable IDs from `crypto.randomUUID()`; initial sample tasks have named IDs. `map` renders `TaskCard` with `key={task.id}`.
- Search and completion filters derive the displayed view from the source task list without duplicating it in state.
- Conditional rendering supplies an empty state, validation errors and a goal celebration.
- State updates use immutable arrays and objects. No backend or public API is needed for this assignment.
- Sessions reset on reload. The initial tasks are examples to demonstrate completion and progress.

## Branches

`main` contains the complete app. `feature/task-filters` contains the search/filter feature work. `feature/study-progress` contains the shared progress panel and goal feature work. These branches record actual changes made during this implementation; they do not represent earlier work.

## Check before submitting

Read and understand each component and handler. Be ready to explain props, state ownership, stable keys, controlled inputs, and the derived filtered view. Test adding, completing, deleting, searching, filtering and changing goals. Check the live URL in a private browser window. Submit the GitHub and Netlify URLs through Brightspace.
