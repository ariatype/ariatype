export type AriaAttributesDragAndDrop = {
  /**
   * Indicates what functions may be performed when a dragged object is released on the drop target.
   *
   * {@link Deprecated: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect}
   */
  "aria-dropeffect"?: "copy" | "execute" | "link" | "move" | "popup" | "none";
  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   *
   * {@link Deprecated: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect}
   */
  "aria-grabbed"?: "false" | "true";
};

export type AriaAttributeDragAndDrop = keyof AriaAttributesDragAndDrop;
