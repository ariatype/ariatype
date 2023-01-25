import { AriaAttributes } from "./attributes";
import { AriaRole } from "./roles";
import { PartiallyRequiredProps } from "./typings";

export type AriaTypes = AriaAttributes & {
  /**
   * ARIA roles provide semantic meaning to content, allowing screen readers and other tools to present and support interaction with object in a way that is consistent with user expectations of that type of object.
   *
   * ARIA roles can be used to describe elements that don't natively exist in HTML or exist but don't yet have full browser support.
   */
  role?: AriaRole;
};

export type PartiallyRequiredAriaTypes<T extends keyof AriaTypes> =
  PartiallyRequiredProps<AriaTypes, T>;

export * from "./attributes";
export * from "./roles";
