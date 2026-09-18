import React, { useState } from 'react';
import { QuizConfig, DifficultyFilter, CategoryTopic } from '../types';
import { 
  User, 
  GraduationCap, 
  ListOrdered, 
  Layers, 
  BookMarked, 
  Play, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles,
  Flame
} from 'lucide-react';
import { QUESTIONS_BANK } from '../data/questions';

interface StudentSetupProps {
  onStartQuiz: (config: QuizConfig) => void;
  initialConfig?: QuizConfig;
}

export const StudentSetup: React.FC<StudentSetupProps> = ({ onStartQuiz, initialConfig }) => {
  const [name, setName] = useState<string>(initialConfig?.student.name || '');
  const [className, setClassName] = useState<string>(initialConfig?.student.className || '');
  const [questionCount, setQuestionCount] = useState<number>(initialConfig?.questionCount || 20);
  const [level, setLevel] = useState<DifficultyFilter>(initialConfig?.level || 'all');
  const [topic, setTopic] = useState<CategoryTopic>(initialConfig?.topic || 'all');
  const [error, setError] = useState<string>('');

  // Calculate available questions based on topic and level
  const availableQuestionsCount = QUESTIONS_BANK.filter((q) => {
    const matchTopic = topic === 'all' || q.category === topic;
    const matchLevel = level === 'all' || q.level === level;
    return matchTopic && matchLevel;
  }).length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedClass = className.trim();

    if (!trimmedName) {
      setError('Vui lòng nhập Họ và Tên của em trước khi bắt đầu.');
      return;
    }
    if (!trimmedClass) {
      setError('Vui lòng nhập Lớp học của em (ví dụ: 12A1, 12A2, 12D...).');
      return;
    }

    setError('');
    // Ensure questionCount does not exceed max (20) or available questions
    const finalCount = Math.min(questionCount, 20, Math.max(1, availableQuestionsCount));

    onStartQuiz({
      student: {
        name: trimmedName,
        className: trimmedClass,
      },
      questionCount: finalCount,
      level,
      topic,
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6 sm:py-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-900 rounded-2xl p-5 sm:p-7 shadow-2xl border-2 border-yellow-400/50 mb-8 relative overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute -right-12 -top-12 w-44 h-44 bg-yellow-400/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-44 h-44 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/60 text-yellow-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-spin" />
            Hệ Thống Ôn Luyện Trực Tuyến Lớp 12
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-black text-yellow-300 tracking-tight leading-tight">
            PHIẾU ÔN TẬP MÔN TIẾNG ANH UNIT 1 LỚP 12
          </h2>
          
          <p className="text-base sm:text-lg font-bold text-yellow-200 mt-1">
            Biên soạn và Giảng dạy: <span className="text-yellow-400 underline decoration-yellow-400/80">Cô Dương Đoàn</span>
          </p>

          <p className="text-purple-100 text-sm mt-3 leading-relaxed max-w-2xl">
            Tài liệu ôn tập chuẩn kiến thức Unit 1: <strong className="text-yellow-200">Life Stories & National Heroes</strong>, rèn luyện kỹ năng ngữ pháp thì <strong className="text-yellow-200">Quá khứ đơn (Past Simple)</strong> & <strong className="text-yellow-200">Quá khứ tiếp diễn (Past Continuous)</strong>. Chúc các em ôn tập hiệu quả và đạt điểm số thật cao!
          </p>
        </div>
      </div>

      {/* Setup Form */}
      <form 
        onSubmit={handleSubmit}
        className="bg-purple-900/70 backdrop-blur-md rounded-2xl border border-purple-600/50 shadow-xl p-5 sm:p-8 space-y-6"
        id="form-student-setup"
      >
        {error && (
          <div className="bg-red-500/20 border border-red-400/60 text-red-200 px-4 py-3 rounded-xl flex items-center gap-2.5 text-sm font-medium animate-shake">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Section 1: Thông tin học sinh */}
        <div>
          <h3 className="text-base sm:text-lg font-bold text-yellow-300 flex items-center gap-2 mb-4 pb-2 border-b border-purple-700/60">
            <User className="w-5 h-5 text-yellow-400" />
            <span>1. Thông Tin Học Sinh (Bắt buộc)</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="student-name-input" className="block text-sm font-bold text-yellow-200 mb-1.5">
                Họ và Tên Học Sinh <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  id="student-name-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ví dụ: Nguyễn Văn An"
                  className="w-full bg-purple-950/80 border-2 border-purple-500/70 focus:border-yellow-400 focus:outline-none text-white placeholder-purple-400/70 rounded-xl px-4 py-3 text-base transition-colors shadow-inner font-medium"
                />
              </div>
            </div>

            <div>
              <label htmlFor="student-class-input" className="block text-sm font-bold text-yellow-200 mb-1.5">
                Lớp Học <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  id="student-class-input"
                  type="text"
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                  placeholder="Ví dụ: 12A1, 12A2, 12D..."
                  className="w-full bg-purple-950/80 border-2 border-purple-500/70 focus:border-yellow-400 focus:outline-none text-white placeholder-purple-400/70 rounded-xl px-4 py-3 text-base transition-colors shadow-inner font-medium"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Chọn số lượng câu hỏi (Tối đa 20 câu) */}
        <div>
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-purple-700/60">
            <h3 className="text-base sm:text-lg font-bold text-yellow-300 flex items-center gap-2">
              <ListOrdered className="w-5 h-5 text-yellow-400" />
              <span>2. Số Lượng Câu Hỏi (Tối đa 20 câu / 1 lần làm)</span>
            </h3>
            <span className="text-xs font-bold text-yellow-300 bg-yellow-500/20 px-2.5 py-1 rounded-full border border-yellow-400/40">
              Đang chọn: {questionCount} câu
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
            {[5, 10, 15, 20].map((num) => {
              const isSelected = questionCount === num;
              return (
                <button
                  key={num}
                  type="button"
                  id={`btn-count-${num}`}
                  onClick={() => setQuestionCount(num)}
                  className={`py-3 px-2 rounded-xl font-bold text-sm sm:text-base transition-all flex flex-col items-center justify-center border-2 ${
                    isSelected
                      ? 'bg-gradient-to-b from-yellow-400 to-amber-500 text-purple-950 border-yellow-300 shadow-lg shadow-yellow-500/30 scale-[1.02]'
                      : 'bg-purple-950/60 text-yellow-200 border-purple-700/80 hover:border-yellow-400/50 hover:bg-purple-800/60'
                  }`}
                >
                  <span className="text-lg sm:text-xl font-extrabold">{num}</span>
                  <span className="text-xs opacity-90">Câu hỏi</span>
                </button>
              );
            })}
          </div>
          <p className="text-xs text-purple-300 mt-2 italic">
            * Theo quy định đề ôn tập: Mỗi lần làm tối đa 20 câu để đảm bảo học sinh tập trung và đạt hiệu quả tiếp thu cao nhất.
          </p>
        </div>

        {/* Section 3: Chọn Mức độ nhận thức */}
        <div>
          <h3 className="text-base sm:text-lg font-bold text-yellow-300 flex items-center gap-2 mb-3 pb-2 border-b border-purple-700/60">
            <Layers className="w-5 h-5 text-yellow-400" />
            <span>3. Chọn Mức Độ Nhận Thức</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                key: 'all' as DifficultyFilter,
                title: 'Tổng Hợp 3 Mức Độ (Khuyên dùng)',
                desc: 'Phân bổ cân bằng cả Nhận biết, Thông hiểu và Vận dụng',
                tag: 'Chuẩn ma trận đề',
              },
              {
                key: 'nhan_biet' as DifficultyFilter,
                title: 'Mức Độ: Nhận Biết',
                desc: 'Nhận diện dấu hiệu thời gian, từ vựng cơ bản, collocations',
                tag: 'Dễ - Củng cố nền',
              },
              {
                key: 'thong_hieu' as DifficultyFilter,
                title: 'Mức Độ: Thông Hiểu',
                desc: 'Hiểu bối cảnh, chọn liên từ when/while, sửa lỗi sai',
                tag: 'Trung bình',
              },
              {
                key: 'van_dung' as DifficultyFilter,
                title: 'Mức Độ: Vận Dụng',
                desc: 'Phối hợp thì phức tạp, chia 2 động từ song song/cắt ngang',
                tag: 'Khó - Phân loại',
              },
            ].map((lvl) => {
              const isSelected = level === lvl.key;
              return (
                <div
                  key={lvl.key}
                  onClick={() => setLevel(lvl.key)}
                  id={`btn-level-${lvl.key}`}
                  className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-purple-800 to-indigo-800 border-yellow-400 shadow-md shadow-yellow-500/20'
                      : 'bg-purple-950/60 border-purple-700/70 hover:border-purple-500 text-purple-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        isSelected ? 'border-yellow-400 bg-yellow-400' : 'border-purple-400'
                      }`}>
                        {isSelected && <div className="w-1.5 h-1.5 bg-purple-950 rounded-full" />}
                      </div>
                      <span className={`font-bold text-sm ${isSelected ? 'text-yellow-300' : 'text-purple-100'}`}>
                        {lvl.title}
                      </span>
                    </div>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-yellow-400/20 text-yellow-300 border border-yellow-400/40' : 'bg-purple-900 text-purple-300'
                    }`}>
                      {lvl.tag}
                    </span>
                  </div>
                  <p className="text-xs text-purple-200 mt-1.5 pl-6">
                    {lvl.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 4: Chọn Bài / Chủ đề */}
        <div>
          <h3 className="text-base sm:text-lg font-bold text-yellow-300 flex items-center gap-2 mb-3 pb-2 border-b border-purple-700/60">
            <BookMarked className="w-5 h-5 text-yellow-400" />
            <span>4. Chọn Bài Ôn Tập / Chuyên Đề</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                key: 'all' as CategoryTopic,
                title: 'Tất Cả Bài Học (Toàn bộ tài liệu)',
                desc: 'Bao gồm tất cả câu hỏi đọc hiểu, từ vựng và bài tập chia thì',
              },
              {
                key: 'reading_vocab' as CategoryTopic,
                title: 'Part I: Đọc Hiểu & Từ Vựng',
                desc: 'Chủ đề Anh hùng dân tộc, Getting Started, collocations Unit 1',
              },
              {
                key: 'grammar_rules' as CategoryTopic,
                title: 'Part II: Ngữ Pháp Trọng Tâm',
                desc: 'Quy tắc kết hợp thì Quá khứ đơn & Quá khứ tiếp diễn, sửa lỗi câu',
              },
              {
                key: 'verb_forms' as CategoryTopic,
                title: 'Exercise 2: Chia Động Từ',
                desc: 'Luyện tập chia thì trong ngữ cảnh cuộc chiến và bác sĩ Võ Tá Chung',
              },
            ].map((t) => {
              const isSelected = topic === t.key;
              return (
                <div
                  key={t.key}
                  onClick={() => setTopic(t.key)}
                  id={`btn-topic-${t.key}`}
                  className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-purple-800 to-indigo-800 border-yellow-400 shadow-md shadow-yellow-500/20'
                      : 'bg-purple-950/60 border-purple-700/70 hover:border-purple-500 text-purple-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      isSelected ? 'border-yellow-400 bg-yellow-400' : 'border-purple-400'
                    }`}>
                      {isSelected && <div className="w-1.5 h-1.5 bg-purple-950 rounded-full" />}
                    </div>
                    <span className={`font-bold text-sm ${isSelected ? 'text-yellow-300' : 'text-purple-100'}`}>
                      {t.title}
                    </span>
                  </div>
                  <p className="text-xs text-purple-200 mt-1 pl-6">
                    {t.desc}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-2 text-right">
            <span className="text-xs font-semibold text-yellow-300">
              Ngân hàng câu hỏi khả dụng: {availableQuestionsCount} câu
            </span>
          </div>
        </div>

        {/* Start Button */}
        <div className="pt-2">
          <button
            type="submit"
            id="btn-start-quiz"
            className="w-full py-4 px-6 rounded-xl font-black text-lg sm:text-xl text-purple-950 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 hover:from-yellow-300 hover:to-amber-200 border-2 border-yellow-300 shadow-xl shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-[1.01] transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <Play className="w-6 h-6 fill-current text-purple-950" />
            <span>BẮT ĐẦU LÀM BÀI ÔN TẬP</span>
          </button>
          <p className="text-center text-xs text-purple-300 mt-2.5">
            Khi trả lời đúng, hệ thống sẽ phát âm thanh chúc mừng hoành tráng & tung hoa rực rỡ!
          </p>
        </div>
      </form>
    </div>
  );
};
