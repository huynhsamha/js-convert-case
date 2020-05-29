# js-camelcase

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

JavaScript Camelcase string. Use for both node.js and browser


## Installation

`$ npm install --save js-camelcase`

or

`$ yarn add js-camelcase`


## Usage

#### Node.JS

```js
const toCamelCase = require('js-camelcase');

console.log(toCamelCase('string')); // => string
console.log(toCamelCase('camelCase')); // => camelCase
console.log(toCamelCase('param-case')); // => paramCase
console.log(toCamelCase('PascalCase')); // => pascalCase
console.log(toCamelCase('UPPER_CASE')); // => upperCase
console.log(toCamelCase('snake_case')); // => snakeCase
console.log(toCamelCase('sentence case')); // => sentenceCase
console.log(toCamelCase('Title Case')); // => titleCase
console.log(toCamelCase('dot.case')); // => // dotCase

console.log(toCamelCase('')); // => ''
console.log(toCamelCase(null)); // => ''
console.log(toCamelCase(undefined)); // => ''

console.log(toCamelCase('Abc ___ 123 ___ xYz')); // => abc123XYz
console.log(toCamelCase('123__abc  ... ?// {#} def 12')); // => 123AbcDef12
console.log(toCamelCase('	tab space ??? ________')); // => tabSpace
console.log(toCamelCase('___?||123  abc|| 123..123')); // => 123Abc123123
console.log(toCamelCase('!@#$%  {}|":;" ABC XyZ G123H')); // => abcXyZG123h
console.log(toCamelCase(' ^&* #DEFine x: 15 + ==')); // => defineX15
console.log(toCamelCase('123456789')); // => 123456789
```

#### Browser
##### 1. NPM Package
```html
<script src="./node_modules/js-camelcase/dist/js-camelcase.js"></script>
<!-- Or use minified -->
<script src="./node_modules/js-camelcase/dist/js-camelcase.min.js"></script>
```
##### 2. Download from source
```html
<script src="path/to/js-camelcase"></script>
```
##### Usage
```html
<script>
	console.log(toCamelCase('string')); // => string
	console.log(toCamelCase('camelCase')); // => camelCase
	console.log(toCamelCase('param-case')); // => paramCase
	console.log(toCamelCase('PascalCase')); // => pascalCase
	console.log(toCamelCase('UPPER_CASE')); // => upperCase
	console.log(toCamelCase('snake_case')); // => snakeCase
	console.log(toCamelCase('sentence case')); // => sentenceCase
	console.log(toCamelCase('Title Case')); // => titleCase
	console.log(toCamelCase('dot.case')); // => // dotCase

	console.log(toCamelCase('')); // => ''
	console.log(toCamelCase(null)); // => ''
	console.log(toCamelCase(undefined)); // => ''

	console.log(toCamelCase('Abc ___ 123 ___ xYz')); // => abc123XYz
	console.log(toCamelCase('123__abc  ... ?// {#} def 12')); // => 123AbcDef12
	console.log(toCamelCase('	tab space ??? ________')); // => tabSpace
	console.log(toCamelCase('___?||123  abc|| 123..123')); // => 123Abc123123
	console.log(toCamelCase('!@#$%  {}|":;" ABC XyZ G123H')); // => abcXyZG123h
	console.log(toCamelCase(' ^&* #DEFine x: 15 + ==')); // => defineX15
	console.log(toCamelCase('123456789')); // => 123456789
</script>
```

## API

### toCamelCase(str || str[])

Returns a new string which is camelcase format of str (or concat of str[]).


## Related
+ [js-snakecase](https://github.com/huynhsamha/js-snakecase)


[npm-image]: https://img.shields.io/npm/v/js-camelcase.svg?style=flat
[npm-url]: https://www.npmjs.com/package/js-camelcase
[downloads-image]: https://img.shields.io/npm/dm/js-camelcase.svg?style=flat
[downloads-url]: https://www.npmjs.com/package/js-camelcase
