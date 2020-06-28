/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let s = 0
    let e = nums.length - 1
  
    const first = searchFirst(nums, target, 0, nums.length - 1)
  
    if (first === -1) {
      return [-1, -1]
    }
  
    return [first, searchLast(nums, target, first, nums.length - 1)]
  };
  
  function searchFirst (nums, target, s, e) {
    let result = -1
  
    while (s <= e) {
      const p = (s + e) / 2 | 0
      const diff = nums[p] - target
      if (diff === 0) {
        result = p
        e = p - 1
      } else if (diff > 0) {
        e = p - 1
      } else {
        s = s + 1
      }
    }
  
    return result
  };
  
  function searchLast (nums, target, s, e) {
    let result = -1
  
    while (s <= e) {
      const p = (s + e) / 2 | 0
      const diff = nums[p] - target
      if (diff === 0) {
        result = p
        s = p + 1
      } else if (diff > 0) {
        e = p - 1
      } else {
        s = s + 1
      }
    }
  
    return result
  };