/** Build context required to generate the layer entry files. */
export interface EntryContext {
  /** Whether the current build produced any file changes. */
  changed: boolean;
  /** Exported constant/type name in the generated module. */
  docType: string;
  /** Nested map of `{ [group]: { [exportName]: modulePath } }`. */
  importsMap: Record<string, Record<string, string>>;
  /** Emits a progress line prefixed with the builder name.*/
  log: (message: string) => void;
  /** Execution mode for the current build run. */
  mode: 'build' | 'watch';
  /** Package/generator name used when emitting `package.json`. */
  name: string;
  /** Directory where generated files are written. */
  outDir: string;
}

/** File emitted for the generated layer entry package. */
export type EntryFileName = 'index.d.ts' | 'index.js' | 'package.json';
