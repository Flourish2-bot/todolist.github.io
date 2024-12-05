// registration for validation
const registerBtn = document.getElementById('register-btn');
const registerationForm = document.getElementsById('registeration-form');
registerBtn.addEventListener('click',()=>{if (registerationForm.style.display === 'block'){
registerationForm.style.display='none';
} else{
    registerationForm.style.display='block';
}
});

// login form validation
const loginBtn=document.getElementById('login-btn');
const loginForm= document.getElementById('login-form');
loginBtn.addEventListener('click',()=>{if (loginForm.style.display==='block'){
} else {
    loginForm.style.display='block';
}
});