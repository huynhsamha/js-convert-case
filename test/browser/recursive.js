(() => {

  console.log('Recursive:');

  const { jsConvert } = window;

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
        lv31: {
          ...core
        },
        lv32: {
          ...core
        }
      },
      lv22: {
        ...core
      }
    }
  };

  console.log(jsConvert.lowerKeys(obj, { recursive: true }));
  console.log(jsConvert.upperKeys(obj, { recursive: true }));
  console.log(jsConvert.pascalKeys(obj, { recursive: true }));
  console.log(jsConvert.camelKeys(obj, { recursive: true }));
  console.log(jsConvert.snakeKeys(obj, { recursive: true }));

})();
