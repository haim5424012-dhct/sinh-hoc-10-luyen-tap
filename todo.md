# Công việc tạo đề ôn tập Sinh học 10

- [x] Đọc toàn bộ nội dung tệp ngân hàng câu hỏi.
- [x] Đọc toàn bộ nội dung tệp mã đề mẫu.
- [x] Kiểm kê số lượng câu, dạng câu, chủ đề, mức độ và đáp án.
- [x] Đối chiếu cấu trúc 32 câu nhiều lựa chọn + 2 câu đúng–sai.
- [x] Xác định chính xác quy tắc điểm: 32 câu x 0,25 = 8 điểm; 8 ý đúng–sai x 0,25 = 2 điểm.
- [x] Biên soạn đề thử mới chỉ từ nội dung ngân hàng đã gửi.
- [x] Tạo đáp án, giải thích và dữ liệu chấm điểm.
- [x] Cập nhật website và kiểm thử luồng làm bài, nộp bài, kết quả.
- [x] Lưu checkpoint và bàn giao phiên bản mới.

## Bổ sung ma trận và bảng đặc tả

- [x] Đọc toàn bộ tệp mã đề mới.
- [x] Trích xuất ma trận và bảng đặc tả.
- [x] Chuẩn hóa chủ đề, mức độ và số lượng câu.
- [x] Thiết kế dữ liệu cấu hình sinh đề.
- [x] Thêm màn hình xem ma trận và bảng đặc tả.
- [x] Thêm chức năng sinh đề theo cấu trúc.
- [x] Kiểm thử số lượng câu, điểm và mức độ.
- [x] Lưu checkpoint và bàn giao phiên bản mới.

## Cơ chế trộn nhiều mã đề

- [x] Xác định tiêu chí tương đương giữa các mã đề.
- [x] Thiết kế seed ổn định cho mã đề 3 chữ số.
- [ ] Bổ sung ngân hàng dự phòng theo chủ đề và mức độ. (Cần bổ sung thêm câu hỏi gốc để thay câu, hiện đã có xáo trộn câu/phương án.)
- [x] Xáo trộn câu hỏi và phương án nhưng giữ đáp án chuẩn.
- [x] Bổ sung nhập/chọn mã đề 101, 102.
- [x] Kiểm thử cùng mã cho cùng đề và khác mã cho đề khác.
- [x] Kiểm thử ma trận, điểm và đáp án giữa các mã.
- [x] Lưu checkpoint và bàn giao phiên bản mới.

## Sổ điểm theo lớp

- [x] Đọc toàn bộ tệp sổ điểm Excel mẫu.
- [x] Kiểm kê sheet, cột, dòng học sinh và công thức.
- [x] Chuẩn hóa mã HS001–HS045.
- [x] Thiết kế bản ghi điểm theo mã học sinh, mã đề và thời điểm.
- [x] Lập trình lưu điểm cục bộ sau khi nộp bài.
- [x] Bổ sung giao diện sổ điểm/tra cứu điểm.
- [x] Kiểm thử bộ chọn học sinh, 45 dòng sổ điểm và mã đề; cần bổ sung kiểm thử nộp bài thực tế khi có dữ liệu làm bài.
- [x] Lưu checkpoint và bàn giao phiên bản mới.

## Tải sổ điểm

- [x] Xác định cấu trúc tệp xuất gần mẫu XLS.
- [x] Thiết kế dữ liệu điểm trống và điểm đã làm.
- [x] Thêm nút tải sổ điểm cho giáo viên.
- [x] Xuất đủ 45 học sinh và thông tin mã đề/điểm.
- [x] Kiểm thử build, sự xuất hiện của nút và cấu trúc dữ liệu XLSX; cần xác nhận tải trực tiếp trên trình duyệt người dùng.
- [x] Lưu checkpoint và bàn giao phiên bản mới.

## Tùy chỉnh nhận diện giáo viên và trường

- [x] Thiết kế cấu trúc nhận diện lưu bằng localStorage.
- [x] Thêm khu vực quản trị tùy chỉnh thông tin.
- [x] Đặt mặc định Võ Văn Bé Hai, Tổ Sinh học, THPT Đốc Binh Kiều - Cai Lậy.
- [x] Kết nối thông tin vào footer và tệp sổ điểm; khu vực header giữ nhận diện ứng dụng Sinh học 10.
- [x] Kiểm thử lưu, khôi phục và hiển thị responsive.
- [x] Lưu checkpoint và bàn giao phiên bản mới.

## Cập nhật copy tiếng Anh cho hero

- [x] Chọn tiêu đề và mô tả tiếng Anh chuẩn Biology.
- [x] Thay nội dung hero trên giao diện.
- [x] Kiểm tra bố cục desktop; bố cục mobile kế thừa responsive CSS hiện có.
- [x] Lưu checkpoint và bàn giao phiên bản mới.

## Avatar, footer và khóa nhận diện

- [x] Chuẩn bị ảnh hoa sen làm avatar nhận diện.
- [x] Thêm khẩu hiệu tiếng Anh truyền cảm hứng.
- [x] Thêm dòng “Liên hệ qua nhà trường”.
- [x] Khóa phần thông tin giáo viên/trường ở chế độ chỉ xem.
- [x] Kiểm tra footer và responsive.
- [x] Lưu checkpoint và bàn giao phiên bản mới.

## Sửa hiển thị font tiếng Việt

- [x] Kiểm tra font đang tải và các selector tiêu đề.
- [x] Sửa lỗi tách chữ/dấu và tracking quá rộng.
- [x] Kiểm tra bảng đặc tả, ma trận, footer và hero.
- [x] Kiểm thử desktop/mobile.
- [x] Lưu checkpoint và bàn giao phiên bản mới.

## Sửa trang trắng trên GitHub Pages

- [x] Kiểm tra vite.config và base path hiện tại.
- [x] Kiểm tra đường dẫn asset/bundle sau build.
- [x] Cập nhật base path cho repository Pages.
- [ ] Build và triển khai lại workflow. (Sẽ chạy sau checkpoint đồng bộ.)
- [ ] Kiểm tra trang thực tế và console/network.
- [ ] Lưu checkpoint và bàn giao phiên bản mới.
