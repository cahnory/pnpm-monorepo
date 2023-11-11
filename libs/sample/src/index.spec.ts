import { test } from "@japa/runner";

import { sample } from "./index.js";

test("return package name", ({ expect }) => {
  expect(sample()).toStrictEqual({ pkg: "@pnpm-monorepo/sample-lib" });
});
