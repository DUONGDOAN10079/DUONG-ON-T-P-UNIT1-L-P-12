import React, { useState, useEffect } from 'react';
import { Question, QuizConfig, UserAnswerRecord } from '../types';
import { soundEffects } from '../utils/audio';
import { triggerCelebrationFlowerBurst } from '../utils/confetti';
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  User, 
  Sparkles, 
  ArrowRight, 
  Flag, 
  BookOpen,
  Award,
  HelpCircle,
  RotateCcw
} from 'lucide-react';

interface QuizViewProps {
  config: QuizConfig;
  questions: Question[];
  onFinishQuiz: (
    answers: Record<number, 'A' | 'B' | 'C' | 'D' | null>, 
    totalSeconds: number
  ) => void;
  onExit: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  config,
  questions,
  onFinishQuiz,
  onExit,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D' | null>>({});
  const [answeredState, setAnsweredState] = useState<Record<number, boolean>>({});
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [isCelebrationActive, setIsCelebrationActive] = useState<boolean>(false);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const isCurrentAnswered = answeredState[currentQuestion.id] || false;
  const currentSelectedOption = userAnswers[currentQuestion.id] || null;
  const isCurrentCorrect = currentSelectedOption === currentQuestion.correctAnswer;

  // Handle selecting an answer
  const handleSelectOption = (optionKey: 'A' | 'B' | 'C' | 'D') => {
    if (isCurrentAnswered) return; // already locked

    const isCorrect = optionKey === currentQuestion.correctAnswer;

    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionKey,
    }));

    setAnsweredState((prev) => ({
      ...prev,
      [currentQuestion.id]: true,
    }));

    if (isCorrect) {
      // Âm thanh chúc mừng mạnh mẽ, hoành tráng & tung bông tung hoa!
      soundEffects.playCorrectFanfare();
      triggerCelebrationFlowerBurst();
      setIsCelebrationActive(true);
      setTimeout(() => setIsCelebrationActive(false), 2500);
    } else {
      // Âm thanh nhẹ nhàng khích lệ học sinh
      soundEffects.playEncouragingGentleSound();
    }
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    onFinishQuiz(userAnswers, secondsElapsed);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const levelBadge = (level: string) => {
    switch (level) {
      case 'nhan_biet':
        return { text: 'Nhận biết', color: 'bg-blue-600/30 text-blue-300 border-blue-400/40' };
      case 'thong_hieu':
        return { text: 'Thông hiểu', color: 'bg-emerald-600/30 text-emerald-300 border-emerald-400/40' };
      case 'van_dung':
        return { text: 'Vận dụng', color: 'bg-amber-600/30 text-amber-300 border-amber-400/40' };
      default:
        return { text: 'Tổng hợp', color: 'bg-purple-600/30 text-purple-300 border-purple-400/40' };
    }
  };

  const badgeInfo = levelBadge(currentQuestion.level);
  const answeredCount = Object.keys(answeredState).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
      {/* Top Status & Controls */}
      <div className="bg-purple-900/80 backdrop-blur-md rounded-2xl border-2 border-purple-600/60 p-3 sm:p-4 mb-4 shadow-xl flex flex-wrap items-center justify-between gap-3">
        {/* Student Info */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-yellow-400 text-purple-950 font-black flex items-center justify-center text-sm shadow">
            {config.student.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="text-xs text-purple-300">Thí sinh làm bài:</div>
            <div className="text-sm sm:text-base font-extrabold text-yellow-300">
              {config.student.name} <span className="text-purple-200 text-xs font-semibold">({config.student.className})</span>
            </div>
          </div>
        </div>

        {/* Timer & Question Progress */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-950/80 border border-purple-700 text-yellow-300 font-mono font-bold text-sm">
            <Clock className="w-4 h-4 text-yellow-400" />
            <span>{formatTime(secondsElapsed)}</span>
          </div>

          <button
            type="button"
            onClick={() => {
              if (window.confirm('Em có chắc chắn muốn nộp bài sớm và xem phiếu kết quả không?')) {
                handleComplete();
              }
            }}
            id="btn-submit-early"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold bg-amber-500/20 hover:bg-amber-500/30 text-yellow-300 border border-yellow-400/50 transition-colors"
          >
            <Flag className="w-4 h-4 text-yellow-400" />
            <span>Nộp bài sớm</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-xs font-bold text-yellow-300 mb-1.5">
          <span>Tiến độ: Câu {currentIndex + 1} / {totalQuestions}</span>
          <span>Đã làm: {answeredCount}/{totalQuestions} ({progressPercent}%)</span>
        </div>
        <div className="w-full h-2.5 bg-purple-950 rounded-full overflow-hidden border border-purple-700/80">
          <div 
            className="h-full bg-gradient-to-r from-yellow-400 to-amber-400 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-purple-900/90 rounded-2xl border-2 border-yellow-400/60 shadow-2xl p-5 sm:p-7 relative overflow-hidden">
        {/* Glow effect on correct */}
        {isCelebrationActive && (
          <div className="absolute inset-0 bg-yellow-400/10 border-4 border-yellow-400 animate-pulse pointer-events-none rounded-2xl" />
        )}

        {/* Badges & Meta */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-purple-700/70">
          <div className="flex items-center gap-2">
            <span className="bg-yellow-400 text-purple-950 font-black text-xs sm:text-sm px-3 py-1 rounded-lg shadow">
              CÂU {currentIndex + 1}
            </span>
            <span className="text-xs font-bold text-yellow-200 bg-purple-950/70 px-2.5 py-1 rounded-md border border-purple-700">
              {currentQuestion.code}
            </span>
            <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${badgeInfo.color}`}>
              {badgeInfo.text}
            </span>
          </div>

          <div className="text-xs font-semibold text-purple-200 flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-yellow-400" />
            <span className="truncate max-w-[200px] sm:max-w-none">{currentQuestion.categoryName}</span>
          </div>
        </div>

        {/* Question Text */}
        <div className="my-4">
          <p className="text-lg sm:text-xl font-bold text-yellow-100 leading-relaxed tracking-wide">
            {currentQuestion.question}
          </p>
        </div>

        {/* Answer Options */}
        <div className="space-y-3 mt-6">
          {currentQuestion.options.map((opt) => {
            const isSelected = currentSelectedOption === opt.key;
            const isCorrectOption = opt.key === currentQuestion.correctAnswer;

            let optionStyle = 'bg-purple-950/70 hover:bg-purple-800/80 border-purple-600/70 text-purple-100';

            if (isCurrentAnswered) {
              if (isCorrectOption) {
                // Correct answer is always highlighted in vibrant green/gold
                optionStyle = 'bg-emerald-900/90 border-emerald-400 text-emerald-100 shadow-lg shadow-emerald-500/20';
              } else if (isSelected && !isCorrectOption) {
                // Selected wrong answer highlighted in red
                optionStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
              } else {
                // Other options muted
                optionStyle = 'bg-purple-950/40 border-purple-800/40 text-purple-400 opacity-60';
              }
            } else if (isSelected) {
              optionStyle = 'bg-yellow-400 text-purple-950 border-yellow-300 font-bold';
            }

            return (
              <button
                key={opt.key}
                type="button"
                id={`option-${opt.key}`}
                disabled={isCurrentAnswered}
                onClick={() => handleSelectOption(opt.key)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl border-2 transition-all flex items-center justify-between gap-3 ${optionStyle} ${
                  !isCurrentAnswered ? 'cursor-pointer hover:scale-[1.008] hover:border-yellow-400/80' : 'cursor-default'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm shrink-0 border ${
                    isCurrentAnswered && isCorrectOption
                      ? 'bg-emerald-400 text-emerald-950 border-emerald-300'
                      : isCurrentAnswered && isSelected && !isCorrectOption
                      ? 'bg-rose-500 text-white border-rose-400'
                      : 'bg-purple-900 text-yellow-300 border-purple-600'
                  }`}>
                    {opt.key}
                  </div>
                  <span className="text-sm sm:text-base font-semibold leading-snug">
                    {opt.text}
                  </span>
                </div>

                {isCurrentAnswered && isCorrectOption && (
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                )}
                {isCurrentAnswered && isSelected && !isCorrectOption && (
                  <XCircle className="w-6 h-6 text-rose-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback & Explanation Box */}
        {isCurrentAnswered && (
          <div className="mt-6 pt-5 border-t-2 border-purple-700/80 animate-fadeIn">
            {isCurrentCorrect ? (
              <div className="bg-emerald-950/80 border-2 border-emerald-400 rounded-xl p-4 mb-4 shadow-lg flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-yellow-300 shrink-0 mt-0.5 animate-bounce" />
                <div>
                  <h4 className="text-base font-black text-yellow-300 flex items-center gap-2">
                    <span>CHÍNH XÁC! XUẤT SẮC LẮM EM!</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-200 mt-1">
                    Em đã áp dụng đúng quy tắc và chọn đáp án chính xác: <strong className="text-yellow-300">{currentQuestion.correctAnswer}. {currentQuestion.correctAnswerText}</strong>
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-rose-950/70 border-2 border-rose-400/80 rounded-xl p-4 mb-4 shadow-lg flex items-start gap-3">
                <HelpCircle className="w-6 h-6 text-amber-300 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-black text-yellow-300">
                    ĐỪNG NẢN LÒNG EM NHÉ!
                  </h4>
                  <p className="text-xs sm:text-sm text-rose-200 mt-1">
                    Đáp án đúng là: <strong className="text-yellow-300">{currentQuestion.correctAnswer}. {currentQuestion.correctAnswerText}</strong>
                  </p>
                  <p className="text-xs text-amber-200 mt-0.5 italic">
                    Cô Dương Đoàn khuyên em đọc kỹ phần giải thích dưới đây để nhớ thật lâu nhé!
                  </p>
                </div>
              </div>
            )}

            {/* Detailed Teacher Explanation */}
            <div className="bg-purple-950/80 rounded-xl p-4 border border-yellow-400/40">
              <div className="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>Giải thích chi tiết từ Cô Dương Đoàn:</span>
              </div>
              <p className="text-sm text-purple-100 leading-relaxed font-medium">
                {currentQuestion.explanation}
              </p>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-6 flex items-center justify-between gap-3 pt-3">
          <button
            type="button"
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((prev) => prev - 1)}
            className="px-4 py-2.5 rounded-xl font-bold text-sm text-purple-200 bg-purple-950/80 border border-purple-700 hover:bg-purple-800 disabled:opacity-40 disabled:pointer-events-none transition-colors"
          >
            ← Câu trước
          </button>

          {isCurrentAnswered ? (
            <button
              type="button"
              id="btn-next-question"
              onClick={handleNext}
              className="px-6 py-3 rounded-xl font-black text-base text-purple-950 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 hover:from-yellow-300 hover:to-amber-200 border border-yellow-300 shadow-lg shadow-yellow-500/30 flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
            >
              <span>{currentIndex === totalQuestions - 1 ? 'Hoàn thành & Xem Phiếu Kết Quả' : 'Câu tiếp theo'}</span>
              <ArrowRight className="w-5 h-5 text-purple-950" />
            </button>
          ) : (
            <div className="text-xs text-yellow-300/80 italic font-medium">
              * Vui lòng chọn 1 phương án để kiểm tra kết quả
            </div>
          )}
        </div>
      </div>

      {/* Question Palette / Quick Jump Grid */}
      <div className="mt-6 bg-purple-900/60 rounded-2xl border border-purple-700/60 p-4 shadow-lg">
        <div className="text-xs font-bold text-yellow-300 uppercase tracking-wider mb-2.5 flex items-center justify-between">
          <span>Danh sách câu hỏi trong đề:</span>
          <span className="text-[11px] text-purple-300">Bấm số câu để chuyển nhanh</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {questions.map((q, idx) => {
            const isAnswered = answeredState[q.id];
            const isCorrect = userAnswers[q.id] === q.correctAnswer;
            const isCurrent = idx === currentIndex;

            let btnStyle = 'bg-purple-950/70 border-purple-700 text-purple-300';
            if (isCurrent) {
              btnStyle = 'ring-2 ring-yellow-400 border-yellow-400 text-yellow-300 font-extrabold scale-105';
            } else if (isAnswered) {
              btnStyle = isCorrect
                ? 'bg-emerald-800/80 border-emerald-400 text-emerald-200 font-bold'
                : 'bg-rose-900/80 border-rose-400 text-rose-200 font-bold';
            }

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg text-xs font-bold border transition-all flex items-center justify-center ${btnStyle}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
