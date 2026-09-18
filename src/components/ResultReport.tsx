import React, { useState, useEffect, useRef } from 'react';
import { QuizResult } from '../types';
import { exportReportCardToPDF, printReportCard } from '../utils/pdfExport';
import { triggerGrandVictoryFireworks } from '../utils/confetti';
import {
  Award,
  Download,
  Printer,
  RotateCcw,
  CheckCircle2,
  XCircle,
  FileText,
  User,
  Clock,
  BookOpen,
  Sparkles,
  Share2,
  Calendar,
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface ResultReportProps {
  result: QuizResult;
  onRetake: () => void;
  onNewQuiz: () => void;
}

export const ResultReport: React.FC<ResultReportProps> = ({
  result,
  onRetake,
  onNewQuiz,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'wrong' | 'correct'>('all');
  const [isExportingPDF, setIsExportingPDF] = useState<boolean>(false);
  const [exportSuccess, setExportSuccess] = useState<boolean>(false);
  const reportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If student scored >= 8.0, trigger victorious grand fireworks
    if (result.score10 >= 8.0) {
      triggerGrandVictoryFireworks();
    }
  }, [result.score10]);

  const handleDownloadPDF = async () => {
    setIsExportingPDF(true);
    setExportSuccess(false);

    const safeName = result.student.name.replace(/[^a-zA-Z0-9]/g, '_');
    const safeClass = result.student.className.replace(/[^a-zA-Z0-9]/g, '_');
    const filename = `Phieu_Ket_Qua_Tieng_Anh_Unit1_12_${safeName}_${safeClass}.pdf`;

    const success = await exportReportCardToPDF('report-card-pdf-area', filename);
    setIsExportingPDF(false);
    if (success) {
      setExportSuccess(true);
      setTimeout(() => setExportSuccess(false), 4000);
    }
  };

  const filteredAnswers = result.answers.filter((item) => {
    if (filterMode === 'correct') return item.isCorrect;
    if (filterMode === 'wrong') return !item.isCorrect;
    return true;
  });

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m} phút ${s} giây`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 py-6">
      {/* Top Action Bar */}
      <div className="bg-purple-900/80 backdrop-blur-md rounded-2xl border-2 border-yellow-400/50 p-4 mb-6 shadow-xl flex flex-wrap items-center justify-between gap-3 no-print">
        <div className="flex items-center gap-2 text-yellow-300">
          <Award className="w-6 h-6 text-yellow-400 shrink-0" />
          <span className="font-extrabold text-base sm:text-lg">
            Hoàn thành bài ôn tập!
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {/* Download PDF button */}
          <button
            type="button"
            id="btn-export-pdf"
            onClick={handleDownloadPDF}
            disabled={isExportingPDF}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-black text-sm bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-purple-950 shadow-md shadow-yellow-500/20 hover:scale-105 transition-all cursor-pointer disabled:opacity-50"
          >
            <Download className="w-4 h-4 text-purple-950" />
            <span>{isExportingPDF ? 'Đang xuất PDF...' : 'Xuất file PDF kết quả'}</span>
          </button>

          {/* Print button */}
          <button
            type="button"
            id="btn-print-report"
            onClick={printReportCard}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl font-bold text-sm bg-purple-950/80 hover:bg-purple-800 text-yellow-200 border border-yellow-400/40 transition-colors"
          >
            <Printer className="w-4 h-4 text-yellow-400" />
            <span className="hidden sm:inline">In phiếu (Print)</span>
          </button>

          {/* Retake / New */}
          <button
            type="button"
            id="btn-new-quiz"
            onClick={onNewQuiz}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-bold text-sm bg-purple-800 hover:bg-purple-700 text-white border border-purple-600 transition-colors"
          >
            <RotateCcw className="w-4 h-4 text-purple-300" />
            <span>Làm bài mới</span>
          </button>
        </div>
      </div>

      {exportSuccess && (
        <div className="mb-4 bg-emerald-500/20 border-2 border-emerald-400 text-emerald-200 px-4 py-3 rounded-xl flex items-center gap-2 text-sm font-bold no-print animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span>Xuất file PDF thành công! File đã được lưu về máy của em.</span>
        </div>
      )}

      {/* ========================================================================= */}
      {/* THE OFFICIAL REPORT CARD / CERTIFICATE (Captured for PDF and Print)      */}
      {/* ========================================================================= */}
      <div
        id="report-card-pdf-area"
        ref={reportRef}
        className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-purple-800 relative overflow-hidden"
      >
        {/* Ornate Gold & Purple Certificate Border Header */}
        <div className="border-b-4 border-double border-purple-800 pb-5 mb-6 text-center">
          <div className="flex items-center justify-between text-xs sm:text-sm font-extrabold uppercase text-purple-900 tracking-wider mb-2">
            <span>SỞ GIÁO DỤC VÀ ĐÀO TẠO</span>
            <span className="text-yellow-700 font-black">NĂM HỌC 2025 - 2026</span>
            <span>BỘ MÔN TIẾNG ANH 12</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-purple-900 uppercase tracking-tight mt-1">
            PHIẾU KẾT QUẢ ÔN TẬP MÔN TIẾNG ANH UNIT 1 LỚP 12
          </h2>
          
          <div className="inline-block bg-purple-100 border border-purple-300 rounded-full px-4 py-1 text-xs sm:text-sm font-bold text-purple-950 mt-2">
            Biên soạn & Giảng dạy: <strong className="text-purple-800 underline font-black">CÔ DƯƠNG ĐOÀN</strong>
          </div>
          <p className="text-xs text-slate-500 mt-1 italic">
            Chuyên đề: Unit 1 - Life Stories • Past Simple vs. Past Continuous Tenses
          </p>
        </div>

        {/* Student Identification Info */}
        <div className="bg-purple-50 rounded-2xl p-4 sm:p-5 border border-purple-200 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div>
              <span className="text-slate-500 font-medium block text-xs">Họ và tên học sinh:</span>
              <span className="font-extrabold text-purple-950 text-base">{result.student.name}</span>
            </div>
            <div>
              <span className="text-slate-500 font-medium block text-xs">Lớp học:</span>
              <span className="font-extrabold text-purple-950 text-base">{result.student.className}</span>
            </div>
            <div>
              <span className="text-slate-500 font-medium block text-xs">Thời gian làm bài:</span>
              <span className="font-bold text-slate-800">{formatTime(result.totalTimeSeconds)}</span>
            </div>
            <div>
              <span className="text-slate-500 font-medium block text-xs">Ngày hoàn thành:</span>
              <span className="font-semibold text-slate-700">{result.completedAt}</span>
            </div>
            <div>
              <span className="text-slate-500 font-medium block text-xs">Chế độ ôn tập:</span>
              <span className="font-bold text-purple-900">
                {result.config.level === 'all' ? 'Tổng hợp 3 mức độ' : result.config.level}
              </span>
            </div>
            <div>
              <span className="text-slate-500 font-medium block text-xs">Mã phiếu kết quả:</span>
              <span className="font-mono text-xs font-bold text-purple-800">
                PQT12-DD-{Date.now().toString().slice(-6)}
              </span>
            </div>
          </div>
        </div>

        {/* Score and Performance Metric Section */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
          {/* Main 10-point Score */}
          <div className="sm:col-span-1 bg-gradient-to-br from-purple-800 via-purple-900 to-indigo-950 text-white rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-md border-2 border-yellow-400">
            <span className="text-xs font-bold uppercase tracking-wider text-yellow-300 mb-1">
              ĐIỂM SỐ ĐẠT ĐƯỢC
            </span>
            <div className="text-4xl sm:text-5xl font-black text-yellow-300 my-1 drop-shadow">
              {result.score10}
            </div>
            <span className="text-xs text-purple-200 font-semibold">
              Thang điểm 10.0
            </span>
            <div className="mt-2 text-xs font-bold bg-yellow-400 text-purple-950 px-3 py-0.5 rounded-full uppercase tracking-wider">
              Xếp loại: {result.teacherFeedback.gradeText}
            </div>
          </div>

          {/* Detailed Statistics Cards */}
          <div className="sm:col-span-3 grid grid-cols-3 gap-3">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3 sm:p-4 text-center flex flex-col justify-center">
              <span className="text-xs font-bold text-emerald-800 uppercase">Câu trả lời đúng</span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-600 my-0.5">
                {result.correctCount} / {result.totalQuestions}
              </span>
              <span className="text-xs font-semibold text-emerald-700">
                Đạt tỷ lệ: {result.percentage}%
              </span>
            </div>

            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-3 sm:p-4 text-center flex flex-col justify-center">
              <span className="text-xs font-bold text-rose-800 uppercase">Câu trả lời sai</span>
              <span className="text-2xl sm:text-3xl font-black text-rose-600 my-0.5">
                {result.wrongCount} / {result.totalQuestions}
              </span>
              <span className="text-xs font-semibold text-rose-700">
                Cần ôn tập lại
              </span>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 sm:p-4 text-center flex flex-col justify-center">
              <span className="text-xs font-bold text-amber-800 uppercase">Tốc độ trung bình</span>
              <span className="text-xl sm:text-2xl font-black text-amber-700 my-0.5">
                {Math.round(result.totalTimeSeconds / result.totalQuestions)}s
              </span>
              <span className="text-xs font-semibold text-amber-800">
                giây / mỗi câu
              </span>
            </div>
          </div>
        </div>

        {/* Breakdown by 3 Cognitive Levels */}
        <div className="bg-purple-50/70 rounded-2xl p-4 sm:p-5 border border-purple-200 mb-6">
          <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-purple-900 mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-purple-700" />
            <span>Kết quả chi tiết theo 3 mức độ nhận thức:</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                title: 'Mức 1: Nhận biết',
                data: result.levelStats.nhan_biet,
                desc: 'Từ vựng, dấu hiệu thời gian, collocations',
              },
              {
                title: 'Mức 2: Thông hiểu',
                data: result.levelStats.thong_hieu,
                desc: 'Hiểu bối cảnh, chọn when/while, tìm lỗi sai',
              },
              {
                title: 'Mức 3: Vận dụng',
                data: result.levelStats.van_dung,
                desc: 'Phối hợp thì phức tạp, hành động song song',
              },
            ].map((item, idx) => {
              const pct = item.data.total > 0 ? Math.round((item.data.correct / item.data.total) * 100) : 0;
              return (
                <div key={idx} className="bg-white p-3 rounded-xl border border-purple-100 shadow-sm">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1">
                    <span>{item.title}</span>
                    <span className="text-purple-900 font-extrabold">
                      {item.data.correct}/{item.data.total} ({pct}%)
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-1">
                    <div
                      className="h-full bg-purple-700 rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-[11px] text-slate-500 block leading-tight">{item.desc}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TEACHER DUONG DOAN'S OFFICIAL REMARKS & SEAL                              */}
        {/* ========================================================================= */}
        <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white rounded-2xl p-5 sm:p-6 border-2 border-yellow-400 mb-6 shadow-lg relative">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-yellow-400 text-purple-950 flex items-center justify-center font-black">
              ★
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-yellow-300 uppercase tracking-tight">
                NHẬN XÉT & LỜI DẶN DÒ TỪ CÔ DƯƠNG ĐOÀN
              </h3>
              <p className="text-xs text-yellow-200">Đánh giá sư phạm và định hướng ôn tập cho học sinh</p>
            </div>
          </div>

          <div className="bg-purple-950/70 border border-yellow-400/40 rounded-xl p-4 space-y-3">
            <div>
              <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider block mb-1">
                1. Đánh giá kết quả:
              </span>
              <p className="text-sm text-purple-100 leading-relaxed font-medium">
                {result.teacherFeedback.comment}
              </p>
            </div>

            <div className="pt-2 border-t border-purple-800">
              <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider block mb-1">
                2. Lời khuyên & Định hướng ôn tập tiếp theo:
              </span>
              <p className="text-sm text-yellow-100 leading-relaxed font-medium">
                {result.teacherFeedback.advice}
              </p>
            </div>
          </div>

          {/* Signature & Seal Block */}
          <div className="mt-5 flex items-end justify-between pt-3 border-t border-purple-700/60">
            <div className="text-xs text-purple-200">
              <span>Xác thực kết quả bởi hệ thống ôn tập trực tuyến</span>
              <div className="font-mono text-[11px] text-yellow-400/80 mt-0.5">
                CÔ DƯƠNG ĐOÀN • THPT LỚP 12
              </div>
            </div>

            {/* Teacher Stamp Visual */}
            <div className="text-center relative">
              <div className="w-28 h-20 border-2 border-red-500 rounded-lg p-1.5 flex flex-col items-center justify-center rotate-[-3deg] shadow-sm bg-red-500/10">
                <span className="text-[9px] font-black text-red-400 uppercase tracking-wider">
                  ĐÃ DUYỆT ĐÁNH GIÁ
                </span>
                <span className="text-xs font-black text-red-300 mt-0.5">
                  CÔ DƯƠNG ĐOÀN
                </span>
                <span className="text-[8px] font-semibold text-red-400">
                  MÔN TIẾNG ANH
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-xs text-slate-500 pt-3 border-t border-slate-200">
          Phiếu ôn tập môn Tiếng Anh Unit 1 lớp 12 • Biên soạn & Giảng dạy: Cô Dương Đoàn • Tài liệu tự ôn luyện THPT Quốc gia
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DETAILED QUESTION REVIEW & TEACHER EXPLANATION                            */}
      {/* ========================================================================= */}
      <div className="mt-8 bg-purple-900/80 backdrop-blur-md rounded-2xl border-2 border-purple-600/70 p-5 sm:p-7 shadow-xl no-print">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-purple-700">
          <div>
            <h3 className="text-lg sm:text-xl font-black text-yellow-300 flex items-center gap-2">
              <FileText className="w-5 h-5 text-yellow-400" />
              <span>Xem Lại Chi Tiết Từng Câu Hỏi & Đáp Án</span>
            </h3>
            <p className="text-xs text-purple-200 mt-0.5">
              Kèm giải thích cặn kẽ từng câu từ Cô Dương Đoàn
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-purple-950/80 p-1 rounded-xl border border-purple-700">
            <button
              type="button"
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                filterMode === 'all'
                  ? 'bg-yellow-400 text-purple-950 shadow'
                  : 'text-purple-200 hover:text-white'
              }`}
            >
              Tất cả ({result.totalQuestions})
            </button>
            <button
              type="button"
              onClick={() => setFilterMode('correct')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                filterMode === 'correct'
                  ? 'bg-emerald-500 text-white shadow'
                  : 'text-purple-200 hover:text-white'
              }`}
            >
              Làm đúng ({result.correctCount})
            </button>
            <button
              type="button"
              onClick={() => setFilterMode('wrong')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                filterMode === 'wrong'
                  ? 'bg-rose-500 text-white shadow'
                  : 'text-purple-200 hover:text-white'
              }`}
            >
              Làm sai ({result.wrongCount})
            </button>
          </div>
        </div>

        {/* Questions list */}
        <div className="space-y-4">
          {filteredAnswers.length === 0 ? (
            <div className="text-center py-8 text-purple-300 font-medium">
              Không có câu hỏi nào trong danh mục lọc này.
            </div>
          ) : (
            filteredAnswers.map((item, idx) => {
              const q = item.question;
              return (
                <div
                  key={q.id}
                  className={`rounded-xl p-4 sm:p-5 border-2 transition-all ${
                    item.isCorrect
                      ? 'bg-purple-950/60 border-emerald-500/50'
                      : 'bg-purple-950/80 border-rose-500/60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-black px-2.5 py-1 rounded-md ${
                        item.isCorrect ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
                      }`}>
                        {item.isCorrect ? '✓ ĐÚNG' : '✗ SAI'}
                      </span>
                      <span className="text-xs font-bold text-yellow-300 bg-purple-900 px-2 py-0.5 rounded border border-purple-700">
                        {q.code}
                      </span>
                      <span className="text-xs text-purple-300 font-medium">
                        {q.level === 'nhan_biet' ? 'Nhận biết' : q.level === 'thong_hieu' ? 'Thông hiểu' : 'Vận dụng'}
                      </span>
                    </div>

                    <div className="text-xs text-purple-300">
                      Đáp án của em: <strong className={item.isCorrect ? 'text-emerald-400 font-extrabold' : 'text-rose-400 font-extrabold'}>
                        {item.selected || 'Chưa chọn'}
                      </strong>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base font-bold text-yellow-100 mb-3 leading-relaxed">
                    {q.question}
                  </p>

                  {/* Options display */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                    {q.options.map((opt) => {
                      const isCorrectAnswer = opt.key === q.correctAnswer;
                      const isUserSelected = opt.key === item.selected;

                      let optClass = 'bg-purple-900/40 border-purple-800 text-purple-300';
                      if (isCorrectAnswer) {
                        optClass = 'bg-emerald-950/90 border-emerald-400 text-emerald-200 font-bold';
                      } else if (isUserSelected && !item.isCorrect) {
                        optClass = 'bg-rose-950/90 border-rose-500 text-rose-200 font-bold';
                      }

                      return (
                        <div
                          key={opt.key}
                          className={`text-xs sm:text-sm p-2.5 rounded-lg border flex items-center gap-2 ${optClass}`}
                        >
                          <span className="w-5 h-5 rounded flex items-center justify-center font-bold text-xs bg-black/20 shrink-0">
                            {opt.key}
                          </span>
                          <span className="leading-snug">{opt.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Teacher Explanation */}
                  <div className="bg-purple-900/90 rounded-lg p-3 border border-yellow-400/30 text-xs sm:text-sm text-purple-100">
                    <span className="font-bold text-yellow-400 block mb-0.5">
                      💡 Lời giải thích từ Cô Dương Đoàn:
                    </span>
                    <p className="leading-relaxed text-purple-100 font-normal">
                      {q.explanation}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
