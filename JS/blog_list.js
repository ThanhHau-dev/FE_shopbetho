ScrollReveal().reveal('.card', {
    duration: 300,      // Hiệu ứng kéo dài 1500ms
    origin: 'left',      // Xuất hiện từ bên trái
    distance: '200px',   // Di chuyển 100px khi xuất hiện
    delay: 50,          // Độ trễ trước khi chạy hiệu ứng
    easing: 'ease-in-out', // Chuyển động mượt
    reset: true,         // Cho phép chạy lại khi cuộn lên
    opacity: 0           // Ban đầu ẩn (0), sau đó hiện (1)
});