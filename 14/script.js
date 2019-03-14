window.onload = function () {
    let inputs = document.getElementsByTagName('input')
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('focus', function () {
            this.style.backgroundColor = '#888888'
        })
        inputs[i].addEventListener('focusout', function () {
            this.style.backgroundColor = ''
        })
    }
}