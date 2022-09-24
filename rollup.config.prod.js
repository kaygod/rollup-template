import postcss from 'rollup-plugin-postcss'
import html2 from 'rollup-plugin-html2'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import css from 'rollup-plugin-css-only'
import { terser } from "rollup-plugin-terser";
import babel from '@rollup/plugin-babel';

export default {
    input: 'src/main.js',
    output: {
      file: 'dist/bundle.js',
      format: 'es'
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      json(),
      postcss({
        extract: true,
        minimize: true,
        plugins:[
          require('autoprefixer'),
        ]
      }),
      html2({
        template: 'src/index.html',
      }),
      css({ output: 'bundle.css' }),
      babel({
        exclude:/node_modules/,
        presets: ['@babel/preset-env'],
        babelHelpers: 'bundled'
      }),
      terser()
    ]
};