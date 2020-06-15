import string from './css.js'

let n = 1
demo2.innerHTML = string.substr(0, n)
demo1.innerText = string.substr(0, n)
let time = 30
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
    return setInterval(run, time)
}
const pause = () => {
    window.clearInterval(id)
}
let id = play()

const btnPause = document.getElementById('btnPause')
btnPause.onclick = () => {
    pause()
    console.log(btnPause)
}
btnPlay.onclick = () => {
    id = play()
    console.log(btnPlay)
}
btnSlow.onclick = () => {
    pause()
    time = 100
    id = play()
}
btnNormal.onclick = () => {
    pause()
    time = 30
    id = play()
}
btnFast.onclick = () => {
    pause()
    time = 0
    id = play()
}
