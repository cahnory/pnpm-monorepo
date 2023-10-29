# Components

The "components" folder encompasses subfolders for each of the following types: [providers](./providers/README.md), [primitives](./primitives/README.md) and [custom](./custom/README.md). Each component **MUST** be located within one of these subfolders.

Page components **SHOULD** also be located in a separate directory, although no specific convention is established in this regard, as some frameworks may have their own conventions.

## File structure conventions

- Each component's name **MUST** be in PascalCase.
- Each component **MUST** have its own directory with a name matching the component's name.
- Each component's directory **MUST** include a file named after the component containing the component's code.
- Each component's directory **COULD** contain additional files.

Following this convention, the file structure of a _List_ component could look like this:

```
components
└── custom
    └── List
        ├── List.css.ts
        ├── List.tsx
        └── ListItem.tsx
```
