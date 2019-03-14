window.onload = function () {
    let number = prompt('Ile elementów utworzyć?')
    for (let i = 0; i < number; i++) {
        let div = document.createElement('div')
        div.classList.add('klasa')
        document.body.appendChild(div)
    }
}