window.onload = function () {
    let submit = document.getElementById('formularz').children[4]
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        let login = document.getElementById('formularz').children[0].value
        let password = document.getElementById('formularz').children[2].value
        if (password.trim() == '' || login.trim() == '')
            alert('wypełnij formularz')
        else
            document.getElementById('formularz').submit()
    })
}