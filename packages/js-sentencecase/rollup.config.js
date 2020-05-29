/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const minify = require('rollup-plugin-babel-minify');

const pkg = require('./package.json');

const entry = path.join(__dirname, 'index.js');
const name = 'toSentenceCase';
const filename = pkg.name;

module.exports = [
  {
    input: entry,
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
    input: entry,
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
