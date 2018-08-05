# js-convert-case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

JavaScript Convert String and Keys of Object between cases (camelCase, snake_case, PascalCase, dot.case, path/case, text case, Sentence case, Header Case, UPPERCASE, lowercase). Use for both Node.JS and Browser.

**Methods are also available on npm as an individual packages.**

View [Demo on GitHub here](https://huynhsamha.github.io/js-convert-case/).

**Current branch is gh-pages for demo, please checkout [master branch](https://github.com/huynhsamha/js-convert-case) for usage.**

## Installation

`$ npm install --save js-convert-case`

or

`$ yarn add js-convert-case`

## Usage

#### Node.JS

```js
const jsConvert = require('js-convert-case');

// Convert String cases
console.log(jsConvert.toCamelCase('param-case')); // paramCase
console.log(jsConvert.toSnakeCase('param-case')); // param_case
console.log(jsConvert.toPascalCase('param-case')); // ParamCase
console.log(jsConvert.toDotCase('param-case')); // param.case
console.log(jsConvert.toPathCase('param-case')); // param/case
console.log(jsConvert.toTextCase('param-case')); // param case
console.log(jsConvert.toSentenceCase('param-case')); // Param case
console.log(jsConvert.toHeaderCase('param-case')); // Param Case
console.log(jsConvert.toLowerCase('param-case')); // param-case
console.log(jsConvert.toUpperCase('param-case')); // PARAM-CASE

// Convert Keys of Object case
const obj = {
		camelCase: 1,
		UPPERCASE: 2,
		lowercase: 3,
		snake_case: 4,
		PascalCase: 5,
		'Title Case': 6,
		'dot.case': 7,
		'param-case': 8,
		'Sentence case': 9,
		'path/case': 10,
		'Header-Case': 11
};

console.log(window.jsConvert);
console.log(jsConvert);

console.log(jsConvert.lowerKeys(obj));
console.log(jsConvert.upperKeys(obj));
console.log(jsConvert.camelKeys(obj));
console.log(jsConvert.snakeKeys(obj));
console.log(jsConvert.pascalKeys(obj));
```

#### Browser
##### 1. NPM Package
```html
<script src="./node_modules/js-convert-case/dist/js-convert-case.js"></script>
<!-- Or use minified -->
<script src="./node_modules/js-convert-case/dist/js-convert-case.min.js"></script>
```
##### 2. Download from source
```html
<script src="path/to/js-convert-case"></script>
```
##### 3. Get from `unpkg.com`
```html
<script src="https://unpkg.com/js-convert-case/dist/js-convert-case.min.js"></script>
```

##### Usage
```html
<script>
	// Convert String cases
	console.log(jsConvert.toCamelCase('param-case')); // paramCase
	console.log(jsConvert.toSnakeCase('param-case')); // param_case
	console.log(jsConvert.toPascalCase('param-case')); // ParamCase
	console.log(jsConvert.toDotCase('param-case')); // param.case
	console.log(jsConvert.toPathCase('param-case')); // param/case
	console.log(jsConvert.toTextCase('param-case')); // param case
	console.log(jsConvert.toSentenceCase('param-case')); // Param case
	console.log(jsConvert.toHeaderCase('param-case')); // Param Case
	console.log(jsConvert.toLowerCase('param-case')); // param-case
	console.log(jsConvert.toUpperCase('param-case')); // PARAM-CASE

	// Convert Keys of Object case
	const obj = {
			camelCase: 1,
			UPPERCASE: 2,
			lowercase: 3,
			snake_case: 4,
			PascalCase: 5,
			'Title Case': 6,
			'dot.case': 7,
			'param-case': 8,
			'Sentence case': 9,
			'path/case': 10,
			'Header-Case': 11
	};

	console.log(jsConvert.lowerKeys(obj));
	console.log(jsConvert.upperKeys(obj));
	console.log(jsConvert.camelKeys(obj));
	console.log(jsConvert.snakeKeys(obj));
	console.log(jsConvert.pascalKeys(obj));
</script>
```












## API - Methods

### jsConvert


**jsConvert** is object containing function convert between cases. In browser, you should use correct name of this object. In Node.JS, you can rename with your custom name for object.




### Available Methods

+ Convert String cases
* [`toCamelCase`](#tocamelcase)
* [`toSnakeCase`](#tosnakecase)
* [`toPascalCase`](#topascalcase)
* [`toDotCase`](#todotcase)
* [`toPathCase`](#topathcase)
* [`toTextCase`](#totextcase)
* [`toSentenceCase`](#tosentencecase)
* [`toHeaderCase`](#toheadercase)
* [`toLowerCase`](#tolowercase)
* [`toUpperCase`](#touppercase)

+ Convert Keys of Object case
* [`lowerKeys`](#lowerkeys)
* [`upperKeys`](#upperkeys)
* [`camelKeys`](#camelkeys)
* [`snakeKeys`](#snakekeys)
* [`pascalKeys`](#pascalkeys)



#### [toCamelCase](https://github.com/huynhsamha/js-camelcase)

[![NPM version](https://img.shields.io/npm/v/js-camelcase.svg?style=flat)](https://npmjs.org/package/js-camelcase)
[![NPM downloads](https://img.shields.io/npm/dm/js-camelcase.svg?style=flat)](https://npmjs.org/package/js-camelcase)

Return as a string with the separators denoted by having the next letter capitalized.

```js
console.log(jsConvert.toCamelCase('param-case')); // paramCase
```




#### [toSnakeCase](https://github.com/huynhsamha/js-snakecase)

[![NPM version](https://img.shields.io/npm/v/js-snakecase.svg?style=flat)](https://npmjs.org/package/js-snakecase)
[![NPM downloads](https://img.shields.io/npm/dm/js-snakecase.svg?style=flat)](https://npmjs.org/package/js-snakecase)

Return as a lower case, underscore separated string.

```js
console.log(jsConvert.toSnakeCase('camelCase')); // camel_case
```





#### [toPascalCase](https://github.com/huynhsamha/js-pascalcase)

[![NPM version](https://img.shields.io/npm/v/js-pascalcase.svg?style=flat)](https://npmjs.org/package/js-pascalcase)
[![NPM downloads](https://img.shields.io/npm/dm/js-pascalcase.svg?style=flat)](https://npmjs.org/package/js-pascalcase)

Return as a string denoted in the same fashion as `camelCase`, but with the first letter also capitalized.

```js
console.log(jsConvert.toPascalCase('param-case')); // ParamCase
```




#### [toDotCase](https://github.com/huynhsamha/js-dotcase)

[![NPM version](https://img.shields.io/npm/v/js-dotcase.svg?style=flat)](https://npmjs.org/package/js-dotcase)
[![NPM downloads](https://img.shields.io/npm/dm/js-dotcase.svg?style=flat)](https://npmjs.org/package/js-dotcase)

Return as a lower case, period separated string.

```js
console.log(jsConvert.toDotCase('Title Case')); // title.case
```






#### [toPathCase](https://github.com/huynhsamha/js-pathcase)

[![NPM version](https://img.shields.io/npm/v/js-pathcase.svg?style=flat)](https://npmjs.org/package/js-pathcase)
[![NPM downloads](https://img.shields.io/npm/dm/js-pathcase.svg?style=flat)](https://npmjs.org/package/js-pathcase)

Return as a lower case, slash separated string.

```js
console.log(jsConvert.toPathCase('camelCase')); // camel/case
```





#### [toTextCase](https://github.com/huynhsamha/js-textcase)

[![NPM version](https://img.shields.io/npm/v/js-textcase.svg?style=flat)](https://npmjs.org/package/js-textcase)
[![NPM downloads](https://img.shields.io/npm/dm/js-textcase.svg?style=flat)](https://npmjs.org/package/js-textcase)

Return the string without any casing (lower case, space separated).

```js
console.log(jsConvert.toTextCase('camelCase')); // camel case
```






#### [toSentenceCase](https://github.com/huynhsamha/js-sentencecase)

[![NPM version](https://img.shields.io/npm/v/js-sentencecase.svg?style=flat)](https://npmjs.org/package/js-sentencecase)
[![NPM downloads](https://img.shields.io/npm/dm/js-sentencecase.svg?style=flat)](https://npmjs.org/package/js-sentencecase)

Return as a lower case, space separated string with the first letter upper case.

```js
console.log(jsConvert.toSentenceCase('camelCase')); // Camel case
```





#### [toHeaderCase](https://github.com/huynhsamha/js-headercase)

[![NPM version](https://img.shields.io/npm/v/js-headercase.svg?style=flat)](https://npmjs.org/package/js-headercase)
[![NPM downloads](https://img.shields.io/npm/dm/js-headercase.svg?style=flat)](https://npmjs.org/package/js-headercase)

Return as a space separated string with the first character of every word upper cased.

```js
console.log(jsConvert.toHeaderCase('param-case')); // Param Case
```





#### [toLowerCase](#)

Similar to `String.prototype.toLowerCase()`

```js
console.log(jsConvert.toLowerCase('Title Case')); // title case
```


#### [toUpperCase](#)

Similar to `String.prototype.toUpperCase()`

```js
console.log(jsConvert.toUpperCase('param-case')); // PARAM-CASE
```



#### [lowerKeys](https://github.com/huynhsamha/lowercase-keys-object)

[![NPM version](https://img.shields.io/npm/v/lowercase-keys-object.svg?style=flat)](https://npmjs.org/package/lowercase-keys-object)
[![NPM downloads](https://img.shields.io/npm/dm/lowercase-keys-object.svg?style=flat)](https://npmjs.org/package/lowercase-keys-object)

Return a new object which keys is lowercase format.

```js
console.log(jsConvert.lowerKeys(obj));

/**
{ camelcase: 1,
  uppercase: 2,
  lowercase: 3,
  snake_case: 4,
  pascalcase: 5,
  'title case': 6,
  'dot.case': 7,
  'param-case': 8,
  'sentence case': 9,
  'path/case': 10,
  'header-case': 11 }
**/
```





#### [upperKeys](https://github.com/huynhsamha/uppercase-keys-object)

[![NPM version](https://img.shields.io/npm/v/uppercase-keys-object.svg?style=flat)](https://npmjs.org/package/uppercase-keys-object)
[![NPM downloads](https://img.shields.io/npm/dm/uppercase-keys-object.svg?style=flat)](https://npmjs.org/package/uppercase-keys-object)

Return a new object which keys is uppercase format.

```js
console.log(jsConvert.upperKeys(obj));

/**
{ CAMELCASE: 1,
  UPPERCASE: 2,
  LOWERCASE: 3,
  SNAKE_CASE: 4,
  PASCALCASE: 5,
  'TITLE CASE': 6,
  'DOT.CASE': 7,
  'PARAM-CASE': 8,
  'SENTENCE CASE': 9,
  'PATH/CASE': 10,
  'HEADER-CASE': 11 }
**/
```






#### [camelKeys](https://github.com/huynhsamha/camelcase-keys-object)

[![NPM version](https://img.shields.io/npm/v/camelcase-keys-object.svg?style=flat)](https://npmjs.org/package/camelcase-keys-object)
[![NPM downloads](https://img.shields.io/npm/dm/camelcase-keys-object.svg?style=flat)](https://npmjs.org/package/camelcase-keys-object)

Return a new object which keys is camelcase format.

```js
console.log(jsConvert.camelKeys(obj));

/**
{ camelCase: 1,
  uppercase: 2,
  lowercase: 3,
  snakeCase: 4,
  pascalCase: 5,
  titleCase: 6,
  dotCase: 7,
  paramCase: 8,
  sentenceCase: 9,
  pathCase: 10,
  headerCase: 11 }
**/
```





#### [snakeKeys](https://github.com/huynhsamha/snakecase-keys-object)

[![NPM version](https://img.shields.io/npm/v/snakecase-keys-object.svg?style=flat)](https://npmjs.org/package/snakecase-keys-object)
[![NPM downloads](https://img.shields.io/npm/dm/snakecase-keys-object.svg?style=flat)](https://npmjs.org/package/snakecase-keys-object)

Return a new object which keys is snakecase format.

```js
console.log(jsConvert.snakeKeys(obj));

/**
{ camel_case: 1,
  uppercase: 2,
  lowercase: 3,
  snake_case: 4,
  pascal_case: 5,
  title_case: 6,
  dot_case: 7,
  param_case: 8,
  sentence_case: 9,
  path_case: 10,
  header_case: 11 }
**/
```





#### [pascalKeys](https://github.com/huynhsamha/pascalcase-keys-object)

[![NPM version](https://img.shields.io/npm/v/pascalcase-keys-object.svg?style=flat)](https://npmjs.org/package/pascalcase-keys-object)
[![NPM downloads](https://img.shields.io/npm/dm/pascalcase-keys-object.svg?style=flat)](https://npmjs.org/package/pascalcase-keys-object)

Return a new object which keys is pascalcase format.

```js
console.log(jsConvert.pascalKeys(obj));

/**
{ CamelCase: 1,
  Uppercase: 2,
  Lowercase: 3,
  SnakeCase: 4,
  PascalCase: 5,
  TitleCase: 6,
  DotCase: 7,
  ParamCase: 8,
  SentenceCase: 9,
  PathCase: 10,
  HeaderCase: 11 }
**/
```




## Examples:
```js
console.log(jsConvert.toCamelCase('param-case')); // paramCase
console.log(jsConvert.toCamelCase('camelCase')); // camelCase
console.log(jsConvert.toCamelCase('Title Case')); // titleCase

console.log(jsConvert.toSnakeCase('param-case')); // param_case
console.log(jsConvert.toSnakeCase('camelCase')); // camel_case
console.log(jsConvert.toSnakeCase('Title Case')); // title_case

console.log(jsConvert.toPascalCase('param-case')); // ParamCase
console.log(jsConvert.toPascalCase('camelCase')); // CamelCase
console.log(jsConvert.toPascalCase('Title Case')); // TitleCase

console.log(jsConvert.toDotCase('param-case')); // param.case
console.log(jsConvert.toDotCase('camelCase')); // camel.case
console.log(jsConvert.toDotCase('Title Case')); // title.case

console.log(jsConvert.toPathCase('param-case')); // param/case
console.log(jsConvert.toPathCase('camelCase')); // camel/case
console.log(jsConvert.toPathCase('Title Case')); // title/case

console.log(jsConvert.toTextCase('param-case')); // param case
console.log(jsConvert.toTextCase('camelCase')); // camel case
console.log(jsConvert.toTextCase('Title Case')); // title case

console.log(jsConvert.toSentenceCase('param-case')); // Param case
console.log(jsConvert.toSentenceCase('camelCase')); // Camel case
console.log(jsConvert.toSentenceCase('Title Case')); // Title case

console.log(jsConvert.toHeaderCase('param-case')); // Param Case
console.log(jsConvert.toHeaderCase('camelCase')); // Camel Case
console.log(jsConvert.toHeaderCase('Title Case')); // Title Case

console.log(jsConvert.toLowerCase('param-case')); // param-case
console.log(jsConvert.toLowerCase('Title Case')); // title case
console.log(jsConvert.toUpperCase('param-case')); // PARAM-CASE
console.log(jsConvert.toUpperCase('Title Case')); // TITLE CASE


// Specific values
console.log(jsConvert.toCamelCase('')); // => ''
console.log(jsConvert.toSnakeCase(null)); // => ''
console.log(jsConvert.toPascalCase(undefined)); // => ''

// Complicated values
const str = '!@#$  	-- Hello___world ..<>| \\ 123_ _456 &\l sn_ca - cmCa - PcCa - dot.ca - txt ca - Sen ca - Hd Ca %^$^%&';
console.log(jsConvert.toCamelCase(str)); // => 'helloWorld123456LSnCaCmCaPcCaDotCaTxtCaSenCaHdCa'
console.log(jsConvert.toPascalCase(str)); // => 'HelloWorld123456LSnCaCmCaPcCaDotCaTxtCaSenCaHdCa'
console.log(jsConvert.toSnakeCase(str)); // => 'hello_world_123_456_l_sn_ca_cm_ca_pc_ca_dot_ca_txt_ca_sen_ca_hd_ca'
console.log(jsConvert.toDotCase(str)); // => 'hello.world.123.456.l.sn.ca.cm.ca.pc.ca.dot.ca.txt.ca.sen.ca.hd.ca'
console.log(jsConvert.toPathCase(str)); // => 'hello/world/123/456/l/sn/ca/cm/ca/pc/ca/dot/ca/txt/ca/sen/ca/hd/ca'
console.log(jsConvert.toTextCase(str)); // => 'hello world 123 456 l sn ca cm ca pc ca dot ca txt ca sen ca hd ca'
console.log(jsConvert.toSentenceCase(str)); // => 'Hello world 123 456 l sn ca cm ca pc ca dot ca txt ca sen ca hd ca'
console.log(jsConvert.toHeaderCase(str)); // => 'Hello World 123 456 L Sn Ca Cm Ca Pc Ca Dot Ca Txt Ca Sen Ca Hd Ca'


// All outputs following are null
console.log(jsConvert.lowerKeys(undefined));
console.log(jsConvert.lowerKeys(null));
console.log(jsConvert.upperKeys(undefined));
console.log(jsConvert.upperKeys(null));
console.log(jsConvert.camelKeys(undefined));
console.log(jsConvert.camelKeys(null));
```
















## Dependencies

+ Convert String Cases
	- [js-camelcase](https://github.com/huynhsamha/js-camelcase)
	- [js-snakecase](https://github.com/huynhsamha/js-snakecase)
	- [js-pascalcase](https://github.com/huynhsamha/js-pascalcase)
	- [js-dotcase](https://github.com/huynhsamha/js-dotcase)
	- [js-pathcase](https://github.com/huynhsamha/js-pathcase)
	- [js-textcase](https://github.com/huynhsamha/js-textcase)
	- [js-sentencecase](https://github.com/huynhsamha/js-sentencecase)
	- [js-headercase](https://github.com/huynhsamha/js-headercase)

+ Convert Keys of Object cases
	- [lowercase-keys-object](https://github.com/huynhsamha/lowercase-keys-object)
	- [uppercase-keys-object](https://github.com/huynhsamha/uppercase-keys-object)
	- [snakecase-keys-object](https://github.com/huynhsamha/snakecase-keys-object)
	- [camelcase-keys-object](https://github.com/huynhsamha/camelcase-keys-object)
	- [pascalcase-keys-object](https://github.com/huynhsamha/pascalcase-keys-object)



[npm-image]: https://img.shields.io/npm/v/js-convert-case.svg?style=flat
[npm-url]: https://www.npmjs.com/package/js-convert-case
[downloads-image]: https://img.shields.io/npm/dm/js-convert-case.svg?style=flat
[downloads-url]: https://www.npmjs.com/package/js-convert-case
