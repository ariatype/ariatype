import { ariaRolesComposite } from "@ariatype/aria-roles-composite";
import { ariaRolesDocumentStructure } from "@ariatype/aria-roles-document-structure";
import { ariaRolesLandmark } from "@ariatype/aria-roles-landmark";
import { ariaRolesLiveRegion } from "@ariatype/aria-roles-live-region";
import { ariaRolesWidget } from "@ariatype/aria-roles-widget";
import { ariaRolesWindow } from "@ariatype/aria-roles-window";

export const ariaRoles = [
  ...new Set([
    ...ariaRolesComposite,
    ...ariaRolesDocumentStructure,
    ...ariaRolesLandmark,
    ...ariaRolesLiveRegion,
    ...ariaRolesWidget,
    ...ariaRolesWindow,
  ]),
];
