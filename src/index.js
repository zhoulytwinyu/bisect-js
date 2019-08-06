export function bisect_left(sorted,target,key=null) {
  /*
   * Find the index s.t. sorted[index]<target and sorted[index+1]>=target
   * ([1,2,3],2) returns 0
   * key should be a function that extract the value from each element in the sorted array.
   */
  if (key===null) {
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
  else {
    let l = 0;
    let r = sorted.length-1;
    let m = null;
    while (r>=l) {
      m = ~~((r+l)/2);
      if (key(sorted[m]) >= target) {
        r=m-1;
      }
      else {
        l=m+1;
      }
    }
    return r;
  }
}

export function bisect_right(sorted,target,key=null) {
  /*
   * Find the index s.t. sorted[index]>target and sorted[index-1]<=target
   * ([1,2,3],2) returns 0
   * key should be a function that extract the value from each element in the sorted array.
   */
  if (key===null) {
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
  else {
    let l = 0;
    let r = sorted.length-1;
    let m = null;
    while (r>=l) {
      m = ~~((r+l)/2);
      if (key(sorted[m]) > target) {
        r=m-1;
      }
      else {
        l=m+1;
      }
    }
    return l;
  }
}
