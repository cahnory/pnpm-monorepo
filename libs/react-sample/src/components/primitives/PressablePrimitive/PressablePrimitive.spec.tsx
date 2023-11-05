import { test } from "@japa/runner";
import { render } from "@testing-library/react";

import { PressablePrimitive } from "./PressablePrimitive.js";

test.group("PressablePrimitive", () => {
  test("render button if href is undefined", ({ expect }) => {
    expect(
      render(<PressablePrimitive />).container.firstChild?.nodeName,
    ).toStrictEqual("BUTTON");
  });

  test("return anchor if href is defined", ({ expect }) => {
    expect(
      render(<PressablePrimitive href="#" />).container.firstChild?.nodeName,
    ).toStrictEqual("A");
  });
});
