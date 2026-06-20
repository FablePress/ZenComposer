<template>
  <div ref="zenComposerEditorViewer"></div>
</template>
<script>
import Viewer from '@fablepress/zen-composer/dist/zen-composer-viewer';
import { optionsMixin } from './mixin/option';

export default {
  name: 'ZenComposerViewer',
  mixins: [optionsMixin],
  props: {
    height: {
      type: String,
    },
    initialValue: {
      type: String,
    },
    options: {
      type: Object,
    },
  },
  mounted() {
    const options = { ...this.computedOptions, el: this.$refs.zenComposerEditorViewer };

    this.editor = new Viewer(options);
  },
  methods: {
    getRootElement() {
      return this.$refs.zenComposerEditorViewer;
    },
  },
};
</script>
