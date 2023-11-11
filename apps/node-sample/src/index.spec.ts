import { test } from "@japa/runner";

import { sampled } from "./index.js";

test("return imported package name", ({ expect }) => {
  expect(sampled).toStrictEqual({ pkg: "@pnpm-monorepo/sample-lib" });
});
