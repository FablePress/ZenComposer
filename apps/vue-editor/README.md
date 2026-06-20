# Zen Composer for Vue

> This is [Vue](https://vuejs.org/) component wrapping [Zen Composer](https://github.com/nhn/zen-composer/tree/master/apps/editor).

[![npm version](https://img.shields.io/npm/v/@fablepress/zen-composer-vue.svg)](https://www.npmjs.com/package/@fablepress/zen-composer-vue)

## 🚩 Table of Contents

- [Collect Statistics on the Use of Open Source](#collect-statistics-on-the-use-of-open-source)
- [Install](#-install)
- [Editor Usage](#-editor-usage)
- [Viewer Usage](#-viewer-usage)

## Collect Statistics on the Use of Open Source

Vue Wrapper of Zen Composer applies Google Analytics (GA) to collect statistics on the use of open source, in order to identify how widely Zen Composer is used throughout the world. It also serves as important index to determine the future course of projects. location.hostname (e.g. ui.toast.com) is to be collected and the sole purpose is nothing but to measure statistics on the usage. To disable GA, use the following `usageStatistics` options when declare Vue Wrapper component.

```js
const options = {
  ...
  usageStatistics: false
}
```

## 💾 Install

### Using npm

```sh
npm install --save @fablepress/zen-composer-vue
```

## 📝 Editor Usage

### Import

You can use Zen Composer for Vue as a ECMAScript module or a CommonJS module. As this module does not contain CSS files, you should import `zen-composer.css` from `@fablepress/zen-composer` in the script.

- ES Modules

```js
import '@fablepress/zen-composer/dist/zen-composer.css';

import { Editor } from '@fablepress/zen-composer-vue';
```

- CommonJS

```js
require('@fablepress/zen-composer/dist/zen-composer.css');

const { Editor } = require('@fablepress/zen-composer-vue');
```

### Creating Component

First implement `<editor/>` in the template.

```html
<template>
  <editor />
</template>
```

And then add `Editor` to the `components` in your component or Vue instance like this:

```js
import '@fablepress/zen-composer/dist/zen-composer.css';

import { Editor } from '@fablepress/zen-composer-vue';

export default {
  components: {
    editor: Editor
  }
};
```

or

```js
import '@fablepress/zen-composer/dist/zen-composer.css';

import { Editor } from '@fablepress/zen-composer-vue';

new Vue({
  el: '#app',
  components: {
    editor: Editor
  }
});
```

### Props

| Name            | Type   | Default                    | Description                                               |
| --------------- | ------ | -------------------------- | --------------------------------------------------------- |
| initialValue    | String | ''                         | Editor's initial value       .                             |
| initialEditType | String | 'markdown'                 | Initial editor type (markdown, wysiwyg).                   |
| options         | Object | following `defaultOptions` | Options of zen-composer. This is for initailize zen-composer. |
| height          | String | '300px'                    | This prop can control the height of the editor.           |
| previewStyle          | String | 'vertical'           | Markdown editor's preview style (tab, vertical).           |

```js
const defaultOptions = {
  minHeight: '200px',
  language: 'en-US',
  useCommandShortcut: true,
  usageStatistics: true,
  hideModeSwitch: false,
  toolbarItems: [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr', 'quote'],
    ['ul', 'ol', 'task', 'indent', 'outdent'],
    ['table', 'image', 'link'],
    ['code', 'codeblock'],
    ['scrollSync'],
  ]
};
```

```html
<template>
  <editor
    :initialValue="editorText"
    :options="editorOptions"
    height="500px"
    initialEditType="wysiwyg"
    previewStyle="vertical"
  />
</template>
<script>
  import '@fablepress/zen-composer/dist/zen-composer.css';

  import { Editor } from '@fablepress/zen-composer-vue';

  export default {
    components: {
      editor: Editor
    },
    data() {
      return {
        editorText: 'This is initialValue.',
        editorOptions: {
          hideModeSwitch: true
        }
      };
    }
  };
</script>
```

### Instance Methods

If you want to more manipulate the Editor, you can use `invoke` method to call the method of toaszen-composer. For more information of method, see [instance methods of Zen Composer](https://nhn.github.io/zen-composer/latest/ZenComposer#addHook).

First, you need to assign `ref` attribute of `<editor/>` and then you can use `invoke` method through `this.$refs` like this:

```html
<template>
  <editor ref="zenComposerEditor" />
</template>
<script>
  import '@fablepress/zen-composer/dist/zen-composer.css';

  import { Editor } from '@fablepress/zen-composer-vue';

  export default {
    components: {
      editor: Editor
    },
    methods: {
      scroll() {
        this.$refs.zenComposerEditor.invoke('setScrollTop', 10);
      },
      moveTop() {
        this.$refs.zenComposerEditor.invoke('moveCursorToStart');
      },
      getHTML() {
        let html = this.$refs.zenComposerEditor.invoke('getHTML');
      }
    }
  };
</script>
```

### Events

- load : It would be emitted when editor fully load
- change : It would be emitted when content changed
- caretChange : It would be emitted when format change by cursor position
- focus : It would be emitted when editor get focus
- blur : It would be emitted when editor loose focus

```html
<template>
  <editor
    @load="onEditorLoad"
    @focus="onEditorFocus"
    @blur="onEditorBlur"
    @change="onEditorChange"
    @caretChange="onEditorCaretChange"
  />
</template>
<script>
  import { Editor } from '@fablepress/zen-composer-vue';

  export default {
    components: {
      editor: Editor
    },
    methods: {
      onEditorLoad() {
        // implement your code
      },
      onEditorFocus() {
        // implement your code
      },
      onEditorBlur() {
        // implement your code
      },
      onEditorChange() {
        // implement your code
      },
      onEditorCaretChange() {
        // implement your code
      }
    }
  };
</script>
```

## 📃 Viewer Usage

### Import

- ES Modules

```js
import '@fablepress/zen-composer/dist/zen-composer-viewer.css';

import { Viewer } from '@fablepress/zen-composer-vue';
```

- CommonJS

```js
require('@fablepress/zen-composer/dist/zen-composer-viewer.css');

const { Viewer } = require('@fablepress/zen-composer-vue');
```

### Creating Component

First implement `<viewer />` in the template.

```html
<template>
  <viewer />
</template>
```

And then add `Viewer` to the `components` in your component or Vue instance like this:

```js
import '@fablepress/zen-composer/dist/zen-composer-viewer.css';

import { Viewer } from '@fablepress/zen-composer-vue';

export default {
  components: {
    viewer: Viewer
  }
};
```

or

```js
import '@fablepress/zen-composer/dist/zen-composer-viewer.css';

import { Viewer } from '@fablepress/zen-composer-vue';

new Vue({
  el: '#app',
  components: {
    viewer: Viewer
  }
});
```

### Props

| Name         | Type   | Default | Description                                     |
| ------------ | ------ | ------- | ----------------------------------------------- |
| initialValue | String | ''      | Viewer's initial value                          |
| height       | String | '300px' | This prop can control the height of the viewer. |
| options      | Object | above `defaultOptions` | Options of zen-composer. This is for initailize zen-composer. |

```html
<template>
  <viewer :initialValue="viewerText" height="500px" />
</template>
<script>
  import '@fablepress/zen-composer/dist/zen-composer-viewer.css';

  import { Viewer } from '@fablepress/zen-composer-vue';

  export default {
    components: {
      viewer: Viewer
    },
    data() {
      return {
        viewerText: '# This is Viewer.\n Hello World.'
      };
    }
  };
</script>
```