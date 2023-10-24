const input = document.querySelector('#input')
const btn = document.querySelect('#btn')
const result = document.querySelector('#result')
const total = document.querySelector('#total')

// add event

btn.addEventListener('click', (e) => {
    console.log(input.value)

    result.innerHTML += input.value
})