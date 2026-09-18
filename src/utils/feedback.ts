import { QuizResult, StudentInfo, QuizConfig, Question } from '../types';

export function calculateQuizResult(
  student: StudentInfo,
  config: QuizConfig,
  questions: Question[],
  userAnswers: Record<number, 'A' | 'B' | 'C' | 'D' | null>,
  totalTimeSeconds: number
): QuizResult {
  const total = questions.length;
  let correctCount = 0;

  const levelStats = {
    nhan_biet: { total: 0, correct: 0 },
    thong_hieu: { total: 0, correct: 0 },
    van_dung: { total: 0, correct: 0 },
  };

  const answers = questions.map((q) => {
    const selected = userAnswers[q.id] || null;
    const isCorrect = selected === q.correctAnswer;
    if (isCorrect) correctCount++;

    if (levelStats[q.level]) {
      levelStats[q.level].total++;
      if (isCorrect) {
        levelStats[q.level].correct++;
      }
    }

    return {
      question: q,
      selected,
      isCorrect,
    };
  });

  const wrongCount = total - correctCount;
  const score10 = Math.round((correctCount / total) * 10 * 10) / 10;
  const percentage = Math.round((correctCount / total) * 100);

  // Generate personalized remarks from Teacher Cô Dương Đoàn
  let gradeText = 'Cần cố gắng';
  let comment = '';
  let advice = '';

  if (score10 >= 9.0) {
    gradeText = 'Xuất sắc';
    comment = `Cô Dương Đoàn rất khen ngợi tinh thần học tập và năng lực vượt trội của em ${student.name}! Em đã làm chủ hoàn toàn các kiến thức trọng tâm về thì Quá khứ đơn, Quá khứ tiếp diễn cũng như vốn từ vựng học thuật Unit 1.`;
    advice = 'Hãy tiếp tục duy trì phong độ đỉnh cao này và thử sức thêm với các đề thi thử tốt nghiệp THPT Quốc gia môn Tiếng Anh mức điểm 9+ nhé!';
  } else if (score10 >= 8.0) {
    gradeText = 'Giỏi';
    comment = `Kết quả rất đáng tự hào! Em ${student.name} có tư duy ngữ pháp nhanh nhạy và nắm rất chắc các mẫu câu phối hợp thì (Past Simple & Past Continuous).`;
    advice = 'Chỉ cần chú ý cẩn thận hơn một vài chi tiết nhỏ trong các câu có bối cảnh phức tạp và hành động xen ngang là em sẽ đạt điểm 10 tuyệt đối!';
  } else if (score10 >= 6.5) {
    gradeText = 'Khá';
    comment = `Bài làm đạt kết quả Khá. Em ${student.name} đã hiểu rõ các cấu trúc cơ bản và nhận biết tốt các dấu hiệu thời gian trong quá khứ.`;
    advice = 'Em nên xem lại phần giải thích chi tiết của Cô ở các câu chia hai hành động song song (while ... was/were V-ing) và các cụm giới từ collocations như "famous for", "devote to V-ing".';
  } else if (score10 >= 5.0) {
    gradeText = 'Trung bình';
    comment = `Em ${student.name} đã hoàn thành bài ôn tập với tinh thần cố gắng. Em đã đạt mức điểm chuẩn nhưng vẫn còn một số lỗi nhầm lẫn giữa thì Quá khứ đơn và Quá khứ tiếp diễn.`;
    advice = 'Cô khuyên em hãy ôn lại bảng quy tắc chia thì, ghi chép lại các câu làm sai vào vở học tập và thử luyện lại lần thứ hai để củng cố phản xạ nhé!';
  } else {
    gradeText = 'Cần cố gắng';
    comment = `Đừng vội nản lòng em nhé! Mỗi câu trả lời chưa đúng chính là một cơ hội để em học hỏi và khắc sâu kiến thức hơn.`;
    advice = 'Em hãy dành thêm 15-20 phút đọc kỹ phần "Giải thích chi tiết của Cô Dương Đoàn" bên dưới, ôn lại cách dùng WHEN / WHILE, sau đó bấm làm lại bài để thấy sự tiến bộ vượt bậc của mình!';
  }

  const now = new Date();
  const formattedDate = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')} - Ngày ${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;

  return {
    student,
    config,
    totalQuestions: total,
    correctCount,
    wrongCount,
    score10,
    percentage,
    totalTimeSeconds,
    completedAt: formattedDate,
    levelStats,
    answers,
    teacherFeedback: {
      gradeText,
      comment,
      advice,
    },
  };
}
