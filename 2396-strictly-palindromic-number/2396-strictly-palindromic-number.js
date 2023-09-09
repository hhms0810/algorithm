/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    for (let i = 2; i <= n - 2; i++) {
        const base = n.toString(i);
        
        for (let j = 0; j < n.length; j++) {
            if (n[j] !== 0 && n[j] !== 1) {
                break;
            }
        }
        const reverseBase = base.split('').reverse().join('');

        if (base !== reverseBase) {
            return false;
        }
    }
    
    return true;
};