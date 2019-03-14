window.onload = function () {
    window.addEventListener('contextmenu', function (e) {
        e
        let div = document.createElement('div')
        div.innerText = 'Nie skopiujesz'
        div.style.left = e.clientX + 'px'
        div.style.top = e.clientY + 'px'
        document.body.appendChild(div)
        setTimeout(function () {
            div.remove()
        }, 5000)
    })
}