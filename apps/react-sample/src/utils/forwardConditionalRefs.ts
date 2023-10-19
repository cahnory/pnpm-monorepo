import {
  type ForwardRefExoticComponent,
  type ForwardedRef,
  type ReactNode,
  type RefAttributes,
  forwardRef,
} from "react";

type ForwardRefComponent<
  Props,
  Element extends HTMLElement,
> = ForwardRefExoticComponent<Props & RefAttributes<Element | undefined>>;

type ForwardConditionalRefVariant<
  E extends HTMLElement = HTMLElement,
  P = unknown,
> = [E, P];

type ForwardConditionalRefProps<T extends ForwardConditionalRefVariant[]> =
  T extends [[HTMLElement, infer P], ...infer Rest]
    ? Rest extends [ForwardConditionalRefVariant]
      ? ForwardConditionalRefProps<Rest> | P
      : P
    : never;
type ForwardConditionalRefRefs<T extends ForwardConditionalRefVariant[]> =
  T extends [[infer E extends HTMLElement, unknown], ...infer Rest]
    ? Rest extends [ForwardConditionalRefVariant]
      ? E & ForwardConditionalRefRefs<Rest>
      : E
    : never;
type ForwardConditionalRefComponent<T extends ForwardConditionalRefVariant[]> =
  T extends [[infer E extends HTMLElement, infer P], ...infer Rest]
    ? Rest extends [ForwardConditionalRefVariant]
      ? ForwardConditionalRefComponent<Rest> & ForwardRefComponent<P, E>
      : ForwardRefComponent<P, E>
    : never;

export const forwardConditionalRef = <
  CP extends ForwardConditionalRefVariant[],
>(
  render: (
    props: ForwardConditionalRefProps<CP>,
    ref: ForwardedRef<ForwardConditionalRefRefs<CP>>,
  ) => ReactNode,
) =>
  forwardRef<ForwardConditionalRefRefs<CP>, ForwardConditionalRefProps<CP>>(
    render,
  ) as ForwardConditionalRefComponent<CP>;
