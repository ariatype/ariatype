import type { PartiallyRequiredProps } from "@dddstack/ariatype-partially-required-props";

import type { AriaTypes } from "./ariaTypes.types";

export type PartiallyRequiredAriaTypes<T extends keyof AriaTypes> =
  PartiallyRequiredProps<AriaTypes, T>;
