const btn = document.querySelector(".btn")

// email validation
const checkEmail = () => {
    const email = document.getElementsByClassName("email");
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email[0].value).toLowerCase());
  }
// clic event on the button
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const errorImg = document.querySelector("#msg-email");

    const elFirstName = document.getElementById('first-name');
    const msgFirstName = document.getElementById('msg-first-name')

    const elLastName = document.getElementById('last-name');
    const msgLastName = document.getElementById('msg-last-name');

    const elPassword = document.getElementById('password');
    const msgPassword = document.getElementById('msg-password');

    const elFirstNameError = document.getElementById('first-name-error')
    const elLastNameError = document.getElementById('last-name-error')
    const elPasswordError = document.getElementById('password-error')
    const elEmailError = document.getElementById('email-error')
    if(!checkEmail()){
        errorImg.style.opacity = "1";
        elEmailError.style.opacity = '1';
    }
    else{
        errorImg.style.opacity = "0";
        elEmailError.style.opacity = '0';
    }
    if (elFirstName.value === ''){
        msgFirstName.style.opacity = '1';
        elFirstNameError.style.opacity = '1';
    }else{
        msgFirstName.style.opacity = '0';
        elFirstNameError.style.opacity = '0';
    }
    if(elLastName. value === ''){
        msgLastName.style.opacity = '1';
        elLastNameError.style.opacity = '1';
    }else{
        msgLastName.style.opacity = '0';
        elLastNameError.style.opacity = '0';
    }
    if(elPassword.value === ''){
        msgPassword.style.opacity = '1';
        elPasswordError.style.opacity = '1';
    }else{
        msgPassword.style.opacity = '0';
        elPasswordError.style.opacity = '0';
    }
    
//     
});