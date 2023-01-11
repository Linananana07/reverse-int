module.exports = function reverse (n) {
  let str = String(n);
  let revNum = Number(str.split("").reverse().join(""));
  return (revNum);
}
