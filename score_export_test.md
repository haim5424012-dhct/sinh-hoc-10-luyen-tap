# Kiểm thử tải sổ điểm

Website hiển thị nút `Tải sổ điểm .xlsx` trong khu vực `Điểm của lớp`, cùng bảng 45 học sinh HS001–HS045.

Tệp xuất được tạo bằng thư viện XLSX ở phía trình duyệt, gồm sheet `sinh_hoc_10a9`, tiêu đề lớp, tiêu đề đề ôn tập và các cột: STT, Mã học sinh, Họ và tên, Ngày sinh, Mã đề, MC đúng /32, Đ/S đúng /8, Điểm /10, Ngày làm bài.

Các học sinh chưa làm bài được xuất dưới dạng ô trống; học sinh đã nộp bài có mã đề, số câu đúng, điểm và ngày làm. Dữ liệu lấy từ localStorage của trình duyệt hiện tại.

Đã kiểm tra build TypeScript và giao diện; nút tải xuất hiện đúng ở cuối trang. Lịch sử tải của trình duyệt sandbox không hiển thị bản ghi, nên chưa xác nhận được thao tác tải qua trang `chrome://downloads/`; cần kiểm tra thêm trên trình duyệt người dùng sau khi publish hoặc chạy preview trực tiếp.
