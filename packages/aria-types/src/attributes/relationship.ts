export type AriaAttributesRelationship = {
  /**
   * Identifies the currently active element when focus is on a composite widget, combobox, textbox, group, or application.
   */
  "aria-activedescendant"?: string;
  /**
   * Defines the total number of columns in a table, grid, or treegrid when not all columns are present in the DOM.
   */
  "aria-colcount"?: number;
  /**
   * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
   */
  "aria-colindex"?: number;
  /**
   * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
   */
  "aria-colspan"?: number;
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the element on which this attribute is set.
   */
  "aria-controls"?: string;
  /**
   * Identifies the element (or elements) that describes the element on which the attribute is set.
   */
  "aria-describedby"?: string;
  /**
   * Defines a string value that describes or annotates the current element.
   */
  "aria-description"?: string;
  /**
   * Identifies the element (or elements) that provide additional information related to the object.
   */
  "aria-details"?: string;
  /**
   * Identifies the element that provides an error message for that object.
   */
  "aria-errormessage"?: string;
  /**
   *  Identifies the next element (or elements) in an alternate reading order of content. This allows assistive technology to override the general default of reading in document source order at the user's discretion.
   */
  "aria-flowto"?: string;
  /**
   * Identifies the element (or elements) that labels the element it is applied to.
   */
  "aria-labelledby"?: string;
  /**
   * Identifies an element (or elements) in order to define a visual, functional, or contextual relationship between a parent and its child elements when the DOM hierarchy cannot be used to represent the relationship.
   */
  "aria-owns"?: string;
  /**
   * Defines an element's number or position in the current set of listitems or treeitems when not all items are present in the DOM.
   */
  "aria-posinset"?: number;
  /**
   * Defines the total number of rows in a table, grid, or treegrid.
   */
  "aria-rowcount"?: number;
  /**
   * Defines an element's position with respect to the total number of rows within a table, grid, or treegrid.
   */
  "aria-rowindex"?: number;
  /**
   * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   */
  "aria-rowspan"?: number;
  /**
   * Defines the number of items in the current set of listitems or treeitems when not all items in the set are present in the DOM.
   */
  "aria-setsize"?: number;
};

export type AriaAttributeRelationship = keyof AriaAttributesRelationship;

export const ariaAttributesRelationship = [
  "aria-activedescendant",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-describedby",
  "aria-description",
  "aria-details",
  "aria-errormessage",
  "aria-flowto",
  "aria-labelledby",
  "aria-owns",
  "aria-posinset",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-setsize"
] as AriaAttributeRelationship[];
