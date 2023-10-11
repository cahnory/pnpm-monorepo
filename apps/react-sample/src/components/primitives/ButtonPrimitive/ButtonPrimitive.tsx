import type { ComponentProps } from "react";

type ButtonPrimitiveProps =
  | ComponentProps<"button">
  | (ComponentProps<"a"> & { href: string });

export const ButtonPrimitive = (props: ButtonPrimitiveProps) =>
  "href" in props ? <a {...props} /> : <button {...props} />;
