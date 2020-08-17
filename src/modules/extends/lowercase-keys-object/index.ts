import { isValidObject, Options, DefaultOption, isArrayObject, validateOptions } from '../utils';

/**
 * Convert string keys in an object to lowercase format.
 * @param obj: object to convert keys. If `obj` isn't a json object, `null` is returned.
 * @param opt: (optional) Options parameter, default is non-recursive.
 */
export default function lowerKeys(obj: any, opt: Options = DefaultOption): object | null {
  if (!isValidObject(obj)) return null;
  opt = validateOptions(opt);

  const res: any = {};
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    const nkey = key.toLowerCase();
    if (opt.recursive) {
      if (isValidObject(value)) {
        value = lowerKeys(value, opt);
      } else if (opt.recursiveInArray && isArrayObject(value)) {
        value = [...value].map((v) => {
          let ret = v;
          if (isValidObject(v)) {
            // object in array
            ret = lowerKeys(v, opt);
          } else if (isArrayObject(v)) {
            // array in array
            // workaround by using an object holding array value
            const temp: any = lowerKeys({ key: v }, opt);
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
