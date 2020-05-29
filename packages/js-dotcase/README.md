# js-dotcase

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

JavaScript convert string to dot.case - Use for both Node.JS and Browser.


## Installation

`$ npm install --save js-dotcase`

or

`$ yarn add js-dotcase`

## Usage

#### Node.JS

```js
const todDotcCase = require('js-dotcase');

console.log(toDotCase('string')); // => string
console.log(toDotCase('camelCase')); // => camel.case
console.log(toDotCase('param-case')); // => param.case
console.log(toDotCase('PascalCase')); // => pascal.case
console.log(toDotCase('UPPER_CASE')); // => upper.case
console.log(toDotCase('snake_case')); // => snake.case
console.log(toDotCase('sentence case')); // => sentence.case
console.log(toDotCase('Title Case')); // => title.case
console.log(toDotCase('dot.case')); // => // dot.case

console.log(toDotCase('')); // => ''
console.log(toDotCase(null)); // => ''
console.log(toDotCase(undefined)); // => ''

console.log(toDotCase('Abc ___ 123 ___ xYz')); // => abc.123.x.yz
console.log(toDotCase('123__abc  ... ?// {#} def 12')); // => 123.abc.def.12
console.log(toDotCase('	tab space ??? ________')); // => tab.space
console.log(toDotCase('___?||123  abc|| 123..123')); // => 123.abc.123.123
console.log(toDotCase('!@#$%  {}|":;" ABC XyZ G123H')); // => abc.xy.z.g123h
console.log(toDotCase(' ^&* #DEFine x: 15 + ==')); // => define.x.15
console.log(toDotCase('123456789')); // => 123456789

```

#### Browser
##### 1. NPM Package
```html
<script src="./node_modules/js-dotcase/dist/js-dotcase.js"></script>
<!-- Or use minified -->
<script src="./node_modules/js-dotcase/dist/js-dotcase.min.js"></script>
```
##### 2. Download from source
```html
<script src="path/to/js-dotcase"></script>
```
##### Usage
```html
<script>
	console.log(toDotCase('string')); // => string
	console.log(toDotCase('camelCase')); // => camel.case
	console.log(toDotCase('param-case')); // => param.case
	console.log(toDotCase('PascalCase')); // => pascal.case
	console.log(toDotCase('UPPER_CASE')); // => upper.case
	console.log(toDotCase('snake_case')); // => snake.case
	console.log(toDotCase('sentence case')); // => sentence.case
	console.log(toDotCase('Title Case')); // => title.case
	console.log(toDotCase('dot.case')); // => // dot.case

	console.log(toDotCase('')); // => ''
	console.log(toDotCase(null)); // => ''
	console.log(toDotCase(undefined)); // => ''

	console.log(toDotCase('Abc ___ 123 ___ xYz')); // => abc.123.x.yz
	console.log(toDotCase('123__abc  ... ?// {#} def 12')); // => 123.abc.def.12
	console.log(toDotCase('	tab space ??? ________')); // => tab.space
	console.log(toDotCase('___?||123  abc|| 123..123')); // => 123.abc.123.123
	console.log(toDotCase('!@#$%  {}|":;" ABC XyZ G123H')); // => abc.xy.z.g123h
	console.log(toDotCase(' ^&* #DEFine x: 15 + ==')); // => define.x.15
	console.log(toDotCase('123456789')); // => 123456789
</script>
```

## API

### toDotCase(str)

Returns a new string which is dotcase format of str.


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


[npm-image]: https://img.shields.io/npm/v/js-dotcase.svg?style=flat
[npm-url]: https://www.npmjs.com/package/js-dotcase
[downloads-image]: https://img.shields.io/npm/dm/js-dotcase.svg?style=flat
[downloads-url]: https://www.npmjs.com/package/js-dotcase
