let round = document.querySelector('.round'),
    btns = document.querySelectorAll('.btn'),
    letters = document.querySelectorAll('.letter'),
    input = document.querySelector('input'),
    clickCapsLock = false

document.onkeydown = (e) => {
    if (e.code === 'CapsLock') {
        round.classList.toggle('active')
        clickCapsLock = !clickCapsLock
        for (let letter of letters) {
            if (clickCapsLock) {
                letter.innerHTML = letter.innerHTML.toUpperCase()
            } else {
                letter.innerHTML = letter.innerHTML.toLowerCase()
            }
        }
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
