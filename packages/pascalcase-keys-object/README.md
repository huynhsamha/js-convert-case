# pascalcase-keys-object

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

Pascalcase the keys of an object. Use for node.js and browser

It is useful for [oracledb](https://github.com/oracle/node-oracledb).


## Installation

`$ npm install --save pascalcase-keys-object`

or

`$ yarn add pascalcase-keys-object`


## Usage

#### Node.JS

```js
const pascalKeys = require('pascalcase-keys-object');

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

const res = pascalKeys(object);

console.log(res);
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
 */

console.log(pascalKeys(null)); // null
console.log(pascalKeys(undefined)); // null
```

#### Browser
##### 1. NPM Package
```html
<script src="./node_modules/pascalcase-keys-object/dist/pascalcase-keys-object.js"></script>
<!-- Or use minified-->
<script src="./node_modules/pascalcase-keys-object/dist/pascalcase-keys-object.min.js"></script>
```
##### 2. Download from source
```html
<script src="path/to/pascalcase-keys-object"></script>
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

	const res = pascalKeys(object);

	console.log(res);
	console.log(pascalKeys(null)); // null
	console.log(pascalKeys(undefined)); // null

</script>
```

## API

### pascalKeys(object)

Returns a new object which keys is/are pascalcased.


## Related
+ [js-pascalcase](https://github.com/huynhsamha/js-pascalcase)
+ [pascalcase-keys-object](https://github.com/huynhsamha/pascalcase-keys-object)
+ [uppercase-keys-object](https://github.com/huynhsamha/uppercase-keys-object)
+ [lowercase-keys-object](https://github.com/huynhsamha/lowercase-keys-object)
+ [snakecase-keys-object](https://github.com/huynhsamha/snakecase-keys-object)


[npm-image]: https://img.shields.io/npm/v/pascalcase-keys-object.svg?style=flat
[npm-url]: https://www.npmjs.com/package/pascalcase-keys-object
[downloads-image]: https://img.shields.io/npm/dm/pascalcase-keys-object.svg?style=flat
[downloads-url]: https://www.npmjs.com/package/pascalcase-keys-object
