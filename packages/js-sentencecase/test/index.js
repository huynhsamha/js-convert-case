const toSentenceCase = require('../index');

console.log(toSentenceCase('string')); // => String
console.log(toSentenceCase('camelCase')); // => Camel case
console.log(toSentenceCase('param-case')); // => Param case
console.log(toSentenceCase('PascalCase')); // => Pascal case
console.log(toSentenceCase('UPPER_CASE')); // => Upper case
console.log(toSentenceCase('snake_case')); // => Snake case
console.log(toSentenceCase('sentence case')); // => Sentence case
console.log(toSentenceCase('Title Case')); // => Title case
console.log(toSentenceCase('dot.case')); // => // Dot case

console.log(toSentenceCase('')); // => ''
console.log(toSentenceCase(null)); // => ''
console.log(toSentenceCase(undefined)); // => ''

console.log(toSentenceCase('Abc ___ 123 ___ xYz')); // => Abc 123 x yz
console.log(toSentenceCase('123__abc  ... ?// {#} def 12')); // => 123 abc def 12
console.log(toSentenceCase('  tab space ??? ________')); // => Tab space
console.log(toSentenceCase('___?||123  abc|| 123..123')); // => 123 abc 123 123
console.log(toSentenceCase('!@#$%  {}|":;" ABC XyZ G123H')); // => Abc xy z g123h
console.log(toSentenceCase(' ^&* #DEFine x: 15 + ==')); // => Define x 15
console.log(toSentenceCase('123456789')); // => 123456789
