// Phong thí nghiệm giấy gấp: đề thử được trích từ ngân hàng DOCX người dùng gửi; mỗi câu có chủ đề, dạng, đáp án và nguồn truy vết.
export type QuestionLevel = "Nhận biết" | "Thông hiểu" | "Vận dụng";
export type MCQuestion = { id: string; topic: string; level: QuestionLevel; prompt: string; options: string[]; answer: number; explanation: string; source: string };
export type TFQuestion = { id: string; topic: string; prompt: string; statements: { text: string; answer: boolean; explanation: string }[]; source: string };

export const studentIds = Array.from({ length: 45 }, (_, index) => `HS${String(index + 1).padStart(3, "0")}`);

export const matrix = [
  { topic: "Các cấp độ tổ chức của thế giới sống", nb: 5, th: 3, vd: 0, total: 8, mc: 8, tf: 0, points: 2 },
  { topic: "Khái quát về tế bào", nb: 4, th: 4, vd: 0, total: 8, mc: 8, tf: 0, points: 2 },
  { topic: "Nguyên tố hóa học và nước", nb: 4, th: 3, vd: 1, total: 8, mc: 8, tf: 0, points: 2 },
  { topic: "Các phân tử sinh học trong tế bào", nb: 3, th: 4, vd: 1, total: 8, mc: 8, tf: 2, points: 4 },
];

export const specificationTable = [
  { topic: "Các cấp độ tổ chức của thế giới sống", knowledge: "Đặc trưng sống; cấp tổ chức; hệ mở", nb: "Nhận diện cấp tổ chức, tế bào, quần xã", th: "Giải thích thứ bậc và hệ mở", vd: "—", form: "8 MC", points: 2 },
  { topic: "Khái quát về tế bào", knowledge: "Lịch sử và học thuyết tế bào", nb: "Nhận biết nhà khoa học, khái niệm", th: "Giải thích đơn vị cấu trúc/chức năng", vd: "—", form: "8 MC", points: 2 },
  { topic: "Nguyên tố hóa học và nước", knowledge: "C, H, O, N; nước; nguyên tố vi lượng", nb: "Nhận biết thành phần và liên kết", th: "Giải thích tính phân cực, vai trò nước", vd: "Liên hệ iod và hormone", form: "8 MC", points: 2 },
  { topic: "Các phân tử sinh học trong tế bào", knowledge: "Carbohydrate, lipid, protein, DNA", nb: "Nhận biết đơn phân, liên kết, cấu tạo", th: "Giải thích chức năng và cấu trúc", vd: "Suy luận từ đặc điểm phân tử", form: "8 MC + 2 Đ/S", points: 4 },
];

