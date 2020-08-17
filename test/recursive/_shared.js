const util = require('util');

const log = (obj) => {
  console.log(util.inspect(obj, { showHidden: false, depth: null }));
};

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
  lv11: { ...core },
  lv12: {
    ...core,
    lv21: {
      ...core,
      lv31: { ...core },
      lv32: { ...core }
    },
    lv22: { ...core },
    lv23: [
      { ...core },
      {
        lv31: [1, 'A', null, { ...core }, '123', undefined],
        lv32: { ...core }
      },
      [{ ...core }, 5, '123', { a: 1, b: 2 }, null],
      null,
      undefined
    ]
  }
};

module.exports = {
  obj,
  log
};
