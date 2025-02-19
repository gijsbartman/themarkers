# TheMarkers

A monorepo project for TheMarkers application.

## Prerequisites

- Node.js >= 18
- pnpm >= 8.15.4

## Setup

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Build all packages:
   ```bash
   pnpm build
   ```

3. Start the development environment:
   ```bash
   pnpm dev
   ```

## Package Structure

- `packages/core`: Business logic and database operations
- `packages/ui`: React frontend application
- `packages/cli`: Command-line tooling

## Usage

Once installed, you can use the CLI tool:

```bash
themarkers start
```

This will start up the dashboard and initialize the database.

## Development

- `pnpm dev`: Start all packages in development mode
- `pnpm build`: Build all packages
- `pnpm lint`: Run linting across all packages 