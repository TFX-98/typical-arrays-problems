exports.min = function min(array) {

    let minNumber = 0;

    if (array && array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            if (minNumber > array[i]) {
                minNumber = array[i];
            }
        }

    }
    return minNumber;
}

exports.max = function max(array) {

    let maxNumber = 0;
    if (array && array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            if (maxNumber < array[i]) {
                maxNumber = array[i];
            }
        }

    }
    return maxNumber;
}

exports.avg = function avg(array) {

    let sum = 0;
    let avg = 0;
    if (array && array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }

        avg = sum / array.length;
    }
    return avg;
}
