const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.loglin');
const registerlink= document.querySelector('.registerlin')
const btnpopup= document.querySelector('.login')
const btnclose= document.querySelector('.iconclose')
const bb = document.querySelector('.container1');

const text = document.querySelector('.future');

const textLoad = () => {

  setTimeout(() => {
    text.textContent = "Gustavo";
  }, 100);
  setTimeout(() => {
    text.textContent = "Software Developer";
  }, 3000);
  setTimeout(() => {
    text.textContent = "Web Developer";
  }, 6000);
  setTimeout(() => {
    text.textContent = "The Future";
  }, 9000);

  setTimeout(() => {
    textLoad(count + 1);
  }, 12000);
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