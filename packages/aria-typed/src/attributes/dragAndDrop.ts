export type AriaAttributesDragAndDrop = {
  "aria-dropeffect"?: "copy" | "execute" | "link" | "move" | "popup" | "none";
  "aria-grabbed"?: "false" | "true";
};

export type AriaAttributeDragAndDrop = keyof AriaAttributesDragAndDrop;

export const ariaAttributesDragAndDrop = [
  "aria-dropeffect",
  "aria-grabbed"
] as AriaAttributeDragAndDrop[];
