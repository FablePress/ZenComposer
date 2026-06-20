# ![Zen Composer](https://uicdn.toast.com/zenComposer/img/zen-composer-bi.png)

[![npm](https://img.shields.io/npm/v/@fablepress/zen-composer.svg)](https://www.npmjs.com/package/@fablepress/zen-composer)

## 🚩 Table of Contents

- [Collect Statistics on the Use of Open Source](#Collect-statistics-on-the-use-of-open-source)
- [Documents](#-documents)
- [Install](#-install)
- [Usage](#-usage)
- [Tutorials](#-tutorials)

## Collect Statistics on the Use of Open Source

Zen Composer products apply Google Analytics (GA) to collect statistics on the use of open source, in order to identify how widely Zen Composer is used throughout the world. It also serves as important index to determine the future course of projects. `location.hostname` (e.g. ui.toast.com) is to be collected and the sole purpose is nothing but to measure statistics on the usage.

To disable GA, use the following `usageStatistics` option when creating the instance.

```js
const options = {
  // ...
  usageStatistics: false
};

const editor = new Editor(options);
```

## 📙 Documents

- [Getting Started](https://github.com/nhn/zen-composer/blob/master/docs/en/getting-started.md)
- [APIs](https://nhn.github.io/zen-composer/latest/)
- v3.0 Migration Guide
  - [English](https://github.com/nhn/zen-composer/blob/master/docs/v3.0-migration-guide.md)
  - [한국어](https://github.com/nhn/zen-composer/blob/master/docs/v3.0-migration-guide-ko.md)

You can also see the older versions of API page on the [releases page](https://github.com/nhn/zen-composer/releases).

## 💾 Install

Zen Composer products can be used by using the package manager or downloading the source directly. However, we highly recommend using the package manager.

### Via Package Manager

Zen Composer products are registered in two package managers, [npm](https://www.npmjs.com/). You can conveniently install it using the commands provided by the package manager. When using npm, be sure to use it in the environment [Node.js](https://nodejs.org/en/) is installed.

#### npm

```sh
$ npm install --save @fablepress/zen-composer # Latest Version
$ npm install --save @fablepress/zen-composer@<version> # Specific Version
```

### Via Contents Delivery Network (CDN)

Zen Composer products are available over the CDN powered by [NHN Cloud](https://www.toast.com).

You can use the CDN as below.

```html
...
<body>
  ...
  <script src="https://uicdn.toast.com/editor/latest/zen-composer-all.min.js"></script>
</body>
...
```

If you want to use a specific version, use the tag name instead of `latest` in the url's path.

The CDN directory has the following structure:

```
- uicdn.toast.com/
   ├─ editor/
   │     ├─ latest/
   │     │    ├─ zen-composer-all.js
   │     │    ├─ zen-composer-all.min.js
   │     │    ├─ zen-composer-viewer.js
   │     │    ├─ zen-composer-viewer.min.js
   │     │    ├─ zen-composer.css
   │     │    ├─ zen-composer.min.css
   │     │    ├─ zen-composer-viewer.css
   │     │    ├─ zen-composer-viewer.min.css
   │     │    ├─ zen-composer-only.css
   │     │    ├─ zen-composer-only.min.css
   │     │    └─ theme/
   │     │         ├─ zen-composer-dark.css
   │     │         └─ zen-composer-dark.min.css
   │     │    └─ i18n/
   │     │         └─ ...
   │     ├─ 2.0.0/
   │     │    └─ ...
```

## 🔨 Usage

First, you need to add the container element where Zen Composer (henceforth referred to as 'Editor') will be created.

```html
...
<body>
  <div id="editor"></div>
</body>
...
```

The editor can be used by creating an instance with the constructor function. To get the constructor function, you should import the module using one of the following ways depending on your environment.

### Using Module Format in Node Environment

- ES6 Modules

```javascript
import Editor from '@fablepress/zen-composer';
```

- CommonJS

```javascript
const Editor = require('@fablepress/zen-composer');
```

### Using Namespace in Browser Environment

```javascript
const Editor = zenComposer.Editor;
```

Then, you need to add the CSS files needed for the Editor. Import CSS files in node environment, and add it to html file when using CDN.

### Using in Node Environment

```javascript
import '@fablepress/zen-composer/dist/zen-composer.css'; // Editor's Style
```

### Using in Browser Environment by CDN

```html
...
<head>
  ...
  <!-- Editor's Style -->
  <link rel="stylesheet" href="https://uicdn.toast.com/editor/latest/zen-composer.min.css" />
</head>
...
```

Finally you can create an instance with options and call various API after creating an instance.

```javascript
const editor = new Editor({
  el: document.querySelector('#editor'),
  height: '500px',
  initialEditType: 'markdown',
  previewStyle: 'vertical'
});

editor.getMarkdown();
```

### Default Options

- `height`: Height in string or auto ex) `300px` | `auto`
- `initialEditType`: Initial type to show `markdown` | `wysiwyg`
- `initialValue`: Initial value. Set Markdown string
- `previewStyle`: Preview style of Markdown mode `tab` | `vertical`
- `usageStatistics`: Let us know the _hostname_. We want to learn from you how you are using the Editor. You are free to disable it. `true` | `false`

Find out more options [here](https://nhn.github.io/zen-composer/latest/ZenComposer).

## 🦄 Tutorials

- [Viewer](https://github.com/nhn/zen-composer/blob/master/docs/en/viewer.md)
- [Plugins](https://github.com/nhn/zen-composer/blob/master/docs/en/plugin.md)
- [Internationalization (i18n)](https://github.com/nhn/zen-composer/blob/master/docs/en/i18n.md)
