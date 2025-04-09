const screenMediaQuery = window.matchMedia("(max-width: 1200px)");

function converClassProduct(e) {
  const classNameConvert = document.querySelectorAll(".main .row, .main .card");
  const mainNavbarCard = document.querySelectorAll(".main__navbar");
  const mainNavbarProduct = document.querySelectorAll(".main__navbar__product");
  const divBaby = document.querySelectorAll(".main div");

  if (e.matches) {
    classNameConvert.forEach((classConvert) => {
      classConvert.classList.remove("row");
      classConvert.classList.add("card");
    });

    mainNavbarCard.forEach((el) => el.style.display = "none");
    mainNavbarProduct.forEach((el) => el.style.display = "block");

    divBaby.forEach((div) => {
      const colClasses = Array.from(div.classList).filter(cls => cls.startsWith("col-"));

      if (colClasses.length > 0) {
        // Lưu lại class col- vào dataset
        div.dataset.originalCols = colClasses.join(" ");
        colClasses.forEach(cls => div.classList.remove(cls));
      }
    });

  } else {
    classNameConvert.forEach((classConvert) => {
      classConvert.classList.remove("card");
      classConvert.classList.add("row");
    });

    mainNavbarCard.forEach((el) => el.style.display = "flex");
    mainNavbarProduct.forEach((el) => el.style.display = "none");

    divBaby.forEach((div) => {
      // Lấy lại class col- đã lưu
      const originalCols = div.dataset.originalCols;
      if (originalCols) {
        originalCols.split(" ").forEach(cls => div.classList.add(cls));
      }
    });
  }
}

// Gọi lần đầu
converClassProduct(screenMediaQuery);

// Theo dõi thay đổi
screenMediaQuery.addEventListener("change", converClassProduct);

