import type { AriaAttributesDragAndDrop } from "@dddstack/ariatype-aria-attributes-drag-and-drop";
import type { AriaAttributesGlobal } from "@dddstack/ariatype-aria-attributes-global";
import type { AriaAttributesLiveRegion } from "@dddstack/ariatype-aria-attributes-live-region";
import type { AriaAttributesRelationship } from "@dddstack/ariatype-aria-attributes-relationship";
import type { AriaAttributesWidget } from "@dddstack/ariatype-aria-attributes-widget";

export type AriaAttributes = AriaAttributesDragAndDrop &
  AriaAttributesGlobal &
  AriaAttributesLiveRegion &
  AriaAttributesRelationship &
  AriaAttributesWidget;
