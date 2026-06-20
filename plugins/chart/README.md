# Zen Composer : Chart Plugin

> This is a plugin of [Zen Composer](https://github.com/nhn/zen-composer/tree/master/apps/editor) to render chart.

[![npm version](https://img.shields.io/npm/v/@fablepress/zen-composer-plugin-chart.svg)](https://www.npmjs.com/package/@fablepress/zen-composer-plugin-chart)

![chart](https://user-images.githubusercontent.com/37766175/121808323-d8d41000-cc92-11eb-9117-b92a435c9b43.png)

## 🚩 Table of Contents

- [Bundle File Structure](#-bundle-file-structure)
- [Usage npm](#-usage-npm)
- [Usage CDN](#-usage-cdn)

## 📁 Bundle File Structure

### Files Distributed on npm

```
- node_modules/
  - @fablepress/
    - editor-plugin-chart/
      - dist/
        - zen-composer-plugin-chart.js
```

### Files Distributed on CDN

The bundle files include all dependencies of this plugin.

```
- uicdn.toast.com/
  - editor-plugin-chart/
    - latest/
      - zen-composer-plugin-chart.js
      - zen-composer-plugin-chart.min.js
```

## 📦 Usage npm

To use the plugin, [`@fablepress/zen-composer`](https://github.com/nhn/zen-composer/tree/master/apps/editor) must be installed.

> Ref. [Getting Started](https://github.com/nhn/zen-composer/blob/master/docs/en/getting-started.md)

### Install

```sh
$ npm install @fablepress/zen-composer-plugin-chart
```

### Import Plugin

Along with the plugin, the plugin's dependency style must be imported. The `chart` plugin has [Zen Composer Chart](https://github.com/nhn/tui.chart) as a dependency, and you need to add a CSS file of Zen Composer Chart.

#### ES Modules

```js
import '@fablepress/chart/dist/zenComposer-chart.css';

import chart from '@fablepress/zen-composer-plugin-chart';
```

#### CommonJS

```js
require('@fablepress/chart/dist/zenComposer-chart.css');

const chart = require('@fablepress/zen-composer-plugin-chart');
```

### Create Instance

#### Basic

```js
// ...
import '@fablepress/chart/dist/zenComposer-chart.css';

import Editor from '@fablepress/zen-composer';
import chart from '@fablepress/zen-composer-plugin-chart';

const editor = new Editor({
  // ...
  plugins: [chart]
});
```

#### With Viewer

```js
// ...
import '@fablepress/chart/dist/zenComposer-chart.css';

import Viewer from '@fablepress/zen-composer/dist/zen-composer-viewer';
import chart from '@fablepress/zen-composer-plugin-chart';

const viewer = new Viewer({
  // ...
  plugins: [chart]
});
```

or

```js
// ...
import '@fablepress/chart/dist/zenComposer-chart.css';

import Editor from '@fablepress/zen-composer';
import chart from '@fablepress/zen-composer-plugin-chart';

const viewer = Editor.factory({
  // ...
  plugins: [chart],
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
  <link rel="stylesheet" href="https://uicdn.toast.com/chart/latest/zenComposer-chart.min.css" />
  ...
</head>
<body>
  ...
  <!-- Chart -->
  <script src="https://uicdn.toast.com/chart/latest/zenComposer-chart.min.js"></script>
  <!-- Editor -->
  <script src="https://uicdn.toast.com/editor/latest/zen-composer-all.min.js"></script>
  <!-- Editor's Plugin -->
  <script src="https://uicdn.toast.com/editor-plugin-chart/latest/zen-composer-plugin-chart.min.js"></script>
  ...
</body>
```

### Create Instance

#### Basic

```js
const { Editor } = zenComposer;
const { chart } = Editor.plugin;

const editor = new Editor({
  // ...
  plugins: [chart]
});
```

#### With Viewer

```js
const Viewer = zenComposer.Editor;
const { chart } = Viewer.plugin;

const viewer = new Viewer({
  // ...
  plugins: [chart]
});
```

or

```js
const { Editor } = zenComposer;
const { chart } = Editor.plugin;

const viewer = Editor.factory({
  // ...
  plugins: [chart],
  viewer: true
});
```

### [Optional] Use Plugin with Options

The `chart` plugin can set options when used. Just add the plugin function and options related to the plugin to the array(`[pluginFn, pluginOptions]`) and push them to the `plugins` option of the editor.

The following options are available in the `chart` plugin.
These options are used to set the dimensions of the chart drawn in the editor.

| Name        | Type             | Default Value | Description          |
| ----------- | ---------------- | ------------- | -------------------- |
| `width`     | `number\|string` | `'auto'`      | Default width value  |
| `height`    | `number\|string` | `'auto'`      | Default height value |
| `minWidth`  | `number`         | `0`           | Minimum width value  |
| `minHeight` | `number`         | `0`           | Minimum height value |
| `maxWidth`  | `number`         | `Infinity`    | Maximum width value  |
| `maxHeight` | `number`         | `Infinity`    | Maximum height value |

```js
// ...
import '@fablepress/chart/dist/zenComposer-chart.css';

import Editor from '@fablepress/zen-composer';
import chart from '@fablepress/zen-composer-plugin-chart';

const chartOptions = {
  minWidth: 100,
  maxWidth: 600,
  minHeight: 100,
  maxHeight: 300
};

const editor = new Editor({
  // ...
  plugins: [[chart, chartOptions]]
});
```
