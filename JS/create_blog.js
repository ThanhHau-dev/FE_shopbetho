// Js để xử lý công cụ văn bản như word
const editor = document.getElementById("editor");
const toolbar = document.getElementById("toolbar");

editor.addEventListener("mouseup", function (event) {
  let selection = window.getSelection();
  if (selection.toString().length > 0) {
    let range = selection.getRangeAt(0);
    let rect = range.getBoundingClientRect();

    toolbar.style.display = "flex";
    toolbar.style.top = `${window.scrollY + rect.top - 50}px`;
    toolbar.style.left = `${rect.left}px`;
  } else {
    toolbar.style.display = "none";
  }
});

function formatText(command) {
  document.execCommand(command, false, null);
}

function changeFontSize(size) {
  document.execCommand("fontSize", false, size);
}

document.addEventListener("click", function (event) {
  if (!toolbar.contains(event.target) && event.target !== editor) {
    toolbar.style.display = "none";
  }
});

// Xử lý thêm hình ảnh mới
const addImg = document.querySelector(
  ".CreateProduct__GeneralInfor__UploadImg__avt"
);
const upLoadImg = document.querySelector(
  "#CreateProduct__GeneralInfor__UploadImg__Input"
);
const imgPreview = document.querySelector(
  "#CreateProduct__GeneralInfor__UploadImg__avt__Preview"
);

// Khi nhấn vào chọn ảnh thì sự kiện click được gắn cho
// thẻ input có type="file"
addImg.addEventListener("click", () => {
  upLoadImg.click();
});

// Chọn ảnh
upLoadImg.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imgPreview.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Xử lý thêm đoạn văn và hình ảnh mới
const actionAddSesionBlog = document.querySelector(
  ".CreateProduct__GeneralInfor__UploadImg__Category__Btn"
);
const textblogNumber = document.querySelector(
  ".CreateProduct__GeneralInfor__passage"
);
const CreateProductGeneralInfor = document.querySelector(
  ".CreateProduct__GeneralInfor"
);
// Giải thích: khi nhấn nút này thì sẽ bật thêm một khung để nhập văn bản mới.
// và reset khu vực chứa hình để người dùng thêm hình ảnh cho đoạn tiếp theo

// tạo biến đếm
let countNumberBlog = 1;
actionAddSesionBlog.addEventListener("click", () => {
  // Xử lý tác vụ ở trong này
  const newDivBlog = document.createElement("div");
  newDivBlog.id = "editor";
  newDivBlog.setAttribute("contenteditable", "true"); 
  countNumberBlog++;
  textblogNumber.innerHTML = `Tổng số đoạn văn:  ${countNumberBlog}`;

  // Thêm phần thẻ div vừa tạo vô tài liệu
  CreateProductGeneralInfor.appendChild(newDivBlog);

  // Reset ảnh để thêm ảnh mới
  imgPreview.src = "";
  upLoadImg.value = "";
});
