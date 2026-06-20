/* eslint-disable @typescript-eslint/no-var-requires */
const { spawn } = require('child_process');
const { exit } = require('process');
const commandLineArgs = require('command-line-args');
const optionDefinitions = [
  { name: 'type', alias: 't', type: String },
  { name: 'script', alias: 's', type: String, defaultOption: true },
];
const options = commandLineArgs(optionDefinitions);

const pkgMap = {
  editor: '@fablepress/zen-composer',
  react: '@fablepress/zen-composer-react',
  vue: '@fablepress/zen-composer-vue',
  zenmark: '@fablepress/zenmark',
  chart: '@fablepress/zen-composer-plugin-chart',
  color: '@fablepress/zen-composer-plugin-color-syntax',
  code: '@fablepress/zen-composer-plugin-code-syntax-highlight',
  table: '@fablepress/zen-composer-plugin-table-merged-cell',
  uml: '@fablepress/zen-composer-plugin-uml',
};

const pathMap = {
  editor: 'apps/editor',
  react: 'apps/react-editor',
  vue: 'apps/vue-editor',
  zenmark: 'libs/zenmark',
  chart: 'plugins/chart',
  color: 'plugins/color-syntax',
  code: 'plugins/code-syntax-highlight',
  table: 'plugins/table-merged-cell',
  uml: 'plugins/uml',
};

let script;
let pkg;
let path;

Object.keys(options).forEach((key) => {
  const value = options[key];

  if (key === 'script') {
    script = value;
  }

  if (key === 'type') {
    pkg = pkgMap[value];
    path = pathMap[value];
  }
});

if (!script) {
  throw new Error(
    `You should choose "lint", "test", "test:types", "serve", "serve:ie", "build" as the type of script`
  );
}

if (!pkg) {
  throw new Error(
    `You should choose "editor", "react", "vue", "zenmark", "chart", "color", "code", "uml", "table"
    as the configuration of type
    `
  );
}

if (script === 'test') {
  spawn('jest', ['--watch', '--projects', path], {
    stdio: 'inherit',
  }).on('exit', (code) => {
    exit(code);
  });
} else {
  spawn('lerna', ['run', '--stream', '--scope', pkg, script], {
    stdio: 'inherit',
  }).on('exit', (code) => {
    exit(code);
  });
}
