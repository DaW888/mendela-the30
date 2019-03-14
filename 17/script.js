function random() {
    let number = Math.floor(Math.random() * 25 + 65)
    document.getElementsByName('znak')[0].value = String.fromCharCode(number)
}