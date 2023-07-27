function minPartitions(n: string): number {
    let answer = 0;
    
    for (let i = 0, len = n.length; i < len; i++) {
        if (answer < +n[i]) {
            answer = +n[i];
        }
    }
    
    return answer;
};