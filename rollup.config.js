import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import minify from 'rollup-plugin-babel-minify';

const pkg = require('./package.json');

const name = 'jsConvert';
const filename = pkg.name;

export default [
  {
    input: 'index.js',
    output: {
      name,
      file: path.join(__dirname, `dist/${filename}.min.js`),
      format: 'iife'
    },
    plugins: [
      resolve(),
      commonjs(),
      minify({ comments: false })
    ]
  },
  {
    input: 'index.js',
    output: {
      name,
      file: path.join(__dirname, `dist/${filename}.js`),
      format: 'iife'
    },
    plugins: [
      resolve(),
      commonjs()
    ]
  }
];
