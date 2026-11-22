import { dim, green, writeEntryFile } from '#/utils.ts';

import type { EntryContext, EntryFileName } from './types.ts';

/**
 * Generates `index.js`, `index.d.ts`, and `package.json` for a layer entry when build changes occur.
 *
 * @param entryContext - Build context describing the layer output and build state.
 * @returns A promise that resolves when all entry files have been written.
 * @example
 * ```ts
 * import { useBuilder } from '@dephub/layer';
 * import { writeLayerEntry } from '@dephub/layer-entry';
 *
 * const builder = await useBuilder({
 *   defaultOutDir: '.layer',
 *   name: 'my-docs',
 *   outExtension: '.json',
 *   parser: async (entry) => JSON.parse(entry),
 *   pattern: '**\/*.json',
 *   tasks: [writeLayerEntry],
 *   version: '1.0.0',
 * });
 * ```
 */
export async function writeLayerEntry(
  entryContext: EntryContext,
): Promise<void> {
  if (!entryContext.changed) return;

  for await (const fileName of [
    'index.js',
    'index.d.ts',
    'package.json',
  ] as Array<EntryFileName>) {
    const start = performance.now();
    const action = entryContext.mode === 'build' ? 'built' : 'rebuilt';

    await writeEntryFile(fileName, entryContext);
    entryContext.log(
      `${green(action)} ${dim(`${entryContext.outDir}/${fileName} in ${(performance.now() - start).toFixed(0)}ms`)}`,
    );
  }
}
