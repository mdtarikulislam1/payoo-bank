document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value
    const convert = parseFloat(amount)
    const pin = document.getElementById('pin').value
    const convertpin = parseInt(pin)
    const mainbalance = document.getElementById('add-balance').innerText
    const convertmainbalance = parseFloat(mainbalance)

    if (convertpin === 1234) {
        const sum = convertmainbalance + convert
        const mainbalance = document.getElementById('add-balance').innerText = sum
    }
    else {
        alert('please type correct answer')
    }
})

const addmoney = document.getElementById('addMoney')
const cashout = document.getElementById('cashout')
cashout.style.display='none'
// add money
document.getElementById('btn-add-money').addEventListener('click', function () {
    addmoney.style.display = 'block'
    cashout.style.display = 'none'
})
// cash out 
document.getElementById('btn-cashout').addEventListener('click', function () {
addmoney.style.display='none'
cashout.style.display='block'
})

document.getElementById('cashout-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = document.getElementById('amount-money').value
    const convert = parseFloat(amount)
    const pin = document.getElementById('pin-number').value
    const convertpin = parseInt(pin)
    const mainbalance = document.getElementById('add-balance').innerText
    const convertmainbalance = parseFloat(mainbalance)

    if (convertpin === 1234) {
        const sum = convertmainbalance - convert
        const mainbalance = document.getElementById('add-balance').innerText = sum
    }
    else {
        alert('please type correct answer')
    }
})
