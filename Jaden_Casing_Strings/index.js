String.prototype.toJadenCase = function () {
    return (this.replace(/\W'/g, ' ').split(" ")).map(a => a.charAt(0).toUpperCase() + a.slice(1)).join(" ");
};
var str = "How can mirrors be real if our eyes aren't real";
str.toJadenCase()