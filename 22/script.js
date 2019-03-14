window.onload = function () {
    const change = function (e) {
        e.stopPropagation()
        let timeout2
        let timeout1 = setTimeout(() => {
            this.style.backgroundColor = 'red'
            timeout2 = setTimeout(() => {
                if (parent == this)
                    child.style.backgroundColor = 'blue'
                else
                    parent.style.backgroundColor = 'blue'
            }, 1000)
        }, 1000)
        const clear = (e) => {
            e.stopPropagation()
            child.style.backgroundColor = 'white'
            parent.style.backgroundColor = 'white'
            clearTimeout(timeout1)
            clearTimeout(timeout2)
            this.removeEventListener('mouseout', clear)
        }
        this.addEventListener('mouseout', clear)
    }
    let parent = document.getElementsByTagName('div')[0]
    let child = parent.children[0]
    parent.addEventListener('mouseover', change)
    child.addEventListener('mouseover', change)
}