export const ariaRolesWindow = ["alertdialog", "dialog"] as const;

export type AriaRoleWindow = (typeof ariaRolesWindow)[number];
