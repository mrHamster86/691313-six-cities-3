export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const updateObjectInArray = (array, newObject, key) => {
  const newArray = [...array];
  const index = newArray.findIndex((item) => item[key] === newObject[key]);
  newArray[index] = extend(newArray[index], newObject);
  return newArray;
};

export const noop = () => {
  // do nothing
};
