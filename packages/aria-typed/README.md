# @durkdotdev/aria-typed

Type definitions for WAI-ARIA Accessibility.

## Installation

```bash
npm install @durkdotdev/aria-typed -D
# or
yarn add @durkdotdev/aria-typed -D
# or
pnpm add @durkdotdev/aria-typed -D

```

## Usage

```ts
import { AriaAttributes } from "@durkdotdev/aria-typed";

const aria: AriaAttributes = {
  "aria-atomic": "true"
};

// ...
```

`@durkdotdev/aria-typed` exports the following types:

| Name                       | Description                         |
| -------------------------- | ----------------------------------- |
| AriaAttributes             | typed aria attributes               |
| AriaAttributesDragAndDrop  | typed drag-and-drop aria attributes |
| AriaAttributesGlobal       | typed global aria attributes        |
| AriaAttributesLiveRegion   | typed live region attributes        |
| AriaAttributesRelationship | typed relationship aria attributes  |
| AriaAttributesWidget       | typed widget aria attributes        |

In addition, the following arrays are exported:

| Name                       | Description                            |
| -------------------------- | -------------------------------------- |
| ariaAttributes             | array of aria attributes               |
| ariaAttributesDragAndDrop  | array of drag-and-drop aria attributes |
| ariaAttributesGlobal       | array of global aria attributes        |
| ariaAttributesLiveRegion   | array of live region attributes        |
| ariaAttributesRelationship | array of relationship aria attributes  |
| ariaAttributesWidget       | array of widget aria attributes        |

## Resources

For more resources on WAI-ARIA:

- [https://www.w3.org/WAI/standards-guidelines/aria](https://www.w3.org/WAI/standards-guidelines/aria)
- [https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes)
