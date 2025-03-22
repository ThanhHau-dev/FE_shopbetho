// Khai báo biến toàn cục để nhận dữ liệu cập nhật
var file = null; // biến này chứa ảnh thumbnail
var dataContent = null; // biến này chứa nội dung người dùng soạn thảo blog

// Lấy dữ liệu từ tiêu đề
const TitleBlog = document.querySelector(
  ".CreateProduct__GeneralInfor__Title__Blog"
);

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
  file = event.target.files[0];
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
var quill = new Quill("#CreateProduct__GeneralInfor__Editor", {
  theme: "snow", // Giao diện giống Word
  modules: {
    toolbar: "#toolbar", // Gán thanh công cụ vào trình soạn thảo
  },
});

// Đổi màu nền ô nhập dữ liệu

document
  .querySelector("#CreateProduct__GeneralInfor__Editor")
  .addEventListener("click", function () {
    this.style.backgroundColor = "white";
  });

// Hàm lấy nội dung và xem trước bài viết
const btnActionContent = document.querySelector(
  ".CreateProduct__GeneralInfor__UploadImg__Category__Btn"
);

btnActionContent.addEventListener("click", () => {
  dataContent = quill.root.innerHTML;

  document.querySelector(".PreviewContent").innerHTML = dataContent;
});

/**********************************************************************************************/

// Gửi dữ liệu về BackEnd

// Dữ liệu bao gồm: ảnh thumbnail và dữ liệu phần nhập liệu blog, tiêu đề Blog

// Sự kiện nhấn nút và gửi về BackEnd cho Cường, nếu Cường thích chuyển thành form thì tùy Cường
const CreateProductSubmitBtn = document.querySelector(
  ".CreateProductSubmit__Btn"
);

CreateProductSubmitBtn.addEventListener("click", () => {

  // Lấy dữ liệu từ ô soạn thảo blog
  dataContent = quill.root.innerHTML;


  // Tạo form data để gửi dữ liệu vì dữ liệu có hình ảnh dạng base 64, không gửi theo kiểu JSON được
  const dataTotaltoBE = new FormData();
  dataTotaltoBE.append("TitleBlog", TitleBlog.value);
  dataTotaltoBE.append("imgThumbnail", file);
  dataTotaltoBE.append("blogData", dataContent);


  // test coi đã có dữ liệu trước khi gửi về chưa
  console.log(dataTotaltoBE);

  fetch("Route do dev BE định nghĩa", {
    method: "POST",
    body: dataTotaltoBE, // chỗ này đếch cần header browser tự thêm được, cũng k cần conver json 
  })

  .then(res => res.json())
  .then(data => console.log("Đã gửi thành công: " , data))
  .catch(erorr => console.log("Gửi thất bại: " , erorr))
})

// xong, hoàn thành logic