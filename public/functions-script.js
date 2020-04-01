const signInBtn = document.querySelector('#signin-btn')
const signOutBtn = document.querySelector('#signout-btn')
const container = document.querySelector('#container')
let html =''

function toogleUI(user) {
    if(user){
        signInBtn.style.display = 'none'
        signOutBtn.style.display = 'block'
        html = '<h1>Welcome to the secret page 🤫</h1>'
        container.innerHTML = html
    } else {
        signOutBtn.style.display = 'none'
        signInBtn.style.display = 'block'
        html = '<h1>Please login to have access 👮 🚨</h1>'
        container.innerHTML = html
    }
}