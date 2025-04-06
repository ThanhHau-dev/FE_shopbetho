//  Tạo hiệu ứng cho các phần tử
ScrollReveal().reveal('.welcome__admin__banner img, .welcome__admin__logo', {
    duration: 400,      // Hiệu ứng kéo dài 1500ms
    origin: 'top',      // Xuất hiện từ bên trái
    distance: '200px',   // Di chuyển 100px khi xuất hiện
    delay: 100,          // Độ trễ trước khi chạy hiệu ứng
    easing: 'ease-in-out', // Chuyển động mượt
    reset: true,         // Cho phép chạy lại khi cuộn lên
    opacity: 0           // Ban đầu ẩn (0), sau đó hiện (1)
});


ScrollReveal().reveal('.welcome__admin__btn', {
    duration: 300,      // Hiệu ứng kéo dài 1500ms
    origin: 'bottom',      // Xuất hiện từ bên trái
    distance: '200px',   // Di chuyển 100px khi xuất hiện
    delay: 100,          // Độ trễ trước khi chạy hiệu ứng
    easing: 'ease-in-out', // Chuyển động mượt
    reset: true,         // Cho phép chạy lại khi cuộn lên
    opacity: 0           // Ban đầu ẩn (0), sau đó hiện (1)
});