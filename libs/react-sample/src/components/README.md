# Components

All components must reside in the "components" folder, with the exception of [providers](./providers/README.md) and [primitives](./primitives/README.md), which **MUST** be placed in their respective subfolders.

Page components **SHOULD** also be located in a separate directory, although no specific convention is established in this regard, as some frameworks may have their own conventions.

## File struction conventions

- Each component's name **MUST** be in PascalCase.
- Each component **MUST** have its own directory with a name matching the component's name.
- Each component's directory **MUST** include a file named after the component containing the component's code.
- Each component's directory **COULD** contain additional files.

Following this convention, the file structure of a _List_ component could look like this:

```
components
└── List
    ├── List.css
    ├── List.tsx
    └── ListItem.tsx
```
