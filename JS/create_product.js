/*
  Nội dung cần giải quyết:
  1. Xử lý phần logic UI cho phần thêm màu --> xong
  2. Xử lý phần logic UI cho phần tạo size --> xong
  3. Xử lý logic phần chọn hình ảnh cho phần thêm màu -->
  4. Xử lý locgic phần gom nhóm dữ liệu của phần thêm màu -->
  5. Xử lý phần dữ liệu cho phần tạo size -->
  6. Xử lý dữ liệu gửi về backend qua fetch
*/



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

// Gắn sự kiện cho nút xóa
rmSizeBtn.addEventListener("click", () => {
  // DOM tất cả các phần tử trong trang có class đang được chọn
  let selectSize = document.querySelectorAll(".size__box.selectSize");

  selectSize.forEach((size) => {
    size.remove();

    let sizeText = size.innerText;

    let indexSize = dataSize.indexOf(sizeText);

    dataSize.splice(indexSize, 1);
  });

  console.log(dataSize);
});

/**************************************************************************************/

// Xử lý phần thêm màu mới 
const addColor = document.querySelector(".CreateProduct__GeneralInfor__UploadImg__ColorAdd__Btn");
const container = document.querySelector(".CreateProduct__GeneralInfor__UploadImg__avt");

addColor.addEventListener("click", () => {
    let template = document.querySelector(".CreateProduct__GeneralInfor__UploadImg__avt__box__template");
    let clone = template.content.cloneNode(true);
    let group = clone.querySelector(".CreateProduct__GeneralInfor__UploadImg__avt__box__template__div");

    // Gán sự kiện chọn ảnh đại diện
    const avatarInput = document.createElement("input");
    avatarInput.type = "file";
    avatarInput.accept = "image/*";
    avatarInput.style.display = "none";

    const avatarImg = group.querySelector(".addImgAvt");
    avatarImg.addEventListener("click", () => avatarInput.click());
    avatarInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            avatarImg.src = URL.createObjectURL(file);
            avatarImg.dataset.file = file.name;
        }
    });

    // Gán sự kiện chọn ảnh chi tiết
    const detailImgs = group.querySelectorAll(".CreateProduct__GeneralInfor__UploadImg__Detail img");
    detailImgs.forEach((img, index) => {
        const detailInput = document.createElement("input");
        detailInput.type = "file";
        detailInput.accept = "image/*";
        detailInput.style.display = "none";

        img.addEventListener("click", () => detailInput.click());
        detailInput.addEventListener("change", (event) => {
            const file = event.target.files[0];
            if (file) {
                img.src = URL.createObjectURL(file);
                img.dataset.file = file.name;
            }
        });

        img.insertAdjacentElement("afterend", detailInput);
    });

    group.appendChild(avatarInput);
    container.appendChild(group);
});

// Xử lý phần xóa nhóm ảnh
const rmColor = document.querySelector(".CreateProduct__GeneralInfor__UploadImg__ColorDel__Btn");

rmColor.addEventListener("click", () => {
  let selectColorGroup = document.querySelectorAll(".group-checkbox-color:checked");

  selectColorGroup.forEach((checkbox) => {
    let templateDiv = checkbox.closest(".CreateProduct__GeneralInfor__UploadImg__avt__box__template__div");
    templateDiv.remove();
  })
})

// Xử lý phần gửi dữ liệu về backend
const submitBtn = document.querySelector(".CreateProductSubmit__Btn"); // Giả sử có nút này

submitBtn.addEventListener("click", () => {

    let allGroups = document.querySelectorAll(".CreateProduct__GeneralInfor__UploadImg__avt__box__template__div");
    let formData = new FormData();

    allGroups.forEach((group, index) => {
        let avatar = group.querySelector(".addImgAvt");
        let details = group.querySelectorAll(".CreateProduct__GeneralInfor__UploadImg__Detail img");

        if (avatar.dataset.file) {
            formData.append(`group_${index}_avatar`, avatar.dataset.file);
        }

        details.forEach((img, i) => {
            if (img.dataset.file) {
                formData.append(`group_${index}_detail_${i}`, img.dataset.file);
            }
        });
    });

      console.log(formData);

    // Gửi formData về backend
    fetch("/route từ BE của Cường", {
        method: "POST",
        body: formData,
    }).then(response => response.json())
      .then(data => console.log("Upload thành công:", data))
      .catch(error => console.error("Lỗi:", error));
});
 
/*******************************************/ 

// Gửi dữ liệu về backend