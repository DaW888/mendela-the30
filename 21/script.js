window.onload = function () {
    let input = document.getElementsByTagName('input')[0]
    input.value = 'Wyszukaj w google'
    input.addEventListener('click', function () {
        window.open('https://www.google.com')
    })
}