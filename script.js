const scriptURL = 'https://script.google.com/macros/s/AKfycbzl9065fqFMg0VfhM1ZNoL1ma-xguku9ZzjQgI2ShLTwsc3t1_AbyBoyNtStzZy2RkqWw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank You For Subscribing!"
            setTimeout(function() {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})