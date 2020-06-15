import string from './css.js'

let n = 1
demo2.innerHTML = string.substr(0, n)
demo1.innerText = string.substr(0, n)
let time = 20
const run = () => {
    n += 1
    if (n > string.length) {
        window.clearInterval(id)
        return
    }
    demo2.innerHTML = string.substr(0, n)
    demo1.innerText = string.substr(0, n)
    demo1.scrollTop = demo1.scrollHeight
}
const play = () => {
    return id = setInterval(run, time)
}
const pause = () => {
    window.clearInterval(id)
}
const slow = () => {
    pause()
    time = 60
    play()
}
const normal = () => {
    pause()
    time = 20  
    play()
}
const fast = () => {
    pause()
    time = 0
    play()
}
let id = play()

const btnPause = document.getElementById('btnPause')
btnPause.onclick = () => {
    pause()
}
btnPlay.onclick = () => {
    id = play()
}
btnSlow.onclick = slow
btnNormal.onclick = normal
btnFast.onclick = fast

