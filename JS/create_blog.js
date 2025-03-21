
// Xử lý thêm hình ảnh ảnh đại diện cho blog
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

/********************************************************************************************/ 

  // Khởi tạo trình soạn thảo Quill
  var quill = new Quill('#CreateProduct__GeneralInfor__Editor', {
    theme: 'snow',  // Giao diện giống Word
    modules: {
        toolbar: '#toolbar' // Gán thanh công cụ vào trình soạn thảo
    }
});

// Hàm lấy nội dung và xem trước bài viết
const btnActionContent = document.querySelector(".CreateProduct__GeneralInfor__UploadImg__Category__Btn");

btnActionContent.addEventListener("click", () => {

  var dataContent = quill.root.innerHTML;

  document.querySelector(".PreviewContent").innerHTML = dataContent;
})
