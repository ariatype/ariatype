import type { AriaAttributeDragAndDrop } from "@dddstack/ariatype-aria-attributes-drag-and-drop";
import type { AriaAttributeGlobal } from "@dddstack/ariatype-aria-attributes-global";
import type { AriaAttributeLiveRegion } from "@dddstack/ariatype-aria-attributes-live-region";
import type { AriaAttributeRelationship } from "@dddstack/ariatype-aria-attributes-relationship";
import type { AriaAttributeWidget } from "@dddstack/ariatype-aria-attributes-widget";

export type AriaAttribute =
  | AriaAttributeDragAndDrop
  | AriaAttributeGlobal
  | AriaAttributeLiveRegion
  | AriaAttributeRelationship
  | AriaAttributeWidget;
