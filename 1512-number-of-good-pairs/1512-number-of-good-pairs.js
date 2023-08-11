/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let answer = 0;
    const len = nums.length;
    
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] === nums[j]) {
                answer ++;
            }
        }
    }
    
    return answer;
};