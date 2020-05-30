export interface Options {
  recursive: boolean;
}

export const DefaultOption: Options = {
  recursive: false,
};

export const isValidObject = (obj: any): boolean => {
  return obj != null && typeof obj === 'object' && !Array.isArray(obj);
};
