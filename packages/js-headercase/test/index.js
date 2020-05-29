const toHeaderCase = require('../index');

console.log(toHeaderCase('string')); // => String
console.log(toHeaderCase('camelCase')); // => Camel Case
console.log(toHeaderCase('param-case')); // => Param Case
console.log(toHeaderCase('PascalCase')); // => Pascal Case
console.log(toHeaderCase('UPPER_CASE')); // => Upper Case
console.log(toHeaderCase('snake_case')); // => Snake Case
console.log(toHeaderCase('sentence case')); // => Sentence Case
console.log(toHeaderCase('Title Case')); // => Title Case
console.log(toHeaderCase('dot.case')); // => // Dot Case

console.log(toHeaderCase('')); // => ''
console.log(toHeaderCase(null)); // => ''
console.log(toHeaderCase(undefined)); // => ''

console.log(toHeaderCase('Abc ___ 123 ___ xYz')); // => Abc 123 X Yz
console.log(toHeaderCase('123__abc  ... ?// {#} def 12')); // => 123 Abc Def 12
console.log(toHeaderCase('  tab space ??? ________')); // => Tab Space
console.log(toHeaderCase('___?||123  abc|| 123..123')); // => 123 Abc 123 123
console.log(toHeaderCase('!@#$%  {}|":;" ABC XyZ G123H')); // => Abc Xy z G123h
console.log(toHeaderCase(' ^&* #DEFine x: 15 + ==')); // => Define X 15
console.log(toHeaderCase('123456789')); // => 123456789
