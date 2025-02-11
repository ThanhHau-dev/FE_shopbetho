// js tạm thời cho một số nút chức năng
const headerMenuMobile1NavSearch = document.querySelector(
  ".header__menu__mobile__1__nav__search"
);
const headerMenuMobile2 = document.querySelector(".header__menu__mobile__2");
const fni = document.querySelectorAll("i");
const fna = document.querySelectorAll("a");

headerMenuMobile1NavSearch.addEventListener("click", () => {
  headerMenuMobile2.style.display = "flex";
});

fni.forEach(fniTest => {
    fniTest.addEventListener("click", ()=> {
        alert("Đây là bản demo giao diện, không thể tương tác. Vui lòng quay lại sau !")
    })
})

fna.forEach(fnaTest => {
    fnaTest.addEventListener("click", ()=> {
        alert("Đây là bản demo giao diện, không thể tương tác. Vui lòng quay lại sau !")
    })
})