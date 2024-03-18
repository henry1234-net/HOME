'use strict';

const $navbar = document.querySelector('[data-navbar]');
const $navToggler = document.querySelector('[data-nav-toggler]');

$navToggler.addEventListener('click', () => $navbar.classList.toggle('active'));

const $header = document.querySelector('[data-header]');
window.addEventListener('scroll', o => {
    $header.classList[window.scrollY > 50 ? 'add' : 'remove']('active');
})



const $toggleBtns = document.querySelectorAll('.fav-btn')

$toggleBtns.forEach($toggleBtn => {
    $toggleBtn.addEventListener("click", () => {
        $toggleBtn.classList.toggle("active");
    })
})