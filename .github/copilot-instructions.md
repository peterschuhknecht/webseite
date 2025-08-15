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

### File Structure Patterns

- Standalone components in `src/app/` with `.component.ts`, `.component.html`, `.component.scss`
- Routes defined in `src/app/app.routes.ts`
- Global styles in `src/styles.scss`
- Static assets in `public/` directory

### SSR Considerations

- Server rendering handled by CommonEngine in `src/server.ts`
- API endpoints can be added to Express server before the catch-all route
- Browser-specific code should be conditionally executed
- Static file serving configured with 1-year cache for performance

## Testing Setup

- Karma + Jasmine for unit tests
- Coverage reports enabled
- Test configuration in `tsconfig.spec.json`
- No e2e framework configured by default

When making changes, ensure compatibility with SSR by avoiding browser-only APIs without proper guards.
