const toPathCase = require('../index');

console.log(toPathCase('string')); // => string
console.log(toPathCase('camelCase')); // => camel/case
console.log(toPathCase('param-case')); // => param/case
console.log(toPathCase('PascalCase')); // => pascal/case
console.log(toPathCase('UPPER_CASE')); // => upper/case
console.log(toPathCase('snake_case')); // => snake/case
console.log(toPathCase('sentence case')); // => sentence/case
console.log(toPathCase('Title Case')); // => title/case
console.log(toPathCase('dot.case')); // => // dot/case

console.log(toPathCase('')); // => ''
console.log(toPathCase(null)); // => ''
console.log(toPathCase(undefined)); // => ''

console.log(toPathCase('Abc ___ 123 ___ xYz')); // => abc/123/x/yz
console.log(toPathCase('123__abc  ... ?// {#} def 12')); // => 123/abc/def/12
console.log(toPathCase('  tab space ??? ________')); // => tab/space
console.log(toPathCase('___?||123  abc|| 123..123')); // => 123/abc/123/123
console.log(toPathCase('!@#$%  {}|":;" ABC XyZ G123H')); // => abc/xy/z/g123h
console.log(toPathCase(' ^&* #DEFine x: 15 + ==')); // => define/x/15
console.log(toPathCase('123456789')); // => 123456789
