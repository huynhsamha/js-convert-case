# camelcase-keys-object

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

Camelcase the keys of an object. Use for node.js and browser

It is useful for [oracledb](https://github.com/oracle/node-oracledb).


## Installation

`$ npm install --save camelcase-keys-object`

or

`$ yarn add camelcase-keys-object`


## Usage

#### Node.JS

```js
const camelKeys = require('camelcase-keys-object');

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

const res = camelKeys(object);

console.log(res);
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
 */

console.log(camelKeys(null)); // null
console.log(camelKeys(undefined)); // null
```

#### Browser
##### 1. NPM Package
```html
<script src="./node_modules/camelcase-keys-object/dist/camelcase-keys-object.js"></script>
<!-- Or use minified-->
<script src="./node_modules/camelcase-keys-object/dist/camelcase-keys-object.min.js"></script>
```
##### 2. Download from source
```html
<script src="path/to/camelcase-keys-object"></script>
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

	const res = camelKeys(object);

	console.log(res);
	console.log(camelKeys(null)); // null
	console.log(camelKeys(undefined)); // null

</script>
```

## API

### camelKeys(object)

Returns a new object which keys is/are camelcased.


## Related
+ [js-camelcase](https://github.com/huynhsamha/js-camelcase)
+ [uppercase-keys-object](https://github.com/huynhsamha/uppercase-keys-object)
+ [lowercase-keys-object](https://github.com/huynhsamha/lowercase-keys-object)
+ [snakecase-keys-object](https://github.com/huynhsamha/snakecase-keys-object)


[npm-image]: https://img.shields.io/npm/v/camelcase-keys-object.svg?style=flat
[npm-url]: https://www.npmjs.com/package/camelcase-keys-object
[downloads-image]: https://img.shields.io/npm/dm/camelcase-keys-object.svg?style=flat
[downloads-url]: https://www.npmjs.com/package/camelcase-keys-object
