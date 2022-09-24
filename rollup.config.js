import postcss from 'rollup-plugin-postcss'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import html2 from 'rollup-plugin-html2'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import css from 'rollup-plugin-css-only'
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
      serve({
        open: true,
        contentBase: 'dist',
      }),
      livereload(
        {
          watch: 'dist',
          delay: 300
        }  
      ),
      postcss({
        plugins:[
          require('autoprefixer')
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
    ]
};