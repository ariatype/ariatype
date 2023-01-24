import { AriaAttributes } from "./attributes";
import { AriaRole } from "./roles";

export type AriaTypes = AriaAttributes & {
  role?: AriaRole;
};

export * from "./attributes";
export * from "./roles";
