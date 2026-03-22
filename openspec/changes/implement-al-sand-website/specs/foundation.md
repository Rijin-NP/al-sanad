## ADDED Requirements

### Requirement: Design System Fidelity
The website MUST strictly adhere to the color palette and typography defined in `openspec/project.md`.

#### Scenario: Theme Application
- **WHEN** the application loads
- **THEN** the root CSS variables MUST reflect the `primary`, `background`, and `surface` colors from the config.

### Requirement: Responsive Navigation
The navigation MUST be sticky and provide a backdrop blur on scroll.

#### Scenario: Scrolling Behavior
- **WHEN** the user scrolls past the hero section
- **THEN** the navigation background MUST become solid with a `12px` backdrop blur.

### Requirement: Core Pages
The website MUST implement all pages: Home, About, Projects, Blog, and Contact.

#### Scenario: Page Availability
- **WHEN** a user navigates to any defined route
- **THEN** the corresponding page content MUST be rendered according to the `pages` configuration.
