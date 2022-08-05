const count = function (num) {
    return num * 2
}

const square = function (num) {
    return num ** 2
}

function composeFn(count,square) {
    return function(num) {
        return square(count(num))
    }
}

const newFn  = composeFn(count,square)
console.log(newFn(10))