document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault()

    const inputNumber = document.getElementById('input-number').value
    const inputPassword = document.getElementById('input-password').value
    const transpin = parseInt(inputPassword)
    if (inputNumber.length === 11) {
        if (transpin === 1234) {
            window.location.href="main.html"
        }
        else {
            alert('pin tik nai')
        }

    }
    else{
        alert('apner number ti vul')
    }

})