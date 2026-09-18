import React, { useState } from 'react';
import { QuizConfig, Question, QuizResult, DifficultyLevel } from './types';
import { QUESTIONS_BANK } from './data/questions';
import { calculateQuizResult } from './utils/feedback';
import { soundEffects } from './utils/audio';
import { Header } from './components/Header';
import { StudentSetup } from './components/StudentSetup';
import { QuizView } from './components/QuizView';
import { ResultReport } from './components/ResultReport';

export default function App() {
  const [step, setStep] = useState<'setup' | 'quiz' | 'report'>('setup');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [config, setConfig] = useState<QuizConfig | null>(null);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  // Toggle sound
  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundEffects.enabled = next;
  };

  // Start Quiz generator based on student configuration
  const handleStartQuiz = (selectedConfig: QuizConfig) => {
    setConfig(selectedConfig);

    // 1. Filter by topic
    let pool = QUESTIONS_BANK.filter((q) => {
      if (selectedConfig.topic === 'all') return true;
      return q.category === selectedConfig.topic;
    });

    // 2. Filter by level
    let selected: Question[] = [];
    const count = Math.min(selectedConfig.questionCount, 20);

    if (selectedConfig.level === 'all') {
      // "Tổng hợp 3 mức độ": Distribute questions proportionally across 3 levels
      const nbPool = pool.filter((q) => q.level === 'nhan_biet');
      const thPool = pool.filter((q) => q.level === 'thong_hieu');
      const vdPool = pool.filter((q) => q.level === 'van_dung');

      // Shuffle pools
      const shuffle = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

      const nbShuffled = shuffle(nbPool);
      const thShuffled = shuffle(thPool);
      const vdShuffled = shuffle(vdPool);

      // Target distribution roughly 35% nhan_biet, 35% thong_hieu, 30% van_dung
      const nbCount = Math.round(count * 0.35);
      const thCount = Math.round(count * 0.35);
      const vdCount = count - nbCount - thCount;

      const pickNb = nbShuffled.slice(0, nbCount);
      const pickTh = thShuffled.slice(0, thCount);
      const pickVd = vdShuffled.slice(0, vdCount);

      let combined = [...pickNb, ...pickTh, ...pickVd];

      // If combined doesn't have enough due to topic filter, top up from remaining
      if (combined.length < count) {
        const remaining = pool.filter((q) => !combined.some((c) => c.id === q.id));
        combined = [...combined, ...shuffle(remaining).slice(0, count - combined.length)];
      }

      selected = shuffle(combined).slice(0, count);
    } else {
      // Specific level
      const levelPool = pool.filter((q) => q.level === selectedConfig.level);
      const shuffled = [...levelPool].sort(() => Math.random() - 0.5);
      selected = shuffled.slice(0, count);

      // If not enough questions in this level for this topic, fallback to whole pool
      if (selected.length < count) {
        const remaining = pool.filter((q) => !selected.some((s) => s.id === q.id));
        const extra = [...remaining].sort(() => Math.random() - 0.5).slice(0, count - selected.length);
        selected = [...selected, ...extra];
      }
    }

    // Safety fallback
    if (selected.length === 0) {
      selected = QUESTIONS_BANK.slice(0, Math.min(20, count));
    }

    setActiveQuestions(selected);
    setStep('quiz');
  };

  // Finish Quiz and show result
  const handleFinishQuiz = (
    userAnswers: Record<number, 'A' | 'B' | 'C' | 'D' | null>,
    totalSeconds: number
  ) => {
    if (!config) return;

    const result = calculateQuizResult(
      config.student,
      config,
      activeQuestions,
      userAnswers,
      totalSeconds
    );

    setQuizResult(result);
    setStep('report');
  };

  // Retake current quiz questions
  const handleRetake = () => {
    setStep('quiz');
  };

  // New Quiz with new setup
  const handleNewQuiz = () => {
    setStep('setup');
    setQuizResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-indigo-950 text-slate-100 flex flex-col selection:bg-yellow-400 selection:text-purple-950">
      {/* App Header */}
      <Header
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onResetToHome={() => {
          if (step !== 'setup') {
            if (window.confirm('Em có muốn quay về màn hình chọn bài không?')) {
              setStep('setup');
            }
          }
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center py-4">
        {step === 'setup' && (
          <StudentSetup 
            onStartQuiz={handleStartQuiz} 
            initialConfig={config || undefined} 
          />
        )}

        {step === 'quiz' && config && (
          <QuizView
            config={config}
            questions={activeQuestions}
            onFinishQuiz={handleFinishQuiz}
            onExit={() => setStep('setup')}
          />
        )}

        {step === 'report' && quizResult && (
          <ResultReport
            result={quizResult}
            onRetake={handleRetake}
            onNewQuiz={handleNewQuiz}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="w-full bg-purple-950/90 border-t border-purple-800/80 py-4 px-4 text-center text-xs text-purple-300 no-print">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-semibold text-yellow-300">
            PHIẾU ÔN TẬP MÔN TIẾNG ANH UNIT 1 LỚP 12 • BIÊN SOẠN VÀ GIẢNG DẠY: CÔ DƯƠNG ĐOÀN
          </p>
          <p className="text-purple-300">
            Ứng dụng ôn luyện kiến thức ngữ pháp & từ vựng THPT Quốc gia
          </p>
        </div>
      </footer>
    </div>
  );
}
