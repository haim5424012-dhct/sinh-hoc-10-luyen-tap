# Định hướng thiết kế website Sinh học 10

## Ba hướng phong cách ban đầu

### Hướng 1 — Phòng thí nghiệm giấy gấp
Giao diện học thuật đương đại, dùng nền giấy ấm, mảng màu xanh thực vật và các nét chú thích như sổ tay phòng thí nghiệm. Cảm giác đáng tin cậy, gần gũi với học sinh nhưng không trẻ con.

**Probability:** 0.07

### Hướng 2 — Bảng điều khiển sinh học tối giản
Giao diện dashboard sáng, nhiều thẻ số liệu và biểu đồ, nhấn mạnh hiệu quả ôn tập và tiến độ. Cảm giác chính xác, có tính công cụ.

**Probability:** 0.03

### Hướng 3 — Vườn sinh thái tươi sáng
Giao diện giàu hình minh họa thực vật, màu xanh non, bố cục mềm và thân thiện. Cảm giác khám phá, khuyến khích học sinh học đều mỗi ngày.

**Probability:** 0.08

## Hướng được chọn: Phòng thí nghiệm giấy gấp

### Design Movement
Editorial educational design kết hợp Swiss International Typographic Style với texture giấy và collage khoa học.

### Core Principles
1. **Rõ để học:** phân cấp thông tin mạnh, câu hỏi và trạng thái làm bài luôn dễ quét.
2. **Có dấu vết:** mọi kết quả đều gắn với mã học sinh, ma trận, chủ đề và thời điểm làm bài.
3. **Khoa học nhưng ấm:** hình học gọn, màu tự nhiên, không biến website thành một bảng điều khiển lạnh.
4. **Tập trung:** mỗi màn hình chỉ có một hành động chính và các lối thoát rõ ràng.

### Color Philosophy
Nền kem giấy tạo cảm giác ổn định và giảm mỏi mắt. Xanh rừng là màu tri thức và sự sống; xanh teal dành cho thông tin hệ thống; cam san hô là tín hiệu hành động và điểm nhấn ghi nhớ. Màu nhấn chỉ xuất hiện ở các CTA, tiến độ và trạng thái quan trọng.

### Layout Paradigm
Bố cục bất đối xứng kiểu trang tạp chí: thanh điều hướng ngang gọn, hero chia tỷ lệ 5/7, các mô-đun bài học xếp theo nhịp lệch, và màn hình làm bài dùng cột câu hỏi + cột điều hướng trạng thái trên desktop; tự chuyển thành một luồng dọc trên mobile.

### Signature Elements
- Các nhãn số thứ tự dạng tab giấy nhỏ.
- Đường kẻ chú thích mảnh và chấm đánh dấu như sổ thực hành.
- Các mảng nền giấy trắng nổi trên nền kem, góc bo vừa phải, bóng mềm thay vì khung dày.

### Interaction Philosophy
Tương tác phải trả lời ngay: nút có phản hồi nhấn, lựa chọn câu hỏi đổi trạng thái rõ ràng, tiến độ cập nhật tức thì. Không dùng chuyển động gây phân tán; các chuyển cảnh ngắn, có chủ đích và tôn trọng reduced motion.

### Animation
Hero và các thẻ nội dung xuất hiện theo nhịp 40–60ms. Hover chỉ nâng nhẹ 2–4px và đổi màu viền. Nút nhấn scale 0.97 trong khoảng 160ms. Khi nộp bài, khu vực kết quả xuất hiện bằng opacity + translateY nhẹ; không animate layout.

### Typography System
Tiêu đề dùng **DM Serif Display** để tạo dấu ấn biên tập và nhấn mạnh tính học thuật. Nội dung dùng **Plus Jakarta Sans** vì dễ đọc trên màn hình, chữ số rõ và phù hợp tiếng Việt. H1 48–64px desktop, 36px mobile; H2 28–36px; body 15–17px; nhãn 11–12px uppercase có tracking.

### Brand Essence
Một bàn học trực tuyến giúp học sinh Sinh học 10 luyện tập có định hướng, nhìn thấy tiến bộ và tự sửa sai — khác biệt ở chỗ kết quả luôn được giải thích theo ma trận.

**Tính cách:** mạch lạc, khích lệ, khoa học.

### Brand Voice
Tiêu đề nói ngắn, có động từ và hướng hành động. CTA cụ thể, không dùng lời mời sáo rỗng. Microcopy bình tĩnh, chỉ dẫn từng bước.

- “Chọn một chủ đề. Đo đúng mức hiểu của mình.”
- “Nộp bài để xem điểm và biết mình cần ôn phần nào.”

### Wordmark & Logo
Biểu tượng là một chiếc lá kết hợp vòng nhân tế bào và hình quyển sách mở, dùng độc lập ở header và favicon. Tên thương hiệu hiển thị bằng DM Serif Display, không dùng logo chữ mặc định.

### Signature Brand Color
**Coral Lab — #E97A5F**, dùng tiết chế cho CTA, điểm đánh dấu và trạng thái cần chú ý.

## Style Decisions
- Không dùng nền tím gradient, neon hoặc giao diện game hóa.
- Ưu tiên nền kem giấy, xanh rừng, teal và cam san hô.
- Dùng ảnh hero có vùng trống bên trái để bảo đảm độ tương phản cho tiêu đề.
- Mọi CSS/component mới phải tự hỏi: “Lựa chọn này củng cố hay làm loãng tinh thần phòng thí nghiệm giấy gấp?”
