const socket = io()
const messages = document.querySelector('.messages')
const form = document.querySelector('.form')
const input = document.querySelector('textarea')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (input.value) {
        socket.emit('chat message', { 
            message: input.value
        })
        input.value = ''
    }
})


socket.on('chat message', (data) => {
    const item = document.createElement('li')
    item.innerHTML = `${data.message}`
    messages.appendChild(item)
    window.scrollTo(0, document.body.scrollHeight)
})