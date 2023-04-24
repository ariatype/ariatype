<div align="center">
  <picture>
    <source
      media="(prefers-color-scheme: dark)"
      srcset="https://raw.githubusercontent.com/dddstack/ariatype/main/assets/media/banner-dark.svg"
    >
    <source
      media="(prefers-color-scheme: light)"
      srcset="https://raw.githubusercontent.com/dddstack/ariatype/main/assets/media/banner-light.svg"
    >
    <img
      alt="ariatype"
      height="140"
      style="max-width: 100%;"
      src="https://raw.githubusercontent.com/dddstack/ariatype/main/assets/media/banner-light.svg" width="400"
    >
  </picture>
</div>

<h3 align="center" borderBottom="none">
  TypeScript type definitions for WAI-ARIA accessibility.
</h3>

<div align="center">
  <img alt="Version" src="https://img.shields.io/npm/v/@dddstack/ariatype?color=aqua&style=for-the-badge">
  <img alt="License" src="https://img.shields.io/github/license/dddstack/ariatype?style=for-the-badge">
</div>

## Installation

```bash
npm install @dddstack/ariatype -D
# or
yarn add @dddstack/ariatype -D
# or
pnpm add @dddstack/ariatype -D
```

## Usage

```ts
import { AriaTypes } from "@dddstack/ariatype";

const aria: AriaTypes = {
  "aria-atomic": "true",
  role: "alert"
};
```

### Requiring Aria Attributes

```ts
import { PartiallyRequiredAriaTypes } from "@dddstack/ariatype";

const aria: PartiallyRequiredAriaTypes<"aria-atomic" | "role"> = {
  "aria-atomic": "true",
  role: "alert"
};
```

## Packages

`@dddstack/ariatype` is a bundle of multiple packages:

- [`@dddstack/ariatype-aria-attributes`](https://github.com/dddstack/ariatype/tree/main/packages/ariatype-aria-attributes):
  - `ariaAttributes`: all aria attributes
  - `AriaAttribute`: aria attribute type
  - `AriaAttributes`: aria attributes type
- [`@dddstack/ariatype-aria-attributes-drag-and-drop`](https://github.com/dddstack/ariatype/tree/main/packages/ariatype-aria-attributes-drag-and-drop):
  - `ariaAttributesDragAndDrop`: all drag-and-drop aria attributes
  - `AriaAttributeDragAndDrop`: drag-and-drop aria attribute type
  - `AriaAttributesDragAndDrop`: drag-and-drop aria attributes type
- [`@dddstack/ariatype-aria-attributes-global`](https://github.com/dddstack/ariatype/tree/main/packages/ariatype-aria-attributes-global):
  - `ariaAttributesGlobal`: all global aria attributes
  - `AriaAttributeGlobal`: global aria attribute type
  - `AriaAttributesGlobal`: global aria attributes type
- [`@dddstack/ariatype-aria-attributes-live-region`](https://github.com/dddstack/ariatype/tree/main/packages/ariatype-aria-attributes-live-region):
  - `ariaAttributesLiveRegion`: all live region aria attributes
  - `AriaAttributeLiveRegion`: live region aria attribute type
  - `AriaAttributesLiveRegion`: live region aria attributes type
- [`@dddstack/ariatype-aria-attributes-relationship`](https://github.com/dddstack/ariatype/tree/main/packages/ariatype-aria-attributes-relationship):
  - `ariaAttributesRelationship`: all relationship aria attributes
  - `AriaAttributeRelationship`: relationship aria attribute type
  - `AriaAttributesRelationship`: relationship aria attributes type
- [`@dddstack/ariatype-aria-attributes-widget`](https://github.com/dddstack/ariatype/tree/main/packages/ariatype-aria-attributes-widget):
  - `ariaAttributesWidget`: all widget aria attributes
  - `AriaAttributeWidget`: widget aria attribute type
  - `AriaAttributesWidget`: widget aria attributes type
- [`@dddstack/ariatype-aria-roles`](https://github.com/dddstack/ariatype/tree/main/packages/ariatype-aria-roles):
  - `ariaRoles`: all aria roles
  - `AriaRole`: aria roles type
  - `AriaRoles`: aria roles type
- [`@dddstack/ariatype-aria-roles-composite`](https://github.com/dddstack/ariatype/tree/main/packages/ariatype-aria-roles-composite):
  - `ariaRolesComposite`: all composite aria roles
  - `AriaRoleComposite`: composite aria roles type
  - `AriaRolesComposite`: composite aria roles type
- [`@dddstack/ariatype-aria-roles-document-structure`](https://github.com/dddstack/ariatype/tree/main/packages/ariatype-aria-roles-document-structure):
  - `ariaRolesDocumentStructure`: all document structure aria roles
  - `AriaRoleDocumentStructure`: document structure aria roles type
  - `AriaRolesDocumentStructure`: document structure aria roles type
- [`@dddstack/ariatype-aria-roles-generic`](https://github.com/dddstack/ariatype/tree/main/packages/ariatype-aria-roles-generic):
  - `ariaRolesGeneric`: all generic aria roles
  - `AriaRoleGeneric`: generic aria roles type
  - `AriaRolesGeneric`: generic aria roles type
- [`@dddstack/ariatype-aria-roles-landmark`](https://github.com/dddstack/ariatype/tree/main/packages/ariatype-aria-roles-landmark):
  - `ariaRolesLandmark`: all landmark aria roles
  - `AriaRoleLandmark`: landmark aria roles type
  - `AriaRolesLandmark`: landmark aria roles type
- [`@dddstack/ariatype-aria-roles-live-region`](https://github.com/dddstack/ariatype/tree/main/packages/ariatype-aria-roles-live-region):
  - `ariaRolesLiveRegion`: all live region aria roles
  - `AriaRoleLiveRegion`: live region aria roles type
  - `AriaRolesLiveRegion`: live region aria roles type
- [`@dddstack/ariatype-aria-roles-widget`](https://github.com/dddstack/ariatype/tree/main/packages/ariatype-aria-roles-widget):
  - `ariaRolesWidget`: all widget aria roles
  - `AriaRoleWidget`: widget aria roles type
  - `AriaRolesWidget`: widget aria roles type
- [`@dddstack/ariatype-aria-roles-window`](https://github.com/dddstack/ariatype/tree/main/packages/ariatype-aria-roles-window):
  - `ariaRolesWindow`: all window aria roles
  - `AriaRoleWindow`: window aria roles type
  - `AriaRolesWindow`: window aria roles type
