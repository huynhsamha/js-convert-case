import jsConvert, { toPascalCase, snakeKeys } from 'js-convert-case';
import assert from 'assert';

console.log(jsConvert);
console.log(jsConvert.default);

assert.equal(jsConvert.toPascalCase, toPascalCase, 'Match');
assert.equal(jsConvert.snakeKeys, snakeKeys, 'Match');
