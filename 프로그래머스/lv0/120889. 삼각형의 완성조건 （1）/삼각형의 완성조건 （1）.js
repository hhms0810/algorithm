function solution(sides) {
    return sides[0] + sides[1] <= sides[2] ||
        sides[1] + sides[2] <= sides[0] || 
        sides[0] + sides[2] <= sides[1] ? 2 : 1;
}