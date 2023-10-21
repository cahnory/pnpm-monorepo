import { type ComponentPropsWithoutRef, forwardRef } from "react";

type AnchorProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
};
type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: undefined;
};

export const PressablePrimitive = forwardRef<
  HTMLAnchorElement & HTMLButtonElement,
  AnchorProps | ButtonProps
>(function PressablePrimitiveForwardedRef(props, ref) {
  if (props.href === undefined) {
    return <button {...props} ref={ref} />;
  }

  return <a {...props} ref={ref} />;
});
