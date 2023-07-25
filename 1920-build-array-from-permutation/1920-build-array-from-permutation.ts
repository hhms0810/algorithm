function buildArray(nums: number[]): number[] {
    const answer = [];
    for (let i = 0, len = nums.length; i < len; i++) {
        answer.push(nums[nums[i]]);
    }

    return answer;
};