import type { ComponentProps } from "react";

import { PressablePrimitive } from "../../primitives/PressablePrimitive/PressablePrimitive";
import { buttonStyle } from "./Button.css";

type ButtonProps = ComponentProps<typeof PressablePrimitive>;

export const Button = (props: ButtonProps) => (
  <PressablePrimitive className={buttonStyle} {...props} />
);
