# uppercase-keys-object

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

Uppercase the keys of an object. Use for node and browser

It is useful for [oracledb](https://github.com/oracle/node-oracledb).

## Installation

`$ npm install --save uppercase-keys-object`

or

`$ yarn add uppercase-keys-object`


## Usage

#### Node.JS

```js
const upperKeys = require('uppercase-keys-object');

const object = {
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

const res = upperKeys(object);

console.log(res);
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
 */

console.log(upperKeys(null)); // null
console.log(upperKeys(undefined)); // null
```

#### Browser
##### 1. NPM Package
```html
<script src="./node_modules/uppercase-keys-object/dist/uppercase-keys-object.js"></script>
<!-- Or use minified -->
<script src="./node_modules/uppercase-keys-object/dist/uppercase-keys-object.min.js"></script>
```
##### 2. Download from source
```html
<script src="path/to/uppercase-keys-object"></script>
```
##### Usage
```html
<script>
	
	const object = {
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

	const res = upperKeys(object);

	console.log(res);
	console.log(upperKeys(null)); // null
	console.log(upperKeys(undefined)); // null

</script>
```

## API

### upperKeys(object)

Returns a new object which keys is/are uppercased.


## Related
+ [lowercase-keys-object](https://github.com/huynhsamha/lowercase-keys-object)
+ [camelcase-keys-object](https://github.com/huynhsamha/camelcase-keys-object)
+ [snakecase-keys-object](https://github.com/huynhsamha/snakecase-keys-object)


[npm-image]: https://img.shields.io/npm/v/uppercase-keys-object.svg?style=flat
[npm-url]: https://www.npmjs.com/package/uppercase-keys-object
[downloads-image]: https://img.shields.io/npm/dm/uppercase-keys-object.svg?style=flat
[downloads-url]: https://www.npmjs.com/package/uppercase-keys-object
