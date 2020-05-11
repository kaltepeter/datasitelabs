const toTypeScript = require('json-schema-to-typescript');
const fs = require('fs');

toTypeScript
    .compileFromFile('libs/azure-deploy/src/builders/azure-deploy/schema.json')
    .then(ts => fs.writeFileSync('libs/azure-deploy/src/builders/azure-deploy/schema.d.ts', ts));
