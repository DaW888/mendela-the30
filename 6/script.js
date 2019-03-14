window.onload = function () {
    let x = '30'
    let element = Math.floor(Math.random() * 11)
    let sum = parseInt(x) + element
    let inputs = document.getElementsByTagName('input')
    inputs[1].value = sum
}