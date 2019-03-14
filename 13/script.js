window.onload = function () {
    let image = document.getElementsByTagName('img')[0]
    image.onclick = function () {
        alert(image.src)
    }
}