import { isValidObject, Options, DefaultOption } from '../utils';
import toCamelCase from '../../js-camelcase';

/**
 * Convert string keys in an object to camelCase format.
 * If `obj` isn't a json object, `null` is returned.
 */
export default function camelKeys(obj: any, opt: Options = DefaultOption): object | null {
  if (!isValidObject(obj)) return null;

  const res: any = {};
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    const nkey = toCamelCase(key);
    if (opt.recursive) {
      if (isValidObject(value)) {
        value = camelKeys(value, opt);
      }
    }
    res[nkey] = value;
  });

  return res;
}
