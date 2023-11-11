import { test } from "@japa/runner";
import { fireEvent, render } from "@testing-library/react";

import { App } from "./App.js";

test.group("App", () => {
  test("update counter on click", ({ expect }) => {
    const result = render(<App />);
    const button = result.getByRole("button");

    expect(button.textContent).toBe("count is 0");
    fireEvent.click(button);

    expect(button.textContent).toBe("count is 1");
  });
});
