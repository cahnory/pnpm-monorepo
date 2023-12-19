# PNPm Monorepo Boilerplate <!-- omit from toc -->

Template for Monorepo with PNPm, TypeScript, ESLint, Prettier, and TurboRepo.

- [1. Initialization](#1-initialization)
- [2. Package organization: "apps" vs "libs"](#2-package-organization-apps-vs-libs)
  - [2.1. Adding a new app](#21-adding-a-new-app)
  - [2.2. Adding a new lib](#22-adding-a-new-lib)
- [3. VSCode integration](#3-vscode-integration)
  - [3.1. Recommended extensions](#31-recommended-extensions)
  - [3.2. Ensuring consistent VSCode configuration across packages](#32-ensuring-consistent-vscode-configuration-across-packages)
  - [3.3. Settings](#33-settings)
    - [3.3.1. Readonly files](#331-readonly-files)
- [4. Github workflows](#4-github-workflows)
  - [4.1. Continuous integration](#41-continuous-integration)
- [5. Scripts](#5-scripts)
  - [5.1. Package scripts](#51-package-scripts)
    - [5.1.1. build](#511-build)
    - [5.1.2. dev](#512-dev)
    - [5.1.3. lint](#513-lint)
    - [5.1.4. lint:format](#514-lintformat)
    - [5.1.5. lint:semantic](#515-lintsemantic)
    - [5.1.6. lint:types](#516-linttypes)
    - [5.1.7. lint:fix](#517-lintfix)
    - [5.1.8. lint:fix:format](#518-lintfixformat)
    - [5.1.9. lint:fix:semantic](#519-lintfixsemantic)
    - [5.1.10. test](#5110-test)
    - [5.1.11. test:unit](#5111-testunit)
  - [5.2. Root-Level scripts](#52-root-level-scripts)
    - [5.2.1. build](#521-build)
    - [5.2.2. commit](#522-commit)
    - [5.2.3. dev](#523-dev)
    - [5.2.4. lint](#524-lint)
    - [5.2.5. lint:format](#525-lintformat)
    - [5.2.6. lint:semantic](#526-lintsemantic)
    - [5.2.7. lint:types](#527-linttypes)
    - [5.2.8. lint:commits](#528-lintcommits)
    - [5.2.9. lint:rebase](#529-lintrebase)
    - [5.2.10. lint:fix](#5210-lintfix)
    - [5.2.11. lint:fix:format](#5211-lintfixformat)
    - [5.2.12. lint:fix:semantic](#5212-lintfixsemantic)
    - [5.2.13. test](#5213-test)
    - [5.2.14. test:unit](#5214-testunit)
- [6. Troubleshooting](#6-troubleshooting)
  - [6.1. IDE issues or project malfunctioning? Try `pnpm prepare`!](#61-ide-issues-or-project-malfunctioning-try-pnpm-prepare)
  - [6.2. Unable to resolve path to module… eslint("import/no-unresolved")](#62-unable-to-resolve-path-to-module-eslintimportno-unresolved)

## 1. Initialization

```bash
git clone https://github.com/cahnory/pnpm-monorepo.git <your-project>
cd <your-project>
pnpm install
```

## 2. Package organization: "apps" vs "libs"

In our monorepo, we have two main directories for organizing packages: "apps" and "libs". It's important to note that the packages located in the "apps" directory are not intended to be imported by other packages within the monorepo. These packages typically represent standalone applications or executables.

On the other hand, the packages residing in the "libs" directory are specifically designed to be imported and used by other packages. They provide reusable components, libraries, or modules that facilitate code sharing and maintainability across different parts of the monorepo.

### 2.1. Adding a new app

To add a new app:

1. duplicate one of the sample app package found in the "apps" directory.

2. Rename the duplicated package to your desired new package name.

3. Update the "name" property in the package.json file to match the new package name.

   ```json
   {
     "name": "@pnpm-monorepo/<new-app-name>"
   }
   ```

### 2.2. Adding a new lib

To add a new lib:

1. duplicate one of the sample lib package found in the "libs" directory.

2. Rename the duplicated package to your desired new package name.

3. Update the "name" property in the package.json file to match the new package name.

   ```json
   {
     "name": "@pnpm-monorepo/<new-package-name>"
   }
   ```

## 3. VSCode integration

The monorepo includes a VSCode configuration file that optimizes code formatting and enables automatic formatting upon saving files. Additionally, a curated list of recommended extensions is provided, including tools and language-specific extensions essential for code formatting and linting. By utilizing this configuration and installing the recommended extensions, developers can ensure consistent code style and enhance productivity within the monorepo.

### 3.1. Recommended extensions

To view the recommended extensions for the monorepo, paste **workbench.extensions.action.showRecommendedExtensions** in the command launcher (**F1**). This will open the Recommended Extensions view, where you can see the curated list of extensions. From there, you can easily install any missing extensions.

### 3.2. Ensuring consistent VSCode configuration across packages

Each package contains a symbolic link `./vscode` that points to the root-level `./vscode` directory within the monorepo. This ensures that even if you open an individual package directly in VSCode (as opposed to opening the entire monorepo), you'll have a consistent VSCode configuration. This approach provides a uniform development environment across packages, reducing potential configuration discrepancies.

### 3.3. Settings

#### 3.3.1. Readonly files

Some files are marked as read-only using _files.readonlyInclude_ setting, preventing inadvertent modifications.

By default, the [configuration](./.vscode/settings.json) includes patterns targeting files and directories commonly generated during development, like "node_modules" and "build" directories for both apps and libraries:

```json
  "files.readonlyInclude": {
    "**/node_modules/**": true,
    "**/apps/*/build/**": true,
    "**/libs/*/build/**": true
  }
```

Extend this list to safeguard additional files as needed.

## 4. Github workflows

### 4.1. Continuous integration

The [Continuous integration workflow](.github/workflows/ci.yaml) consists of two primary jobs. The first, "Static Analysis," focuses on the static analysis of the code, checking various aspects such as typing, linting, formatting, and commit name consistency. This step ensures code quality independent of the OS and Node.js version.

The second job, "Runtime Compatibility," tests the project's compatibility across different environments. It runs on multiple Node.js versions on Ubuntu, a common deployment platform, and also includes MacOS and Windows. The goal is to ensure the project operates correctly during installation, building, and testing across various platforms, providing a consistent and reliable development experience for developers.

## 5. Scripts

### 5.1. Package scripts

#### 5.1.1. build

The _build_ script is used to compile the source code of the package. It generates the necessary output files, such as transpiled JavaScript files or bundled assets. Running this script ensures that the package is built and ready for deployment or usage.

#### 5.1.2. dev

The _dev_ script is helpful during the development phase. It allows developers to watch the package's source files for changes and automatically triggers a rebuild whenever a file is modified. This feature provides a convenient workflow by keeping the package up to date during development.

#### 5.1.3. lint

The _lint_ script is responsible for running various linters associated with the package. It divides its functionality into three sub-scripts: lint:format, lint:semantic, and lint:types.

#### 5.1.4. lint:format

The _lint:format_ script checks that the package's source code adheres to the prettier config defined for the monorepo. It ensures consistent code style throughout the package.

#### 5.1.5. lint:semantic

The _lint:semantic_ script checks that the package's source code adheres to the eslint rules defined for the monorepo. It enforces best practices, and maintains code quality throughout the package.

#### 5.1.6. lint:types

The _lint:types_ script verifies that the package's source code is free from TypeScript type errors. It performs static type checking, ensuring type safety within the package. Running this script helps catch potential type-related issues before runtime.

#### 5.1.7. lint:fix

The _lint:fix_ script attempts to fix all linters issues.

#### 5.1.8. lint:fix:format

The _lint:fix:format_ script attempts to automatically corrects any formatting/stylistic issues found in the package's source code, ensuring that it adheres to the prettier config defined for the monorepo.

#### 5.1.9. lint:fix:semantic

The _lint:fix:semantic_ script attempts to automatically fixes any code issues that do not adhere to the eslint rules defined for the monorepo.

#### 5.1.10. test

The _test_ script is responsible for running various tests associated with the package. It validates the functionality and quality of the package.

#### 5.1.11. test:unit

The _test:unit_ script runs the package's unit tests. It validates the behavior of individual components, functions, or modules within the package. This script ensures that the package's internal units are functioning as expected.

### 5.2. Root-Level scripts

The monorepo also includes root-level scripts with similar functionality as their package-level counterparts. The key distinction is that these scripts can be executed across all packages within the monorepo simultaneously, providing a unified and efficient workflow. Running the root-level scripts allows you to perform the respective actions (build, dev, test) on multiple packages within the monorepo in a single operation. This saves time and ensures consistency across the entire codebase.

#### 5.2.1. build

Run the _build_ script for all packages within the monorepo.

#### 5.2.2. commit

Commt using [commitizen](https://commitizen.github.io/cz-cli/). Get instant feedback on your commit message formatting and be prompted for required fields

#### 5.2.3. dev

Run the _dev_ script for all packages within the monorepo.

#### 5.2.4. lint

Run the _lint_ script on all packages within the monorepo followed by the root scripts lint:commits and lint:rebase.

#### 5.2.5. lint:format

Run the _lint:format_ script for all packages within the monorepo.

#### 5.2.6. lint:semantic

Run the _lint:semantic_ script for all packages within the monorepo.

#### 5.2.7. lint:types

Run the _lint:types_ script for all packages within the monorepo.

#### 5.2.8. lint:commits

The "lint:commits" script verifies the commit messages of the commits added by the current branch using the commitlint library. It performs linting or checks against predefined rules, specified in the commitlint configuration, to ensure that the commit messages follow specific guidelines or standards. This helps maintain consistency and clarity in the commit history of the project.

You can learn more about commitlint by visiting the [official commitlint documentation](https://commitlint.js.org/).

#### 5.2.9. lint:rebase

The _test:rebase_ script examines whether a rebase with the remote default branch is necessary. It analyzes the current branch's changes and compares them with the default branch in the remote repository. This check helps identify if the current branch is outdated or needs to be updated to incorporate the latest changes from the default branch. Performing the necessary rebase ensures that the branch remains up to date and avoids potential conflicts during future merges or pull requests.

#### 5.2.10. lint:fix

Run the _lint:fix_ script on all packages within the monorepo.

#### 5.2.11. lint:fix:format

Run the _lint:fix:format_ script for all packages within the monorepo.

#### 5.2.12. lint:fix:semantic

Run the _lint:fix:semantic_ script for all packages within the monorepo.

#### 5.2.13. test

Run the _test_ script on all packages within the monorepo.

#### 5.2.14. test:unit

Run the _test:unit_ script for all packages within the monorepo.

## 6. Troubleshooting

### 6.1. IDE issues or project malfunctioning? Try `pnpm prepare`!

If you encounter errors in your IDE or if your project is not functioning properly, it is likely that an event such as a branch change, stash application, pull, or repository reset has occurred. In such cases, the recommended first step is to execute the pnpm prepare command:

```bash
pnpm run prepare
```

The pnpm prepare command is designed to reinstall project dependencies and perform any necessary build or configuration tasks. This ensures that your project is in sync with any potential modifications that have taken place.

### 6.2. Unable to resolve path to module… eslint("import/no-unresolved")

When trying to import a package from the repository, if you encounter the error message:

> Unable to resolve path to module "@pnpm-monorepo/\<module-name\>". eslint("import/no-unresolved")

it is an indication that the package may need to be built or rebuilt. Execute the pnpm prepare command:

```bash
pnpm run prepare
```

This could happen because an event such as a branch change, stash application, pull, or repository reset has occurred or if you're making modification to source files without runing the dev script.
