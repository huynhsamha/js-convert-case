const snakeKeys = require('../index');

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
