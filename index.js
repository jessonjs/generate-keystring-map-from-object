const generateKeystringMapFromObject = (obj, delim = '.') => {
  const temp = [];
  const keyMap = {};

  const r = (o, km) => {
    for (const [key, val] of Object.entries(o)) {
      temp.push(key);
      if (Object.getPrototypeOf(val) === Object.prototype) {
        km[key] = {};
        r(val, km[key]);
      } else {
        km[key] = temp.join(delim)
      }
      temp.pop();
    }
  };
  
  r(obj, keyMap);
  
  return keyMap;
};

module.exports = { generateKeystringMapFromObject };
