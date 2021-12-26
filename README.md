# js-convert-case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![GitHub tag](https://img.shields.io/github/tag/huynhsamha/js-convert-case.svg)](https://GitHub.com/huynhsamha/js-convert-case/tags)
![File size](https://img.badgesize.io/huynhsamha/js-convert-case/master/dist/js-convert-case.min.js.svg?label=dist)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

[npm-image]: https://img.shields.io/npm/v/js-convert-case.svg?style=flat
[npm-url]: https://www.npmjs.com/package/js-convert-case
[downloads-image]: https://img.shields.io/npm/dm/js-convert-case.svg?style=flat
[downloads-url]: https://www.npmjs.com/package/js-convert-case

⛹️‍♂️ JavaScript Convert Cases Package 🏌️‍♀️ Use for both Node.JS and Browser 🎯🎯

Convert String and Keys of Object between cases (camelCase, snake_case, PascalCase, dot.case, path/case, text case, Sentence case, Header Case, UPPERCASE, lowercase, kebab-case).

<!-- <br>
<img src="https://github.com/huynhsamha/js-convert-case/raw/master/docs/img/banner.png" width="50%" justify="center">
<br> -->

View [Demo on GitHub here](https://huynhsamha.github.io/js-convert-case/).

## Installation

### Node.JS

```bash
npm install --save js-convert-case
# or
yarn add js-convert-case
```

### Browser

Download file `js-convert-case.min.js` at [here](https://github.com/huynhsamha/js-convert-case/blob/master/dist/js-convert-case.min.js) or we can use CDN for NPM such as [unpkg](https://unpkg.com/) or [jsDelivr](https://www.jsdelivr.com/).

```html
<!-- Use CDN -->
<!-- use jsDelivr -->
<script src="https://cdn.jsdelivr.net/js-convert-case/dist/js-convert-case.min.js"></script>
<!-- or use unpkg -->
<script src="https://unpkg.com/js-convert-case/dist/js-convert-case.min.js"></script>

<!-- or download file directly -->
<script src="[path/to/dist]/js-convert-case.min.js"></script>
```

## Usage

### Node.JS

#### Syntax `require`

```js
const jsConvert = require('js-convert-case');
// or
const { toCamelCase, toDotCase, upperKeys, snakeKeys } = require('js-convert-case');
```

#### Syntax `import`

```js
import js-convert-case from 'js-convert-case';
// or
import { toPascalCase, toPathCase, lowerKeys, camelKeys } from 'js-convert-case';
```

#### Example

```js
// Convert String
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
console.log(jsConvert.toKebabCase('param-case')); // param-case

// Convert Keys of Object
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
console.log(jsConvert.kebabKeys(obj));
```

### Browser

After file `js-convert-case.min.js` is loaded, object `jsConvert` will be exported globally into `window` object.

```html
<script>
	console.log(window.jsConvert);
	console.log(jsConvert);

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
	console.log(jsConvert.toKebabCase('param-case')); // param-case

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
	console.log(jsConvert.kebabKeys(obj));
</script>
```

#### More examples

You can see more examples in directory [`./test/browser`](./test/browser)

## API

### jsConvert

**jsConvert** is an object containing function which converts cases. On browser, `jsConvert` is exported globally to `window` object, you can access by `jsConvert` or `window.jsConvert`.

### Available Methods

#### Convert String

- [`toCamelCase`](#tocamelcase)
- [`toSnakeCase`](#tosnakecase)
- [`toPascalCase`](#topascalcase)
- [`toDotCase`](#todotcase)
- [`toPathCase`](#topathcase)
- [`toTextCase`](#totextcase)
- [`toSentenceCase`](#tosentencecase)
- [`toHeaderCase`](#toheadercase)
- [`toKebabCase`](#tokebabcase)
- [`toLowerCase`](#tolowercase)
- [`toUpperCase`](#touppercase)

#### Convert Keys of Object

- [`lowerKeys`](#lowerkeys)
- [`upperKeys`](#upperkeys)
- [`camelKeys`](#camelkeys)
- [`snakeKeys`](#snakekeys)
- [`pascalKeys`](#pascalkeys)
- [`kebabKeys`](#kebabkeys)

#### toCamelCase

Return as a string with the separators denoted by having the next letter capitalized.

```js
console.log(jsConvert.toCamelCase('param-case')); // paramCase
```

#### toSnakeCase

Return as a lower case, underscore separated string.

```js
console.log(jsConvert.toSnakeCase('camelCase')); // camel_case
```

#### toPascalCase

Return as a string denoted in the same fashion as `camelCase`, but with the first letter also capitalized.

```js
console.log(jsConvert.toPascalCase('param-case')); // ParamCase
```

#### toDotCase

Return as a lower case, period separated string.

```js
console.log(jsConvert.toDotCase('Title Case')); // title.case
```

#### toPathCase

Return as a lower case, slash separated string.

```js
console.log(jsConvert.toPathCase('camelCase')); // camel/case
```

#### toTextCase

Return the string without any casing (lower case, space separated).

```js
console.log(jsConvert.toTextCase('camelCase')); // camel case
```

#### toSentenceCase

Return as a lower case, space separated string with the first letter upper case.

```js
console.log(jsConvert.toSentenceCase('camelCase')); // Camel case
```

#### toHeaderCase

Return as a space separated string with the first character of every word upper cased.

```js
console.log(jsConvert.toHeaderCase('param-case')); // Param Case
```

#### toKebabCase

Return as a lower case, hyphen separated string.

```js
console.log(jsConvert.toKebabCase('Title Case')); // title-case
```

#### toLowerCase

Similar to `String.prototype.toLowerCase()`

```js
console.log(jsConvert.toLowerCase('Title Case')); // title case
```

#### toUpperCase

Similar to `String.prototype.toUpperCase()`

```js
console.log(jsConvert.toUpperCase('param-case')); // PARAM-CASE
```

#### lowerKeys

```ts
const lowerKeys(obj: any, { 
	recursive: boolean = false, 
	recursiveInArray: boolean = false, 
	keepTypesOnRecursion: any[] = [] // example: Date
}): object | null
```

Return a new object which keys is _lowercase_ format. Support lowerKeys **recursively**. Default is `false`.

```js
console.log(jsConvert.lowerKeys(obj));
// or recursive
console.log(jsConvert.lowerKeys(obj, { recursive: true }));
// or recursive in sub-keys with value is an array
console.log(jsConvert.lowerKeys(obj, { recursive: true, recursiveInArray: true }));

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

// All output are `null`
console.log(jsConvert.lowerKeys(undefined));
console.log(jsConvert.lowerKeys(null));
console.log(jsConvert.lowerKeys(1));
console.log(jsConvert.lowerKeys('abc'));
console.log(jsConvert.lowerKeys([1, 2, 3]));
```

#### upperKeys

```ts
const upperKeys(obj: any, { 
	recursive: boolean = false, 
	recursiveInArray: boolean = false, 
	keepTypesOnRecursion: any[] = [] // example: Date 
}): object | null
```

Return a new object which keys is _UPPERCASE_ format. Support upperKeys **recursively**. Default is `false`

```js
console.log(jsConvert.upperKeys(obj));
// or recursive
console.log(jsConvert.upperKeys(obj, { recursive: true }));
// or recursive in sub-keys with value is an array
console.log(jsConvert.upperKeys(obj, { recursive: true, recursiveInArray: true }));

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

// All output are `null`
console.log(jsConvert.upperKeys(undefined));
console.log(jsConvert.upperKeys(null));
console.log(jsConvert.upperKeys(1));
console.log(jsConvert.upperKeys('abc'));
console.log(jsConvert.upperKeys([1, 2, 3]));
```

#### camelKeys

```ts
const camelKeys(obj: any, { 
	recursive: boolean = false, 
	recursiveInArray: boolean = false, 
	keepTypesOnRecursion: any[] = [] // example: Date 
}): object | null
```

Return a new object which keys is _camelCase_ format. Support camelKeys **recursively**. Default is `false`.

```js
console.log(jsConvert.camelKeys(obj));
// or recursive
console.log(jsConvert.camelKeys(obj, { recursive: true }));
// or recursive in sub-keys with value is an array
console.log(jsConvert.camelKeys(obj, { recursive: true, recursiveInArray: true }));

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

// All output are `null`
console.log(jsConvert.camelKeys(undefined));
console.log(jsConvert.camelKeys(null));
console.log(jsConvert.camelKeys(1));
console.log(jsConvert.camelKeys('abc'));
console.log(jsConvert.camelKeys([1, 2, 3]));
```

#### snakeKeys

```ts
const snakeKeys(obj: any, { 
	recursive: boolean = false, 
	recursiveInArray: boolean = false, 
	keepTypesOnRecursion: any[] = [] // example: Date 
}): object | null
```

Return a new object which keys is _snake_case_ format. Support snakeKeys **recursively**. Default is `false`.

```js
console.log(jsConvert.snakeKeys(obj));
// or recursive
console.log(jsConvert.snakeKeys(obj, { recursive: true }));
// or recursive in sub-keys with value is an array
console.log(jsConvert.snakeKeys(obj, { recursive: true, recursiveInArray: true }));

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

// All output are `null`
console.log(jsConvert.snakeKeys(undefined));
console.log(jsConvert.snakeKeys(null));
console.log(jsConvert.snakeKeys(1));
console.log(jsConvert.snakeKeys('abc'));
console.log(jsConvert.snakeKeys([1, 2, 3]));
```

#### pascalKeys

```ts
const pascalKeys(obj: any, { 
	recursive: boolean = false, 
	recursiveInArray: boolean = false, 
	keepTypesOnRecursion: any[] = [] // example: Date 
}): object | null
```

Return a new object which keys is _PascalCase_ format. Support pascalKeys **recursively**. Default is `false`.

```js
console.log(jsConvert.pascalKeys(obj));
// or recursive
console.log(jsConvert.pascalKeys(obj, { recursive: true }));
// or recursive in sub-keys with value is an array
console.log(jsConvert.pascalKeys(obj, { recursive: true, recursiveInArray: true }));

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

// All output are `null`
console.log(jsConvert.pascalKeys(undefined));
console.log(jsConvert.pascalKeys(null));
console.log(jsConvert.pascalKeys(1));
console.log(jsConvert.pascalKeys('abc'));
console.log(jsConvert.pascalKeys([1, 2, 3]));
```

#### kebabKeys

```ts
const kebabKeys(obj: any, { 
	recursive: boolean = false, 
	recursiveInArray: boolean = false, 
	keepTypesOnRecursion: any[] = [] // example: Date 
}): object | null
```

Return a new object which keys is _kebab-case_ format. Support kebabKeys **recursively**. Default is `false`.

```js
console.log(jsConvert.kebabKeys(obj));
// or recursive
console.log(jsConvert.kebabKeys(obj, { recursive: true }));
// or recursive in sub-keys with value is an array
console.log(jsConvert.kebabKeys(obj, { recursive: true, recursiveInArray: true }));

/**
{ 'camel-case': 1,
  uppercase: 2,
  lowercase: 3,
  'snake-case': 4,
  'pascal-case': 5,
  'title-case': 6,
  'dot-case': 7,
  'param-case': 8,
  'sentence-case': 9,
  'path-case': 10,
  'header-case': 11 }
**/

// All output are `null`
console.log(jsConvert.kebabKeys(undefined));
console.log(jsConvert.kebabKeys(null));
console.log(jsConvert.kebabKeys(1));
console.log(jsConvert.kebabKeys('abc'));
console.log(jsConvert.kebabKeys([1, 2, 3]));
```

## Examples

### Convert string between cases

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

console.log(jsConvert.toKebabCase('param-case')); // param-case
console.log(jsConvert.toKebabCase('Title Case')); // title-case
console.log(jsConvert.toKebabCase('param-case')); // PARAM-CASE
console.log(jsConvert.toKebabCase('Title Case')); // TITLE-CASE
```

### Speical values

```js
console.log(jsConvert.toCamelCase('')); // => ''
console.log(jsConvert.toSnakeCase(null)); // => ''
console.log(jsConvert.toPascalCase(undefined)); // => ''
```

### Complicated values

```js
const str =
	'!@#$  	-- Hello___world ..<>| \\ 123_ _456 &l sn_ca - cmCa - PcCa - dot.ca - txt ca - Sen ca - Hd Ca %^$^%&';
console.log(jsConvert.toCamelCase(str)); // => 'helloWorld123456LSnCaCmCaPcCaDotCaTxtCaSenCaHdCa'
console.log(jsConvert.toPascalCase(str)); // => 'HelloWorld123456LSnCaCmCaPcCaDotCaTxtCaSenCaHdCa'
console.log(jsConvert.toSnakeCase(str)); // => 'hello_world_123_456_l_sn_ca_cm_ca_pc_ca_dot_ca_txt_ca_sen_ca_hd_ca'
console.log(jsConvert.toDotCase(str)); // => 'hello.world.123.456.l.sn.ca.cm.ca.pc.ca.dot.ca.txt.ca.sen.ca.hd.ca'
console.log(jsConvert.toPathCase(str)); // => 'hello/world/123/456/l/sn/ca/cm/ca/pc/ca/dot/ca/txt/ca/sen/ca/hd/ca'
console.log(jsConvert.toTextCase(str)); // => 'hello world 123 456 l sn ca cm ca pc ca dot ca txt ca sen ca hd ca'
console.log(jsConvert.toSentenceCase(str)); // => 'Hello world 123 456 l sn ca cm ca pc ca dot ca txt ca sen ca hd ca'
console.log(jsConvert.toHeaderCase(str)); // => 'Hello World 123 456 L Sn Ca Cm Ca Pc Ca Dot Ca Txt Ca Sen Ca Hd Ca'
console.log(jsConvert.toKebabCase(str)); // => 'hello-world-123-456-l-sn-ca-cm-ca-pc-ca-dot-ca-txt-ca-sen-ca-hd-ca'
```

### Recursive convert in object

**Multi-leveled object**

```js
const core = {
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

const obj = {
	...core,
	lv1: {
		...core,
		lv2: {
			...core
		}
	}
};
```

**Example with `upperKeys`**

```js
const res = jsConvert.upperKeys(obj, { recursive: true });
console.log(JSON.stringify(res));
```

Output

```json
{
	"CAMELCASE": 1,
	"UPPERCASE": 2,
	"LOWERCASE": 3,
	"SNAKE_CASE": 4,
	"PASCALCASE": 5,
	"TITLE CASE": 6,
	"DOT.CASE": 7,
	"PARAM-CASE": 8,
	"SENTENCE CASE": 9,
	"PATH/CASE": 10,
	"HEADER-CASE": 11,
	"LV1": {
		"CAMELCASE": 1,
		"UPPERCASE": 2,
		"LOWERCASE": 3,
		"SNAKE_CASE": 4,
		"PASCALCASE": 5,
		"TITLE CASE": 6,
		"DOT.CASE": 7,
		"PARAM-CASE": 8,
		"SENTENCE CASE": 9,
		"PATH/CASE": 10,
		"HEADER-CASE": 11,
		"LV2": {
			"CAMELCASE": 1,
			"UPPERCASE": 2,
			"LOWERCASE": 3,
			"SNAKE_CASE": 4,
			"PASCALCASE": 5,
			"TITLE CASE": 6,
			"DOT.CASE": 7,
			"PARAM-CASE": 8,
			"SENTENCE CASE": 9,
			"PATH/CASE": 10,
			"HEADER-CASE": 11
		}
	}
}
```

**Example with `pascalKeys`**

```js
const res = jsConvert.pascalKeys(obj, { recursive: true });
console.log(JSON.stringify(res));
```

Output

```json
{
	"CamelCase": 1,
	"Uppercase": 2,
	"Lowercase": 3,
	"SnakeCase": 4,
	"PascalCase": 5,
	"TitleCase": 6,
	"DotCase": 7,
	"ParamCase": 8,
	"SentenceCase": 9,
	"PathCase": 10,
	"HeaderCase": 11,
	"Lv1": {
		"CamelCase": 1,
		"Uppercase": 2,
		"Lowercase": 3,
		"SnakeCase": 4,
		"PascalCase": 5,
		"TitleCase": 6,
		"DotCase": 7,
		"ParamCase": 8,
		"SentenceCase": 9,
		"PathCase": 10,
		"HeaderCase": 11,
		"Lv2": {
			"CamelCase": 1,
			"Uppercase": 2,
			"Lowercase": 3,
			"SnakeCase": 4,
			"PascalCase": 5,
			"TitleCase": 6,
			"DotCase": 7,
			"ParamCase": 8,
			"SentenceCase": 9,
			"PathCase": 10,
			"HeaderCase": 11
		}
	}
}
```

**Example with `snakeKeys` use recursive in array-sub-keys**

```js
const obj = {
	camelCase: 1,
	PascalCase: {
		camelCase: [1, 'a', null, { PascalCase: 1 }, undefined],
		PascalCase: [{ PascalCase: [1] }, [1, { PascalCase: 2 }]],
		snake_case: { camelCase: [{ PascalCase: 1 }] }
	}
};

const res = jsConvert.snakeKeys(obj, { recursive: true, recursiveInArray: true });
console.log(JSON.stringify(res));
```

Output

```json
{
	"camel_case": 1,
	"pascal_case": {
		"camel_case": [1, "a", null, { "pascal_case": 1 }, null],
		"pascal_case": [{ "pascal_case": [1] }, [1, { "pascal_case": 2 }]],
		"snake_case": { "camel_case": [{ "pascal_case": 1 }] }
	}
}
```

_Note: You can browse more examples at folder [`./test/example`](./test/example)_.

## Dependencies

No dependencies

## Development

### Quickstart

- Clone the repository and enter the project

```bash
git clone https://github.com/huynhsamha/js-convert-case.git
cd js-convert-case
```

- Install dependencies

```bash
yarn
```

- Lint and format source (directory `src`)

```bash
yarn format # defined in package.json
yarn lint   # defined in package.json
```

- Build package for Node

```bash
yarn dist:node  # defined in package.json
```

Output directory is `dist` (defined in file `tsconfig.json`)

- Build package for Browser

```bash
yarn dist:browser  # defined in package.json and rollup.config.js
```

- Build dist (both Node and Browser)

```bash
yarn dist  # defined in package.json
```

- Build release files

```bash
yarn build:release:binary
```

### Testing

In directory `test`, we can test the package in environments NodeJS, Browser, pre-published NPM package and the released package.

## Buy me a coffee

<a href="https://www.paypal.me/harisk305/5" target="_blank"><img src="https://i.imgur.com/4bN8fdy.jpg" alt="Donate to my paypal" width=120></a>
