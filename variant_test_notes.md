# Kiểm thử mã đề 3 chữ số

## Kết quả kiểm thử trên giao diện

| Mã đề | Kết quả quan sát |
|---|---|
| 101 | Header hiển thị `Mã đề 101`; câu đầu là câu về thành phần chủ yếu trong cơ thể sống, với thứ tự phương án đã được xáo trộn. |
| 102 | Header hiển thị `Mã đề 102`; câu đầu là câu về thứ tự các cấp tổ chức cơ bản, khác mã 101. |

Cả hai mã đều hiển thị `40 ý`, thang `10 điểm` và mỗi ý đúng `0,25 điểm`. Mã đề được chọn bằng danh sách 3 chữ số từ 101 đến 109; mã học sinh được nhập riêng.

## Cơ chế đã triển khai

Hàm `buildExamVariant(code)` dùng seed ổn định từ mã đề. Cùng một mã sẽ sinh cùng thứ tự câu, thứ tự phương án và đáp án chuẩn tương ứng; mã khác sẽ sinh thứ tự khác. Việc xáo trộn không thay đổi số lượng câu theo chủ đề, mức độ, dạng câu hoặc điểm số.

## Giới hạn cần lưu ý

Ngân hàng hiện tại có đúng số lượng câu đã chọn cho ma trận 32 MC + 2 Đ/S. Vì vậy các mã 101–109 hiện tạo khác nhau bằng cách xáo trộn có kiểm soát câu/phương án, chưa thay thế câu bằng câu dự phòng cùng chủ đề/mức độ. Muốn tạo các mã có nội dung khác nhau sâu hơn, cần bổ sung ngân hàng dự phòng đủ lớn cho từng ô ma trận.
