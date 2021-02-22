exports.min = function min(array) {
    if (typeof array !== "undefined" && array.length > 0) {
        return array.reduce((acc, curr) => (acc > curr ? curr : acc), array[0]);
    } else return 0;
};

exports.max = function max(array) {
    if (typeof array !== "undefined" && array.length > 0) {
        return array.reduce((acc, curr) => (acc < curr ? curr : acc), array[0]);
    } else return 0;
};

exports.avg = function avg(array) {
    if (typeof array !== "undefined" && array.length > 0) {
        return array.reduce((acc, curr) => acc + curr, 0) / array.length;
    } else return 0;
};
