/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    const jewelsSet = new Set(jewels);
    
    for (let i = 0; i < stones.length; i++) {
        if (jewelsSet.has(stones[i])) {
            count++;
        }
    }
    
    return count;
};