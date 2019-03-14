window.onload = function () {
    class Kolo {
        constructor(speed) {
            this.speed = speed
            this.img
        }
        wstaw = function () {
            let width = window.innerWidth - 50
            let height = window.innerHeight - 50
            let left = Math.floor(Math.random() * width)
            let top = Math.floor(Math.random() * height)
            this.img = new Image()
            this.img.src = 'http://mendela.pl/javascript/round.png'
            this.img.style.position = 'absolute'
            this.img.style.left = left + 'px'
            this.img.style.top = top + 'px'
            document.body.appendChild(this.img)
        }
        obracaj = function () {
            this.img.classList.add('rotating')
            this.img.style.animationDuration = this.speed + 's'
        }
    }
    setInterval(function () {
        let random = Math.floor(Math.random() * 5 + 1)
        let kolo = new Kolo(random)
        kolo.wstaw()
        kolo.obracaj()
    }, 2000)
}