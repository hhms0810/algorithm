function solution(dot) {
    const [x, y] = dot;
    const check = y > 0;
    return x > 0 ? check ? 1 : 4 : check ? 2 : 3
     
}