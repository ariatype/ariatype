import type { AriaType } from "./ariaType.types";
import type { PartiallyRequiredProps } from "@ariatype/partially-required-props/dist";

export type PartiallyRequiredAriaType<T extends keyof AriaType> =
  PartiallyRequiredProps<AriaType, T>;
