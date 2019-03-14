window.onload = function () {
    let textarea = document.getElementById('area')
    textarea.style.borderWidth = '2px'
    textarea.style.borderColor = 'black'
    textarea.style.borderStyle = 'dotted'
    textarea.addEventListener('keydown', function (e) {
        e.preventDefault()
        if (x.style.borderStyle == 'dotted')
            x.style.borderStyle = 'dashed'
        else if (x.style.borderStyle == 'dashed')
            x.style.borderStyle = 'dotted'
    })
}