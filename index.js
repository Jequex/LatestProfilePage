const burger = document.querySelector(".hamburger");
const menuShow = document.querySelector('.links');
const line2 = document.querySelector('.line2');
const line1 = document.querySelector('.line1');
const line3 = document.querySelector('.line3');
burger.addEventListener('click', () => {
    menuShow.classList.toggle('links-active')
    line2.classList.toggle('line2-active')
    line1.classList.toggle('line1-active')
    line3.classList.toggle('line3-active')
})