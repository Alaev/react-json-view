const genId = () => Date.now();

const isString = (item: any): boolean =>
  typeof item === 'string' || item instanceof String;

const isNumber = (item: any): boolean =>
  typeof item === 'number' || item instanceof Number;

const isObject = (object: any): boolean =>
  typeof object === 'object' && object !== null && !Array.isArray(object);

const isArray = (array: any): boolean => Array.isArray(array);
