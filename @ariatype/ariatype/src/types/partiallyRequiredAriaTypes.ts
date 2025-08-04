import type { AriaType } from "./ariaTypes.types";
import type { PartiallyRequiredProps } from "@ariatype/partially-required-props";

export type PartiallyRequiredAriaType<T extends keyof AriaType> =
  PartiallyRequiredProps<AriaType, T>;
