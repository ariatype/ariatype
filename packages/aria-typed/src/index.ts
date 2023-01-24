import {
  AriaAttributesDragAndDrop,
  ariaAttributesDragAndDrop,
  AriaAttributesLiveRegion,
  ariaAttributesLiveRegion,
  AriaAttributesRelationship,
  ariaAttributesRelationship,
  AriaAttributesWidget,
  ariaAttributesWidget
} from "./categories";
import { AriaAttributesGlobal, ariaAttributesGlobal } from "./global";

export type AriaAttributes = AriaAttributesGlobal &
  AriaAttributesDragAndDrop &
  AriaAttributesLiveRegion &
  AriaAttributesRelationship &
  AriaAttributesWidget;

export const ariaAttributes = [
  ...new Set([
    ...ariaAttributesGlobal,
    ...ariaAttributesDragAndDrop,
    ...ariaAttributesLiveRegion,
    ...ariaAttributesRelationship,
    ...ariaAttributesWidget
  ])
];
