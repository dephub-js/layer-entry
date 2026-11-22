# @dephub/layer-entry 🚪

> Generate typed ESM entry files (`index.js`, `index.d.ts`, and `package.json`) from JSON layer outputs in `@dephub/layer` post-build tasks.

[![NPM version](https://img.shields.io/npm/v/@dephub/layer-entry.svg?style=flat)](https://npmjs.org/package/@dephub/layer-entry)
[![ESM-only](https://img.shields.io/badge/ESM-only-brightgreen?style=flat)](https://nodejs.org/)

## Features ✨

- 📦 **Entry package generation** — Emits `index.js`, `index.d.ts`, and `package.json` (`dot-<name>`) when build changes occur.
- 🧾 **JSON module imports** — Generates ESM imports using `with { type: 'json' }` and relative paths from `outDir`.
- 🏷️ **TypeScript declarations** — Outputs matching `export declare const` definitions with `typeof` references.
- 🔀 **Collision-free aliases** — Assigns unique generated identifiers for imported JSON modules across groups.
- 🪝 **Layer task ready** — Designed to plug directly into `@dephub/layer` `tasks` hooks.

---

## Installation 📦

- npm: `npm install @dephub/layer-entry`
- pnpm: `pnpm add @dephub/layer-entry`
- yarn: `yarn add @dephub/layer-entry`
- bun: `bun add @dephub/layer-entry`

---

## Usage 🎯

### API 🧩

```ts
import { useBuilder } from '@dephub/layer';
import { writeLayerEntry } from '@dephub/layer-entry';

const builder = await useBuilder({
  defaultOutDir: '.layer',
  name: 'my-docs',
  outExtension: '.json',
  parser: async (entry) => JSON.parse(entry),
  pattern: '**/*.json',
  tasks: [writeLayerEntry],
  version: '1.0.0',
});
```

### Available exports

| Category  | Exports                         |
| --------- | ------------------------------- |
| **Core**  | `writeLayerEntry`               |
| **Types** | `EntryContext`, `EntryFileName` |

---

## License 📄

MIT License – see [LICENSE](https://www.google.com/search?q=LICENSE) for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
