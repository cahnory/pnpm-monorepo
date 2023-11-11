import { test } from "@japa/runner";
import { render } from "@testing-library/react";

import { Button } from "./Button.js";

test.group("Button", () => {
  test("render button if href is undefined", ({ expect }) => {
    expect(render(<Button />).container.firstChild?.nodeName).toStrictEqual(
      "BUTTON",
    );
  });

  test("return anchor if href is defined", ({ expect }) => {
    expect(
      render(<Button href="#" />).container.firstChild?.nodeName,
    ).toStrictEqual("A");
  });
});
