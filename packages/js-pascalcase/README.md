# js-pascalcase

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

JavaScript convert string to PascalCase - Use for both Node.JS and Browser.


## Installation

`$ npm install --save js-pascalcase`

or

`$ yarn add js-pascalcase`


## Usage

#### Node.JS

```js
const toPascalCase = require('js-pascalcase');

console.log(toPascalCase('string')); // => String
console.log(toPascalCase('camelCase')); // => CamelCase
console.log(toPascalCase('param-case')); // => ParamCase
console.log(toPascalCase('PascalCase')); // => PascalCase
console.log(toPascalCase('UPPER_CASE')); // => UpperCase
console.log(toPascalCase('snake_case')); // => SnakeCase
console.log(toPascalCase('sentence case')); // => SentenceCase
console.log(toPascalCase('Title Case')); // => TitleCase
console.log(toPascalCase('dot.case')); // => // DotCase

console.log(toPascalCase('')); // => ''
console.log(toPascalCase(null)); // => ''
console.log(toPascalCase(undefined)); // => ''

console.log(toPascalCase('Abc ___ 123 ___ xYz')); // => Abc123XYz
console.log(toPascalCase('123__abc  ... ?// {#} def 12')); // => 123AbcDef12
console.log(toPascalCase('	tab space ??? ________')); // => TabSpace
console.log(toPascalCase('___?||123  abc|| 123..123')); // => 123Abc123123
console.log(toPascalCase('!@#$%  {}|":;" ABC XyZ G123H')); // => AbcXyZG123h
console.log(toPascalCase(' ^&* #DEFine x: 15 + ==')); // => DefineX15
console.log(toPascalCase('123456789')); // => 123456789
```

#### Browser
##### 1. NPM Package
```html
<script src="./node_modules/js-pascalcase/dist/js-pascalcase.js"></script>
<!-- Or use minified -->
<script src="./node_modules/js-pascalcase/dist/js-pascalcase.min.js"></script>
```
##### 2. Download from source
```html
<script src="path/to/js-pascalcase"></script>
```
##### Usage
```html
<script>
	console.log(toPascalCase('string')); // => String
	console.log(toPascalCase('camelCase')); // => CamelCase
	console.log(toPascalCase('param-case')); // => ParamCase
	console.log(toPascalCase('PascalCase')); // => PascalCase
	console.log(toPascalCase('UPPER_CASE')); // => UpperCase
	console.log(toPascalCase('snake_case')); // => SnakeCase
	console.log(toPascalCase('sentence case')); // => SentenceCase
	console.log(toPascalCase('Title Case')); // => TitleCase
	console.log(toPascalCase('dot.case')); // => // DotCase

	console.log(toPascalCase('')); // => ''
	console.log(toPascalCase(null)); // => ''
	console.log(toPascalCase(undefined)); // => ''

	console.log(toPascalCase('Abc ___ 123 ___ xYz')); // => Abc123XYz
	console.log(toPascalCase('123__abc  ... ?// {#} def 12')); // => 123AbcDef12
	console.log(toPascalCase('	tab space ??? ________')); // => TabSpace
	console.log(toPascalCase('___?||123  abc|| 123..123')); // => 123Abc123123
	console.log(toPascalCase('!@#$%  {}|":;" ABC XyZ G123H')); // => AbcXyZG123h
	console.log(toPascalCase(' ^&* #DEFine x: 15 + ==')); // => DefineX15
	console.log(toPascalCase('123456789')); // => 123456789
</script>
```

## API

### toPascalCase(str)

Returns a new string which is pascalcase format of str.


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

[npm-image]: https://img.shields.io/npm/v/js-pascalcase.svg?style=flat
[npm-url]: https://www.npmjs.com/package/js-pascalcase
[downloads-image]: https://img.shields.io/npm/dm/js-pascalcase.svg?style=flat
[downloads-url]: https://www.npmjs.com/package/js-pascalcase
