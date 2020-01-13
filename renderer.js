const { ipcRenderer } = require('electron')

// alert(process.versions.node)


window.addEventListener('DOMContentLoaded', () => {
    // alert('greering')
    ipcRenderer.send('message', 'hello')
    ipcRenderer.on('reply', (event, arg) => {
        document.getElementById('message').innerHTML = arg;
    })
})