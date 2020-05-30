import { isValidObject, Options, DefaultOption } from '../utils';

/**
 * Convert string keys in an object to UPPERCASE format.
 * If `obj` isn't a json object, `null` is returned.
 */
export default function upperKeys(obj: any, opt: Options = DefaultOption): object | null {
  if (!isValidObject(obj)) return null;

  const res: any = {};
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    const nkey = key.toUpperCase();
    if (opt.recursive) {
      if (isValidObject(value)) {
        value = upperKeys(value, opt);
      }
    }
    res[nkey] = value;
  });

  return res;
}
