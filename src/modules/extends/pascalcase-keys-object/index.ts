import { isValidObject, Options, DefaultOption, isArrayObject, validateOptions } from '../utils';
import toPascalCase from '../../js-pascalcase';

/**
 * Convert string keys in an object to PascalCase format.
 * @param obj: object to convert keys. If `obj` isn't a json object, `null` is returned.
 * @param opt: (optional) Options parameter, default is non-recursive.
 */
export default function pascalKeys(obj: any, opt: Options = DefaultOption): object | null {
  if (!isValidObject(obj)) return null;
  opt = validateOptions(opt);

  const res: any = {};
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    const nkey = toPascalCase(key);
    if (opt.recursive) {
      if (isValidObject(value)) {
        value = pascalKeys(value, opt);
      } else if (opt.recursiveInArray && isArrayObject(value)) {
        value = [...value].map((v) => {
          let ret = v;
          if (isValidObject(v)) {
            // object in array
            ret = pascalKeys(v, opt);
          } else if (isArrayObject(v)) {
            // array in array
            // workaround by using an object holding array value
            const temp: any = pascalKeys({ key: v }, opt);
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
