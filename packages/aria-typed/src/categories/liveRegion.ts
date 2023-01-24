export type AriaAttributesLiveRegion = {
  "aria-busy"?: "false" | "true";
  "aria-live"?: "assertive" | "off" | "polite";
  "aria-relevant"?:
    | "additions"
    | "additions text"
    | "all"
    | "removals"
    | "text";
  "aria-atomic"?: "false" | "true";
};

export const ariaAttributesLiveRegion = [
  "aria-busy",
  "aria-live",
  "aria-relevant",
  "aria-atomic"
];
