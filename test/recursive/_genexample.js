const jsConvert = require('../../index');

const obj = {
  camelCase: 1,
  PascalCase: {
    camelCase: [1, 'a', null, { PascalCase: 1 }, undefined],
    PascalCase: [{ PascalCase: [1] }, [1, { PascalCase: 2 }]],
    snake_case: { camelCase: [{ PascalCase: 1 }] }
  }
};

const res = jsConvert.snakeKeys(obj, { recursive: true, recursiveInArray: true });

console.log(JSON.stringify(res));
