import { Question } from '../types';

export const QUESTIONS_BANK: Question[] = [
  // --- PART I: READING COMPREHENSION & VOCABULARY ---
  {
    id: 1,
    code: "Part I - Q1",
    question: "What are the speakers mainly talking about in the Getting Started conversation?",
    category: "reading_vocab",
    categoryName: "Part I: Đọc hiểu & Từ vựng (Getting Started)",
    level: "thong_hieu",
    options: [
      { key: "A", text: "A famous pop star's latest concert" },
      { key: "B", text: "A prominent historical figure they admire for a school project" },
      { key: "C", text: "Their upcoming summer holiday plans" },
      { key: "D", text: "A scientific discovery in space exploration" }
    ],
    correctAnswer: "B",
    correctAnswerText: "A prominent historical figure they admire for a school project",
    explanation: "Trong bài đối thoại Getting Started, hai bạn học sinh đang thảo luận về một nhân vật lịch sử lỗi lạc mà các bạn ngưỡng mộ để chuẩn bị cho dự án học tập trên lớp."
  },
  {
    id: 2,
    code: "Part I - Q2",
    question: "In the dialogue, which word is closest in meaning to \"admire\" when talking about historical heroes?",
    category: "reading_vocab",
    categoryName: "Part I: Đọc hiểu & Từ vựng (Getting Started)",
    level: "nhan_biet",
    options: [
      { key: "A", text: "Look down on" },
      { key: "B", text: "Look up to" },
      { key: "C", text: "Look out for" },
      { key: "D", text: "Look back on" }
    ],
    correctAnswer: "B",
    correctAnswerText: "Look up to",
    explanation: "\"Look up to\" đồng nghĩa với \"admire\" (ngưỡng mộ, tôn kính). Trái nghĩa là \"look down on\" (coi thường)."
  },
  {
    id: 3,
    code: "Part I - Q3",
    question: "Fill in the blank with a suitable word from the unit: \"General Vo Nguyen Giap left a remarkable ________ in Vietnamese military history.\"",
    category: "reading_vocab",
    categoryName: "Part I: Đọc hiểu & Từ vựng (Getting Started)",
    level: "nhan_biet",
    options: [
      { key: "A", text: "legacy" },
      { key: "B", text: "baggage" },
      { key: "C", text: "luggage" },
      { key: "D", text: "passage" }
    ],
    correctAnswer: "A",
    correctAnswerText: "legacy",
    explanation: "\"Legacy\" mang nghĩa là di sản (tinh thần, lịch sử). Đại tướng Võ Nguyên Giáp đã để lại một di sản lẫy lừng trong lịch sử quân sự Việt Nam."
  },
  {
    id: 4,
    code: "Part I - Q4",
    question: "Which of the following adjectives best describes a person who is famous and important, often mentioned in Unit 1?",
    category: "reading_vocab",
    categoryName: "Part I: Đọc hiểu & Từ vựng (Getting Started)",
    level: "nhan_biet",
    options: [
      { key: "A", text: "Ordinary" },
      { key: "B", text: "Prominent" },
      { key: "C", text: "Unknown" },
      { key: "D", text: "Careless" }
    ],
    correctAnswer: "B",
    correctAnswerText: "Prominent",
    explanation: "\"Prominent\" = nổi bật, kiệt xuất, lỗi lạc (famous and important). Các từ còn lại: Ordinary (bình thường), Unknown (vô danh), Careless (bất cẩn)."
  },
  {
    id: 5,
    code: "Part I - Q5",
    question: "What does the phrase \"devote one's life to something\" mean in the context of learning about national heroes?",
    category: "reading_vocab",
    categoryName: "Part I: Đọc hiểu & Từ vựng (Getting Started)",
    level: "thong_hieu",
    options: [
      { key: "A", text: "To spend all one's time and effort working for a cause or purpose" },
      { key: "B", text: "To waste time on unimportant hobbies" },
      { key: "C", text: "To change career paths frequently throughout life" },
      { key: "D", text: "To travel around the world for pleasure" }
    ],
    correctAnswer: "A",
    correctAnswerText: "To spend all one's time and effort working for a cause or purpose",
    explanation: "\"Devote one's life to something\" nghĩa là cống hiến trọn vẹn cuộc đời, thời gian và tâm huyết cho một lý tưởng, sự nghiệp cao đẹp."
  },

  // --- PART II: GRAMMAR FOCUS ---
  {
    id: 6,
    code: "Part II - Q6",
    question: "Choose the correct option: \"While the students ________ about Uncle Ho's early life, the teacher showed them some old photographs.\"",
    category: "grammar_rules",
    categoryName: "Part II: Ngữ pháp Trọng tâm (Past Simple & Continuous)",
    level: "thong_hieu",
    options: [
      { key: "A", text: "talked" },
      { key: "B", text: "were talking" },
      { key: "C", text: "are talking" },
      { key: "D", text: "have talked" }
    ],
    correctAnswer: "B",
    correctAnswerText: "were talking",
    explanation: "Hành động học sinh đang nói chuyện kéo dài trong quá khứ sau liên từ \"While\" dùng thì Quá khứ tiếp diễn (were talking); hành động giáo viên cho xem ảnh xen vào dùng Quá khứ đơn (showed)."
  },
  {
    id: 7,
    code: "Part II - Q7",
    question: "Identify the mistake in the following sentence: \"When President Ho Chi Minh was living abroad, he work tirelessly to find a way to save the country.\"",
    category: "grammar_rules",
    categoryName: "Part II: Ngữ pháp Trọng tâm (Past Simple & Continuous)",
    level: "thong_hieu",
    options: [
      { key: "A", text: "was living" },
      { key: "B", text: "abroad" },
      { key: "C", text: "work" },
      { key: "D", text: "to save" }
    ],
    correctAnswer: "C",
    correctAnswerText: "work (sửa thành worked)",
    explanation: "Mệnh đề chỉ sự việc đã xảy ra trong quá khứ nên động từ \"work\" phải chia ở thì Quá khứ đơn thành \"worked\"."
  },
  {
    id: 8,
    code: "Part II - Q8",
    question: "Combine the clauses logically: \"The historian was researching archives ________ he discovered a collection of valuable letters.\"",
    category: "grammar_rules",
    categoryName: "Part II: Ngữ pháp Trọng tâm (Past Simple & Continuous)",
    level: "thong_hieu",
    options: [
      { key: "A", text: "while" },
      { key: "B", text: "during" },
      { key: "C", text: "when" },
      { key: "D", text: "until" }
    ],
    correctAnswer: "C",
    correctAnswerText: "when",
    explanation: "Cấu trúc: Past Continuous + WHEN + Past Simple. Mệnh đề sau là hành động xen ngang tức thời (discovered a collection), do đó chọn \"when\"."
  },
  {
    id: 9,
    code: "Part II - Q9",
    question: "Which sentence correctly demonstrates the combination of the Past Simple and Past Continuous tenses?",
    category: "grammar_rules",
    categoryName: "Part II: Ngữ pháp Trọng tâm (Past Simple & Continuous)",
    level: "van_dung",
    options: [
      { key: "A", text: "While I walked to school, it started to rain." },
      { key: "B", text: "While I was walking to school, it started to rain." },
      { key: "C", text: "While I was walking to school, it was starting to rain." },
      { key: "D", text: "While I walked to school, it was starting to rain." }
    ],
    correctAnswer: "B",
    correctAnswerText: "While I was walking to school, it started to rain.",
    explanation: "Hành động đi bộ tới trường là hành động dài đang diễn ra (was walking), trời đổ mưa là hành động ngắn bất chợt xen vào (started)."
  },
  {
    id: 10,
    code: "Part II - Q10",
    question: "Complete the sentence with the correct form of the verbs in brackets: \"When the bell (ring) ________, the students (listen) ________ to a presentation about a national hero.\"",
    category: "grammar_rules",
    categoryName: "Part II: Ngữ pháp Trọng tâm (Past Simple & Continuous)",
    level: "van_dung",
    options: [
      { key: "A", text: "rang / were listening" },
      { key: "B", text: "was ringing / listened" },
      { key: "C", text: "rang / listened" },
      { key: "D", text: "was ringing / were listening" }
    ],
    correctAnswer: "A",
    correctAnswerText: "rang / were listening",
    explanation: "Chuông reo (rang - Past Simple) là hành động bất chợt xen vào khi các bạn học sinh đang lắng nghe bài thuyết trình (were listening - Past Continuous)."
  },

  // --- VOCABULARY & COLLOCATIONS ---
  {
    id: 11,
    code: "Vocab - Q26",
    question: "A theme ____________ dedicated to war heroes was built to teach children about their country’s history.",
    category: "reading_vocab",
    categoryName: "Part I: Đọc hiểu & Từ vựng (Getting Started)",
    level: "nhan_biet",
    options: [
      { key: "A", text: "museum" },
      { key: "B", text: "exhibition" },
      { key: "C", text: "park" },
      { key: "D", text: "monument" }
    ],
    correctAnswer: "C",
    correctAnswerText: "park",
    explanation: "Cụm từ cố định: \"theme park\" = công viên chủ đề. Một công viên chủ đề tôn vinh các anh hùng chiến tranh đã được xây dựng để giáo dục lịch sử."
  },
  {
    id: 12,
    code: "Vocab - Q39",
    question: "The main ____________ in the story was inspired by a real – life resistance fighter.",
    category: "reading_vocab",
    categoryName: "Part I: Đọc hiểu & Từ vựng (Getting Started)",
    level: "nhan_biet",
    options: [
      { key: "A", text: "character" },
      { key: "B", text: "characterizes" },
      { key: "C", text: "characteristic" },
      { key: "D", text: "characterization" }
    ],
    correctAnswer: "A",
    correctAnswerText: "character",
    explanation: "Sau tính từ \"main\" cần danh từ chỉ người: \"main character\" = nhân vật chính trong câu chuyện."
  },
  {
    id: 13,
    code: "Vocab - Q65",
    question: "The nurse devoted her time to ____________ injured soldiers in the field hospital.",
    category: "reading_vocab",
    categoryName: "Part I: Đọc hiểu & Từ vựng (Getting Started)",
    level: "thong_hieu",
    options: [
      { key: "A", text: "take after" },
      { key: "B", text: "taking care of" },
      { key: "C", text: "break down" },
      { key: "D", text: "putting on" }
    ],
    correctAnswer: "B",
    correctAnswerText: "taking care of",
    explanation: "Cấu trúc: devote time to + V-ing/Noun (cống hiến thời gian để làm gì). Cụm từ \"taking care of\" nghĩa là chăm sóc các thương binh."
  },
  {
    id: 14,
    code: "Vocab - Q68",
    question: "The surgeon was famous ____________ her innovative techniques in treating battlefield injuries.",
    category: "reading_vocab",
    categoryName: "Part I: Đọc hiểu & Từ vựng (Getting Started)",
    level: "nhan_biet",
    options: [
      { key: "A", text: "for" },
      { key: "B", text: "about" },
      { key: "C", text: "to" },
      { key: "D", text: "with" }
    ],
    correctAnswer: "A",
    correctAnswerText: "for",
    explanation: "Cấu trúc tính từ đi kèm giới từ: \"famous for\" = nổi tiếng vì điều gì."
  },
  {
    id: 15,
    code: "Vocab - Q73",
    question: "Poets and musicians also took ____________ in inspiring the soldiers by creating works of art.",
    category: "reading_vocab",
    categoryName: "Part I: Đọc hiểu & Từ vựng (Getting Started)",
    level: "nhan_biet",
    options: [
      { key: "A", text: "part" },
      { key: "B", text: "a part" },
      { key: "C", text: "parts" },
      { key: "D", text: "the part" }
    ],
    correctAnswer: "A",
    correctAnswerText: "part",
    explanation: "Thành ngữ: \"take part in\" = tham gia vào việc truyền cảm hứng cho các chiến sĩ thông qua các tác phẩm nghệ thuật."
  },

  // --- EXERCISE 2: VERB FORM PRACTICE (QUESTIONS 1 TO 27) ---
  {
    id: 16,
    code: "Exercise 2 - Q1",
    question: "He ___________________________ (perform) surgery when the enemy _______________ (attack) the hospital.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "van_dung",
    options: [
      { key: "A", text: "was performing – attacked" },
      { key: "B", text: "performed – was attacking" },
      { key: "C", text: "was performing – was attacking" },
      { key: "D", text: "performed – attacked" }
    ],
    correctAnswer: "A",
    correctAnswerText: "was performing – attacked",
    explanation: "Bác sĩ đang tiến hành phẫu thuật (hành động đang diễn ra trong quá khứ - was performing) thì quân địch tấn công bệnh viện (hành động xen vào - attacked)."
  },
  {
    id: 17,
    code: "Exercise 2 - Q2",
    question: "I ___________________________ (read) the biography of a national hero when the power ______________ (go) out.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "van_dung",
    options: [
      { key: "A", text: "read – went" },
      { key: "B", text: "was reading – went" },
      { key: "C", text: "was reading – was going" },
      { key: "D", text: "read – was going" }
    ],
    correctAnswer: "B",
    correctAnswerText: "was reading – went",
    explanation: "Tôi đang đọc cuốn tiểu sử (was reading) thì điện bị cúp đột ngột (went out)."
  },
  {
    id: 18,
    code: "Exercise 2 - Q3",
    question: "The soldiers ___________________________ (resist) the enemy’s advances all day long.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "thong_hieu",
    options: [
      { key: "A", text: "were resisting" },
      { key: "B", text: "resisted" },
      { key: "C", text: "are resisting" },
      { key: "D", text: "have resisted" }
    ],
    correctAnswer: "A",
    correctAnswerText: "were resisting",
    explanation: "Cụm từ \"all day long\" nhấn mạnh tính liên tục kéo dài suốt cả ngày của hành động kháng cự trong quá khứ -> chia Quá khứ tiếp diễn (were resisting)."
  },
  {
    id: 19,
    code: "Exercise 2 - Q4",
    question: "I ___________________ (visit) the historical museum two days ago and learned about the resistance war against the French last year.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "nhan_biet",
    options: [
      { key: "A", text: "visited" },
      { key: "B", text: "was visiting" },
      { key: "C", text: "visit" },
      { key: "D", text: "had visited" }
    ],
    correctAnswer: "A",
    correctAnswerText: "visited",
    explanation: "Dấu hiệu nhận biết rõ ràng: \"two days ago\" (hai ngày trước) chỉ một sự việc đã hoàn tất trong quá khứ -> dùng Past Simple (visited)."
  },
  {
    id: 20,
    code: "Exercise 2 - Q5",
    question: "While Dr. Võ Tá Chung ___________________________ (operate) on wounded soldiers, other doctors ___________________________ (treat) the injured in different parts of the hospital.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "van_dung",
    options: [
      { key: "A", text: "operated – treated" },
      { key: "B", text: "was operating – were treating" },
      { key: "C", text: "was operating – treated" },
      { key: "D", text: "operated – were treating" }
    ],
    correctAnswer: "B",
    correctAnswerText: "was operating – were treating",
    explanation: "Hai hành động song song cùng diễn ra tại cùng một thời điểm trong quá khứ nối với nhau bởi liên từ \"While\" -> cả 2 vế đều chia Quá khứ tiếp diễn (was operating – were treating)."
  },
  {
    id: 21,
    code: "Exercise 2 - Q6",
    question: "He always _________________ (talk) about his experience during the war, remembering the bravery of his comrades.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "nhan_biet",
    options: [
      { key: "A", text: "talked" },
      { key: "B", text: "was talking" },
      { key: "C", text: "talks" },
      { key: "D", text: "is talking" }
    ],
    correctAnswer: "A",
    correctAnswerText: "talked",
    explanation: "Thói quen trong quá khứ về thời chiến tranh: chia Quá khứ đơn (talked)."
  },
  {
    id: 22,
    code: "Exercise 2 - Q7",
    question: "During the Resistance War, the soldiers ___________________________ (fight) in the jungle while doctors ___________________________ (perform) surgeries on the wounded.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "van_dung",
    options: [
      { key: "A", text: "fought – performed" },
      { key: "B", text: "were fighting – were performing" },
      { key: "C", text: "were fighting – performed" },
      { key: "D", text: "fought – were performing" }
    ],
    correctAnswer: "B",
    correctAnswerText: "were fighting – were performing",
    explanation: "Hai hành động song song diễn ra trong bối cảnh cuộc kháng chiến (soldiers were fighting / doctors were performing surgeries)."
  },
  {
    id: 23,
    code: "Exercise 2 - Q8",
    question: "During the Resistance War, the soldiers ___________________________ (fight) in the jungle while doctors were performing surgeries on the wounded.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "thong_hieu",
    options: [
      { key: "A", text: "were fighting" },
      { key: "B", text: "fought" },
      { key: "C", text: "are fighting" },
      { key: "D", text: "have fought" }
    ],
    correctAnswer: "A",
    correctAnswerText: "were fighting",
    explanation: "Vế sau dùng \"while doctors were performing surgeries\", nên vế trước diễn tả hành động song song: \"the soldiers were fighting\"."
  },
  {
    id: 24,
    code: "Exercise 2 - Q9",
    question: "At 10 AM yesterday, Dr. Võ Tá Chung ___________________________(perform) surgery on a soldier in the field hospital.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "thong_hieu",
    options: [
      { key: "A", text: "was performing" },
      { key: "B", text: "performed" },
      { key: "C", text: "had performed" },
      { key: "D", text: "performs" }
    ],
    correctAnswer: "A",
    correctAnswerText: "was performing",
    explanation: "Có thời điểm chính xác cụ thể trong quá khứ: \"At 10 AM yesterday\" -> phải dùng thì Quá khứ tiếp diễn (was performing)."
  },
  {
    id: 25,
    code: "Exercise 2 - Q10",
    question: "The soldiers ________________ (fight) bravely in the jungle a month ago.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "nhan_biet",
    options: [
      { key: "A", text: "were fighting" },
      { key: "B", text: "fought" },
      { key: "C", text: "fight" },
      { key: "D", text: "have fought" }
    ],
    correctAnswer: "B",
    correctAnswerText: "fought",
    explanation: "Dấu hiệu thời gian xác định trong quá khứ: \"a month ago\" -> chia Quá khứ đơn (fought - dạng quá khứ của fight)."
  },
  {
    id: 26,
    code: "Exercise 2 - Q11",
    question: "Yesterday, I __________________ (speak) to a veteran who fought in the war against the French, and he ___________________ (share) his personal account of the battle.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "van_dung",
    options: [
      { key: "A", text: "spoke – shared" },
      { key: "B", text: "was speaking – shared" },
      { key: "C", text: "spoke – was sharing" },
      { key: "D", text: "was speaking – was sharing" }
    ],
    correctAnswer: "A",
    correctAnswerText: "spoke – shared",
    explanation: "Chuỗi hành động nối tiếp nhau trong quá khứ liên kết bằng liên từ \"and\" (Yesterday, I spoke... and he shared...)."
  },
  {
    id: 27,
    code: "Exercise 2 - Q12",
    question: "In the morning, Dr. Võ Tá Chung ___________________________ (treat) soldiers who had been injured in battle.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "thong_hieu",
    options: [
      { key: "A", text: "was treating" },
      { key: "B", text: "treated" },
      { key: "C", text: "has treated" },
      { key: "D", text: "treats" }
    ],
    correctAnswer: "A",
    correctAnswerText: "was treating",
    explanation: "Theo ngữ cảnh tài liệu, hành động diễn ra trong suốt buổi sáng trong bệnh viện dã chiến được nhấn mạnh tiến trình: \"was treating\"."
  },
  {
    id: 28,
    code: "Exercise 2 - Q13",
    question: "It ______________ (rain) heavily outside. The soldiers were preparing for the next mission, while Dr. Võ Tá Chung was treating the wounded inside the field hospital.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "thong_hieu",
    options: [
      { key: "A", text: "was raining" },
      { key: "B", text: "rained" },
      { key: "C", text: "rains" },
      { key: "D", text: "has rained" }
    ],
    correctAnswer: "A",
    correctAnswerText: "was raining",
    explanation: "Miêu tả bối cảnh không gian thời gian nền của câu chuyện trong quá khứ (setting the scene): \"It was raining heavily outside...\""
  },
  {
    id: 29,
    code: "Exercise 2 - Q14",
    question: "Yesterday, the soldier _______________ (share) his personal account of the battle in the jungle.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "nhan_biet",
    options: [
      { key: "A", text: "was sharing" },
      { key: "B", text: "shared" },
      { key: "C", text: "shares" },
      { key: "D", text: "had shared" }
    ],
    correctAnswer: "B",
    correctAnswerText: "shared",
    explanation: "Thời gian \"Yesterday\" chỉ hành động đã xảy ra và kết thúc trong quá khứ -> chia Past Simple (shared)."
  },
  {
    id: 30,
    code: "Exercise 2 - Q15",
    question: "The resistance movement ____________________ (succeed) in freeing the country last year.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "nhan_biet",
    options: [
      { key: "A", text: "succeeded" },
      { key: "B", text: "was succeeding" },
      { key: "C", text: "succeeds" },
      { key: "D", text: "had succeeded" }
    ],
    correctAnswer: "A",
    correctAnswerText: "succeeded",
    explanation: "Dấu hiệu rõ ràng: \"last year\" -> động từ chia ở thì Quá khứ đơn (succeeded)."
  },
  {
    id: 31,
    code: "Exercise 2 - Q16",
    question: "Dr. Võ Tá Chung ___________________________ (perform) a life – saving surgery two weeks ago in the field hospital.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "nhan_biet",
    options: [
      { key: "A", text: "performed" },
      { key: "B", text: "was performing" },
      { key: "C", text: "performs" },
      { key: "D", text: "has performed" }
    ],
    correctAnswer: "A",
    correctAnswerText: "performed",
    explanation: "Dấu hiệu thời gian: \"two weeks ago\" -> dùng Past Simple (performed)."
  },
  {
    id: 32,
    code: "Exercise 2 - Q17",
    question: "Yesterday at noon, the poetess ___________________________ (write) her new poem.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "thong_hieu",
    options: [
      { key: "A", text: "wrote" },
      { key: "B", text: "was writing" },
      { key: "C", text: "is writing" },
      { key: "D", text: "has written" }
    ],
    correctAnswer: "B",
    correctAnswerText: "was writing",
    explanation: "\"Yesterday at noon\" (vào đúng giữa trưa hôm qua) là mốc thời gian cụ thể trong quá khứ -> chia Quá khứ tiếp diễn (was writing)."
  },
  {
    id: 33,
    code: "Exercise 2 - Q18",
    question: "The resistance fighters ________________ (defeat) the enemy in the jungle five years ago.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "nhan_biet",
    options: [
      { key: "A", text: "defeated" },
      { key: "B", text: "were defeating" },
      { key: "C", text: "defeat" },
      { key: "D", text: "had defeated" }
    ],
    correctAnswer: "A",
    correctAnswerText: "defeated",
    explanation: "\"five years ago\" -> dấu hiệu của thì Quá khứ đơn (defeated)."
  },
  {
    id: 34,
    code: "Exercise 2 - Q19",
    question: "Yesterday, they ___________________________ (discuss) the innovations in surgery when the news of a new enemy attack came.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "van_dung",
    options: [
      { key: "A", text: "were discussing" },
      { key: "B", text: "discussed" },
      { key: "C", text: "are discussing" },
      { key: "D", text: "had discussed" }
    ],
    correctAnswer: "A",
    correctAnswerText: "were discussing",
    explanation: "Họ đang thảo luận (were discussing) thì có tin báo quân địch tấn công xen vào (when the news of a new enemy attack came)."
  },
  {
    id: 35,
    code: "Exercise 2 - Q20",
    question: "The team ___________________________(study) the biological effects of the war yesterday.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "nhan_biet",
    options: [
      { key: "A", text: "studied" },
      { key: "B", text: "were studying" },
      { key: "C", text: "study" },
      { key: "D", text: "are studying" }
    ],
    correctAnswer: "A",
    correctAnswerText: "studied",
    explanation: "\"yesterday\" -> Quá khứ đơn (studied)."
  },
  {
    id: 36,
    code: "Exercise 2 - Q21",
    question: "At that moment, the soldiers ___________________________ (prepare) to launch a counterattack against the enemy.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "thong_hieu",
    options: [
      { key: "A", text: "were preparing" },
      { key: "B", text: "prepared" },
      { key: "C", text: "are preparing" },
      { key: "D", text: "prepare" }
    ],
    correctAnswer: "A",
    correctAnswerText: "were preparing",
    explanation: "Cụm từ \"At that moment\" (vào chính khoảnh khắc đó trong quá khứ) là dấu hiệu điển hình của thì Quá khứ tiếp diễn (were preparing)."
  },
  {
    id: 37,
    code: "Exercise 2 - Q22",
    question: "The national hero ____________________ (become) famous in the 1940s for his role in the resistance.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "nhan_biet",
    options: [
      { key: "A", text: "became" },
      { key: "B", text: "was becoming" },
      { key: "C", text: "becomes" },
      { key: "D", text: "had become" }
    ],
    correctAnswer: "A",
    correctAnswerText: "became",
    explanation: "\"in the 1940s\" (vào thập niên 1940) là mốc thời gian hoàn tất trong lịch sử -> Quá khứ đơn: become -> became."
  },
  {
    id: 38,
    code: "Exercise 2 - Q23",
    question: "They ___________________________ (discuss) the latest developments in biology at that time during the war.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "thong_hieu",
    options: [
      { key: "A", text: "were discussing" },
      { key: "B", text: "discussed" },
      { key: "C", text: "are discussing" },
      { key: "D", text: "had discussed" }
    ],
    correctAnswer: "A",
    correctAnswerText: "were discussing",
    explanation: "\"at that time during the war\" (vào thời điểm đó trong chiến tranh) -> hành động đang diễn tiến: Quá khứ tiếp diễn (were discussing)."
  },
  {
    id: 39,
    code: "Exercise 2 - Q24",
    question: "In 1990, the film industry ______________________ (produce) a full – length movie about the battle.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "nhan_biet",
    options: [
      { key: "A", text: "produced" },
      { key: "B", text: "was producing" },
      { key: "C", text: "produces" },
      { key: "D", text: "had produced" }
    ],
    correctAnswer: "A",
    correctAnswerText: "produced",
    explanation: "\"In 1990\" là năm trong quá khứ -> chia Quá khứ đơn (produced)."
  },
  {
    id: 40,
    code: "Exercise 2 - Q25",
    question: "I ___________________________ (read) a poem about the war while she ___________________________ (write) her personal account.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "van_dung",
    options: [
      { key: "A", text: "was reading – was writing" },
      { key: "B", text: "read – wrote" },
      { key: "C", text: "was reading – wrote" },
      { key: "D", text: "read – was writing" }
    ],
    correctAnswer: "A",
    correctAnswerText: "was reading – was writing",
    explanation: "Hai hành động diễn ra song song cùng lúc trong quá khứ với \"while\" (Tôi đang đọc thơ trong khi cô ấy đang viết nhật ký hồi ký: was reading – was writing)."
  },
  {
    id: 41,
    code: "Exercise 2 - Q26",
    question: "Dr. Võ Tá Chung ___________________________ (treat) many injured soldiers, performed surgeries, and ___________________________ (save) countless lives during the war.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "van_dung",
    options: [
      { key: "A", text: "treated – saved" },
      { key: "B", text: "was treating – saved" },
      { key: "C", text: "treated – was saving" },
      { key: "D", text: "was treating – was saving" }
    ],
    correctAnswer: "A",
    correctAnswerText: "treated – saved",
    explanation: "Cấu trúc đồng đẳng (parallel structure) chỉ chuỗi hành động kế tiếp trong quá khứ: treated ..., performed surgeries, and saved ..."
  },
  {
    id: 42,
    code: "Exercise 2 - Q27",
    question: "When I _________________ (visit) the museum, I couldn’t help but remember the heroic actions of the soldiers during the resistance war.",
    category: "verb_forms",
    categoryName: "Exercise 2: Chia thì Past Simple & Past Continuous",
    level: "nhan_biet",
    options: [
      { key: "A", text: "visited" },
      { key: "B", text: "was visiting" },
      { key: "C", text: "visit" },
      { key: "D", text: "had visited" }
    ],
    correctAnswer: "A",
    correctAnswerText: "visited",
    explanation: "Khi tôi đến thăm bảo tàng (sự việc điểm mốc trong quá khứ đi với When + Past Simple: visited)."
  }
];
