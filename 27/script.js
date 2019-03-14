window.onload = function () {
    let n = 37
    let array = new Array(n)
    const getNumber = (i) => {
        let number = Math.floor(Math.random() * n + 1)
        let isNumberInArray = false
        array.forEach(function (item) {
            if (item == number)
                isNumberInArray = true
        })
        if (isNumberInArray)
            getNumber(i)
        else
            array[i] = number
    }
    for (let i = 0; i < n; i++)
        getNumber(i)
    array.sort(function (a, b) { return b - a })
    for (let i = 0; i < n; i++) {
        document.body.innerHTML += array[i] + ' '
        if (i % 10 == 9)
            document.body.innerHTML += '<br>'
    }
}
// let unique = [...new Set(names)];

// let x = (names) => names.filter((v,i) => names.indexOf(v) === i)
// x(names);