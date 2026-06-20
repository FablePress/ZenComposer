# 🚀 Getting Started

## The Project Setup

Zen Composer can be used by using the package manager or downloading the source directly. However, we highly recommend using the package manager.

### Via Package Manager (npm)

You can conveniently install it using the commands provided by each package manager. When using npm, be sure to use it in the environment [Node.js](https://nodejs.org/en/) is installed.

```sh
$ npm install --save @fablepress/zen-composer # Latest Version
$ npm install --save @fablepress/zen-composer@<version> # Specific Version
```

When installed and used with npm, the list of files that can be imported is as follows:

```
- node_modules/
   ├─ @fablepress/zen-composer/
   │     ├─ dist/
   │     │    ├─ zen-composer.js
   │     │    ├─ zen-composer-viewer.js
   │     │    ├─ zen-composer.css
   │     │    ├─ zen-composer-viewer.css
   │     │    └─ zen-composer-only.css
```

### Via Contents Delivery Network (CDN)

Zen Composer is available over the CDN powered by [NHN Cloud](https://www.toast.com). You can use the CDN as below.

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
   │     │    ├─ zen-composer-editor.js
   │     │    ├─ zen-composer-editor.min.js
   │     │    ├─ zen-composer-editor.css
   │     │    ├─ zen-composer-editor.min.css
   │     │    ├─ zen-composer-viewer.css
   │     │    └─ zen-composer-viewer.min.css
   │     ├─ 2.0.0/
   │     │    └─ ...
```

## Create Your First Editor

### Adding the Wrapper Element

You need to add the container element where Zen Composer (henceforth referred to as 'Editor') will be created.

```html
...
<body>
  <div id="editor"></div>
</body>
...
```

### Importing the Editor's Constructor Function

The editor can be used by creating an instance with the constructor function. To get the constructor function, you should import the module using one of the following ways depending on your environment.

#### Using Module Format in Node Environment

- ES6 Modules

```javascript
import Editor from '@fablepress/zen-composer';
```

- CommonJS

```javascript
const Editor = require('@fablepress/zen-composer');
```

#### Using Namespace in Browser Environment

```javascript
const Editor = zenComposer.Editor;
```

### Adding CSS Files

You need to add the CSS files needed for the Editor. Import CSS files in node environment, and add it to html file when using CDN.

#### Using in Node Environment

- ES6 Modules

```javascript
import '@fablepress/zen-composer/dist/zen-composer.css'; // Editor's Style
```

- CommonJS

```javascript
require('@fablepress/zen-composer/dist/zen-composer.css');
```

#### Using in Browser Environment by CDN

```html
...
<head>
  ...
  <!-- Editor's Style -->
  <link rel="stylesheet" href="https://uicdn.toast.com/editor/latest/zen-composer.min.css" />
</head>
...
```

### Creating Instance

You can create an instance with options and call various API after creating an instance.

```js
const editor = new Editor({
  el: document.querySelector('#editor')
});
```

![getting-started-01](https://user-images.githubusercontent.com/37766175/121855586-7d576000-cd2e-11eb-9196-0c20270d1221.png)

```js
const editor = new Editor({
  el: document.querySelector('#editor'),
  height: '600px',
  initialEditType: 'markdown',
  previewStyle: 'vertical'
});
```

![getting-started-02](https://user-images.githubusercontent.com/37766175/121464762-71e2fc80-c9ef-11eb-9a0a-7b06e08d3ccb.png)

The basic options available are:

- `height`: Height in string or auto ex) `300px` | `auto`
- `initialEditType`: Initial type to show `markdown` | `wysiwyg`
- `initialValue`: Initial value. Set Markdown string
- `previewStyle`: Preview style of Markdown mode `tab` | `vertical`
- `usageStatistics`: Let us know the _hostname_. We want to learn from you how you are using the editor. You are free to disable it. `true` | `false`

Find out more options [here](https://nhn.github.io/zen-composer/latest/ZenComposer).

## Example

You can see the example [here](https://nhn.github.io/zen-composer/latest/tutorial-example01-editor-basic).
