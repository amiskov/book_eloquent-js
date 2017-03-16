var list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

function prepend(element, list) {
    return {'value': element, rest: list};
}
function nth(element, list) {

}

function arrayToList(arr) {
    var list = {};

    for (var i = arr.length - 1; i >= 0; i--) {
        if (i == arr.length - 1) {
            list = prepend(arr[i], null);
        } else {
            list = prepend(arr[i], list);
        }
    }
    return list;
}

function listToArray(list) {

}

//console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));

