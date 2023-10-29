import type { ComponentProps } from "react";

import { PressablePrimitive } from "../../primitives/PressablePrimitive/PressablePrimitive.js";
import { buttonStyle } from "./Button.css.js";

type ButtonProps = ComponentProps<typeof PressablePrimitive>;

export const Button = (props: ButtonProps) => (
  <PressablePrimitive className={buttonStyle} {...props} />
);
