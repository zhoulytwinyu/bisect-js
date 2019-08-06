"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bisect_left = bisect_left;
exports.bisect_right = bisect_right;

function bisect_left(sorted, target) {
  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  /*
   * Find the index s.t. sorted[index]<target and sorted[index+1]>=target
   * ([1,2,3],2) returns 0
   * key should be a function that extract the value from each element in the sorted array.
   */
  if (key === null) {
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
  } else {
    var _l = 0;

    var _r = sorted.length - 1;

    var _m = null;

    while (_r >= _l) {
      _m = ~~((_r + _l) / 2);

      if (key(sorted[_m]) >= target) {
        _r = _m - 1;
      } else {
        _l = _m + 1;
      }
    }

    return _r;
  }
}

function bisect_right(sorted, target) {
  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  /*
   * Find the index s.t. sorted[index]>target and sorted[index-1]<=target
   * ([1,2,3],2) returns 0
   * key should be a function that extract the value from each element in the sorted array.
   */
  if (key === null) {
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
  } else {
    var _l2 = 0;

    var _r2 = sorted.length - 1;

    var _m2 = null;

    while (_r2 >= _l2) {
      _m2 = ~~((_r2 + _l2) / 2);

      if (key(sorted[_m2]) > target) {
        _r2 = _m2 - 1;
      } else {
        _l2 = _m2 + 1;
      }
    }

    return _l2;
  }
}