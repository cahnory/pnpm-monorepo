import { expect } from "@japa/expect";
import { configure, processCLIArgs, run } from "@japa/runner";
import { setFileScope } from "@vanilla-extract/css/fileScope";

processCLIArgs(process.argv.splice(2));
configure({
  files: ["src/**/*.spec.ts?(x)"],
  importer: (filePath) => import(filePath.toString()),
  plugins: [
    expect(),
    function vanillaExtractMockPlugin() {
      setFileScope("mock");
    },
  ],
});

await run();
