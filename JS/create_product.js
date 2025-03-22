// Xử lý phần thêm hình ảnh
const addImgAvt = document.querySelector(".addImgAvt");
const addImgDetail1 = document.querySelector(".addImgDetail__1");
const addImgDetail2 = document.querySelector(".addImgDetail__2");
const addImgDetail3 = document.querySelector(".addImgDetail__3");
const addImgDetail4 = document.querySelector(".addImgDetail__4");
const upLoadImg = document.querySelector(
  ".CreateProduct__GeneralInfor__UploadImg__avt__input"
);
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
/****************************************************************/
// Xử lý phần thêm size

// DOM các phần tử cần thiết để xử lý chức năng này
const addSizeBtn = document.querySelector(
  ".CreateProduct__GeneralInfor__UploadImg__SizeAdd__Btn"
);
const rmSizeBtn = document.querySelector(
  ".CreateProduct__GeneralInfor__UploadImg__SizeDel__Btn"
);
const inputSize = document.querySelector(
  ".CreateProduct__GeneralInfor__UploadImg__Size__Input"
);
var renderSize = document.querySelector(
  ".CreateProduct__GeneralInfor__UploadImg__Size__RenderList"
);

// Tạo mảng rỗng chứa dữ liệu các size, mảng này gửi BE

var dataSize = [];

// Gắn sự kiện cho nút thêm
addSizeBtn.addEventListener("click", () => {
  console.log("nút thêm size được nhấn");

  let sizeValue = inputSize.value.trim();
  if (sizeValue === "") return;

  // Tạo phần tử size mới để hiển thị
  let sizeItem = document.createElement("div");
  sizeItem.classList.add("size__box");
  sizeItem.innerText = sizeValue;

  // Gắn sự kiện khi size được nhấn
  sizeItem.addEventListener("click", function () {
    console.log(this);
    this.classList.toggle("selectSize");
  });

  // Thêm dữ liệu mới vào mảng
  dataSize.push(sizeValue);

  // Thêm phần tử vào phần render ra các size
  renderSize.appendChild(sizeItem);
  console.log(dataSize);

  // Reset lại input
  inputSize.value = "";
});

/*
Chưa làm sự kiện cho nút xóa size và chưa có logic gửi về cho backend
*/ 