window.onload = function () {
    let divs = document.getElementsByTagName('div')
    for (let i = 0; i < divs.length; i++)
        divs[i].addEventListener('click', function () {
            this.style.backgroundColor = 'blue'
            let height = this.style.height
            this.style.height = parseInt(height.substring(0, height.length - 2)) / 2 + 'px'
        })
}