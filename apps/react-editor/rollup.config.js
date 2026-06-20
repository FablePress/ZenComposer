import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import banner from 'rollup-plugin-banner';
import { version, author, license } from './package.json';

const bannerText = [
  'Zen Composer : React Wrapper',
  `@version ${version} | ${new Date().toDateString()}`,
  `@author ${author}`,
  `@license ${license}`,
].join('\n');

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist/esm',
      format: 'es',
      sourcemap: false,
    },
    plugins: [typescript(), commonjs(), nodeResolve(), banner(bannerText)],
    external: ['react', '@fablepress/zen-composer', '@fablepress/zen-composer/dist/zen-composer-viewer'],
  },
];
