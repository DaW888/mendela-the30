function getSize() {
    let div = document.getElementsByClassName('klasa')[0]
    let style = window.getComputedStyle(div)
    div.innerHTML = '{' + style.width + '/' + style.height + '}'
}