
exports.min = function min(array) {
  if (!array) return 0;
  if (array.length === 0) return 0;
  return array.sort((a, b) => a - b)[0];
}

exports.max = function max(array) {
  if (!array) return 0;
  if (array.length === 0) return 0;
  return array.sort((a, b) => a - b)[array.length - 1];
}

exports.avg = function avg(array) {
  if (!array) return 0;
  if (array.length === 0) return 0;
  return array.reduce((sum, current) => sum + current, 0) / array.length;
}
