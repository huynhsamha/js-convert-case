import { isValidObject, Options, DefaultOption, isArrayObject, validateOptions, belongToTypes } from '../utils';

/**
 * Convert string keys in an object to UPPERCASE format.
 * @param obj: object to convert keys. If `obj` isn't a json object, `null` is returned.
 * @param opt: (optional) Options parameter, default is non-recursive.
 */
export default function upperKeys(obj: any, opt: Options = DefaultOption): object | null {
  if (!isValidObject(obj)) return null;
  opt = validateOptions(opt);

  const res: any = {};
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    const nkey = key.toUpperCase();
    if (opt.recursive) {
      if (isValidObject(value)) {
        if (!belongToTypes(value, opt.keepTypesOnRecursion)) {
          value = upperKeys(value, opt);
        }
      } else if (opt.recursiveInArray && isArrayObject(value)) {
        value = [...value].map((v) => {
          let ret = v;
          if (isValidObject(v)) {
            // object in array
            if (!belongToTypes(ret, opt.keepTypesOnRecursion)) {
              ret = upperKeys(v, opt);
            }
          } else if (isArrayObject(v)) {
            // array in array
            // workaround by using an object holding array value
            const temp: any = upperKeys({ key: v }, opt);
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
