export type QuestionType = 'MCQ' | 'CODE';

export interface Question {
  id: string;
  text: string;
  type: QuestionType;
  options?: string[]; // For MCQ
  correctOptionIndex?: number; // For MCQ
  codeStarter?: string; // For Code
  validationKeywords?: string[]; // Simple validation for code (contains these strings)
  marks: number;
  explanation?: string;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export interface UserAnswers {
  [questionId: string]: string | number; // number for MCQ index, string for Code
}

export interface ExamState {
  answers: UserAnswers;
  currentSectionIndex: number;
  currentQuestionIndex: number;
  timeLeft: number; // in seconds
  isSubmitted: boolean;
}