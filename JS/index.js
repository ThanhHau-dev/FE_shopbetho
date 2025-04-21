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


// js viết cho dropdoww pc
// Lấy tất cả các nhóm dropdown
// const dropdownGroups = document.querySelectorAll('.header__menu__2__dropdow');

// dropdownGroups.forEach(group => {
//   const toggle = group.querySelector('#dropdownToggleHeader');
//   const menu = group.querySelector('.dropdown-menu-header');

//   if (toggle && menu) {
//     toggle.addEventListener('click', function (e) {
//       e.preventDefault();

//       // Ẩn tất cả menu khác
//       dropdownGroups.forEach(otherGroup => {
//         const otherMenu = otherGroup.querySelector('.dropdown-menu-header');
//         if (otherMenu !== menu) {
//           otherMenu.style.display = 'none';
//         }
//       });

//       // Hiện hoặc ẩn menu hiện tại
//       menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
//     });
//   }
// });

// // Đóng menu nếu click ra ngoài dropdown
// document.addEventListener('click', function (e) {
//   if (!e.target.closest('.header__menu__2__dropdow')) {
//     dropdownGroups.forEach(group => {
//       const menu = group.querySelector('.dropdown-menu-header');
//       if (menu) menu.style.display = 'none';
//     });
//   }
// });
document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.header__menu__2__dropdow > a.nav-link');

    toggles.forEach(toggle => {
      toggle.addEventListener('click', function (e) {
        e.preventDefault();
        const parent = this.parentElement;
        const submenu = parent.querySelector('ul.dropdown-menu-header');
        
        // Đóng các dropdown khác cùng cấp
        const siblings = parent.parentElement.querySelectorAll('ul.dropdown-menu-header');
        siblings.forEach(el => {
          if (el !== submenu) el.style.display = 'none';
        });

        // Toggle menu
        if (submenu) {
          submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        }
      });
    });

    // Ẩn tất cả dropdown khi click bên ngoài
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.header__menu__2__dropdow')) {
        document.querySelectorAll('.dropdown-menu-header').forEach(menu => {
          menu.style.display = 'none';
        });
      }
    });
  });
/*---------------------------------------*/ 

// js viết thử cho dropdow pc màn nhỏ và tablet mobile
const dropdownOpen = document.querySelector(".header__menu__mobile__1__nav__dropdow");

const dropdownBtns = document.querySelectorAll(".Menu__sidebar__mobile__nav__dropdow__btn");
const dropdownContents = document.querySelectorAll(".Menu__sidebar__mobile__nav__dropdow__content");

// Sự kiện mở nút dropdown
dropdownOpen.addEventListener("click", (event) => {
    document.querySelector(".Menu__sidebar__mobile").style.display = "flex"

    // Ngăn chặn sự kiện click lan ra window
    event.stopPropagation();
});

// Sự kiện đóng menu khi click ra ngoài
window.addEventListener("click", (event) => {
    document.querySelector(".Menu__sidebar__mobile").style.display = "none"

});
// Thêm sự kiện click cho từng nút dropdown
dropdownBtns.forEach((btn, index) => {
    btn.addEventListener("click", (event) => {
        event.stopPropagation(); // Ngăn sự kiện lan ra ngoài

        // Đóng tất cả dropdowns trước khi mở cái được bấm
        dropdownContents.forEach((content, i) => {
            if (i === index) {
                content.classList.toggle("show");
            } else {
                content.classList.remove("show");
            }
        });
    });
});

// Đóng dropdown khi click ra ngoài
document.addEventListener("click", (e) => {
    dropdownBtns.forEach((btn, index) => {
        const content = dropdownContents[index];

        if (!btn.contains(e.target) && !content.contains(e.target)) {
            content.classList.remove("show");
        }
    });
});


// js cho phần dropdowsidebar
const dropdownBtnssidebar = document.querySelectorAll(".footer__3__mobile__dropdow__btn");
const dropdownContentssidebar = document.querySelectorAll(".footer__3__mobile__dropdow__content");


// Thêm sự kiện click cho từng nút dropdown
dropdownBtnssidebar.forEach((btn, index) => {
    btn.addEventListener("click", (event) => {
        event.stopPropagation(); // Ngăn sự kiện lan ra ngoài

        // Đóng tất cả dropdowns trước khi mở cái được bấm
        dropdownContentssidebar.forEach((content, i) => {
            if (i === index) {
                content.classList.toggle("show");
            } else {
                content.classList.remove("show");
            }
        });
    });
});

// Đóng dropdown khi click ra ngoài
document.addEventListener("click", (e) => {
    dropdownBtnssidebar.forEach((btn, index) => {
        const content = dropdownContentssidebar[index];

        if (!btn.contains(e.target) && !content.contains(e.target)) {
            content.classList.remove("show");
        }
    });
});

/***********************************************************************************************/

//  Tạo hiệu ứng cho các phần tử
ScrollReveal().reveal('.col-lg-6', {
    duration: 300,      // Hiệu ứng kéo dài 1500ms
    origin: 'left',      // Xuất hiện từ bên trái
    distance: '200px',   // Di chuyển 100px khi xuất hiện
    delay: 60,          // Độ trễ trước khi chạy hiệu ứng
    easing: 'ease-in-out', // Chuyển động mượt
    reset: true,         // Cho phép chạy lại khi cuộn lên
    opacity: 0           // Ban đầu ẩn (0), sau đó hiện (1)
});


ScrollReveal().reveal('.main__2__product .card', {
    duration: 300,      // Hiệu ứng kéo dài 1500ms
    origin: 'bottom',      // Xuất hiện từ bên trái
    distance: '200px',   // Di chuyển 100px khi xuất hiện
    delay: 60,          // Độ trễ trước khi chạy hiệu ứng
    easing: 'ease-in-out', // Chuyển động mượt
    reset: true,         // Cho phép chạy lại khi cuộn lên
    opacity: 0           // Ban đầu ẩn (0), sau đó hiện (1)
});


ScrollReveal().reveal('.main__3__collection__img img', {
    duration: 400,      // Hiệu ứng kéo dài 1500ms
    origin: 'bottom',      // Xuất hiện từ bên trái
    distance: '700px',   // Di chuyển 100px khi xuất hiện
    delay: 50,          // Độ trễ trước khi chạy hiệu ứng
    easing: 'ease-in-out', // Chuyển động mượt
    reset: true,         // Cho phép chạy lại khi cuộn lên
    opacity: 0           // Ban đầu ẩn (0), sau đó hiện (1)
});


ScrollReveal().reveal('.main__4__product .card', {
    duration: 800,      // Hiệu ứng kéo dài 1500ms
    origin: 'bottom',      // Xuất hiện từ bên trái
    distance: '700px',   // Di chuyển 100px khi xuất hiện
    delay: 60,          // Độ trễ trước khi chạy hiệu ứng
    easing: 'ease-in-out', // Chuyển động mượt
    reset: true,         // Cho phép chạy lại khi cuộn lên
    opacity: 0           // Ban đầu ẩn (0), sau đó hiện (1)
});


ScrollReveal().reveal('.main__6__img img', {
    duration: 800,      // Hiệu ứng kéo dài 1500ms
    origin: 'right',      // Xuất hiện từ bên trái
    distance: '700px',   // Di chuyển 100px khi xuất hiện
    delay: 0,          // Độ trễ trước khi chạy hiệu ứng
    easing: 'ease-in-out', // Chuyển động mượt
    reset: true,         // Cho phép chạy lại khi cuộn lên
    opacity: 0           // Ban đầu ẩn (0), sau đó hiện (1)
});