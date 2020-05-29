# js-snakecase

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

JavaScript convert string to snake_case - Use for both Node.JS and Browser.


## Installation

`$ npm install --save js-snakecase`

or

`$ yarn add js-snakecase`


## Usage

#### Node.JS

```js
const toSnakeCase = require('js-snakecase');

console.log(toSnakeCase('string')); // => string
console.log(toSnakeCase('camelCase')); // => camel_case
console.log(toSnakeCase('param-case')); // => param_case
console.log(toSnakeCase('PascalCase')); // => pascal_case
console.log(toSnakeCase('UPPER_CASE')); // => upper_case
console.log(toSnakeCase('snake_case')); // => snake_case
console.log(toSnakeCase('sentence case')); // => sentence_case
console.log(toSnakeCase('Title Case')); // => title_case
console.log(toSnakeCase('dot.case')); // => // dot_case

console.log(toSnakeCase('')); // => ''
console.log(toSnakeCase(null)); // => ''
console.log(toSnakeCase(undefined)); // => ''

console.log(toSnakeCase('Abc ___ 123 ___ xYz')); // => abc_123_x_yz
console.log(toSnakeCase('123__abc  ... ?// {#} def 12')); // => 123_abc_def_12
console.log(toSnakeCase('	tab space ??? ________')); // => tab_space
console.log(toSnakeCase('___?||123  abc|| 123..123')); // => 123_abc_123_123
console.log(toSnakeCase('!@#$%  {}|":;" ABC XyZ G123H')); // => abc_xy_z_g123h
console.log(toSnakeCase(' ^&* #DEFine x: 15 + ==')); // => define_x_15
console.log(toSnakeCase('123456789')); // => 123456789
```

#### Browser
##### 1. NPM Package
```html
<script src="./node_modules/js-snakecase/dist/js-snakecase.js"></script>
<!-- Or use minified -->
<script src="./node_modules/js-snakecase/dist/js-snakecase.min.js"></script>
```
##### 2. Download from source
```html
<script src="path/to/js-snakecase"></script>
```
##### Usage
```html
<script>
	console.log(toSnakeCase('string')); // => string
	console.log(toSnakeCase('camelCase')); // => camel_case
	console.log(toSnakeCase('param-case')); // => param_case
	console.log(toSnakeCase('PascalCase')); // => pascal_case
	console.log(toSnakeCase('UPPER_CASE')); // => upper_case
	console.log(toSnakeCase('snake_case')); // => snake_case
	console.log(toSnakeCase('sentence case')); // => sentence_case
	console.log(toSnakeCase('Title Case')); // => title_case
	console.log(toSnakeCase('dot.case')); // => // dot_case

	console.log(toSnakeCase('')); // => ''
	console.log(toSnakeCase(null)); // => ''
	console.log(toSnakeCase(undefined)); // => ''

	console.log(toSnakeCase('Abc ___ 123 ___ xYz')); // => abc_123_x_yz
	console.log(toSnakeCase('123__abc  ... ?// {#} def 12')); // => 123_abc_def_12
	console.log(toSnakeCase('	tab space ??? ________')); // => tab_space
	console.log(toSnakeCase('___?||123  abc|| 123..123')); // => 123_abc_123_123
	console.log(toSnakeCase('!@#$%  {}|":;" ABC XyZ G123H')); // => abc_xy_z_g123h
	console.log(toSnakeCase(' ^&* #DEFine x: 15 + ==')); // => define_x_15
	console.log(toSnakeCase('123456789')); // => 123456789

</script>
```

## API

### toSnakeCase(str)

Returns a new string which is snakecase format of str.

## Dependencies
No dependencies

## Related
+ [js-convert-case](https://github.com/huynhsamha/js-convert-case)
+ [js-camelcase](https://github.com/huynhsamha/js-camelcase)
+ [js-snakecase](https://github.com/huynhsamha/js-snakecase)
+ [js-pascalcase](https://github.com/huynhsamha/js-pascalcase)
+ [js-dotcase](https://github.com/huynhsamha/js-dotcase)
+ [js-pathcase](https://github.com/huynhsamha/js-pathcase)
+ [js-textcase](https://github.com/huynhsamha/js-textcase)
+ [js-sentencecase](https://github.com/huynhsamha/js-sentencecase)
+ [js-headercase](https://github.com/huynhsamha/js-headercase)


[npm-image]: https://img.shields.io/npm/v/js-snakecase.svg?style=flat
[npm-url]: https://www.npmjs.com/package/js-snakecase
[downloads-image]: https://img.shields.io/npm/dm/js-snakecase.svg?style=flat
[downloads-url]: https://www.npmjs.com/package/js-snakecase
