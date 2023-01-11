module.exports = function reverse (n) {
  let str = String(n);
  let revNum = str.split("").reverse().join("");
  return (revNum);
}
