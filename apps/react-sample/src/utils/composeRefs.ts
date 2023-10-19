import type { MutableRefObject, Ref, RefObject } from "react";

export type PossibleRef<T> =
  | Exclude<Ref<T>, RefObject<T>>
  | MutableRefObject<T>
  | undefined;

export const composeRefs =
  <T>(...refs: PossibleRef<T>[]) =>
  (el: T) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(el);
      } else if (ref) {
        ref.current = el;
      }
    });
  };
