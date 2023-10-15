import type { ComponentProps, ForwardedRef, ReactElement } from "react";

import { forwardRef } from "react";

type AnchorRef = ForwardedRef<HTMLAnchorElement | undefined>;
type ButtonRef = ForwardedRef<HTMLButtonElement | undefined>;
type MixedRef = ForwardedRef<HTMLAnchorElement & HTMLButtonElement>;

type AnchorProps = Omit<ComponentProps<"a">, "ref"> & {
  href: string;
  ref?: AnchorRef | MixedRef | undefined;
};
type ButtonProps = Omit<ComponentProps<"button">, "ref"> & {
  href?: undefined;
  ref?: ButtonRef | MixedRef | undefined;
};

type ButtonPrimitiveProps = AnchorProps | ButtonProps;

export const ButtonPrimitive = forwardRef<
  HTMLAnchorElement & HTMLButtonElement,
  ButtonPrimitiveProps
>(function renderButtonPrimitive(props, ref) {
  return props.href === undefined ? (
    <button {...props} ref={ref} />
  ) : (
    <a {...props} ref={ref} />
  );
}) as {
  (props: AnchorProps): ReactElement<AnchorProps, "a">;
  (props: ButtonProps): ReactElement<ButtonProps, "button">;
};
