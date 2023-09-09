function solution(price) {
    let discountedPrice = 0;
    
    if (price >= 500000) {
        discountedPrice = price * 0.8;
    } else if (price >= 300000) {
        discountedPrice = price * 0.9;
    } else if (price >= 100000){
        discountedPrice = price * 0.95;
    } else {
        discountedPrice = price;
    }
    
    return parseInt(discountedPrice);
}