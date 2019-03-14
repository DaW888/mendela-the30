window.onload = function () {
    let name = prompt('Podaj imię i nazwisko')
    let array = name.split(' ')
    name = array[0]
    let surname = array[1]
    let nameDiv = document.createElement('div')
    let surnameDiv = document.createElement('div')
    nameDiv.innerText = name
    surnameDiv.innerText = surname
    nameDiv.appendChild(surnameDiv)
    document.body.appendChild(nameDiv)
    nameDiv.addEventListener('click', function (e) {
        e.stopPropagation()
        alert('Twoje imię to ' + name)
    }, false)
    surnameDiv.addEventListener('click', function (e) {
        e.stopPropagation()
        alert('Twoje nazwisko to ' + surname)
    }, false)
}