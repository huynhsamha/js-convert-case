/**
 * Options parameter for convert function
 *
 * @param recursive: recursive if value of subkey is an object that is not an array
 * @param recursiveInArray: recursive if ${recursive} is `true` and value of subkey
 * is an array. All elements in array (value of subkey) will be recursive.
 * If ${recursiveInArray} is not set, default is `false`.
 */
export interface Options {
    recursive: boolean;
    recursiveInArray?: boolean;
}
/**
 * Default options for convert function. This option is not recursive.
 */
export declare const DefaultOption: Options;
export declare const validateOptions: (opt?: Options) => Options;
export declare const isArrayObject: (obj: any) => boolean;
export declare const isValidObject: (obj: any) => boolean;
