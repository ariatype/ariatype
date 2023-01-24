# @durkdotdev/aria-types

Type definitions for WAI-ARIA Accessibility.

## Installation

```bash
npm install @durkdotdev/aria-types -D
# or
yarn add @durkdotdev/aria-types -D
# or
pnpm add @durkdotdev/aria-types -D
```

## Usage

```ts
import { AriaTypes } from "@durkdotdev/aria-types";

const aria: AriaTypes = {
  "aria-atomic": "true",
  role: "alert"
};

// ...
```

`@durkdotdev/aria-types` exports the following types:

| Name                       | Description                         |
| -------------------------- | ----------------------------------- |
| AriaAttributes             | typed aria attributes               |
| AriaAttributesDragAndDrop  | typed drag-and-drop aria attributes |
| AriaAttributesGlobal       | typed global aria attributes        |
| AriaAttributesLiveRegion   | typed live region aria attributes   |
| AriaAttributesRelationship | typed relationship aria attributes  |
| AriaAttributesWidget       | typed widget aria attributes        |
| AriaRole                   | typed aria role                     |
| AriaRoleComposite          | typed composite aria role           |
| AriaRoleDocumentStructure  | typed document structure aria role  |
| AriaRoleLandmark           | typed landmark aria role            |
| AriaRoleLiveRegion         | typed live region aria role         |
| AriaRoleWidget             | typed widget aria role              |
| AriaRoleWindow             | typed window aria role              |

In addition, the following arrays are exported:

| Name                       | Description                            |
| -------------------------- | -------------------------------------- |
| ariaAttributes             | array of aria attributes               |
| ariaAttributesDragAndDrop  | array of drag-and-drop aria attributes |
| ariaAttributesGlobal       | array of global aria attributes        |
| ariaAttributesLiveRegion   | array of live region attributes        |
| ariaAttributesRelationship | array of relationship aria attributes  |
| ariaAttributesWidget       | array of widget aria attributes        |
| ariaRoles                  | array of aria roles                    |
| ariaRolesComposite         | array of composite aria roles          |
| ariaRolesDocumentStructure | array of document structure aria roles |
| ariaRolesLandmark          | array of landmark aria roles           |
| ariaRolesLiveRegion        | array of live region aria roles        |
| ariaRolesWidget            | array of widget aria roles             |
| ariaRolesWindow            | array of window aria roles             |

## Resources

For more resources on WAI-ARIA:

- [https://www.w3.org/WAI/standards-guidelines/aria](https://www.w3.org/WAI/standards-guidelines/aria)
- [https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)
