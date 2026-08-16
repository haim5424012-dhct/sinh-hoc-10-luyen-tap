// Phong thí nghiệm giấy gấp: dữ liệu bài mẫu phải rõ chủ đề, mức độ và điểm để truy vết theo ma trận.
export type QuestionLevel = "Nhận biết" | "Thông hiểu" | "Vận dụng";

export type Question = {
  id: string;
  topic: string;
  level: QuestionLevel;
  points: number;
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
};

export const matrix = [
  { topic: "Thành phần hóa học của tế bào", nb: 2, th: 1, vd: 0, total: 3 },
  { topic: "Cấu trúc tế bào", nb: 2, th: 1, vd: 1, total: 4 },
  { topic: "Chuyển hóa vật chất", nb: 1, th: 1, vd: 1, total: 3 },
];

export const sampleExam = {
  id: "de-mau-01",
  title: "Đề mẫu 01 · Nền tảng tế bào",
  subtitle: "12 câu · 10 phút · Chấm theo ma trận",
  questions: [
    {
      id: "q1", topic: "Thành phần hóa học của tế bào", level: "Nhận biết", points: 1,
      prompt: "Đơn phân cấu tạo nên phân tử DNA là gì?",
      options: ["Axit amin", "Nucleotide", "Glucose", "Glycerol"], answer: 1,
      explanation: "DNA được cấu tạo từ các nucleotide; mỗi nucleotide gồm đường deoxyribose, nhóm phosphate và base nitrogen.",
    },
    {
      id: "q2", topic: "Thành phần hóa học của tế bào", level: "Nhận biết", points: 1,
      prompt: "Nguyên tố nào thường chiếm tỉ lệ lớn nhất trong khối lượng khô của tế bào?",
      options: ["Carbon", "Calcium", "Sodium", "Iron"], answer: 0,
      explanation: "Carbon có khả năng tạo nhiều liên kết bền, là bộ khung của phần lớn hợp chất hữu cơ trong tế bào.",
    },
    {
      id: "q3", topic: "Thành phần hóa học của tế bào", level: "Thông hiểu", points: 1,
      prompt: "Vì sao nước có vai trò quan trọng đối với tế bào?",
      options: ["Vì nước không hòa tan chất nào", "Vì nước là dung môi và tham gia nhiều phản ứng", "Vì nước luôn ở trạng thái rắn", "Vì nước chỉ có ở tế bào động vật"], answer: 1,
      explanation: "Nước là dung môi phân cực, giúp vận chuyển chất và trực tiếp tham gia nhiều phản ứng chuyển hóa.",
    },
    {
      id: "q4", topic: "Cấu trúc tế bào", level: "Nhận biết", points: 1,
      prompt: "Bào quan nào là nơi tổng hợp protein?",
      options: ["Ribosome", "Lysosome", "Không bào", "Golgi"], answer: 0,
      explanation: "Ribosome là bào quan trực tiếp đọc mRNA và liên kết các axit amin thành chuỗi polypeptide.",
    },
    {
      id: "q5", topic: "Cấu trúc tế bào", level: "Nhận biết", points: 1,
      prompt: "Màng sinh chất có cấu trúc cơ bản là",
      options: ["Một lớp cellulose", "Lớp kép phospholipid và protein", "Một lớp DNA", "Lớp kép tinh bột"], answer: 1,
      explanation: "Màng sinh chất gồm lớp kép phospholipid xen kẽ protein, tạo tính khảm động và tính thấm chọn lọc.",
    },
    {
      id: "q6", topic: "Cấu trúc tế bào", level: "Thông hiểu", points: 1,
      prompt: "Tế bào nhân sơ khác tế bào nhân thực chủ yếu ở điểm nào?",
      options: ["Không có ribosome", "Không có màng sinh chất", "Chưa có nhân được màng bao bọc", "Không có vật chất di truyền"], answer: 2,
      explanation: "Tế bào nhân sơ không có nhân hoàn chỉnh; DNA nằm ở vùng nhân và không được bao bởi màng nhân.",
    },
    {
      id: "q7", topic: "Cấu trúc tế bào", level: "Vận dụng", points: 1,
      prompt: "Một tế bào bị tổn thương lysosome. Chức năng nào bị ảnh hưởng rõ nhất?",
      options: ["Phân giải các đại phân tử và bào quan già", "Tổng hợp ATP", "Sao chép DNA", "Tổng hợp cellulose"], answer: 0,
      explanation: "Lysosome chứa enzyme thủy phân, đảm nhiệm tiêu hóa nội bào và tái chế các thành phần hỏng.",
    },
    {
      id: "q8", topic: "Chuyển hóa vật chất", level: "Nhận biết", points: 1,
      prompt: "ATP được xem là",
      options: ["Vật chất di truyền", "Đồng tiền năng lượng của tế bào", "Enzyme tiêu hóa", "Sắc tố quang hợp"], answer: 1,
      explanation: "ATP tích lũy và cung cấp năng lượng trực tiếp cho nhiều hoạt động sống của tế bào.",
    },
    {
      id: "q9", topic: "Chuyển hóa vật chất", level: "Thông hiểu", points: 1,
      prompt: "Enzyme làm tăng tốc độ phản ứng bằng cách",
      options: ["Tăng năng lượng hoạt hóa", "Giảm năng lượng hoạt hóa", "Làm phản ứng đổi sản phẩm", "Bị tiêu hao hoàn toàn"], answer: 1,
      explanation: "Enzyme tạo phức hợp enzyme–cơ chất và làm giảm năng lượng hoạt hóa, nhờ đó phản ứng diễn ra nhanh hơn.",
    },
    {
      id: "q10", topic: "Chuyển hóa vật chất", level: "Vận dụng", points: 1,
      prompt: "Nếu nhiệt độ vượt quá ngưỡng thích hợp, hoạt tính của nhiều enzyme giảm vì",
      options: ["Cơ chất biến thành nước", "Enzyme bị biến tính làm thay đổi trung tâm hoạt động", "ATP tăng vô hạn", "Màng tế bào dày lên"], answer: 1,
      explanation: "Nhiệt độ quá cao phá vỡ liên kết duy trì cấu trúc không gian của enzyme, làm biến đổi trung tâm hoạt động.",
    },
  ] satisfies Question[],
};
