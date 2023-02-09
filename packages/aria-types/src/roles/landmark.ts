export const ariaRolesLandmark = [
  "banner",
  "complementary",
  "contentinfo",
  "form",
  "main",
  "navigation",
  "region",
  "search"
] as const;

export type AriaRoleLandmark = (typeof ariaRolesLandmark)[number];
