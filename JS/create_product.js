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
  
// Xử lý phần thêm size

// Dom phần tử để render
let RenderListSize = document.querySelector(".CreateProduct__GeneralInfor__UploadImg__Size__RenderList");

// Dom ô input cho người dùng nhập dữ liệu

const inputData = document.querySelector(".CreateProduct__GeneralInfor__UploadImg__Size__Input");

// Dom nút thêm size
const sizeBtn = document.querySelector(".CreateProduct__GeneralInfor__UploadImg__SizeAdd__Btn");

// Tạo mảng rỗng chứa list
let RenderListSizeData = [];

// Sự kiện khi nhấn nút thì sẽ thêm size

sizeBtn.addEventListener("click", () => {

    // Kiểm tra điều kiện, có rồi thì k cho thêm, chưa thì ok
    if(!RenderListSizeData.includes(inputData.value)) {
      RenderListSizeData.push(inputData.value)
      RenderListSize.innerHTML = RenderListSizeData;
      inputData.value = "";
    }
})

