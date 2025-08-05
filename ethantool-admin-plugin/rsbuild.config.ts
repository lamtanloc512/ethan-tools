import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      main: {
        import: ['./view/index.tsx'],
        html: true,
      },
    },
  },
  output: {
    distPath: {
      root: 'src/main/resources/static',
      js: 'js',
      css: 'css',
      font: 'font',
      image: 'images',
    },
    cleanDistPath: true,
    filename: {
      js: () => `[name].js`,
      css: () => `[name].css`,
      font: () => `[name].[ext]`,
    },
  },
});
