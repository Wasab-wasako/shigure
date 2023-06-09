// スマホ用メニュー　クラス追加
const ham = document.querySelector("#js-hamburger");
const nav = document.querySelector("#js-globalnav");

ham.addEventListener("click", function () {
 ham.classList.toggle("_active");
 nav.classList.toggle("_active");
});

window.addEventListener("scroll", function () {
 const scroll = window.pageYOffset;
 if (scroll > 180) {
  ham.classList.add("colorchange");
 } else ham.classList.remove("colorchange");
});

// 子メニュー表示
const parentMenu = document.querySelectorAll("._has-child > a");
for (let i = 0; i < parentMenu.length; i++) {
 parentMenu[i].addEventListener("click", function(e){
  e.preventDefault();
  this.nextElementSibling.classList.toggle("active");
 })
}



// COMIC用メニュー　クラス追加
const comicbtn = document.querySelector("#js-comicnav-btn");
const comicnav = document.querySelector("#js-comicnav");

comicbtn?.addEventListener("click", function () {
 comicbtn.classList.toggle("_active");
 comicnav.classList.toggle("_active");
});


// ページUP
const PageUpBtn = document.getElementById('js-pageup');

window.addEventListener("scroll", function () {
 const scroll = window.pageYOffset;
 if (scroll > 500) {
  PageUpBtn.style.opacity = 1;
 } else PageUpBtn.style.opacity = 0;
});

PageUpBtn?.addEventListener('click', () => {
 window.scrollTo({
  top: 0,
  behavior: 'smooth'
 });
});


