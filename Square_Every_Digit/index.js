function squareDigits(num) {
    let aux = [];
    (Array.from(num.toString()).map(Number)).map(a => {
        aux.push(Math.pow(a, 2).toString());
    });
    return parseInt(aux.join(''));
}
squareDigits(3212)
squareDigits(2112)