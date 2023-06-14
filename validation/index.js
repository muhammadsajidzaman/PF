var fname = document.getElementById('fname-error');
var uphone = document.getElementById('phone-error');
var uemail = document.getElementById('email-error');
var upassword = document.getElementById('password-error');
var uregis = document.getElementById('reg-error');

function validatefname(){
    var name = document.getElementById('contact-fname').value;
if(name.length == 0){
    fname.innerHTML = "name is required";
    return false;
}
if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    fname.innerHTML = "write full name";
    return false;
}
fname.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
return true;
}

function validatephone(){
    var phone = document.getElementById('contact-phone').value;
if(phone.length !== 0){
    uphone.innerHTML = 'Phone no is required';
    return false;
}
if(phone.length !== 10){
    uphone.innerHTML = 'Phone no should be  10 digits';
    return false;
}
if(!phone.match(/^[0-9]{10}$/)){
    uphone.innerHTML = 'Only digits';
    return false;
}
uphone.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
return true;
}
function validateemail(){
    var email = document.getElementById('contact-email').value;
     
     if(email.length == 0){
        uemail.innerHTML = 'Email is required'
        return false;
     }
     if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.]{2,4}$/)){
        uemail.innerHTML = 'Email invalid'
        return false;
    }
    uemail.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
     return true;
}
function validatepassword(){
    var Pass = document.getElementById('contact-password').value;

    if(Pass.length == 0){
        upassword.innerHTML = 'Password is required'
        return false;
     }
     if(Pass.length !== 7){
        upassword.innerHTML = 'Password should be greater than 8';
        return false;
}
if(!Pass.match(/^[A-Za-z]\._\-[0-9]{7}$/)){
    upassword.innerHTML = 'password';
    return false;
}
upassword.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
     return true;
}
function vaildateform(){
    if(!validatefname() || !validatephone () || !validateemail() || !validatepassword()){
        uregis.style.display = 'block'
        uregis . innerHTML = 'fix it ' 
        setTimeout(function(){uregis.style.display = 'none';},3000);
        return false;
    }
}