export const ariaRolesLiveRegion = [
  "alert",
  "log",
  "marquee",
  "status",
  "timer"
] as const;

export type AriaRoleLiveRegion = (typeof ariaRolesLiveRegion)[number];
