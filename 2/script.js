window.onload = function () {
    let want = confirm('czy chcesz wylosować liczbę?')
    if (want) {
        let number = Math.floor(Math.random() * 7 + 3)
        document.getElementsByTagName('input')[0].value = number
    } else
        alert('szkoda :(')
}