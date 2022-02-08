function nbYear(p0, percent, aug, p) {
    let aux = p0;
    let count = 0;
    do {
      aux = aux + (aux * (percent/100)) + aug;
      count++;
    } while(aux < p)
    return count;
}

nbYear(1500, 5, 100, 5000)
nbYear(1500000, 2.5, 10000, 2000000)
nbYear(1500000, 0.25, 1000, 2000000)