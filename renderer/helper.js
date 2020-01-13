exports.$ = (id) => {
    return document.getElementById(id)
}

exports.convertDuration = (time) => {
    const min = "0" + Math.floor(time / 60)
    const sec = "0" + Math.floor(time - min * 60)
    return min.substr(-2) + ":" + sec.substr(-2)
}