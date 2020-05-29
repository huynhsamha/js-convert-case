# js-sentencecase

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

JavaScript convert string to Sentence case - Use for both Node.JS and Browser.


## Installation

`$ npm install --save js-sentencecase`

or

`$ yarn add js-sentencecase`

## Usage

#### Node.JS

```js
const toSentenceCase = require('js-sentencecase');

console.log(toSentenceCase('string')); // => String
console.log(toSentenceCase('camelCase')); // => Camel case
console.log(toSentenceCase('param-case')); // => Param case
console.log(toSentenceCase('PascalCase')); // => Pascal case
console.log(toSentenceCase('UPPER_CASE')); // => Upper case
console.log(toSentenceCase('snake_case')); // => Snake case
console.log(toSentenceCase('sentence case')); // => Sentence case
console.log(toSentenceCase('Title Case')); // => Title case
console.log(toSentenceCase('dot.case')); // => // Dot case

console.log(toSentenceCase('')); // => ''
console.log(toSentenceCase(null)); // => ''
console.log(toSentenceCase(undefined)); // => ''

console.log(toSentenceCase('Abc ___ 123 ___ xYz')); // => Abc 123 x yz
console.log(toSentenceCase('123__abc  ... ?// {#} def 12')); // => 123 abc def 12
console.log(toSentenceCase('	tab space ??? ________')); // => Tab space
console.log(toSentenceCase('___?||123  abc|| 123..123')); // => 123 abc 123 123
console.log(toSentenceCase('!@#$%  {}|":;" ABC XyZ G123H')); // => Abc xy z g123h
console.log(toSentenceCase(' ^&* #DEFine x: 15 + ==')); // => Define x 15
console.log(toSentenceCase('123456789')); // => 123456789
```

#### Browser
##### 1. NPM Package
```html
<script src="./node_modules/js-sentencecase/dist/js-sentencecase.js"></script>
<!-- Or use minified -->
<script src="./node_modules/js-sentencecase/dist/js-sentencecase.min.js"></script>
```
##### 2. Download from source
```html
<script src="path/to/js-sentencecase"></script>
```
##### Usage
```html
<script>
	console.log(toSentenceCase('string')); // => String
	console.log(toSentenceCase('camelCase')); // => Camel case
	console.log(toSentenceCase('param-case')); // => Param case
	console.log(toSentenceCase('PascalCase')); // => Pascal case
	console.log(toSentenceCase('UPPER_CASE')); // => Upper case
	console.log(toSentenceCase('snake_case')); // => Snake case
	console.log(toSentenceCase('sentence case')); // => Sentence case
	console.log(toSentenceCase('Title Case')); // => Title case
	console.log(toSentenceCase('dot.case')); // => // Dot case

	console.log(toSentenceCase('')); // => ''
	console.log(toSentenceCase(null)); // => ''
	console.log(toSentenceCase(undefined)); // => ''

	console.log(toSentenceCase('Abc ___ 123 ___ xYz')); // => Abc 123 x yz
	console.log(toSentenceCase('123__abc  ... ?// {#} def 12')); // => 123 abc def 12
	console.log(toSentenceCase('	tab space ??? ________')); // => Tab space
	console.log(toSentenceCase('___?||123  abc|| 123..123')); // => 123 abc 123 123
	console.log(toSentenceCase('!@#$%  {}|":;" ABC XyZ G123H')); // => Abc xy z g123h
	console.log(toSentenceCase(' ^&* #DEFine x: 15 + ==')); // => Define x 15
	console.log(toSentenceCase('123456789')); // => 123456789
</script>
```

## API

### toSentenceCase(str)

Returns a new string which is sentencecase format of str.


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


[npm-image]: https://img.shields.io/npm/v/js-sentencecase.svg?style=flat
[npm-url]: https://www.npmjs.com/package/js-sentencecase
[downloads-image]: https://img.shields.io/npm/dm/js-sentencecase.svg?style=flat
[downloads-url]: https://www.npmjs.com/package/js-sentencecase
