const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.loglin');
const registerlink= document.querySelector('.registerlin')
const btnpopup= document.querySelector('.login')
const btnclose= document.querySelector('.iconclose')
const bb = document.querySelector('.container1');

const text = document.querySelector('.future');

const textLoad = () => {

  setTimeout(() => {
    text.textContent = "Is Here";
  }, 100);
  setTimeout(() => {
    text.textContent = "Is Now";
  }, 3000);
  setTimeout(() => {
    text.textContent = "Is Good";
  }, 6000);

  setTimeout(() => {
    textLoad(count + 1);
  }, 9000);
}


textLoad();
    

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