// Xử lý phần thêm hình ảnh
const addImgAvt = document.querySelector(".addImgAvt");
const addImgDetail1 = document.querySelector(".addImgDetail__1");
const addImgDetail2 = document.querySelector(".addImgDetail__2");
const addImgDetail3 = document.querySelector(".addImgDetail__3");
const addImgDetail4 = document.querySelector(".addImgDetail__4");
const upLoadImg = document.querySelector(".CreateProduct__GeneralInfor__UploadImg__avt__input");
// Sự kiện khi user nhấn vào biểu tượng hình ảnh thêm

let currentTarget = null;

document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.querySelector(
      "#CreateProduct__GeneralInfor__UploadImg__avt__input"
    );
  
    
  
    // Lặp qua tất cả ảnh có thuộc tính data-target
    document.querySelectorAll("img").forEach((img) => {
      img.addEventListener("click", function () {
        currentTarget = this; // Lưu lại ảnh đang được chọn
        fileInput.click();
      });
    });
  
    // Khi chọn file ảnh
    fileInput.addEventListener("change", function () {
      if (fileInput.files.length > 0 && currentTarget) {
        const file = fileInput.files[0];
        const reader = new FileReader();
  
        reader.onload = function (e) {
          currentTarget.src = e.target.result;
        };
  
        reader.readAsDataURL(file);
      }
    });
  });
  
  