export type AriaAttributesLiveRegion = {
  /**
   * Indicates an element is being modified and that assistive technologies may want to wait until the changes are complete before informing the user about the update.
   *
   * When multiple parts of a live region need to be loaded before changes are announced to the user, set `aria-busy="true"` until loading is complete. Then set to `aria-busy="false"`. This prevents assistive technologies from announcing changes before updates are done.
   */
  "aria-busy"?: "false" | "true";
  /**
   * Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
   */
  "aria-live"?: "assertive" | "off" | "polite";
  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
   */
  "aria-relevant"?:
    | "additions"
    | "additions text"
    | "all"
    | "removals"
    | "text";
  /**
   * Indicates whether assistive technologies such as a screen reader will present all, or only parts of, the changed region based on the change notifications defined by the `aria-relevant` attribute.
   */
  "aria-atomic"?: "false" | "true";
};

export type AriaAttributeLiveRegion = keyof AriaAttributesLiveRegion;

export const ariaAttributesLiveRegion = [
  "aria-busy",
  "aria-live",
  "aria-relevant",
  "aria-atomic"
] as AriaAttributeLiveRegion[];
