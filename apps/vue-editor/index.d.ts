import Vue from 'vue';
import ZenComposer from '@fablepress/zen-composer';
import ZenComposerViewer from '@fablepress/zen-composer/dist/zen-composer-viewer';

type FunctionKeys<T extends object> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

type EditorFnKeys = FunctionKeys<ZenComposer>;
type ViewerFnKeys = FunctionKeys<ZenComposerViewer>;

export class Editor extends Vue {
  invoke<T extends EditorFnKeys>(
    fname: T,
    ...args: Parameters<ZenComposer[T]>
  ): ReturnType<ZenComposer[T]>;

  getRootElement(): HTMLElement;
}

export class Viewer extends Vue {
  invoke<T extends ViewerFnKeys>(
    fname: T,
    ...args: Parameters<ZenComposerViewer[T]>
  ): ReturnType<ZenComposerViewer[T]>;

  getRootElement(): HTMLElement;
}
