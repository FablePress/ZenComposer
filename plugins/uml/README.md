# Zen Composer : UML Plugin

> This is a plugin of [Zen Composer](https://github.com/nhn/zen-composer/tree/master/apps/editor) to render UML.

[![npm version](https://img.shields.io/npm/v/@fablepress/zen-composer-plugin-uml.svg)](https://www.npmjs.com/package/@fablepress/zen-composer-plugin-uml)

![uml](https://user-images.githubusercontent.com/37766175/121813437-01fe9b80-cca7-11eb-966b-598333c8ec14.png)

## 🚩 Table of Contents

- [Bundle File Structure](#-bundle-file-structure)
- [Usage npm](#-usage-npm)
- [Usage CDN](#-usage-cdn)

## 📁 Bundle File Structure

### Files Distributed on npm

```
- node_modules/
  - @fablepress/
    - editor-plugin-uml/
      - dist/
        - zen-composer-plugin-uml.js
```

### Files Distributed on CDN

The bundle files include all dependencies of this plugin.

```
- uicdn.toast.com/
  - editor-plugin-uml/
    - latest/
      - zen-composer-plugin-uml.js
      - zen-composer-plugin-uml.min.js
```

## 📦 Usage npm

To use the plugin, [`@fablepress/zen-composer`](https://github.com/nhn/zen-composer/tree/master/apps/editor) must be installed.

> Ref. [Getting Started](https://github.com/nhn/zen-composer/blob/master/docs/en/getting-started.md)

### Install

```sh
$ npm install @fablepress/zen-composer-plugin-uml
```

### Import Plugin

#### ES Modules

```js
import uml from '@fablepress/zen-composer-plugin-uml';
```

#### CommonJS

```js
const uml = require('@fablepress/zen-composer-plugin-uml');
```

### Create Instance

#### Basic

```js
import Editor from '@fablepress/zen-composer';
import uml from '@fablepress/zen-composer-plugin-uml';

const editor = new Editor({
  // ...
  plugins: [uml]
});
```

#### With Viewer

```js
import Viewer from '@fablepress/zen-composer/dist/touszen-composer-viewer';
import uml from '@fablepress/zen-composer-plugin-uml';

const viewer = new Viewer({
  // ...
  plugins: [uml]
});
```

or

```js
import Editor from '@fablepress/zen-composer';
import uml from '@fablepress/zen-composer-plugin-uml';

const viewer = Editor.factory({
  // ...
  plugins: [uml],
  viewer: true
});
```

## 🗂 Usage CDN

To use the plugin, the CDN files(CSS, Script) of `@fablepress/zen-composer` must be included.

### Include Files

```html
...
<body>
  ...
  <!-- Editor -->
  <script src="https://uicdn.toast.com/editor/latest/zen-composer-all.min.js"></script>
  <!-- Editor's Plugin -->
  <script src="https://uicdn.toast.com/editor-plugin-uml/latest/zen-composer-plugin-uml.min.js"></script>
  ...
</body>
...
```

### Create Instance

#### Basic

```js
const { Editor } = zenComposer;
const { uml } = Editor.plugin;

const editor = new Editor({
  // ...
  plugins: [uml]
});
```

#### With Viewer

```js
const Viewer = zenComposer.Editor;
const { uml } = Viewer.plugin;

const viewer = new Viewer({
  // ...
  plugins: [uml]
});
```

or

```js
const { Editor } = zenComposer;
const { uml } = Editor.plugin;

const viewer = Editor.factory({
  // ...
  plugins: [uml],
  viewer: true
});
```

### [Optional] Use Plugin with Options

The `uml` plugin can set options when used. Just add the plugin function and options related to the plugin to the array(`[pluginFn, pluginOptions]`) and push them to the `plugins` option of the editor.

The following option is available in the `uml` plugin.

| Name          | Type     | Default Value                             | Description               |
| ------------- | -------- | ----------------------------------------- | ------------------------- |
| `rendererURL` | `string` | `'http://www.plantuml.com/plantuml/png/'` | URL of plant uml renderer |

```js
// ...

import Editor from '@fablepress/zen-composer';
import uml from '@fablepress/zen-composer-plugin-uml';

const umlOptions = {
  rendererURL: // ...
};

const editor = new Editor({
  // ...
  plugins: [[uml, umlOptions]]
});
```