export const sampleExam = {
  id: "de-on-tap-01",
  title: "Đề ôn tập 01 · Sinh học 10",
  subtitle: "32 câu nhiều lựa chọn + 2 câu đúng–sai · 10 điểm",
  mcPoints: 8,
  tfPoints: 2,
  questions: [
    { id: "mc1", topic: "Các cấp độ tổ chức của thế giới sống", level: "Nhận biết", prompt: "Cấp độ tổ chức nhỏ nhất trong cấp độ tổ chức sống là gì?", options: ["Nguyên tử", "Phân tử", "Tế bào", "Hợp tử"], answer: 2, explanation: "Tế bào là đơn vị tổ chức cơ sở của mọi sinh vật.", source: "NHCHKTGKI, Bài 3, Câu 3" },
    { id: "mc2", topic: "Các cấp độ tổ chức của thế giới sống", level: "Nhận biết", prompt: "Trong các cấp độ sau đây, cấp độ nào là lớn nhất?", options: ["Tế bào", "Quần xã", "Quần thể", "Bào quan"], answer: 1, explanation: "Quần xã bao gồm nhiều quần thể thuộc các loài khác nhau cùng sống trong một khu vực.", source: "NHCHKTGKI, Bài 3, Câu 4; Mã đề 101, Câu 1" },
    { id: "mc3", topic: "Các cấp độ tổ chức của thế giới sống", level: "Nhận biết", prompt: "Tổ chức sống nào sau đây là bào quan?", options: ["Tim", "Phổi", "Lục lạp", "Não"], answer: 2, explanation: "Lục lạp là bào quan có ở tế bào thực vật và tảo.", source: "NHCHKTGKI, Bài 3, Câu 5" },
    { id: "mc4", topic: "Các cấp độ tổ chức của thế giới sống", level: "Thông hiểu", prompt: "Các cấp tổ chức cơ bản theo thứ tự đúng là", options: ["Tế bào, cơ thể, quần xã, quần thể, hệ sinh thái", "Tế bào, quần thể, cơ thể, quần xã, hệ sinh thái", "Tế bào, cơ thể, quần thể, quần xã, hệ sinh thái", "Cơ thể, quần thể, quần xã, tế bào, hệ sinh thái"], answer: 2, explanation: "Trình tự từ thấp đến cao là tế bào, cơ thể, quần thể, quần xã, hệ sinh thái.", source: "NHCHKTGKI, Bài 3, Câu 6" },
    { id: "mc5", topic: "Các cấp độ tổ chức của thế giới sống", level: "Nhận biết", prompt: "Đơn vị tổ chức cơ sở của mọi sinh vật là", options: ["Các đại phân tử", "Tế bào", "Mô", "Cơ quan"], answer: 1, explanation: "Mọi sinh vật đều được cấu tạo từ một hoặc nhiều tế bào.", source: "NHCHKTGKI, Bài 3, Câu 7" },
    { id: "mc6", topic: "Các cấp độ tổ chức của thế giới sống", level: "Thông hiểu", prompt: "Căn cứ chủ yếu để coi tế bào là đơn vị cơ bản của sự sống là vì chúng", options: ["Có cấu tạo phức tạp", "Có cấu tạo đơn giản", "Được cấu tạo bởi nhiều bào quan", "Biểu hiện đầy đủ các đặc tính của sự sống"], answer: 3, explanation: "Tế bào có thể thực hiện đầy đủ các hoạt động sống cơ bản.", source: "NHCHKTGKI, Bài 3, Câu 8" },
    { id: "mc7", topic: "Các cấp độ tổ chức của thế giới sống", level: "Thông hiểu", prompt: "Quần xã sinh vật là", options: ["Tập hợp nhiều quần thể của các loài khác nhau", "Tập hợp nhiều quần thể cùng loài", "Tập hợp các cá thể cùng loài", "Tập hợp cá thể của hai loài sống ở hai nơi"], answer: 0, explanation: "Quần xã gồm nhiều quần thể thuộc các loài khác nhau cùng tồn tại trong một không gian.", source: "NHCHKTGKI, Bài 3, Câu 10" },
    { id: "mc8", topic: "Các cấp độ tổ chức của thế giới sống", level: "Thông hiểu", prompt: "Các cấp tổ chức của thế giới sống đều là những hệ mở vì", options: ["Có khả năng thích nghi với môi trường", "Thường xuyên trao đổi chất với môi trường", "Có khả năng sinh sản để duy trì nòi giống", "Phát triển và tiến hóa không ngừng"], answer: 1, explanation: "Hệ mở luôn trao đổi vật chất và năng lượng với môi trường.", source: "NHCHKTGKI, Bài 3, Câu 25" },

    { id: "mc9", topic: "Khái quát về tế bào", level: "Nhận biết", prompt: "Người đã sử dụng kính hiển vi quang học để quan sát các lát mỏng từ vỏ bần của cây sồi là", options: ["Robert Hooke", "Leeuwenhoek", "Theodor Schwann", "Matthias Schleiden"], answer: 0, explanation: "Robert Hooke quan sát các lát vỏ bần và đặt tên cho các khoang nhỏ là tế bào.", source: "NHCHKTGKI, Bài 4, Câu 1" },
    { id: "mc10", topic: "Khái quát về tế bào", level: "Nhận biết", prompt: "Ai là người đầu tiên quan sát thấy vi khuẩn?", options: ["Robert Hooke", "Leeuwenhoek", "Theodor Schwann", "Matthias Schleiden"], answer: 1, explanation: "Antonie van Leeuwenhoek là người đầu tiên quan sát vi khuẩn bằng kính hiển vi.", source: "NHCHKTGKI, Bài 4, Câu 2" },
    { id: "mc11", topic: "Khái quát về tế bào", level: "Nhận biết", prompt: "Ai là người đưa ra báo cáo rằng tất cả các tế bào đều đến từ các tế bào đã tồn tại từ trước?", options: ["Antonie van Leeuwenhoek", "Matthias Schleiden", "Rudolf Virchow", "Theodor Schwann"], answer: 2, explanation: "Rudolf Virchow bổ sung luận điểm tế bào chỉ sinh ra từ tế bào có trước.", source: "NHCHKTGKI, Bài 4, Câu 3" },
    { id: "mc12", topic: "Khái quát về tế bào", level: "Nhận biết", prompt: "Nhà khoa học nào đã xây dựng học thuyết tế bào?", options: ["Schleiden và Schwann", "Rudolf Virchow", "Robert Koch", "Antony van Leeuwenhoek"], answer: 0, explanation: "Schleiden và Schwann đề xuất các luận điểm cốt lõi ban đầu của học thuyết tế bào.", source: "NHCHKTGKI, Bài 4, Câu 4" },
    { id: "mc13", topic: "Khái quát về tế bào", level: "Nhận biết", prompt: "Cấp độ tổ chức cơ bản nhất của cơ thể là", options: ["Tế bào", "Cơ quan", "Cơ thể", "Hệ cơ quan"], answer: 0, explanation: "Tế bào là đơn vị cấu trúc và chức năng cơ bản nhất của cơ thể.", source: "NHCHKTGKI, Bài 4, Câu 7" },
    { id: "mc14", topic: "Khái quát về tế bào", level: "Thông hiểu", prompt: "Tại sao nói tế bào là đơn vị cấu trúc và chức năng của cơ thể người?", options: ["Một số cơ quan được cấu tạo bởi tế bào", "Các hoạt động sống của tế bào là cơ sở cho hoạt động sống của cơ thể", "Khi toàn bộ tế bào chết thì cơ thể vẫn hoạt động bình thường", "Cơ thể sống chỉ có một tế bào thực hiện mọi chức năng"], answer: 1, explanation: "Hoạt động của cơ thể được hình thành từ hoạt động và sự phối hợp của các tế bào.", source: "NHCHKTGKI, Bài 4, Câu 13" },
    { id: "mc15", topic: "Khái quát về tế bào", level: "Thông hiểu", prompt: "Điều nào dưới đây là sai khi nói về tế bào?", options: ["Tế bào là đơn vị cấu tạo cơ bản của sự sống", "Tế bào là đơn vị chức năng của cơ thể sống", "Tế bào được cấu tạo từ các mô", "Tế bào được cấu tạo từ các phân tử, đại phân tử và bào quan"], answer: 2, explanation: "Mô được cấu tạo từ nhiều tế bào, không phải tế bào được cấu tạo từ mô.", source: "NHCHKTGKI, Bài 4, Câu 14" },
    { id: "mc16", topic: "Khái quát về tế bào", level: "Thông hiểu", prompt: "Sinh vật có cơ thể được cấu tạo từ nhiều tế bào gọi là", options: ["Sinh vật đa bào", "Sinh vật đơn bào", "Sinh vật kí sinh", "Sinh vật ngoại sinh"], answer: 0, explanation: "Sinh vật đa bào có cơ thể gồm nhiều tế bào thường được chuyên hóa và phối hợp.", source: "NHCHKTGKI, Bài 4, Câu 19" },

    { id: "mc17", topic: "Nguyên tố hóa học và nước", level: "Nhận biết", prompt: "Trong các cơ thể sống, thành phần chủ yếu là", options: ["Chất hữu cơ", "Chất vô cơ", "Nước", "Vitamin"], answer: 2, explanation: "Nước thường chiếm tỉ lệ lớn trong khối lượng cơ thể sống.", source: "NHCHKTGKI, Bài 5, Câu 1" },
    { id: "mc18", topic: "Nguyên tố hóa học và nước", level: "Nhận biết", prompt: "Nhóm nguyên tố chiếm số lượng chất khô nhiều nhất là", options: ["C, H, O, N", "Ca, Na, K, Fe", "Cu, Zn, Mn, Co", "Cl, I, F, Br"], answer: 0, explanation: "C, H, O, N là nhóm nguyên tố chủ yếu cấu tạo chất hữu cơ của tế bào.", source: "NHCHKTGKI, Bài 5, Câu 3" },
    { id: "mc19", topic: "Nguyên tố hóa học và nước", level: "Nhận biết", prompt: "Nguyên tố hóa học tạo nên sự đa dạng của các hợp chất hữu cơ là", options: ["Carbon", "Oxygen", "Hydrogen", "Nitrogen"], answer: 0, explanation: "Carbon có bốn electron hóa trị và tạo được nhiều dạng mạch, làm cơ sở cho sự đa dạng hợp chất hữu cơ.", source: "NHCHKTGKI, Bài 5, Câu 5" },
    { id: "mc20", topic: "Nguyên tố hóa học và nước", level: "Nhận biết", prompt: "Liên kết hóa học giữa các nguyên tử trong phân tử nước là", options: ["Liên kết cộng hóa trị", "Liên kết hydrogen", "Liên kết ion", "Liên kết phosphodiester"], answer: 0, explanation: "Các nguyên tử H và O trong một phân tử nước liên kết với nhau bằng liên kết cộng hóa trị phân cực.", source: "NHCHKTGKI, Bài 5, Câu 6" },
    { id: "mc21", topic: "Nguyên tố hóa học và nước", level: "Thông hiểu", prompt: "Khi tìm kiếm sự sống ngoài Trái Đất, trước tiên các nhà khoa học thường tìm kiếm yếu tố nào?", options: ["Hydrogen", "Oxygen", "Carbon", "Nước"], answer: 3, explanation: "Nước là dung môi và môi trường quan trọng cho các phản ứng sống.", source: "NHCHKTGKI, Bài 5, Câu 7" },
    { id: "mc22", topic: "Nguyên tố hóa học và nước", level: "Thông hiểu", prompt: "Ý nào không đúng khi nói về vai trò của nước?", options: ["Nước luôn làm giảm nhiệt độ tế bào", "Nước chiếm phần lớn khối lượng cơ thể", "Nước giúp vận chuyển các chất", "Nước là môi trường trao đổi chất"], answer: 0, explanation: "Nước góp phần điều hòa nhiệt độ nhưng không phải lúc nào cũng làm giảm nhiệt độ tế bào.", source: "NHCHKTGKI, Bài 5, Câu 8" },
    { id: "mc23", topic: "Nguyên tố hóa học và nước", level: "Thông hiểu", prompt: "Nước là dung môi hòa tan nhiều chất trong cơ thể sống vì có", options: ["Nhiệt dung riêng cao", "Lực gắn kết", "Nhiệt bay hơi cao", "Tính phân cực"], answer: 3, explanation: "Tính phân cực giúp nước hòa tan nhiều chất phân cực và ion.", source: "NHCHKTGKI, Bài 5, Câu 11" },
    { id: "mc24", topic: "Nguyên tố hóa học và nước", level: "Vận dụng", prompt: "Iod là nguyên tố vi lượng tham gia vào thành phần hormone của", options: ["Tuyến thượng thận", "Tuyến yên", "Tuyến tụy", "Tuyến giáp"], answer: 3, explanation: "Iod là thành phần quan trọng để tuyến giáp tổng hợp hormone thyroxine.", source: "NHCHKTGKI, Bài 5, Câu 14" },

    { id: "mc25", topic: "Các phân tử sinh học trong tế bào", level: "Nhận biết", prompt: "Các nguyên tố hóa học cấu tạo nên carbohydrate là", options: ["Carbon và hydrogen", "Hydrogen và oxygen", "Oxygen và carbon", "Carbon, hydrogen và oxygen"], answer: 3, explanation: "Carbohydrate chủ yếu được cấu tạo từ C, H và O.", source: "NHCHKTGKI, Bài 6, Câu 1" },
    { id: "mc26", topic: "Các phân tử sinh học trong tế bào", level: "Nhận biết", prompt: "Chất nào dưới đây thuộc loại đường polysaccharide?", options: ["Maltose", "Disaccharide", "Tinh bột", "Hexose"], answer: 2, explanation: "Tinh bột là polysaccharide được tạo từ nhiều đơn phân glucose.", source: "NHCHKTGKI, Bài 6, Câu 2" },
    { id: "mc27", topic: "Các phân tử sinh học trong tế bào", level: "Nhận biết", prompt: "Khi phân giải phân tử đường lactose, có thể thu được", options: ["Hai phân tử glucose", "Một phân tử glucose và một phân tử galactose", "Hai phân tử pentose", "Một phân tử maltose và một phân tử galactose"], answer: 1, explanation: "Lactose là đường đôi gồm glucose và galactose.", source: "NHCHKTGKI, Bài 6, Câu 5" },
    { id: "mc28", topic: "Các phân tử sinh học trong tế bào", level: "Thông hiểu", prompt: "Trong cấu tạo tế bào, đường cellulose tập trung ở", options: ["Chất nguyên sinh", "Nhân tế bào", "Thành tế bào", "Màng nhân"], answer: 2, explanation: "Cellulose là thành phần chủ yếu của thành tế bào thực vật.", source: "NHCHKTGKI, Bài 6, Câu 8" },
    { id: "mc29", topic: "Các phân tử sinh học trong tế bào", level: "Thông hiểu", prompt: "Phospholipid có chức năng chủ yếu là", options: ["Tham gia cấu tạo nhân tế bào", "Là thành phần cấu tạo của màng tế bào", "Là thành phần của máu ở động vật", "Cấu tạo nên chất diệp lục ở lá cây"], answer: 1, explanation: "Lớp kép phospholipid là nền tảng cấu trúc của màng sinh chất.", source: "NHCHKTGKI, Bài 6, Câu 12" },
    { id: "mc30", topic: "Các phân tử sinh học trong tế bào", level: "Nhận biết", prompt: "Đơn phân của protein là", options: ["Nucleosome", "Amino acid", "Nucleotide", "Acid béo"], answer: 1, explanation: "Protein được cấu tạo từ các đơn phân amino acid liên kết với nhau bằng liên kết peptide.", source: "NHCHKTGKI, Bài 6, Câu 1 phần protein" },
    { id: "mc31", topic: "Các phân tử sinh học trong tế bào", level: "Thông hiểu", prompt: "Liên kết hóa học chủ yếu giữa các amino acid trong phân tử protein là", options: ["Liên kết hóa trị", "Liên kết hydrogen", "Liên kết disulfide", "Liên kết peptide"], answer: 3, explanation: "Các amino acid nối với nhau trong chuỗi polypeptide bằng liên kết peptide.", source: "NHCHKTGKI, Bài 6, Câu 4 phần protein" },
    { id: "mc32", topic: "Các phân tử sinh học trong tế bào", level: "Vận dụng", prompt: "Tính đa dạng và đặc thù của protein chủ yếu thể hiện ở", options: ["Nhóm amino và nhóm carboxyl", "Nhóm R của amino acid", "Các loại liên kết trong protein", "Số lượng, thành phần và trật tự sắp xếp các amino acid"], answer: 3, explanation: "Trình tự amino acid quy định cấu trúc không gian và chức năng đặc thù của protein.", source: "NHCHKTGKI, Bài 6, Câu 5 phần protein" },
  ] satisfies MCQuestion[],
  trueFalse: [
    { id: "tf1", topic: "Các phân tử sinh học trong tế bào", prompt: "Cho các phát biểu về DNA. Mỗi nhận định sau là Đúng hay Sai?", source: "NHCHKTGKI, Mục Câu hỏi đúng–sai, Câu 1", statements: [
      { text: "DNA mang, bảo quản và truyền đạt thông tin di truyền.", answer: true, explanation: "Đây là các chức năng cơ bản của DNA." },
      { text: "Nhờ cấu trúc hóa học đặc biệt, DNA được nhân lên và truyền lại cho tế bào con gần như nguyên vẹn về số lượng và chất lượng.", answer: true, explanation: "Nguyên tắc bổ sung giúp DNA tự nhân đôi và truyền đạt thông tin ổn định." },
      { text: "So với protein, DNA có ít chức năng hơn nhiều; nguyên nhân là do cấu trúc của các phân tử DNA.", answer: true, explanation: "Protein đảm nhiệm đa dạng chức năng trực tiếp hơn, còn DNA chủ yếu lưu giữ và truyền đạt thông tin di truyền." },
      { text: "DNA được cấu tạo từ hai chuỗi polynucleotide ngược chiều nhau bằng các liên kết hydrogen theo nguyên tắc bổ sung.", answer: true, explanation: "Hai mạch DNA chạy ngược chiều và liên kết bổ sung giữa các base." },
    ] },
    { id: "tf2", topic: "Các phân tử sinh học trong tế bào", prompt: "Cho các phát biểu về DNA. Mỗi nhận định sau là Đúng hay Sai?", source: "NHCHKTGKI, Mục Câu hỏi đúng–sai, Câu 3", statements: [
      { text: "DNA được cấu tạo từ hai mạch đơn liên kết bổ sung bằng các liên kết hydrogen nên phân tử khá bền vững.", answer: true, explanation: "Cấu trúc hai mạch và liên kết hydrogen góp phần tạo độ bền cho DNA." },
      { text: "Ở sinh vật nhân sơ, DNA mạch kép có cấu trúc mạch vòng; hệ gene thường gồm một phân tử lớn và có thể có plasmid.", answer: true, explanation: "Đây là đặc điểm điển hình của DNA ở sinh vật nhân sơ." },
      { text: "DNA mạch kép ở sinh vật nhân thực hầu hết có cấu trúc không vòng, một số ít có cấu trúc mạch vòng nhỏ.", answer: true, explanation: "DNA trong nhân thường dạng thẳng; DNA ở một số bào quan có thể dạng vòng." },
      { text: "Số lượng phân tử DNA và trình tự nucleotide trong mỗi phân tử DNA không đặc trưng cho từng loài.", answer: false, explanation: "Số lượng và trình tự nucleotide có tính đặc trưng cho từng loài." },
    ] },
  ] satisfies TFQuestion[],
};

