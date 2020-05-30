import { isValidObject, Options, DefaultOption } from '../utils';

/**
 * Convert string keys in an object to lowercase format.
 * If `obj` isn't a json object, `null` is returned.
 */
export default function lowerKeys(obj: any, opt: Options = DefaultOption): object | null {
  if (!isValidObject(obj)) return null;

  const res: any = {};
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    const nkey = key.toLowerCase();
    if (opt.recursive) {
      if (isValidObject(value)) {
        value = lowerKeys(value, opt);
      }
    }
    res[nkey] = value;
  });

  return res;
}
