const lowerKeys = require('../index');

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

const res = lowerKeys(object);

console.log(res);
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
 */

console.log(lowerKeys(null));
console.log(lowerKeys(undefined));
