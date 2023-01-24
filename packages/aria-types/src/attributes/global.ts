export type AriaAttributesGlobal = {
  /**
   * Indicates whether assistive technologies such as a screen reader will present all, or only parts of, the changed region based on the change notifications defined by the `aria-relevant` attribute.
   */
  "aria-atomic"?: "false" | "true";
  /**
   * Indicates an element is being modified and that assistive technologies may want to wait until the changes are complete before informing the user about the update.
   */
  "aria-busy"?: "false" | "true";
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the element on which this attribute is set.
   */
  "aria-controls"?: string;
  /**
   * Indicates that this element represents the current item within a container or set of related elements.
   */
  "aria-current"?:
    | "false"
    | "true"
    | "page"
    | "step"
    | "location"
    | "date"
    | "time";
  /**
   * Identifies the element (or elements) that describes the element on which the attribute is set.
   */
  "aria-describedby"?: string;
  /**
   * Identifies the element (or elements) that provide additional information related to the object.
   */
  "aria-details"?: string;
  /**
   * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
   */
  "aria-disabled"?: "false" | "true";
  /**
   * Indicates what functions may be performed when a dragged object is released on the drop target.
   *
   * {@link Deprecated: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect}
   */
  "aria-dropeffect"?: "copy" | "execute" | "link" | "move" | "popup" | "none";
  /**
   * Identifies the element that provides an error message for that object.
   */
  "aria-errormessage"?: string;
  /**
   * Identifies the next element (or elements) in an alternate reading order of content. This allows assistive technology to override the general default of reading in document source order at the user's discretion.
   */
  "aria-flowto"?: string;
  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   *
   * {@link Deprecated: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect}
   */
  "aria-grabbed"?: "false" | "true";
  /**
   * Indicates the availability and type of interactive popup element that can be triggered by the element on which the attribute is set.
   */
  "aria-haspopup"?:
    | "false"
    | "true"
    | "menu"
    | "listbox"
    | "tree"
    | "grid"
    | "dialog";
  /**
   * Indicates whether the element is exposed to an accessibility API.
   */
  "aria-hidden"?: "false" | "true";
  /**
   * Indicates the entered value does not conform to the format expected by the application.
   */
  "aria-invalid"?: "false" | "true" | "grammar" | "spelling";
  /**
   * Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
   */
  "aria-keyshortcuts"?: string;
  /**
   * Defines a string value that labels an interactive element.
   */
  "aria-label"?: string;
  /**
   * Identifies the element (or elements) that labels the element it is applied to.
   */
  "aria-labelledby"?: string;
  /**
   * Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
   */
  "aria-live"?: "off" | "polite" | "assertive";
  /**
   * Identifies an element (or elements) in order to define a visual, functional, or contextual relationship between a parent and its child elements when the DOM hierarchy cannot be used to represent the relationship.
   */
  "aria-owns"?: string;
  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
   */
  "aria-relevant"?: "additions" | "removals" | "text" | "all";
  /**
   * Defines a human-readable, author-localized description for the role of an element.
   */
  "aria-roledescription"?: string;
};

export type AriaAttributeGlobal = keyof AriaAttributesGlobal;

export const ariaAttributesGlobal = [
  "aria-atomic",
  "aria-busy",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-dropeffect",
  "aria-errormessage",
  "aria-flowto",
  "aria-grabbed",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-live",
  "aria-owns",
  "aria-relevant",
  "aria-roledescription"
] as AriaAttributeGlobal[];
