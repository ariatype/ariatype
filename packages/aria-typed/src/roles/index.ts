import { AriaRoleComposite, ariaRolesComposite } from "./composite";
import {
  AriaRoleDocumentStructure,
  ariaRolesDocumentStructure
} from "./documentStructure";
import { AriaRoleLandmark, ariaRolesLandmark } from "./landmark";
import { AriaRoleLiveRegion, ariaRolesLiveRegion } from "./liveRegion";
import { ariaRolesWidget, AriaRoleWidget } from "./widget";
import { ariaRolesWindow, AriaRoleWindow } from "./window";

export type AriaRole =
  | AriaRoleComposite
  | AriaRoleDocumentStructure
  | AriaRoleLandmark
  | AriaRoleLiveRegion
  | AriaRoleWidget
  | AriaRoleWindow;

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

export * from "./composite";
export * from "./documentStructure";
export * from "./landmark";
export * from "./liveRegion";
export * from "./widget";
export * from "./window";
