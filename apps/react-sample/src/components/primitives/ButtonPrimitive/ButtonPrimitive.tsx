import type { ComponentPropsWithoutRef } from "react";

import { forwardConditionalRef } from "../../../utils/forwardConditionalRefs";

type AnchorProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
};
type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: undefined;
};

export const ButtonPrimitive = forwardConditionalRef<
  [[HTMLAnchorElement, AnchorProps], [HTMLButtonElement, ButtonProps]]
>(function ButtonPrimitiveForwardedRef(props, ref) {
  return props.href === undefined ? (
    <button {...props} ref={ref} />
  ) : (
    <a {...props} ref={ref} />
  );
});
