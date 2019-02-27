export function bisect_left(sorted,target) {
  /*
   * Find the index s.t. sorted[index]<target and sorted[index+1]>=target
   * ([1,2,3],2) returns 0
   */
  let l = 0;
  let r = sorted.length-1;
  let m = null;
  while (r>=l) {
    m = ~~((r+l)/2);
    if (sorted[m] >= target) {
      r=m-1;
    }
    else {
      l=m+1;
    }
  }
  return r;
}

export function bisect_right(sorted,target) {
  /*
   * Find the index s.t. sorted[index]>target and sorted[index-1]<=target
   * ([1,2,3],2) returns 0
   */
  let l = 0;
  let r = sorted.length-1;
  let m = null;
  while (r>=l) {
    m = ~~((r+l)/2);
    if (sorted[m] > target) {
      r=m-1;
    }
    else {
      l=m+1;
    }
  }
  return l;
}
