const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
const emailInput =  document.getElementById('E-mail');
const errorMessage = document.getElementById('ErrorMessage');
const textarea = document.getElementById('textarea');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

if (emailInput) {
    emailInput.addEventListener('input', () => {
        if (!emailInput.checkValidity()) {
            errorMessage.textContent = 'Please Enter a Valid Email Address';
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
        }
    })
}

if (textarea) {
    textarea.addEventListener('input', () => {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    })
    
}