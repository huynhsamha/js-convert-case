(() => {

  console.log('Example:');

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
    lv1: {
      ...core,
      lv2: {
        ...core
      }
    }
  };

  console.log(JSON.stringify(jsConvert.upperKeys(obj, { recursive: true })));

})();

/**
 * {"CAMELCASE":1,"UPPERCASE":2,"LOWERCASE":3,"SNAKE_CASE":4,"PASCALCASE":5,"TITLE CASE":6,"DOT.CASE":7,"PARAM-CASE":8,"SENTENCE CASE":9,"PATH/CASE":10,"HEADER-CASE":11,"LV1":{"CAMELCASE":1,"UPPERCASE":2,"LOWERCASE":3,"SNAKE_CASE":4,"PASCALCASE":5,"TITLE CASE":6,"DOT.CASE":7,"PARAM-CASE":8,"SENTENCE CASE":9,"PATH/CASE":10,"HEADER-CASE":11,"LV2":{"CAMELCASE":1,"UPPERCASE":2,"LOWERCASE":3,"SNAKE_CASE":4,"PASCALCASE":5,"TITLE CASE":6,"DOT.CASE":7,"PARAM-CASE":8,"SENTENCE CASE":9,"PATH/CASE":10,"HEADER-CASE":11}}}
 */
