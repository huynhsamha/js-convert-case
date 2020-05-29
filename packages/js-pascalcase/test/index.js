const toPascalCase = require('../index');

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
console.log(toPascalCase('  tab space ??? ________')); // => TabSpace
console.log(toPascalCase('___?||123  abc|| 123..123')); // => 123Abc123123
console.log(toPascalCase('!@#$%  {}|":;" ABC XyZ G123H')); // => AbcXyZG123h
console.log(toPascalCase(' ^&* #DEFine x: 15 + ==')); // => DefineX15
console.log(toPascalCase('123456789')); // => 123456789
