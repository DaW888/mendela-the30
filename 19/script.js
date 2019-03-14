window.onload = function () {
    let string = navigator.userAgent
    document.cookie = encodeURIComponent('browser=' + string)
    let cookies = document.cookie
    console.log(decodeURIComponent(cookies))
}