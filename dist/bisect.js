"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bisect_left = bisect_left;
exports.bisect_right = bisect_right;
function bisect_left(sorted, target) {
  /*
   * Find the index s.t. sorted[index]<target and sorted[index+1]>=target
   * ([1,2,3],2) returns 0
   */
  var l = 0;
  var r = sorted.length - 1;
  var m = null;
  while (r >= l) {
    m = ~~((r + l) / 2);
    if (sorted[m] >= target) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return r;
}

function bisect_right(sorted, target) {
  /*
   * Find the index s.t. sorted[index]>target and sorted[index-1]<=target
   * ([1,2,3],2) returns 0
   */
  var l = 0;
  var r = sorted.length - 1;
  var m = null;
  while (r >= l) {
    m = ~~((r + l) / 2);
    if (sorted[m] > target) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return l;
}