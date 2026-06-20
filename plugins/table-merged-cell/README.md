# Zen Composer : Table Merged Cell Plugin

> This is a plugin of [Zen Composer](https://github.com/nhn/zen-composer/tree/master/apps/editor) to merge table columns.

[![npm version](https://img.shields.io/npm/v/@fablepress/zen-composer-plugin-table-merged-cell.svg)](https://www.npmjs.com/package/@fablepress/zen-composer-plugin-table-merged-cell)

![table-merged-cell](https://user-images.githubusercontent.com/37766175/121814008-c0232480-cca9-11eb-8611-7ccc0fe8707f.png)

## 🚩 Table of Contents

- [Bundle File Structure](#-bundle-file-structure)
- [Usage npm](#-usage-npm)
- [Usage CDN](#-usage-cdn)

## 📁 Bundle File Structure

### Files Distributed on npm

```
- node_modules/
  - @fablepress/
    - editor-plugin-table-merged-cell/
      - dist/
        - zen-composer-plugin-table-merged-cell.js
        - zen-composer-plugin-table-merged-cell.css
```

### Files Distributed on CDN

The bundle files include all dependencies of this plugin.

```
- uicdn.toast.com/
  - editor-plugin-table-merged-cell/
    - latest/
      - zen-composer-plugin-table-merged-cell.js
      - zen-composer-plugin-table-merged-cell.min.js
      - zen-composer-plugin-table-merged-cell.css
      - zen-composer-plugin-table-merged-cell.min.css
```

## 📦 Usage npm

To use the plugin, [`@fablepress/zen-composer`](https://github.com/nhn/zen-composer/tree/master/apps/editor) must be installed.

> Ref. [Getting Started](https://github.com/nhn/zen-composer/blob/master/docs/en/getting-started.md)

### Install

```sh
$ npm install @fablepress/zen-composer-plugin-table-merged-cell
```

### Import Plugin

#### ES Modules

```js
import '@fablepress/zen-composer-plugin-table-merged-cell/dist/zen-composer-plugin-table-merged-cell.css';

import tableMergedCell from '@fablepress/zen-composer-plugin-table-merged-cell';
```

#### CommonJS

```js
require('@fablepress/zen-composer-plugin-table-merged-cell/dist/zen-composer-plugin-table-merged-cell.css');

const tableMergedCell = require('@fablepress/zen-composer-plugin-table-merged-cell');
```

### Create Instance

#### Basic

```js
import '@fablepress/zen-composer-plugin-table-merged-cell/dist/zen-composer-plugin-table-merged-cell.css';

import Editor from '@fablepress/zen-composer';
import tableMergedCell from '@fablepress/zen-composer-plugin-table-merged-cell';

const editor = new Editor({
  // ...
  plugins: [tableMergedCell]
});
```

#### With Viewer

```js
import '@fablepress/zen-composer-plugin-table-merged-cell/dist/zen-composer-plugin-table-merged-cell.css';

import Viewer from '@fablepress/zen-composer/dist/zen-composer-viewer';
import tableMergedCell from '@fablepress/zen-composer-plugin-table-merged-cell';

const viewer = new Viewer({
  // ...
  plugins: [tableMergedCell]
});
```

or

```js
import '@fablepress/zen-composer-plugin-table-merged-cell/dist/zen-composer-plugin-table-merged-cell.css';

import Editor from '@fablepress/zen-composer';
import tableMergedCell from '@fablepress/zen-composer-plugin-table-merged-cell';

const viewer = Editor.factory({
  // ...
  plugins: [tableMergedCell],
  viewer: true
});
```

## 🗂 Usage CDN

To use the plugin, the CDN files(CSS, Script) of `@fablepress/zen-composer` must be included.

### Include Files

```html
...
<head>
  ...
  <link
    rel="stylesheet"
    href="https://uicdn.toast.com/editor-plugin-table-merged-cell/latest/zen-composer-plugin-table-merged-cell.min.css"
  />
  ...
</head>
<body>
  ...
  <!-- Editor -->
  <script src="https://uicdn.toast.com/editor/latest/zen-composer-all.min.js"></script>
  <!-- Editor's Plugin -->
  <script src="https://uicdn.toast.com/editor-plugin-table-merged-cell/latest/zen-composer-plugin-table-merged-cell.min.js"></script>
  ...
</body>
...
```

### Create Instance

#### Basic

```js
const { Editor } = zenComposer;
const { tableMergedCell } = Editor.plugin;

const editor = new Editor({
  // ...
  plugins: [tableMergedCell]
});
```

#### With Viewer

```js
const Viewer = zenComposer.Editor;
const { tableMergedCell } = Viewer.plugin;

const viewer = new Viewer({
  // ...
  plugins: [tableMergedCell]
});
```

or

```js
const { Editor } = zenComposer;
const { tableMergedCell } = Editor.plugin;

const viewer = Editor.factory({
  // ...
  plugins: [tableMergedCell],
  viewer: true
});
```
