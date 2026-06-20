/** @type {import("snowpack").SnowpackUserConfig } */
const path = require('path');
const fs = require('fs');

const VIRTUALIZED_PACKAGES = [
  'prosemirror-commands',
  'prosemirror-history',
  'prosemirror-inputrules',
  'prosemirror-keymap',
  'prosemirror-model',
  'prosemirror-state',
  'prosemirror-view',
  'prosemirror-transform',
  'w3c-keyname'
];

const prosemirrorResolvePlugin = {
  name: 'resolve-prosemirror',
  resolveId(source, importer) {
    if (importer && importer.startsWith('\0virtual:')) {
      return null;
    }
    for (const pkgName of VIRTUALIZED_PACKAGES) {
      if (source === pkgName || source.includes(`/node_modules/${pkgName}/`) || (source.startsWith('snowpack-wrap:') && source.includes(`/${pkgName}/`))) {
        if (source.includes('/style/') || (source.includes('/') && !source.endsWith('/dist/index.es.js') && !source.endsWith('/dist/index.js') && !source.endsWith('/index.es.js') && !source.endsWith('/index.js') && !source.startsWith('snowpack-wrap:'))) {
          continue;
        }
        return `\0virtual:${pkgName}`;
      }
    }
    return null;
  },
  load(id) {
    if (id.startsWith('\0virtual:')) {
      const pkgName = id.substring(9);
      let pkgDir = path.resolve(__dirname, 'node_modules', pkgName);
      if (!fs.existsSync(pkgDir)) {
        pkgDir = path.resolve(__dirname, '../../node_modules', pkgName);
      }
      const pkgJsonPath = path.join(pkgDir, 'package.json');
      if (fs.existsSync(pkgJsonPath)) {
        const pkgJson = require(pkgJsonPath);
        const targetFile = pkgJson.module || pkgJson.main || 'dist/index.js';
        const absoluteTarget = path.resolve(pkgDir, targetFile);
        const code = `
          export * from ${JSON.stringify(absoluteTarget)};
          import * as named from ${JSON.stringify(absoluteTarget)};
          export default named;
        `;
        return code;
      }
    }
    return null;
  }
};

module.exports = {
  mount: {
    'demo/esm': '/',
    'src/img': '/img',
    src: '/dist',
  },
  devOptions: {
    port: 8080,
  },
  alias: {
    '@': './src',
    '@t': './types',
  },
  workspaceRoot: '../../',
  packageOptions: {
    rollup: {
      plugins: [prosemirrorResolvePlugin],
    },
  },
};
