window.onload = function () {
    document.addEventListener('keypress', function (e) {
        if (e.keyCode == 13) {
            let input = document.getElementsByTagName('input')[0]
            let value = input.value
            let int = parseInt(value)
            if (value == int) {
                int--
                let interval = setInterval(function () {
                    if (int < 0)
                        clearInterval(interval)
                    else {
                        input.value = int
                        int--
                    }
                }, 500)
            } else {
                alert('wpisz liczbę')
                input.value = ''
            }
        }
    })
}