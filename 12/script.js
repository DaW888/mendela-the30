window.onload = function () {
    let divs = document.getElementsByTagName('div')
    for (let i = 0; i < divs.length; i++)
        divs[i].addEventListener('click', function (e) {
            let value = this.offsetLeft + this.offsetWidth - e.clientX
            let percent = parseFloat((value / this.offsetWidth).toFixed(2))
            let color = Math.floor(percent * 255)
            console.log(color + ', ' + color + ', ' + color)
            this.style.backgroundColor = 'rgb(' + color + ',' + color + ',' + color + ')'
        })
}