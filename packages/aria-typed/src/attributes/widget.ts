export type AriaAttributesWidget = {
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for a combobox, searchbox, or textbox and specifies how predictions will be presented if they are made.
   */
  "aria-autocomplete"?: "both" | "inline" | "list" | "none";
  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   */
  "aria-checked"?: "false" | "mixed" | "true";
  /**
   * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
   */
  "aria-disabled"?: "false" | "true";
  /**
   * Identifies the element that provides an error message for that object.
   */
  "aria-errormessage"?: string;
  /**
   * Indicates if a control is expanded or collapsed, and whether or not its child elements are displayed or hidden.
   */
  "aria-expanded"?: "false" | "true";
  /**
   * Indicates the availability and type of interactive popup element that can be triggered by the element on which the attribute is set.
   */
  "aria-haspopup"?:
    | "dialog"
    | "false"
    | "grid"
    | "listbox"
    | "menu"
    | "true"
    | "tree";
  /**
   * Indicates whether the element is exposed to an accessibility API.
   */
  "aria-hidden"?: "false" | "true";
  /**
   * Indicates the entered value does not conform to the format expected by the application.
   */
  "aria-invalid"?: "false" | "grammar" | "spelling" | "true";
  /**
   * Defines a string value that labels an interactive element.
   */
  "aria-label"?: string;
  /**
   * Defines the hierarchical level of an element within a structure.
   */
  "aria-level"?: number;
  /**
   * Indicates whether an element is modal when displayed.
   */
  "aria-modal"?: "false" | "true";
  /**
   * Indicates whether a textbox accepts multiple lines of input or only a single line.
   */
  "aria-multiline"?: "false" | "true";
  /**
   * Indicates that the user may select more than one item from the current selectable descendants.
   */
  "aria-multiselectable"?: "false" | "true";
  /**
   * Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
   */
  "aria-orientation"?: "horizontal" | "vertical";
  /**
   * Defines a short hint (a word or short phrase) intended to help the user with data entry when a form control has no value. The hint can be a sample value or a brief description of the expected format.
   */
  "aria-placeholder"?: string;
  /**
   * Indicates the current "pressed" state of a toggle button.
   */
  "aria-pressed"?: "false" | "mixed" | "true";
  /**
   * Indicates that the element is not editable, but is otherwise operable.
   */
  "aria-readonly"?: "false" | "true";
  /**
   * Indicates that user input is required on the element before a form may be submitted.
   */
  "aria-required"?: "false" | "true";
  /**
   * Indicates the current "selected" state of various widgets.
   */
  "aria-selected"?: "false" | "true";
  /**
   * Indicates if items in a table or grid are sorted in ascending or descending order.
   */
  "aria-sort"?: "ascending" | "descending" | "none" | "other";
  /**
   * Defines the maximum allowed value for a range widget.
   */
  "aria-valuemax"?: number;
  /**
   * Defines the minimum allowed value for a range widget.
   */
  "aria-valuemin"?: number;
  /**
   * Defines the current value for a range widget.
   */
  "aria-valuenow"?: number;
  /**
   * Defines the human-readable text alternative of aria-valuenow for a range widget.
   */
  "aria-valuetext"?: string;
};

export type AriaAttributeWidget = keyof AriaAttributesWidget;

export const ariaAttributesWidget = [
  "aria-autocomplete",
  "aria-checked",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-label",
  "aria-level",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-placeholder",
  "aria-pressed",
  "aria-readonly",
  "aria-required",
  "aria-selected",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext"
] as AriaAttributeWidget[];
