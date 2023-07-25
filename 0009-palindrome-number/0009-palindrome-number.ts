function isPalindrome(x: number): boolean {
    const s = String(x);
    const reverseStr = s.split('').reverse().join('');
    
    return s === reverseStr;
};