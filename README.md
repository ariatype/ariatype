# ddddurk/monorepo

Monorepo template with actions, changesets, droplet, renovate, turborepo, typescript, vitest, and yarn workspaces.

## Actions

[GitHub Actions](https://github.com/features/actions) are used to automate status checks (`build`, `lint`, `test`, `typecheck`) and handle publishing, versioning, and snapshots.

- `publish.yml`: GitHub Action for publishing packages
- `snapshot.yml`: GitHub Action for snapshot releases
- `status.yml`: GitHub Action for status checks

For `publish.yml` and `snapshot.yml`, make sure to add a `NPM_TOKEN` to the repository settings' action variables.

## Changesets

[Changesets](https://github.com/changesets/changesets) is used for publishing and versioning.

`publish.yml` will handle publishing packages; however, a changeset must be generated to initialize any new releases:

`yarn chore:changeset`

### Snapshot Releases

To create a snapshot release, create a `<branch_name>` branch and generate a changeset. Then, run the `snapshot.yml` GitHub Action on `<branch_name>`.

For more on snapshot releases, read the [Changesets documentation](https://github.com/changesets/changesets/blob/main/docs/snapshot-releases.md)

## @ddddurk/cli

Configuration files pulled from [`@ddddurk/cli`](https://github.com/ddddurk/cli) enable [commitlint](https://commitlint.js.org/#/), [eslint](https://eslint.org), [husky](https://typicode.github.io/husky), [lint-staged](https://github.com/okonet/lint-staged), and [prettier](https://prettier.io).

## @dddstack/droplet

[`@dddstack/droplet`](https://github.com/dddstack/droplet) is used for code generation to create packages within the `packages` directory.

### Creating a New Package

To create a new package, run:

`yarn chore:droplet template`

- Droplet temple?: `/templates/package/{{droplet}}`
- Droplet to?: `./packages/<package-name>`
- Droplet value?: `<package-name>`

## Eslint and Prettier

To lint the monorepo's files, run:

`yarn chore:lint`

## Renovate

[Renovate](https://www.mend.io/renovate) automates dependency updates.

By default, after enabling the Renovate bot, it will update on the first day of the month. This can be configured within `renovate.json`.

## Turborepo

[Turborepo](https://turbo.build) is an incremental bundler and build system optimized for JavaScript and TypeScript. This monorepo is a yarn workspace with `turbo` enabled.

### Building Packages

To build all packages in the workspace, run:

```bash
yarn build
```

### Typechecking Packages

To typecheck all packages in the workspace, run:

```base
yarn test:typecheck
```

## Vitest

[Vitest](https://vitest.dev) is used for running tests.

Add any tests inside a `test` folder. To run all tests, run:

`yarn test`
