## Context

Building a new premium renovation and maintenance website for Al SAND from scratch. The project uses React and TypeScript, managed via Vite for a fast development experience.

## Goals / Non-Goals

**Goals:**
- Implement a pixel-perfect, premium design based on the "Black and Gold" theme.
- Ensure 100% responsiveness across mobile, tablet, and desktop.
- Optimize for high performance (Lighthouse score > 90).
- Establish a scalable component architecture.

**Non-Goals:**
- Backend implementation (beyond simple form handling).
- SEO audit (initial setup only).
- Content CMS (initial static implementation).

## Decisions

- **Vite/React/TS**: Chosen for modern tooling and developer experience.
- **Vanilla CSS**: Used for maximum control over the "Gold" gradients and animations without the overhead of utility frameworks.
- **CSS Variables**: Core theme (colors, typography) will be defined as CSS variables at the root.
- **Component-First**: The UI will be broken down into atomic components (Button, Card, Section).
- **Lazy Loading**: Images and videos will be lazy-loaded to ensure fast TTI.

## Risks / Trade-offs

- **Color Accessibility**: Gold text on black requires high contrast; will use `#C9A84C` on `#0A0A0A` for readability.
- **Asset Weight**: Video hero may impact performance; will use an overlay and progressive loading.
