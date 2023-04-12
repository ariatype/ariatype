import { ariaAttributesDragAndDrop } from "@dddstack/ariatype-aria-attributes-drag-and-drop";
import { ariaAttributesGlobal } from "@dddstack/ariatype-aria-attributes-global";
import { ariaAttributesLiveRegion } from "@dddstack/ariatype-aria-attributes-live-region";
import { ariaAttributesRelationship } from "@dddstack/ariatype-aria-attributes-relationship";
import { ariaAttributesWidget } from "@dddstack/ariatype-aria-attributes-widget";

export const ariaAttributes = [
  ...new Set([
    ...ariaAttributesDragAndDrop,
    ...ariaAttributesGlobal,
    ...ariaAttributesLiveRegion,
    ...ariaAttributesRelationship,
    ...ariaAttributesWidget
  ])
];
