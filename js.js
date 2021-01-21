let round = document.querySelector('.round'),
    btns = document.querySelectorAll('.btn'),
    input = document.querySelector('input')
    clickCapsLock = false



document.onkeydown = (e) => {
    if (e.code === 'CapsLock') {
        round.classList.toggle('active')
        clickCapsLock = !clickCapsLock
    }
}

input.addEventListener('keydown', (e) => {
    console.log(e)
    for (let elem of btns) {
        if (e.key === elem.innerHTML) {
            elem.classList.toggle('active')
        }
    }

})

input.addEventListener('keyup', (e) => {

    for (let elem of btns) {
        if (e.key === elem.innerHTML) {
            setTimeout(() => {
                elem.classList.toggle('active')
            }, 100)
        }
    }

})
