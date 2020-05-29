# snakecase-keys-object

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

Snakecase the keys of an object. Use for node.js and browser

It is useful for [oracledb](https://github.com/oracle/node-oracledb).


## Installation

`$ npm install --save snakecase-keys-object`

or

`$ yarn add snakecase-keys-object`


## Usage

#### Node.JS

```js
const snakeKeys = require('snakecase-keys-object');

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

const res = snakeKeys(object);

console.log(res);
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
 */

console.log(snakeKeys(null)); // null
console.log(snakeKeys(undefined)); // null
```

#### Browser
##### 1. NPM Package
```html
<script src="./node_modules/snakecase-keys-object/dist/snakecase-keys-object.js"></script>
<!-- Or use minified-->
<script src="./node_modules/snakecase-keys-object/dist/snakecase-keys-object.min.js"></script>
```
##### 2. Download from source
```html
<script src="path/to/snakecase-keys-object"></script>
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

	const res = snakeKeys(object);

	console.log(res);
	console.log(snakeKeys(null)); // null
	console.log(snakeKeys(undefined)); // null
</script>
```

## API

### snakeKeys(object)

Returns a new object which keys is/are snakecased.


## Related
+ [js-snakecase](https://github.com/huynhsamha/js-snakecase)
+ [uppercase-keys-object](https://github.com/huynhsamha/uppercase-keys-object)
+ [lowercase-keys-object](https://github.com/huynhsamha/lowercase-keys-object)
+ [camelcase-keys-object](https://github.com/huynhsamha/camelcase-keys-object)



[npm-image]: https://img.shields.io/npm/v/snakecase-keys-object.svg?style=flat
[npm-url]: https://www.npmjs.com/package/snakecase-keys-object
[downloads-image]: https://img.shields.io/npm/dm/snakecase-keys-object.svg?style=flat
[downloads-url]: https://www.npmjs.com/package/snakecase-keys-object
