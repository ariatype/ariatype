import { ariaRolesComposite } from "@dddstack/ariatype-aria-roles-composite";
import { ariaRolesDocumentStructure } from "@dddstack/ariatype-aria-roles-document-structure";
import { ariaRolesLandmark } from "@dddstack/ariatype-aria-roles-landmark";
import { ariaRolesLiveRegion } from "@dddstack/ariatype-aria-roles-live-region";
import { ariaRolesWidget } from "@dddstack/ariatype-aria-roles-widget";
import { ariaRolesWindow } from "@dddstack/ariatype-aria-roles-window";

export const ariaRoles = [
  ...new Set([
    ...ariaRolesComposite,
    ...ariaRolesDocumentStructure,
    ...ariaRolesLandmark,
    ...ariaRolesLiveRegion,
    ...ariaRolesWidget,
    ...ariaRolesWindow
  ])
];
