function minPartitions(nums: string): number {
    let answer = 0;
    
    for (let i = 0, len = nums.length; i < len; i++) {
        const n = +nums[i];
        if (answer < n) {
            answer = n;
        }
    }
    
    return answer;
};