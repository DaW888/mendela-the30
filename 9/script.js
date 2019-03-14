window.onload = function () {
    function alercik(i) {
        var display = function () { alert(i) }
        return display
    }
    for (let i = 0; i < 6; i++) {
        let button = document.createElement('button')
        button.innerHTML = i
        button.addEventListener('click', alercik(i))
        document.body.appendChild(button)
    }
}