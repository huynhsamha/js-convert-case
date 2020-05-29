# js-headercase

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

JavaScript convert string to Header Case - Use for both Node.JS and Browser.


## Installation

`$ npm install --save js-headercase`

or

`$ yarn add js-headercase`

## Usage

#### Node.JS

```js
const toHeaderCase = require('js-headercase');

console.log(toHeaderCase('string')); // => String
console.log(toHeaderCase('camelCase')); // => Camel Case
console.log(toHeaderCase('param-case')); // => Param Case
console.log(toHeaderCase('PascalCase')); // => Pascal Case
console.log(toHeaderCase('UPPER_CASE')); // => Upper Case
console.log(toHeaderCase('snake_case')); // => Snake Case
console.log(toHeaderCase('sentence case')); // => Sentence Case
console.log(toHeaderCase('Title Case')); // => Title Case
console.log(toHeaderCase('dot.case')); // => // Dot Case

console.log(toHeaderCase('')); // => ''
console.log(toHeaderCase(null)); // => ''
console.log(toHeaderCase(undefined)); // => ''

console.log(toHeaderCase('Abc ___ 123 ___ xYz')); // => Abc 123 X Yz
console.log(toHeaderCase('123__abc  ... ?// {#} def 12')); // => 123 Abc Def 12
console.log(toHeaderCase('	tab space ??? ________')); // => Tab Space
console.log(toHeaderCase('___?||123  abc|| 123..123')); // => 123 Abc 123 123
console.log(toHeaderCase('!@#$%  {}|":;" ABC XyZ G123H')); // => Abc Xy z G123h
console.log(toHeaderCase(' ^&* #DEFine x: 15 + ==')); // => Define X 15
console.log(toHeaderCase('123456789')); // => 123456789
```

#### Browser
##### 1. NPM Package
```html
<script src="./node_modules/js-headercase/dist/js-headercase.js"></script>
<!-- Or use minified -->
<script src="./node_modules/js-headercase/dist/js-headercase.min.js"></script>
```
##### 2. Download from source
```html
<script src="path/to/js-headercase"></script>
```
##### Usage
```html
<script>
	console.log(toHeaderCase('string')); // => String
	console.log(toHeaderCase('camelCase')); // => Camel Case
	console.log(toHeaderCase('param-case')); // => Param Case
	console.log(toHeaderCase('PascalCase')); // => Pascal Case
	console.log(toHeaderCase('UPPER_CASE')); // => Upper Case
	console.log(toHeaderCase('snake_case')); // => Snake Case
	console.log(toHeaderCase('sentence case')); // => Sentence Case
	console.log(toHeaderCase('Title Case')); // => Title Case
	console.log(toHeaderCase('dot.case')); // => // Dot Case

	console.log(toHeaderCase('')); // => ''
	console.log(toHeaderCase(null)); // => ''
	console.log(toHeaderCase(undefined)); // => ''

	console.log(toHeaderCase('Abc ___ 123 ___ xYz')); // => Abc 123 X Yz
	console.log(toHeaderCase('123__abc  ... ?// {#} def 12')); // => 123 Abc Def 12
	console.log(toHeaderCase('	tab space ??? ________')); // => Tab Space
	console.log(toHeaderCase('___?||123  abc|| 123..123')); // => 123 Abc 123 123
	console.log(toHeaderCase('!@#$%  {}|":;" ABC XyZ G123H')); // => Abc Xy z G123h
	console.log(toHeaderCase(' ^&* #DEFine x: 15 + ==')); // => Define X 15
	console.log(toHeaderCase('123456789')); // => 123456789
</script>
```

## API

### toHeaderCase(str)

Returns a new string which is headercase format of str.

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


[npm-image]: https://img.shields.io/npm/v/js-headercase.svg?style=flat
[npm-url]: https://www.npmjs.com/package/js-headercase
[downloads-image]: https://img.shields.io/npm/dm/js-headercase.svg?style=flat
[downloads-url]: https://www.npmjs.com/package/js-headercase
