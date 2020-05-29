# js-textcase

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

JavaScript convert string to text case - Use for both Node.JS and Browser.

## Installation

`$ npm install --save js-textcase`

or

`$ yarn add js-textcase`

## Usage

#### Node.JS

```js
const toTextCase = require('js-textcase');

console.log(toTextCase('string')); // => string
console.log(toTextCase('camelCase')); // => camel case
console.log(toTextCase('param-case')); // => param case
console.log(toTextCase('PascalCase')); // => pascal case
console.log(toTextCase('UPPER_CASE')); // => upper case
console.log(toTextCase('snake_case')); // => snake case
console.log(toTextCase('sentence case')); // => sentence case
console.log(toTextCase('Title Case')); // => title case
console.log(toTextCase('dot.case')); // => // dot case

console.log(toTextCase('')); // => ''
console.log(toTextCase(null)); // => ''
console.log(toTextCase(undefined)); // => ''

console.log(toTextCase('Abc ___ 123 ___ xYz')); // => abc 123 x yz
console.log(toTextCase('123__abc  ... ?// {#} def 12')); // => 123 abc def 12
console.log(toTextCase('	tab space ??? ________')); // => tab space
console.log(toTextCase('___?||123  abc|| 123..123')); // => 123 abc 123 123
console.log(toTextCase('!@#$%  {}|":;" ABC XyZ G123H')); // => abc xy z g123h
console.log(toTextCase(' ^&* #DEFine x: 15 + ==')); // => define x 15
console.log(toTextCase('123456789')); // => 123456789
```

#### Browser
##### 1. NPM Package
```html
<script src="./node_modules/js-textcase/dist/js-textcase.js"></script>
<!-- Or use minified -->
<script src="./node_modules/js-textcase/dist/js-textcase.min.js"></script>
```
##### 2. Download from source
```html
<script src="path/to/js-textcase"></script>
```
##### Usage
```html
<script>
	console.log(toTextCase('string')); // => string
	console.log(toTextCase('camelCase')); // => camel case
	console.log(toTextCase('param-case')); // => param case
	console.log(toTextCase('PascalCase')); // => pascal case
	console.log(toTextCase('UPPER_CASE')); // => upper case
	console.log(toTextCase('snake_case')); // => snake case
	console.log(toTextCase('sentence case')); // => sentence case
	console.log(toTextCase('Title Case')); // => title case
	console.log(toTextCase('dot.case')); // => // dot case

	console.log(toTextCase('')); // => ''
	console.log(toTextCase(null)); // => ''
	console.log(toTextCase(undefined)); // => ''

	console.log(toTextCase('Abc ___ 123 ___ xYz')); // => abc 123 x yz
	console.log(toTextCase('123__abc  ... ?// {#} def 12')); // => 123 abc def 12
	console.log(toTextCase('	tab space ??? ________')); // => tab space
	console.log(toTextCase('___?||123  abc|| 123..123')); // => 123 abc 123 123
	console.log(toTextCase('!@#$%  {}|":;" ABC XyZ G123H')); // => abc xy z g123h
	console.log(toTextCase(' ^&* #DEFine x: 15 + ==')); // => define x 15
	console.log(toTextCase('123456789')); // => 123456789
</script>
```

## API

### toTextCase(str)

Returns a new string which is textcase format of str.


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


[npm-image]: https://img.shields.io/npm/v/js-textcase.svg?style=flat
[npm-url]: https://www.npmjs.com/package/js-textcase
[downloads-image]: https://img.shields.io/npm/dm/js-textcase.svg?style=flat
[downloads-url]: https://www.npmjs.com/package/js-textcase
