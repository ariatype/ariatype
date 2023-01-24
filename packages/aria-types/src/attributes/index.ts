import {
  AriaAttributesDragAndDrop,
  ariaAttributesDragAndDrop
} from "./dragAndDrop";
import { AriaAttributesGlobal, ariaAttributesGlobal } from "./global";
import {
  AriaAttributesLiveRegion,
  ariaAttributesLiveRegion
} from "./liveRegion";
import {
  AriaAttributesRelationship,
  ariaAttributesRelationship
} from "./relationship";
import { AriaAttributesWidget, ariaAttributesWidget } from "./widget";

export type AriaAttributes = AriaAttributesDragAndDrop &
  AriaAttributesGlobal &
  AriaAttributesLiveRegion &
  AriaAttributesRelationship &
  AriaAttributesWidget;

export const ariaAttributes = [
  ...new Set([
    ...ariaAttributesDragAndDrop,
    ...ariaAttributesGlobal,
    ...ariaAttributesLiveRegion,
    ...ariaAttributesRelationship,
    ...ariaAttributesWidget
  ])
];

export * from "./dragAndDrop";
export * from "./global";
export * from "./liveRegion";
export * from "./relationship";
export * from "./widget";
