import { ariaAttributesDragAndDrop } from "@ariatype/aria-attributes-drag-and-drop";
import { ariaAttributesGlobal } from "@ariatype/aria-attributes-global";
import { ariaAttributesLiveRegion } from "@ariatype/aria-attributes-live-region";
import { ariaAttributesRelationship } from "@ariatype/aria-attributes-relationship";
import { ariaAttributesWidget } from "@ariatype/aria-attributes-widget";

export const ariaAttributes = [
  ...new Set([
    ...ariaAttributesDragAndDrop,
    ...ariaAttributesGlobal,
    ...ariaAttributesLiveRegion,
    ...ariaAttributesRelationship,
    ...ariaAttributesWidget,
  ]),
];
