# js-pathcase

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

JavaScript convert string to path/case - Use for both Node.JS and Browser.


## Installation

`$ npm install --save js-pathcase`

or

`$ yarn add js-pathcase`

## Usage

#### Node.JS

```js
const toPathCase = require('js-pathcase');

console.log(toPathCase('string')); // => string
console.log(toPathCase('camelCase')); // => camel/case
console.log(toPathCase('param-case')); // => param/case
console.log(toPathCase('PascalCase')); // => pascal/case
console.log(toPathCase('UPPER_CASE')); // => upper/case
console.log(toPathCase('snake_case')); // => snake/case
console.log(toPathCase('sentence case')); // => sentence/case
console.log(toPathCase('Title Case')); // => title/case
console.log(toPathCase('dot.case')); // => // dot/case

console.log(toPathCase('')); // => ''
console.log(toPathCase(null)); // => ''
console.log(toPathCase(undefined)); // => ''

console.log(toPathCase('Abc ___ 123 ___ xYz')); // => abc/123/x/yz
console.log(toPathCase('123__abc  ... ?// {#} def 12')); // => 123/abc/def/12
console.log(toPathCase('	tab space ??? ________')); // => tab/space
console.log(toPathCase('___?||123  abc|| 123..123')); // => 123/abc/123/123
console.log(toPathCase('!@#$%  {}|":;" ABC XyZ G123H')); // => abc/xy/z/g123h
console.log(toPathCase(' ^&* #DEFine x: 15 + ==')); // => define/x/15
console.log(toPathCase('123456789')); // => 123456789

```

#### Browser
##### 1. NPM Package
```html
<script src="./node_modules/js-pathcase/dist/js-pathcase.js"></script>
<!-- Or use minified -->
<script src="./node_modules/js-pathcase/dist/js-pathcase.min.js"></script>
```
##### 2. Download from source
```html
<script src="path/to/js-pathcase"></script>
```
##### Usage
```html
<script>
	console.log(toPathCase('string')); // => string
	console.log(toPathCase('camelCase')); // => camel/case
	console.log(toPathCase('param-case')); // => param/case
	console.log(toPathCase('PascalCase')); // => pascal/case
	console.log(toPathCase('UPPER_CASE')); // => upper/case
	console.log(toPathCase('snake_case')); // => snake/case
	console.log(toPathCase('sentence case')); // => sentence/case
	console.log(toPathCase('Title Case')); // => title/case
	console.log(toPathCase('dot.case')); // => // dot/case

	console.log(toPathCase('')); // => ''
	console.log(toPathCase(null)); // => ''
	console.log(toPathCase(undefined)); // => ''

	console.log(toPathCase('Abc ___ 123 ___ xYz')); // => abc/123/x/yz
	console.log(toPathCase('123__abc  ... ?// {#} def 12')); // => 123/abc/def/12
	console.log(toPathCase('	tab space ??? ________')); // => tab/space
	console.log(toPathCase('___?||123  abc|| 123..123')); // => 123/abc/123/123
	console.log(toPathCase('!@#$%  {}|":;" ABC XyZ G123H')); // => abc/xy/z/g123h
	console.log(toPathCase(' ^&* #DEFine x: 15 + ==')); // => define/x/15
	console.log(toPathCase('123456789')); // => 123456789
</script>
```

## API

### toPathCase(str)

Returns a new string which is pathcase format of str.


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


[npm-image]: https://img.shields.io/npm/v/js-pathcase.svg?style=flat
[npm-url]: https://www.npmjs.com/package/js-pathcase
[downloads-image]: https://img.shields.io/npm/dm/js-pathcase.svg?style=flat
[downloads-url]: https://www.npmjs.com/package/js-pathcase
