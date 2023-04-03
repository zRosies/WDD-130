const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.loglin');
const registerlink= document.querySelector('.registerlin')
const btnpopup= document.querySelector('.login')
const btnclose= document.querySelector('.iconclose')
const bb = document.querySelector('.container1');

registerlink.addEventListener('click',()=> {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
})

btnpopup.addEventListener('click',()=> {
    wrapper.classList.add('active-pop')
    ;
    bb.classList.add('active-pop')
    ;
})

btnclose.addEventListener('click',()=> {
    wrapper.classList.remove('active-pop');
    bb.classList.remove('active-pop')
    ;
})