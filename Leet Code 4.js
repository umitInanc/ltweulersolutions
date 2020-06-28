/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const mid = (nums1.length + nums2.length - 1) / 2 | 0
  
    if ((nums1.length + nums2.length) % 2 === 0) {
      return (_find(nums1, nums2, mid) + _find(nums1, nums2, mid + 1)) / 2
    }
  
    return _find(nums1, nums2, mid)
  }
  
  
  function _find (nums1, nums2, k) {
    if (nums1.length > nums2.length) {

      [nums1, nums2] = [nums2, nums1]
    }
    let s1 = 0
    let s2 = 0
    let e1 = nums1.length
    let e2 = nums2.length
  
    while (s1 < e1 || s2 < e2) {
      const i = s1 + ((e1 - s1) / 2 | 0)
      const j = k - i
      const ni = i >= e1 ? Infinity : nums1[i]
      const nj = j >= e2 ? Infinity : nums2[j]
      const ni_1 = i <= 0 ? -Infinity : nums1[i-1]
      const nj_1 = j <= 0 ? -Infinity : nums2[j-1]
  
      if (nj_1 <= ni && ni <= nj) {
        return ni
      }
  
      if (ni_1 <= nj && nj <= ni) {
        return nj
      }
  
      if (ni <= nj) {
        s1 = i + 1
        e2 = j
      } else {
        s2 = j + 1
        e1 = i
      }
    }
  };