window.onload = function () {
    let buttons = document.getElementsByTagName('button')
    for (let i = 0; i < buttons.length; i++)
        buttons[i].innerText = i + 1
}