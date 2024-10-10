import { AriaRoleComposite } from "@ariatype/aria-roles-composite";
import { AriaRoleDocumentStructure } from "@ariatype/aria-roles-document-structure";
import { AriaRoleLandmark } from "@ariatype/aria-roles-landmark";
import { AriaRoleLiveRegion } from "@ariatype/aria-roles-live-region";
import { AriaRoleWidget } from "@ariatype/aria-roles-widget";
import { AriaRoleWindow } from "@ariatype/aria-roles-window";

export type AriaRole =
  | AriaRoleComposite
  | AriaRoleDocumentStructure
  | AriaRoleLandmark
  | AriaRoleLiveRegion
  | AriaRoleWidget
  | AriaRoleWindow;
