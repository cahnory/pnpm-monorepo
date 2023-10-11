# Provider components

The "providers" folder exclusively contains React components designed to offer and manage shared data or functionalities, often through context, for access by other components in the application.

## Conventions

- Each provider component **MUST** follows [regular components conventions](../README.md#conventions)
- Each provider component's name **MUST** ends with "Provider"

Following this convention, the file structure of an _Auth_ provider component could look like this:

```
components
└── providers
    └── AuthProvider
        └── AuthProvider.tsx
```
