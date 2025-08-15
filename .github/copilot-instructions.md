# Angular SSR Project Instructions

This is a modern Angular 20 application with server-side rendering (SSR), prerendering, and standalone components.

## Architecture Overview

- **Standalone Components**: Uses Angular's new standalone API throughout - no modules, components are self-contained with their own imports
- **SSR + Prerendering**: Configured for both server-side rendering and static prerendering via `angular.json` build options
- **Express Server**: Custom Express server in `src/server.ts` handles SSR and can be extended with API endpoints
- **Client Hydration**: Uses event replay hydration (`withEventReplay()`) for optimal performance

## Key Configuration Files

- `src/app/app.config.ts`: Main application configuration with providers
- `src/app/app.config.server.ts`: Server-specific configuration merged with client config
- `src/main.ts`: Client-side bootstrap
- `src/main.server.ts`: Server-side bootstrap entry point
- `src/server.ts`: Express server with SSR rendering logic

## Development Workflows

### Running the Application

```bash
npm start           # Development server (ng serve)
npm run build       # Production build with SSR
npm run serve:ssr:webseite  # Run production SSR server
npm test            # Unit tests with Karma
```

### Build Outputs

- `dist/webseite/browser/`: Static client files
- `dist/webseite/server/`: SSR server files including `server.mjs`

## Project Conventions

### Component Generation

- Default style: SCSS (configured in `angular.json` schematics)
- Prefix: `app` for all components
- Type separators: Use dots (e.g., `user.service.ts`, `auth.guard.ts`)
- Always create standalone components with separate template & stylesheet files (no inline). Use: `ng g component <name> --standalone --style=scss --inline-style=false --inline-template=false`.

### File Structure Patterns

- Standalone components in `src/app/` each with `.component.ts`, `.component.html`, `.component.scss` (keine Inline-Templates/-Styles)
- Routes defined in `src/app/app.routes.ts`
- Global styles in `src/styles.scss`
- Static assets in `public/` directory

### SSR Considerations

- Server rendering handled by CommonEngine in `src/server.ts`
- API endpoints can be added to Express server before the catch-all route
- Browser-specific code should be conditionally executed
- Static file serving configured with 1-year cache for performance

## Tailwind CSS Usage

Tailwind CSS wird ergänzend zu SCSS verwendet (Utility-first Ansatz für Layout, Spacing, Typografie, Responsive Design). SCSS bleibt für komplexere oder gekapselte Styles.

### Grundprinzipien

1. Verwende Tailwind Utilities direkt im `.component.html` für häufige Layout-/Spacing-/Farb-Anforderungen.
2. Nutze SCSS wenn: umfangreiche Wiederverwendung, komplexe Selektoren, Pseudo-Elemente/-Zustände, Animationen oder bessere Lesbarkeit nötig sind.
3. Keine doppelte Definition (nicht dieselbe Regel sowohl als Utility als auch in SCSS).
4. Längere wiederkehrende Utility-Ketten (>5 Klassen) dürfen via `@apply` oder als eigene Klasse im SCSS extrahiert werden.

### Setup (Erwartet)

In `src/styles.scss` ganz oben:

```scss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

`tailwind.config.js` enthält `content` Pfade: `./src/**/*.{html,ts}` (wichtig für Purge & SSR).

### Komponenten-Erstellung

```
ng g component feature/example \
	--standalone \
	--style=scss \
	--inline-style=false \
	--inline-template=false
```

Dann Utilities direkt im Template einsetzen; SCSS nur für die oben genannten Fälle.

### SSR Hinweise

- Keine dynamische String-Konkatenation für Klassennamen (verhindert Purge). Stattdessen bedingte vollständige Klassen mit Angular Attribut-/Property-Bindings.
- Kritische Layout-Klassen möglichst stabil halten (nicht vollständig entfernen, wenn Flicker zu erwarten ist).

### `@apply` Richtlinie

Moderater Einsatz für semantische Bausteine (z.B. `.btn-primary { @apply inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-700; }`). Einmalige Styles bleiben Utilities.

### Review-Checkliste

- Überflüssige oder widersprüchliche Utilities entfernt?
- Responsives in aufsteigender Reihenfolge (`sm:` -> `md:` -> `lg:` -> `xl:`)?
- > 5 Utilities ohne Wiederverwendung? Erwäge Extraktion.
- Keine unbenutzten Custom-Klassen im SCSS?

### Performance

Saubere Content-Pfade stellen sicher, dass ungenutzte Klassen gepurged werden und SSR Payload minimal bleibt.

## Testing Setup

- Karma + Jasmine for unit tests
- Coverage reports enabled
- Test configuration in `tsconfig.spec.json`
- No e2e framework configured by default

When making changes, ensure compatibility with SSR by avoiding browser-only APIs without proper guards.
