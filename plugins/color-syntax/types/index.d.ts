import type { PluginContext, PluginInfo } from '@fablepress/zen-composer';

export interface PluginOptions {
  preset?: string[];
}

export default function colorPlugin(context: PluginContext, options: PluginOptions): PluginInfo;
