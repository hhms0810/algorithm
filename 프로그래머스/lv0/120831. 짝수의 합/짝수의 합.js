function solution(n) {
    let total = 0;
    for (let i = 2; i <= n; i+=2) {
        total += i;
    }
    return total;
}