/*!
 * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
 */
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

// var button = document.getElementById("taoTK")
// button.addEventListener("click", function(event) {
//     event.preventDefault(); // Ngăn chặn form gửi dữ liệu đi

//     // Lấy đối tượng form và các trường dữ liệu
//     var form = document.getElementById("form");
//     var fn = form.querySelector('input[type="text"]:nth-of-type(1)');
//     var ln = form.querySelector('input[type="text"]:nth-of-type(2)');
//     var email = form.querySelector('input[type="email"]');
//     var p = form.querySelector('input[type="password"]:nth-of-type(1)');
//     var p1 = form.querySelector('input[type="password"]:nth-of-type(1)');
//     var chuyenkhoa = form.querySelector('select[name="select"]');

//     // Kiểm tra mã bệnh nhân
//     var regexMaBN = /^[0-9]{n}$/;
//     if (regexMaBN.test(fn.value)) {
//         window.alert("Không được nhập số")
//         console.log("h")
//         return;
//     }

//     // if (regexMaBN.test(ln.value)) {
//     //     window.alert("Không được nhập số")
//     //     return;
//     // }

//     // Kiểm tra mật khẩu
//     // if (mk.value.length < 6) {
//     //     mk.nextElementSibling.textContent = '(*) Vui lòng nhập mật khẩu có ít nhất 6 ký tự';
//     //     return;
//     // } else {
//     //     mk.nextElementSibling.textContent = '';
//     // }
// });