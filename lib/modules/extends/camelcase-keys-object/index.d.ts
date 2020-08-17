import { Options } from '../utils';
/**
 * Convert string keys in an object to camelCase format.
 * @param obj: object to convert keys. If `obj` isn't a json object, `null` is returned.
 * @param opt: (optional) Options parameter, default is non-recursive.
 */
export default function camelKeys(obj: any, opt?: Options): object | null;
