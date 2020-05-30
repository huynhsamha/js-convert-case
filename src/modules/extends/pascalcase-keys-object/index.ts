import { isValidObject, Options, DefaultOption } from '../utils';
import toPascalCase from '../../js-pascalcase';

/**
 * Convert string keys in an object to PascalCase format.
 * If `obj` isn't a json object, `null` is returned.
 */
export default function pascalKeys(obj: any, opt: Options = DefaultOption): object | null {
  if (!isValidObject(obj)) return null;

  const res: any = {};
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    const nkey = toPascalCase(key);
    if (opt.recursive) {
      if (isValidObject(value)) {
        value = pascalKeys(value, opt);
      }
    }
    res[nkey] = value;
  });

  return res;
}
