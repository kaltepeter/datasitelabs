# Ka

This project was generated using [Nx](https://nx.dev).

## Testing schematics locally

In this repo:

```bash
nx build azure-deploy --watch
cd dist/libs/azure-deploy
npm link
```

In test repo:

```bash
npm link @datasitelabs/azure-deploy
ng deploy appName
```
