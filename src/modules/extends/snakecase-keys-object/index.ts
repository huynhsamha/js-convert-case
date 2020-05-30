import { isValidObject, Options, DefaultOption } from '../utils';
import toSnakeCase from '../../js-snakecase';

/**
 * Convert string keys in an object to snake_case format.
 * If `obj` isn't a json object, `null` is returned.
 */
export default function snakeKeys(obj: any, opt: Options = DefaultOption): object | null {
  if (!isValidObject(obj)) return null;

  const res: any = {};
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    const nkey = toSnakeCase(key);
    if (opt.recursive) {
      if (isValidObject(value)) {
        value = snakeKeys(value, opt);
      }
    }
    res[nkey] = value;
  });

  return res;
}
