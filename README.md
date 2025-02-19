# The Markers

Met de TheMarkers package kan je je evaluaties, feedback, check-ins/outs, reflecties en documenten beheren en bijhouden in je code-editor.

## Beschrijving

Met TheMarkers integreer je eenvoudig een dashboard in je project waar je:

- Je check-ins en evaluaties kunt beheren
- Feedback kunt ontvangen en geven
- Documenten kunt opslaan en organiseren
- Je voortgang kunt volgen op basis van de vereiste vaardigheden
- Een overzicht hebt van je behaalde studiepunten

## Project Structuur

Dit project bestaat uit verschillende onderdelen:

- [`@themarkers/cli`](./packages/cli/README.md): Command-line tool voor het beheren van je dashboard
- [`@themarkers/core`](./packages/core/README.md): De kern functionaliteit van het dashboard
- [`@themarkers/ui`](./packages/ui/README.md): De web interface van het dashboard

## Gebruik

### Installatie

Je kunt TheMarkers op twee manieren installeren:

1. **Globaal** (`-g`): Installeer TheMarkers één keer op je systeem

   ```bash
   npm install -g themarkers
   # of
   pnpm add -g themarkers
   ```

   Voordeel: Je kunt het command `themarkers` overal gebruiken Nadeel: Alle projecten gebruiken dezelfde versie

2. **Lokaal** (als devDependency): Installeer per project
   ```bash
   npm install --save-dev themarkers
   # of
   pnpm add -D themarkers
   ```
   Voordeel: Elk project kan zijn eigen versie hebben Nadeel: Je moet `npx` gebruiken om commands uit te voeren

### Commands

#### Met globale installatie:

```bash
themarkers start              # Start het dashboard
```

#### Met lokale installatie:

```bash
npx themarkers start              # Start het dashboard
# of
pnpm themarkers start
```
