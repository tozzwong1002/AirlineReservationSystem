$(".nav-bar").html(`
<a class="logo" href="index.html">
    <i class="fas fa-plane"></i>
</a>
<ul class="nav-links-container justify-content-end">
    <li id="management" class="nav-link">
        <a href="../admin/AdminSite.php">
            <span>Quản lý</span>
            <i class="fas fa-tasks"></i>
        </a>
    </li>
    <li id="login-register" class="nav-link">
        <a href="login-register.html">
            <span>Đăng Nhập</span>
            <i class="far fa-user"></i>
        </a>
    </li>
    <li id="orders" class="nav-link">
        <a href="member-orders.html">
            <span>Đơn hàng</span>
            <i class="fas fa-shopping-cart"></i>
        </a>
    </li>
</ul>
<div id="username">
    <a href="user-info.html" class="username">
        <span></span>
        <i class="far fa-user"></i>
    </a>
</div>
<div id="logout" class="nav-link">
    <a class="text-white" href="../php/LoginRegister/Logout.php">
        <span>Đăng xuất</span>
        <i class="fas fa-sign-out-alt"></i>
    </a>
</div>
`);

$(".description").html(`
<div class="info-1">
    <ul>
        <li>Hỗ Trợ Khách Hàng</li>
        <li>Liên Hệ</li>
        <li>Câu Hỏi Thường Gặp</li>
        <li>Dịch Vụ</li>
        <li>Điều Khoản</li>
        <li>Chính Sách</li>
    </ul>
    <ul>
        <li>Về Chúng Tôi</li>
        <li>Giới Thiệu</li>
        <li>Tuyển Dụng</li>
        <li>Quy Chế</li>
    </ul>
    <ul>
        <li>Tin Tức</li>
        <li>Báo Giá Dịch Vụ</li>
        <li>Khuyến Mãi</li>
        <li>Cải Tiến</li>
    </ul>
    <ul>
        <li>Mạng xã hội</li>
        <li>
            <span>Facebook</span>
            <i class="fab fa-facebook"></i>
        </li>
        <li>
            <span>Instagram</span>
            <i class="fab fa-instagram"></i>
        </li>
        <li>
            <span>Twitter</span>
            <i class="fab fa-twitter"></i>
        </li>
    </ul>
</div>
<div class="info">
    <ul>
        <li style="font-weight: bold; font-size: 20px;">CÔNG TY CỔ PHẦN iAirline</li>
        <li>
            <i class="fas fa-phone"></i> 0349.966.760 <i class="far fa-envelope"></i> iairline@airline.com
        </li>
        <li>Thời gian làm việc: 7:30 - 17:30 (thứ 2 - thứ 6)</li>
        <li><img width="140px" src="../icon/bocongthuong.png"></li>
    </ul>
    <ul>
        <li>Địa chỉ trụ sở chính</li>
        <li>222 XYZ, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh</li>
        <li>Văn phòng TP. Hồ Chí Minh</li>
        <li>Tầng 14, Toà nhà Vietcombank, số 5 Công Trường Mê Linh, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh
        </li>
    </ul>
</div>`);
