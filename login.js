let a = 1;
function pass(){
    if(a==1){
        document.getElementById('password').type='password';
        document.getElementById('hideButton').src='image/visibility_off.svg'
        a=0;
    }
    else{
        document.getElementById('password').type='text';
        document.getElementById('hideButton').src='image/visibility_on.svg'
        a=1
    }
}

const signinButton = document.getElementById('signIn')
const loginButton = document.getElementById('login')
const boxLogin = document.getElementById('boxLogin')
const boxRegister = document.getElementById('boxRegister')


signinButton.addEventListener('click',(e)=>{
    e.preventDefault();
    boxRegister.classList.add("active");
    boxLogin.classList.add('hidden')
});
loginButton.addEventListener('click',(e)=>{
    e.preventDefault();
    boxRegister.classList.remove("active")
    boxLogin.classList.remove('hidden')
})