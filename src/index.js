module.exports = function reverse (n) {
  let str = String(n);
  return Number(str.split("").reverse().join("").replace(/(\.|-|\/|\\|)/g,""));
};
