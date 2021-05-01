/**
 * Options parameter for convert function
 *
 * @param recursive: recursive if value of subkey is an object that is not an array
 * @param recursiveInArray: recursive if ${recursive} is `true` and value of subkey
 * is an array. All elements in array (value of subkey) will be recursive.
 * If ${recursiveInArray} is not set, default is `false`.
 * @param keepTypesOnRecursion: list of types will be keep value on recursion.
 * Example Date, RegExp. These types will be right-hand side of 'instanceof' operator.
 */
export interface Options {
  recursive: boolean;
  recursiveInArray?: boolean;
  keepTypesOnRecursion?: any[];
}

/**
 * Default options for convert function. This option is not recursive.
 */
export const DefaultOption: Options = {
  recursive: false,
  recursiveInArray: false,
  keepTypesOnRecursion: []
};

export const validateOptions = (opt: Options = DefaultOption): Options => {
  if (opt.recursive == null) {
    opt = DefaultOption;
  } else if (opt.recursiveInArray == null) {
    opt.recursiveInArray = false;
  }
  return opt;
};

export const isArrayObject = (obj: any): boolean => obj != null && Array.isArray(obj);

export const isValidObject = (obj: any): boolean => obj != null && typeof obj === 'object' && !Array.isArray(obj);

export const belongToTypes = (obj: any, types?: any[]): boolean => (types || []).some((Type) => obj instanceof Type);
