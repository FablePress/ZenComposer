<template>
  <div ref="zenComposerEditor"></div>
</template>
<script>
import Editor from '@fablepress/zen-composer';
import { optionsMixin } from './mixin/option';

export default {
  name: 'ZenComposer',
  mixins: [optionsMixin],
  props: {
    previewStyle: {
      type: String,
    },
    height: {
      type: String,
    },
    initialEditType: {
      type: String,
    },
    initialValue: {
      type: String,
    },
    options: {
      type: Object,
    },
  },
  watch: {
    previewStyle(newValue) {
      this.editor.changePreviewStyle(newValue);
    },
    height(newValue) {
      this.editor.height(newValue);
    },
  },
  mounted() {
    const options = { ...this.computedOptions, el: this.$refs.zenComposerEditor };

    this.editor = new Editor(options);
  },
  methods: {
    getRootElement() {
      return this.$refs.zenComposerEditor;
    },
  },
};
</script>
