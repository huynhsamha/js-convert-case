import { isValidObject, Options, DefaultOption, isArrayObject, validateOptions, belongToTypes } from '../utils';
import toKebabCase from '../../js-kebabcase';

/**
 * Convert string keys in an object to kebab-case format.
 * @param obj: object to convert keys. If `obj` isn't a json object, `null` is returned.
 * @param opt: (optional) Options parameter, default is non-recursive.
 */
export default function kebabKeys(obj: any, opt: Options = DefaultOption): object | null {
  if (!isValidObject(obj)) return null;
  opt = validateOptions(opt);

  const res: any = {};
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    const nkey = toKebabCase(key);
    if (opt.recursive) {
      if (isValidObject(value)) {
        if (!belongToTypes(value, opt.keepTypesOnRecursion)) {
          value = kebabKeys(value, opt);
        }
      } else if (opt.recursiveInArray && isArrayObject(value)) {
        value = [...value].map((v) => {
          let ret = v;
          if (isValidObject(v)) {
            // object in array
            if (!belongToTypes(ret, opt.keepTypesOnRecursion)) {
              ret = kebabKeys(v, opt);
            }
          } else if (isArrayObject(v)) {
            // array in array
            // workaround by using an object holding array value
            const temp: any = kebabKeys({ key: v }, opt);
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
