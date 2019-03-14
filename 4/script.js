/* pierwsze moje rozwiązanie - nie polecam ale zostawiam
window.onload = function () {
    let data = document.getElementsByClassName('data')
    let date = new Date(2019, 3, 29)
    Date.prototype.monthDays = function () {
        let d = new Date(this.getFullYear(), this.getMonth() + 1, 0)
        return d.getDate()
    } //do klasy Date dodaje funkcję która zwraca mi ile dni ma miesiąc
    let year = date.getFullYear() % 100
    let month = date.getMonth() + 1
    let day = date.getDate()
    let number = 7 - date.getDay() % 7 + 1// za ile dni będzie poniedziałek
    day += number
    let monthDays = date.monthDays()
    for (let i = 0; i < 7; i++) {
        if (day > monthDays) {
            day = day % monthDays
            month++
            if (month > 12) {
                month = 1
                year++
            }
        }
        if (day < 10)
            day = '0' + day
        if (month < 10)
            month = '0' + month
        data[i].innerHTML = year + '-' + month + '-' + day
        day = parseInt(day)
        month = parseInt(month)
        day++
    }
}*/
window.onload = function () {
    let data = document.getElementsByClassName('data')
    let date = new Date()
    let year = date.getFullYear() % 100
    let month = date.getMonth() + 1
    let number = 7 - date.getDay() % 7 + 1// za ile dni będzie poniedziałek
    let day = date.getDate() + number
    console.log(number, day, date.getDate())
    for (let i = 0; i < 7; i++) {
        let monthDays = new Date(year, month, 0).getDate() // ile jest dni w tym miesiącu
        if (day > monthDays) {
            day = day % monthDays
            month++
            if (month > 12) {
                month = 1
                year++
            }
        }
        if (day < 10)
            day = '0' + day
        if (month < 10)
            month = '0' + month
        data[i].innerHTML = year + '-' + month + '-' + day
        day = parseInt(day)
        month = parseInt(month)
        day++
    }
}