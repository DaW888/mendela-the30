/* jakby ktoś wolał używać forEach
window.onload = function () {
    let imgs = document.getElementsByTagName('img')
    let imgsList = Array.prototype.slice.call(imgs)
    let names = []
    imgsList.forEach(function (item) {
        names.push(item.src.slice(-5))
    })
    setInterval(function () {
        names.push(names.shift())
        imgsList.forEach(function (item, index) {
            imgsList[index].src = 'imgs/' + names[index]
        })
    }, 1000)
} */
window.onload = function () {
    let imgs = document.getElementsByTagName('img')
    names = []
    for (let i = 0; i < imgs.length; i++)
        names.push(imgs[i].src.slice(-5))
    setInterval(function () {
        names.push(names.shift())
        for (let i = 0; i < imgs.length; i++)
            imgs[i].src = 'imgs/' + names[i]
    }, 1000)
}