function otworz() {
    let address = document.getElementById('formularz').children[0].value
    console.log(address)
    window.open('https://' + address)
}