export type ExamVariant = Omit<typeof sampleExam, "questions" | "trueFalse" | "id"> & {
  id: string;
  code: string;
  questions: MCQuestion[];
  trueFalse: TFQuestion[];
};

function seededRandom(seed: number) {
  let state = seed >>> 0;
  return () => {
    state += 0x6D2B79F5;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle<T>(items: T[], random: () => number) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function buildExamVariant(code: string): ExamVariant {
  const normalized = /^(10[1-9])$/.test(code) ? code : "101";
  const random = seededRandom(Number(normalized) * 7919);
  const questions = seededShuffle(sampleExam.questions, random).map((question) => {
    const optionOrder = seededShuffle(question.options.map((_, index) => index), random);
    return {
      ...question,
      options: optionOrder.map((index) => question.options[index]),
      answer: optionOrder.indexOf(question.answer),
    };
  });
  const trueFalse = seededShuffle(sampleExam.trueFalse, random).map((question) => ({
    ...question,
    statements: seededShuffle(question.statements, random),
  }));
  return { ...sampleExam, id: `ma-de-${normalized}`, code: normalized, questions, trueFalse };
}

export const totalItems = sampleExam.questions.length + sampleExam.trueFalse.length;
export const totalPoints = sampleExam.mcPoints + sampleExam.tfPoints;
