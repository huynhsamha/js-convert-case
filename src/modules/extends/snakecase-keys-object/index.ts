import { isValidObject, Options, DefaultOption, isArrayObject, validateOptions, belongToTypes } from '../utils';
import toSnakeCase from '../../js-snakecase';

/**
 * Convert string keys in an object to snake_case format.
 * @param obj: object to convert keys. If `obj` isn't a json object, `null` is returned.
 * @param opt: (optional) Options parameter, default is non-recursive.
 */
export default function snakeKeys(obj: any, opt: Options = DefaultOption): object | null {
  if (!isValidObject(obj)) return null;
  opt = validateOptions(opt);

  const res: any = {};
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    const nkey = toSnakeCase(key);
    if (opt.recursive) {
      if (isValidObject(value)) {
        if (!belongToTypes(value, opt.keepTypesOnRecursion)) {
          value = snakeKeys(value, opt);
        }
      } else if (opt.recursiveInArray && isArrayObject(value)) {
        value = [...value].map((v) => {
          let ret = v;
          if (isValidObject(v)) {
            // object in array
            if (!belongToTypes(ret, opt.keepTypesOnRecursion)) {
              ret = snakeKeys(v, opt);
            }
          } else if (isArrayObject(v)) {
            // array in array
            // workaround by using an object holding array value
            const temp: any = snakeKeys({ key: v }, opt);
            ret = temp.key;
          }
          return ret;
        });
      }
    }
    res[nkey] = value;
  });

  return res;
}
