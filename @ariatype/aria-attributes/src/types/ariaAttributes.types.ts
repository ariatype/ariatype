import { AriaAttributesDragAndDrop } from "@ariatype/aria-attributes-drag-and-drop";
import { AriaAttributesGlobal } from "@ariatype/aria-attributes-global";
import { AriaAttributesLiveRegion } from "@ariatype/aria-attributes-live-region";
import { AriaAttributesRelationship } from "@ariatype/aria-attributes-relationship";
import { AriaAttributesWidget } from "@ariatype/aria-attributes-widget";

export type AriaAttributes = AriaAttributesDragAndDrop &
  AriaAttributesGlobal &
  AriaAttributesLiveRegion &
  AriaAttributesRelationship &
  AriaAttributesWidget;
