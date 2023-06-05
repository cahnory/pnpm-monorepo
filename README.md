# PNPm Monorepo Boilerplate <!-- omit from toc -->

Template for Monorepo with PNPm, TypeScript, ESLint, Prettier, and TurboRepo.

- [1. Initialization](#1-initialization)
- [2. Package Organization: "apps" vs "packages"](#2-package-organization-apps-vs-packages)
  - [2.1. Adding a New App](#21-adding-a-new-app)
  - [2.2. Adding a New Package](#22-adding-a-new-package)
- [3. Scripts](#3-scripts)
  - [3.1. Package Scripts](#31-package-scripts)
    - [3.1.1. build](#311-build)
    - [3.1.2. dev](#312-dev)
    - [3.1.3. test](#313-test)
      - [3.1.3.1. test:lint](#3131-testlint)
      - [3.1.3.2. test:types](#3132-testtypes)
      - [3.1.3.3. test:unit](#3133-testunit)
  - [3.2. Root-Level Scripts](#32-root-level-scripts)
- [4. VSCode integration](#4-vscode-integration)
- [5. Troubleshooting](#5-troubleshooting)
  - [5.1. IDE issues or project malfunctioning? Try `pnpm prepare`!](#51-ide-issues-or-project-malfunctioning-try-pnpm-prepare)
  - [5.2. Unable to resolve path to module… eslint("import/no-unresolved")](#52-unable-to-resolve-path-to-module-eslintimportno-unresolved)
  - [5.3. Packages types are not updated](#53-packages-types-are-not-updated)


## 1. Initialization

```bash
git clone https://github.com/cahnory/pnpm-monorepo.git <your-project>
cd <your-project>
pnpm install
```

## 2. Package Organization: "apps" vs "packages"

In our monorepo, we have two main directories for organizing packages: "apps" and "packages". It's important to note that the packages located in the "apps" directory are not intended to be imported by other packages within the monorepo. These packages typically represent standalone applications or executables.

On the other hand, the packages residing in the "packages" directory are specifically designed to be imported and used by other packages. They provide reusable components, libraries, or modules that facilitate code sharing and maintainability across different parts of the monorepo.

### 2.1. Adding a New App

To add a new app:
1. duplicate the *@pnpm-workspace/sample-app* package found in the "apps/sample" directory.

2. Rename the duplicated package to your desired new package name.

3. Update the "name" property in the package.json file to match the new package name.

    ```json
    {
      "name": "@pnpm-workspace/<new-app-name>"
    }
    ```

### 2.2. Adding a New Package

To add a new package:
1. duplicate the *@pnpm-workspace/sample-pkg* package found in the "packages/sample" directory.

2. Rename the duplicated package to your desired new package name.

3. Update the "name" property in the package.json file to match the new package name.

    ```json
    {
      "name": "@pnpm-workspace/<new-package-name>"
    }
    ```

4. Include a path reference for the package in the root-level "tsconfig.base.json" file. To do this, add a new property to the "paths" object within the "compilerOptions" section. Use the name of the package as the key and provide an array with the path to the package as the corresponding value:

    ```json
    {
      "compilerOptions": {
        "paths": {
          "@pnpm-workspace/<new-package>": ["./packages/<new-package-name>"]
        }
      }
    }
    ```

## 3. Scripts
  
### 3.1. Package Scripts

#### 3.1.1. build
The build script is used to compile the source code of the package. It generates the necessary output files, such as transpiled JavaScript files or bundled assets. Running this script ensures that the package is built and ready for deployment or usage.

#### 3.1.2. dev
The dev script is helpful during the development phase. It allows developers to watch the package's source files for changes and automatically triggers a rebuild whenever a file is modified. This feature provides a convenient workflow by keeping the package up to date during development.

#### 3.1.3. test
The test script is responsible for running various tests associated with the package. It validates the functionality and quality of the package. The test script further divides its functionality into three sub-scripts: lint, types, and unit.

##### 3.1.3.1. test:lint
The test:lint script checks that the package's source code adheres to the eslint rules defined for the monorepo. It ensures consistent code style, enforces best practices, and maintains code quality throughout the package.

##### 3.1.3.2. test:types
The test:types script verifies that the package's source code is free from TypeScript type errors. It performs static type checking, ensuring type safety within the package. Running this script helps catch potential type-related issues before runtime.

##### 3.1.3.3. test:unit
The test:unit script runs the package's unit tests. It validates the behavior of individual components, functions, or modules within the package. This script ensures that the package's internal units are functioning as expected.

### 3.2. Root-Level Scripts
The monorepo also includes root-level scripts with similar functionality as their package-level counterparts. The key distinction is that these scripts can be executed across all packages within the monorepo simultaneously, providing a unified and efficient workflow. Running the root-level scripts allows you to perform the respective actions (build, dev, test) on multiple packages within the monorepo in a single operation. This saves time and ensures consistency across the entire codebase.

## 4. VSCode integration

The monorepo includes a VSCode configuration file that optimizes code formatting and enables automatic formatting upon saving files. Additionally, a curated list of recommended extensions is provided, including tools and language-specific extensions essential for code formatting and linting. By utilizing this configuration and installing the recommended extensions, developers can ensure consistent code style and enhance productivity within the monorepo.

To view the recommended extensions for the monorepo, paste **workbench.extensions.action.showRecommendedExtensions** in the command launcher (**F1**). This will open the Recommended Extensions view, where you can see the curated list of extensions. From there, you can easily install any missing extensions.

## 5. Troubleshooting

### 5.1. IDE issues or project malfunctioning? Try `pnpm prepare`!

If you encounter errors in your IDE or if your project is not functioning properly, it is likely that an event such as a branch change, stash application, pull, or repository reset has occurred. In such cases, the recommended first step is to execute the pnpm prepare command:

```bash
pnpm run prepare
```

The pnpm prepare command is designed to reinstall project dependencies and perform any necessary build or configuration tasks. This ensures that your project is in sync with any potential modifications that have taken place.

### 5.2. Unable to resolve path to module… eslint("import/no-unresolved")

When trying to import a package from the repository, if you encounter the error message:
> Unable to resolve path to module "@pnpm-workspace/\<module-name\>". eslint("import/no-unresolved")

it is an indication that the package may need to be built or rebuilt. Execute the pnpm prepare command:

```bash
pnpm run prepare
```

This could happen because an event such as a branch change, stash application, pull, or repository reset has occurred or if you're making modification to source files without runing the dev script.

### 5.3. Packages types are not updated

If you're facing difficulties with the types of a package in the monorepo not updating as expected, it's likely because the package is not referenced in the tsconfig.base.ts file. To resolve this issue, refer to the [Adding a New Package](#22-adding-a-new-package) section of this README, which outlines the necessary steps to add a new package to the monorepo.