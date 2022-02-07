function order(words) {
    let reN = /[^0-9]/g;
    let phrase = words.split(" ");
    let aux = [];
    let result = [];
    phrase.forEach(element => {
        aux.push(element.replace(reN, ""))
    })
    aux.sort();
    for (let i = 0; i < aux.length; i++) {
        for (let j = 0; j < phrase.length; j++) {
            if (phrase[j].includes(aux[i])) {
                result.push(phrase[j])
            }
        }
    }
    return result.join(" ");
}
order("is2 Thi1s T4est 3a")
order("4of Fo1r pe6ople g3ood th5e the2")
order("")