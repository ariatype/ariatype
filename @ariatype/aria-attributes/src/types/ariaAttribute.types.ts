import { AriaAttributeDragAndDrop } from "@ariatype/aria-attributes-drag-and-drop";
import { AriaAttributeGlobal } from "@ariatype/aria-attributes-global";
import { AriaAttributeLiveRegion } from "@ariatype/aria-attributes-live-region";
import { AriaAttributeRelationship } from "@ariatype/aria-attributes-relationship";
import { AriaAttributeWidget } from "@ariatype/aria-attributes-widget";

export type AriaAttribute =
  | AriaAttributeDragAndDrop
  | AriaAttributeGlobal
  | AriaAttributeLiveRegion
  | AriaAttributeRelationship
  | AriaAttributeWidget;
