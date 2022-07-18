let navBtnOpen = document.querySelector(".navBtnOpen");
let navBtnClose = document.querySelector(".navBtnClose");
let navlist = document.querySelector(".navlist");

// console.log(navBtnOpen);
// console.log(navBtnClose);
// console.log(navlist);

navBtnOpen.onclick = function () {
  navlist.classList.add('active');
  navBtnOpen.classList.add('hidden');
  navBtnClose.classList.remove("hidden");
}
navBtnClose.onclick = function () {
  navlist.classList.remove("active");
  navBtnClose.classList.add("hidden");
  navBtnOpen.classList.remove("hidden");
};