export const ariaRolesComposite = [
  "combobox",
  "grid",
  "row",
  "gridcell",
  "rowheader",
  "columnheader",
  "listbox",
  "option",
  "menu",
  "menubar",
  "radiogroup",
  "radio",
  "tablist",
  "tab",
  "tabpanel",
  "treegrid"
] as const;

export type AriaRoleComposite = (typeof ariaRolesComposite)[number];
