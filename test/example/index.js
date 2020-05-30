const jsConvert = require('../../index');
const fs = require('fs');
const path = require('path');

const core = {
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

const obj = {
  ...core,
  lv1: {
    ...core,
    lv2: {
      ...core
    }
  }
};

fs.mkdirSync(path.join(__dirname, './samples'));

const upperKeys = jsConvert.upperKeys(obj, { recursive: true });
fs.writeFileSync(path.join(__dirname, './samples/upperKeys.json'), JSON.stringify(upperKeys, null, 2));

const lowerKeys = jsConvert.lowerKeys(obj, { recursive: true });
fs.writeFileSync(path.join(__dirname, './samples/lowerKeys.json'), JSON.stringify(lowerKeys, null, 2));

const snakeKeys = jsConvert.snakeKeys(obj, { recursive: true });
fs.writeFileSync(path.join(__dirname, './samples/snakeKeys.json'), JSON.stringify(snakeKeys, null, 2));

const pascalKeys = jsConvert.pascalKeys(obj, { recursive: true });
fs.writeFileSync(path.join(__dirname, './samples/pascalKeys.json'), JSON.stringify(pascalKeys, null, 2));

const camelKeys = jsConvert.camelKeys(obj, { recursive: true });
fs.writeFileSync(path.join(__dirname, './samples/camelKeys.json'), JSON.stringify(camelKeys, null, 2));

