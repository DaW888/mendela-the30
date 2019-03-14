window.onload = function () {
    window.addEventListener('keypress', function (e) {
        document.body.innerText = 'Wciśnięto: ' + String.fromCharCode(e.keyCode)
    })
}