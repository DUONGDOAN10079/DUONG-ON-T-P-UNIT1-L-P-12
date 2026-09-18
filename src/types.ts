export type DifficultyLevel = 'nhan_biet' | 'thong_hieu' | 'van_dung';

export type DifficultyFilter = 'all' | 'nhan_biet' | 'thong_hieu' | 'van_dung';

export type CategoryTopic = 'all' | 'reading_vocab' | 'grammar_rules' | 'verb_forms';

export interface Question {
  id: number;
  code: string; // e.g. "Part I - Q1", "Exercise 2 - Q5"
  question: string;
  context?: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  correctAnswerText: string;
  level: DifficultyLevel;
  category: CategoryTopic;
  categoryName: string;
  explanation: string;
}

export interface StudentInfo {
  name: string;
  className: string;
}

export interface QuizConfig {
  student: StudentInfo;
  questionCount: number; // 5, 10, 15, 20 (max 20)
  level: DifficultyFilter;
  topic: CategoryTopic;
}

export interface UserAnswerRecord {
  questionId: number;
  selectedOption: 'A' | 'B' | 'C' | 'D' | null;
  isCorrect: boolean;
  timeSpentSeconds: number;
}

export interface QuizResult {
  student: StudentInfo;
  config: QuizConfig;
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  score10: number; // Score on 10-point scale (e.g. 8.5)
  percentage: number;
  totalTimeSeconds: number;
  completedAt: string;
  levelStats: {
    nhan_biet: { total: number; correct: number };
    thong_hieu: { total: number; correct: number };
    van_dung: { total: number; correct: number };
  };
  answers: {
    question: Question;
    selected: 'A' | 'B' | 'C' | 'D' | null;
    isCorrect: boolean;
  }[];
  teacherFeedback: {
    gradeText: string; // Xuất sắc, Giỏi, Khá, Trung bình, Cần cố gắng
    comment: string;
    advice: string;
  };
}
