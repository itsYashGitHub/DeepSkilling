# Student Course Portal — Digital Nurture 5.0 (Angular v20)

A single Angular application built incrementally across all 10 hands-on exercises from the
Digital Nurture 5.0 Angular (v20.0) Hands-On Exercise Book.

## What's implemented, hands-on by hands-on

| # | Topic | Where to look |
|---|---|---|
| 1 | Project setup, first components | `src/app/components/header`, `src/app/pages/home` |
| 2 | Binding, lifecycle hooks, @Input/@Output | `src/app/pages/home`, `src/app/components/course-card` |
| 3 | Directives & pipes | `src/app/directives/highlight.ts`, `src/app/pipes/credit-label-pipe.ts` |
| 4 | Template-driven forms | `src/app/pages/enrollment-form` |
| 5 | Reactive forms, FormArray, custom validators | `src/app/pages/reactive-enrollment-form` |
| 6 | Services & DI | `src/app/services/course.ts`, `src/app/services/enrollment.ts`, `src/app/components/notification` |
| 7 | Routing, guards, lazy loading | `src/app/app.routes.ts`, `src/app/guards`, `src/app/features/enrollment` |
| 8 | HttpClient, RxJS, interceptors | `src/app/services/course.ts`, `src/app/interceptors` |
| 9 | NgRx store, effects, selectors | `src/app/store/course`, `src/app/store/enrollment` |
| 10 | Unit tests (Jasmine/Karma) | every `*.spec.ts` file |

## Getting started

```bash
npm install
```

### Run the mock backend (needed for Hands-On 8+)

```bash
npm install -g json-server
json-server --watch db.json --port 3000
```

### Run the app

```bash
npm start
# open http://localhost:4200
```

### Run unit tests

```bash
npm test
```

> Note: this container ran headless Chrome tests via `CHROME_BIN` pointed at a Chromium
> binary with `--no-sandbox`. On a normal dev machine with Chrome installed, `ng test`
> works out of the box.

### Production build

```bash
npm run build
```

Confirmed working in this environment: `ng build` completes cleanly and produces a
separate lazy-loaded chunk for the `/enroll` feature module (visible in the build output
as `chunk-*.js | enrollment-routes`), and all 46 unit tests pass.

## Notes on Angular 20 conventions

This project was scaffolded with `ng new --routing --style=css` on Angular CLI 20.3,
which now generates standalone components with the modern, suffix-less file naming
(`home.ts` / `home.html` / `home.css` instead of `home.component.ts`, etc.) and the new
`@if` / `@for` / `@switch` control-flow syntax instead of `*ngIf` / `*ngFor` / `*ngSwitch`
in the templates that were written from scratch for this project. A couple of templates
(e.g. `course-card.html`) intentionally still use the older `*ngSwitchCase` / `[ngClass]`
/ `[ngStyle]` structural syntax, since the exercise book explicitly asks you to practice
those directives.
