# @ariatype/ariatype

Ariatype provides TypeScript with complete type definitions for [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria) accessibility. The goal of this project is to further enhance developer experience and understanding of WAI-ARIA accessibility best practices.

## Installation

```bash
npm install @ariatype/ariatype -D
```

## Usage

```ts
import { AriaTypes } from "@ariatype/ariatype";

const aria: AriaTypes = {
  "aria-atomic": "true",
  role: "alert",
};
```

## Requiring Aria Attributes

Use `PartiallyRequiredAriaTypes` to require WAI-Attributes for a TypeScript type:

```ts
import type { PartiallyRequiredAriaTypes } from "@ariatype/ariatype";

// Valid
const aria: PartiallyRequiredAriaTypes<"aria-atomic" | "role"> = {
  "aria-atomic": "true",
  role: "alert",
};

// Invalid
// Property "aria-atomic" missing
const aria: PartiallyRequiredAriaTypes<"aria-atomic" | "role"> = {
  role: "alert",
};
```

### Example Use Case

The following example shows how Ariatype may be used to enforce type-safe WAI-ARIA attributes on a React component using `PartiallyRequiredAriaTypes`:

```tsx
import type { PartiallyRequiredAriaTypes } from "@ariatype/ariatype";
import type { ReactNode } from "react";

interface Props extends
  PartiallyRequiredAriaTypes<"aria-atomic" | "role"> {
    children: ReactNode;
  };

export const Component = ({ children, ...props }: Props) =>
  <div {...props}>{children}</div>;

// Valid
<Component aria-atomic="true" role="alert">Component</Component>

// Missing the following properties from type 'Props':
// "aria-atomic", role
<Component>Component</Component>
```

## Packages

Ariatype is a bundle of multiple packages:

- [`@ariatype/aria-attributes`](https://github.com/ariatype/ariatype/tree/main/@ariatype/aria-attributes):
  - `ariaAttributes`: all aria attributes
  - `AriaAttribute`: aria attribute type
  - `AriaAttributes`: aria attributes type
- [`@ariatype/aria-attributes-drag-and-drop`](https://github.com/ariatype/ariatype/tree/main/@ariatype/aria-attributes-drag-and-drop):
  - `ariaAttributesDragAndDrop`: all drag-and-drop aria attributes
  - `AriaAttributeDragAndDrop`: drag-and-drop aria attribute type
  - `AriaAttributesDragAndDrop`: drag-and-drop aria attributes type
- [`@ariatype/aria-attributes-global`](https://github.com/ariatype/ariatype/tree/main/@ariatype/aria-attributes-global):
  - `ariaAttributesGlobal`: all global aria attributes
  - `AriaAttributeGlobal`: global aria attribute type
  - `AriaAttributesGlobal`: global aria attributes type
- [`@ariatype/aria-attributes-live-region`](https://github.com/ariatype/ariatype/tree/main/@ariatype/aria-attributes-live-region):
  - `ariaAttributesLiveRegion`: all live region aria attributes
  - `AriaAttributeLiveRegion`: live region aria attribute type
  - `AriaAttributesLiveRegion`: live region aria attributes type
- [`@ariatype/aria-attributes-relationship`](https://github.com/ariatype/ariatype/tree/main/@ariatype/aria-attributes-relationship):
  - `ariaAttributesRelationship`: all relationship aria attributes
  - `AriaAttributeRelationship`: relationship aria attribute type
  - `AriaAttributesRelationship`: relationship aria attributes type
- [`@ariatype/aria-attributes-widget`](https://github.com/ariatype/ariatype/tree/main/@ariatype/aria-attributes-widget):
  - `ariaAttributesWidget`: all widget aria attributes
  - `AriaAttributeWidget`: widget aria attribute type
  - `AriaAttributesWidget`: widget aria attributes type
- [`@ariatype/aria-roles`](https://github.com/ariatype/ariatype/tree/main/@ariatype/aria-roles):
  - `ariaRoles`: all aria roles
  - `AriaRole`: aria roles type
  - `AriaRoles`: aria roles type
- [`@ariatype/aria-roles-composite`](https://github.com/ariatype/ariatype/tree/main/@ariatype/aria-roles-composite):
  - `ariaRolesComposite`: all composite aria roles
  - `AriaRoleComposite`: composite aria roles type
  - `AriaRolesComposite`: composite aria roles type
- [`@ariatype/aria-roles-document-structure`](https://github.com/ariatype/ariatype/tree/main/@ariatype/aria-roles-document-structure):
  - `ariaRolesDocumentStructure`: all document structure aria roles
  - `AriaRoleDocumentStructure`: document structure aria roles type
  - `AriaRolesDocumentStructure`: document structure aria roles type
- [`@ariatype/aria-roles-generic`](https://github.com/ariatype/ariatype/tree/main/@ariatype/aria-roles-generic):
  - `ariaRolesGeneric`: all generic aria roles
  - `AriaRoleGeneric`: generic aria roles type
  - `AriaRolesGeneric`: generic aria roles type
- [`@ariatype/aria-roles-landmark`](https://github.com/ariatype/ariatype/tree/main/@ariatype/aria-roles-landmark):
  - `ariaRolesLandmark`: all landmark aria roles
  - `AriaRoleLandmark`: landmark aria roles type
  - `AriaRolesLandmark`: landmark aria roles type
- [`@ariatype/aria-roles-live-region`](https://github.com/ariatype/ariatype/tree/main/@ariatype/aria-roles-live-region):
  - `ariaRolesLiveRegion`: all live region aria roles
  - `AriaRoleLiveRegion`: live region aria roles type
  - `AriaRolesLiveRegion`: live region aria roles type
- [`@ariatype/aria-roles-widget`](https://github.com/ariatype/ariatype/tree/main/@ariatype/aria-roles-widget):
  - `ariaRolesWidget`: all widget aria roles
  - `AriaRoleWidget`: widget aria roles type
  - `AriaRolesWidget`: widget aria roles type
- [`@ariatype/aria-roles-window`](https://github.com/ariatype/ariatype/tree/main/@ariatype/aria-roles-window):
  - `ariaRolesWindow`: all window aria roles
  - `AriaRoleWindow`: window aria roles type
  - `AriaRolesWindow`: window aria roles type

## Resources

- [https://www.w3.org/WAI/standards-guidelines/aria](https://www.w3.org/WAI/standards-guidelines/aria)
