# Zen Composer for React

> This is a [React](https://reactjs.org/) component wrapping [Zen Composer](https://github.com/nhn/zen-composer/tree/master/apps/editor).

[![npm version](https://img.shields.io/npm/v/@fablepress/zen-composer-react.svg)](https://www.npmjs.com/package/@fablepress/zen-composer-react)

## 🚩 Table of Contents

- [Collect Statistics on the Use of Open Source](#collect-statistics-on-the-use-of-open-source)
- [Install](#-install)
- [Usage](#-usage)

## Collect Statistics on the Use of Open Source

React Wrapper of Zen Composer applies Google Analytics (GA) to collect statistics on the use of open source, in order to identify how widely Zen Composer is used throughout the world. It also serves as important index to determine the future course of projects. location.hostname (e.g. ui.toast.com) is to be collected and the sole purpose is nothing but to measure statistics on the usage. To disable GA, use the `usageStatistics` props like the example below.

```js
<Editor
  ...
  usageStatistics={false}
/>
```

## 💾 Install

### Using npm

```sh
npm install --save @fablepress/zen-composer-react
```

## 📝 Usage

### Import

You can use Zen Composer for React as a ECMAScript module or a CommonJS module. As this module does not contain CSS files, you should import `zen-composer.css` from `@fablepress/zen-composer` in the script.

- ES Modules

```js
import '@fablepress/zen-composer/dist/zen-composer.css';

import { Editor } from '@fablepress/zen-composer-react';
```

- CommonJS

```js
require('@fablepress/zen-composer/dist/zen-composer.css');

const { Editor } = require('@fablepress/zen-composer-react');
```

### Props

[All the options of the Zen Composer](https://nhn.github.io/zen-composer/latest/ZenComposer) are supported in the form of props.

```js
import '@fablepress/zen-composer/dist/zen-composer.css';

import { Editor } from '@fablepress/zen-composer-react';

const MyComponent = () => (
  <Editor
    initialValue="hello react editor world!"
    previewStyle="vertical"
    height="600px"
    initialEditType="markdown"
    useCommandShortcut={true}
  />
);
```

### Instance Methods

For using [instance methods of Zen Composer](https://nhn.github.io/zen-composer/latest/ZenComposer#addHook), first thing to do is creating Refs of wrapper component using [`createRef()`](https://reactjs.org/docs/refs-and-the-dom.html#creating-refs). But the wrapper component does not provide a way to call instance methods of Zen Composer directly. Instead, you can call `getInstance()` method of the wrapper component to get the instance, and call the methods on it.

```js
import '@fablepress/zen-composer/dist/zen-composer.css';

import { Editor } from '@fablepress/zen-composer-react';

class MyComponent extends React.Component {
  editorRef = React.createRef();

  handleClick = () => {
    this.editorRef.current.getInstance().exec('bold');
  };

  render() {
    return (
      <>
        <Editor
          previewStyle="vertical"
          height="400px"
          initialEditType="markdown"
          initialValue="hello"
          ref={this.editorRef}
        />
        <button onClick={this.handleClick}>make bold</button>
      </>
    );
  }
}
```

#### Getting the Root Element

An instance of the wrapper component also provides a handy method for getting the root element. If you want to manipulate the root element directly, you can call `getRootElement` to get the element.

```js
import '@fablepress/zen-composer/dist/zen-composer.css';

import { Editor } from '@fablepress/zen-composer-react';

class MyComponent extends React.Component {
  editorRef = React.createRef();

  handleClickButton = () => {
    this.editorRef.current.getRootElement().classList.add('my-editor-root');
  };

  render() {
    return (
      <>
        <Editor
          previewStyle="vertical"
          height="400px"
          initialEditType="markdown"
          initialValue="hello"
          ref={this.editorRef}
        />
        <button onClick={this.handleClickButton}>Click!</button>
      </>
    );
  }
}
```

### Events

[All the events of Zen Composer](https://nhn.github.io/zen-composer/latest/ZenComposer#focus) are supported in the form of `on[EventName]` props. The first letter of each event name should be capitalized. For example, for using `focus` event you can use `onFocus` prop like the example below.

```js
import '@fablepress/zen-composer/dist/zen-composer.css';

import { Editor } from '@fablepress/zen-composer-react';

class MyComponent extends React.Component {
  handleFocus = () => {
    console.log('focus!!');
  };

  render() {
    return (
      <Editor
        previewStyle="vertical"
        height="400px"
        initialEditType="markdown"
        initialValue="hello"
        ref={this.editorRef}
        onFocus={this.handleFocus}
      />
    );
  }
}
```
