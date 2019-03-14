window.onload = function () {
    let date = new Date()
    function add(what) {
        if (what < 9)
            what = '0' + what
        return what
    }

    let day = date.getDate()
    day = add(day)
    let month = date.getMonth() + 1
    month = add(month)
    let year = date.getFullYear()
    let hours = date.getHours()
    hours = add(hours)
    let minutes = date.getMinutes()
    minutes = add(minutes)
    let seconds = date.getSeconds()
    seconds = add(seconds)
    let fullDate = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds
    document.getElementById('data').innerHTML = fullDate
}