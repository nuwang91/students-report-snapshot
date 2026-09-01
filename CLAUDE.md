# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Nx monorepo (Nx 15.0.13, npm-scoped as `nugu`) containing a single Angular 14 application, `matific` — a student activity/progress reporting dashboard with Firebase-based authentication. There is a `libs/` directory but it is currently empty; all app code lives under `apps/matific`.

## Commands

Run everything through Nx (`npm run <script>` wraps `nx <target>`):

- `npm run start` / `nx serve` — serve the app in dev mode (proxies via `apps/matific/src/proxy.conf.json`)
- `npm run build` / `nx build` — production build (dev config: `nx build matific --configuration=development`)
- `npm run test` / `nx test matific` — run Jest unit tests for the app
- `nx test matific --testFile=<path>` or pass a `-t <name>` pattern — run a single test file / test name
- `nx lint matific` — ESLint (uses `@nrwl/nx` rules + Angular ESLint)
- `nx e2e matific-e2e` — Cypress e2e tests (spins up the dev server automatically)
- `nx affected:<test|build|lint>` — run a target only for projects affected by the current changes (useful since this is an Nx workspace, though there is currently only one app)

Nx Cloud is configured as the task runner in `nx.json` (build/lint/test/e2e results are cached remotely).

Commits: `npm run commit` runs Commitizen (`cz-conventional-changelog`) for Conventional Commit messages.

## Architecture

### Module layout (`apps/matific/src/app`)

- `core/` — singleton, app-wide concerns: Firebase authentication (`core/services/authentication.service.ts`, `core/components/authentication`), the route guard (`core/guards/auth.guard.service.ts`), the global spinner service, and shared interfaces/models/utils used across features.
- `features/reporting/` — the only feature module, containing the report page, the reporting table, the status bar, and the services that fetch/transform/filter report data.
- `shared/` — presentational, reusable UI components (date-picker, dropdown, legend, progress-bar, spinner), each with its own Angular module.

Every component/directive folder has a matching `*.module.ts` — this codebase declares a dedicated NgModule per component rather than one large feature module, and each module is imported individually into `AppModule` or a parent feature module.

### Path aliases

TypeScript path mapping is defined in `apps/matific/tsconfig.json` (not the workspace-root `tsconfig.base.json`):
- `@matific/*` → `apps/matific/src/app/*`
- `@matific-env/*` → `apps/matific/src/environments/*`

### Routing & data loading

`app-routing.module.ts` defines two routes: `/auth` (public) and `/report` (protected by `NuguAuthGuardService`, pre-loaded by `NuguDataResolverService`). The resolver `zip`s two HTTP calls — `fetchActivities$()` and `fetchClasses$()` from `NuguReportDataService` — before the report page renders, and toggles `NuguSpinnerService` around the load.

### State management pattern

There is no NgRx/store library. State is held in singleton (`providedIn: 'root'`) services that expose a `BehaviorSubject` as a public `xChanged$`/`x$` observable and a `setX()`/mutation method, e.g. `NuguActivitiesService`, `NuguClassService`, `NuguAuthenticationService.user$`. Feature components (notably `NuguReportPageComponent`) compose these streams with `combineLatest`/`switchMap` to derive filtered activities, progress bars, and chart datasets reactively — there is minimal imperative state in components.

### Authentication

`NuguAuthenticationService` talks directly to the Firebase Identity Toolkit REST API (`identitytoolkit.googleapis.com`) for signup/login using a hardcoded `WEB_API_KEY`, persists the session to `localStorage` under `userData`, and auto-logs-out via a timer keyed off the token's `expiresIn`. `NuguAuthGuardService` reads `user$` to gate the `/report` route.

### Data fetching

`NuguReportDataService` fetches:
- Classes from `environment.api` + `matific-test-classes` (AWS API Gateway URL set in `apps/matific/src/environments/environment.ts`).
- Activities from a separate hardcoded path (`/production/matific-test-activities`) whose response body is a JSON string that gets `JSON.parse`d before being pushed into `NuguActivitiesService`.

Both calls populate their respective singleton services as a side effect (via `tap`), which is what the resolver/report page consume downstream.

### Report page composition

`NuguReportPageComponent` (`features/reporting/pages/report-page`) is the central orchestrator: it wires class/student/date-range selection subjects through `NuguActivitiesFilterService` (filtering) and `NuguStatusBarTransformService` (progress bars + Chart.js dataset generation) to drive the reporting table, status bar, and chart. All derived streams use `OnPush` change detection.

### UI library

PrimeNG (`primeng`, `primeicons`) + Chart.js for the bar chart in the status bar. Global styles pull in the `lara-light-blue` PrimeNG theme (configured in `apps/matific/project.json` build options, not `styles.scss`).
