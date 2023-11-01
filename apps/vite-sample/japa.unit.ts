import { expect } from "@japa/expect";
import { configure, processCLIArgs, run } from "@japa/runner";

processCLIArgs(process.argv.splice(2));
configure({
  files: ["**/*.spec.ts?(x)"],
  importer: (filePath) => import(filePath.toString()),
  plugins: [expect()],
});

await run();
