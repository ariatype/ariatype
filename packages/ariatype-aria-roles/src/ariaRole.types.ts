import type { AriaRoleComposite } from "@dddstack/ariatype-aria-roles-composite";
import type { AriaRoleDocumentStructure } from "@dddstack/ariatype-aria-roles-document-structure";
import type { AriaRoleLandmark } from "@dddstack/ariatype-aria-roles-landmark";
import type { AriaRoleLiveRegion } from "@dddstack/ariatype-aria-roles-live-region";
import type { AriaRoleWidget } from "@dddstack/ariatype-aria-roles-widget";
import type { AriaRoleWindow } from "@dddstack/ariatype-aria-roles-window";

export type AriaRole =
  | AriaRoleComposite
  | AriaRoleDocumentStructure
  | AriaRoleLandmark
  | AriaRoleLiveRegion
  | AriaRoleWidget
  | AriaRoleWindow;
