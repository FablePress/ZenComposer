import type { PluginContext, PluginInfo } from '@fablepress/zen-composer';

export interface PluginOptions {
  rendererURL?: string;
}

export default function umlPlugin(context: PluginContext, options: PluginOptions): PluginInfo;
