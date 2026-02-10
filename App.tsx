import React, { useState, useEffect, useMemo } from 'react';
import { Clock, Save, FileText, CheckCircle, Award, AlertTriangle, RotateCcw, Lock } from 'lucide-react';
import { EXAM_DATA } from './data';
import { QuestionCard } from './components/QuestionCard';
import { ExamState, UserAnswers, Question } from './types';

// Constants
const EXAM_DURATION = 3 * 60 * 60; // 3 hours in seconds
const STORAGE_KEY = 'cbse-exam-state-v1';
const LOCKED_QUESTIONS_KEY = 'cbse-exam-locked-v1';

export default function App() {
  const [examState, setExamState] = useState<ExamState>({
    answers: {},
    currentSectionIndex: 0,
    currentQuestionIndex: 0,
    timeLeft: EXAM_DURATION,
    isSubmitted: false
  });

  const [lockedQuestions, setLockedQuestions] = useState<Set<string>>(new Set());
  const [hasLoaded, setHasLoaded] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setExamState(parsed);
      } catch (e) {
        console.error("Failed to load save state", e);
      }
    }
    
    const savedLocked = localStorage.getItem(LOCKED_QUESTIONS_KEY);
    if (savedLocked) {
      try {
        const parsed = JSON.parse(savedLocked);
        setLockedQuestions(new Set(parsed));
      } catch (e) {
        console.error("Failed to load locked questions", e);
      }
    }
    
    setHasLoaded(true);
  }, []);

  // Timer Effect
  useEffect(() => {
    if (!hasLoaded || examState.isSubmitted) return;

    const timer = setInterval(() => {
      setExamState(prev => {
        if (prev.timeLeft <= 0) {
          clearInterval(timer);
          return { ...prev, isSubmitted: true, timeLeft: 0 };
        }
        const newState = { ...prev, timeLeft: prev.timeLeft - 1 };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
        return newState;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [hasLoaded, examState.isSubmitted]);

  // Handler for saving answers
  const handleAnswerChange = (questionId: string, value: string | number) => {
    if (lockedQuestions.has(questionId)) {
      return; // Prevent changes to locked questions
    }
    
    setExamState(prev => {
      const newState = {
        ...prev,
        answers: { ...prev.answers, [questionId]: value }
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
      return newState;
    });
  };

  const handleLockToggle = (questionId: string) => {
    setLockedQuestions(prev => {
      const newLocked = new Set(prev);
      if (newLocked.has(questionId)) {
        newLocked.delete(questionId);
      } else {
        newLocked.add(questionId);
      }
      localStorage.setItem(LOCKED_QUESTIONS_KEY, JSON.stringify(Array.from(newLocked)));
      return newLocked;
    });
  };

  const handleSubmit = () => {
    if (window.confirm("Are you sure you want to submit? You cannot change answers after submission.")) {
      setExamState(prev => ({ ...prev, isSubmitted: true }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...examState, isSubmitted: true }));
      window.scrollTo(0, 0);
    }
  };

  const handleReset = () => {
    if (window.confirm("This will clear all progress and restart the exam. Are you sure?")) {
      const cleanState = {
        answers: {},
        currentSectionIndex: 0,
        currentQuestionIndex: 0,
        timeLeft: EXAM_DURATION,
        isSubmitted: false
      };
      setExamState(cleanState);
      setLockedQuestions(new Set());
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cleanState));
      localStorage.removeItem(LOCKED_QUESTIONS_KEY);
      window.scrollTo(0, 0);
    }
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  // Score Calculation
  const resultData = useMemo(() => {
    if (!examState.isSubmitted) return null;

    let totalScore = 0;
    let maxScore = 0;
    const details: any[] = [];

    EXAM_DATA.forEach(section => {
      section.questions.forEach(q => {
        maxScore += q.marks;
        const userAnswer = examState.answers[q.id];
        let isCorrect = false;
        let awardedMarks = 0;

        if (q.type === 'MCQ') {
          if (userAnswer === q.correctOptionIndex) {
            isCorrect = true;
            awardedMarks = q.marks;
          }
        } else if (q.type === 'CODE') {
          // Simple heuristic validation for demo purposes
          const codeStr = (userAnswer as string || '').toLowerCase();
          const keywords = q.validationKeywords || [];
          // If keywords are present, we give marks.
          // This is a simplified check.
          const matches = keywords.filter(k => codeStr.includes(k.toLowerCase().replace(/\s/g, ''))); // simple whitespace strip for check
          // A little lenient: if user has > 50% of keywords or strictly matches key structures
          // Actually, let's just check if *any* significant logic is found for partial marks or *all* for full?
          // Let's go with: if contains at least one of the complex keywords, give full marks for this mock.
          if (matches.length > 0) {
             isCorrect = true;
             awardedMarks = q.marks;
          }
        }

        totalScore += awardedMarks;
        details.push({
          question: q,
          userAnswer,
          isCorrect,
          awardedMarks
        });
      });
    });

    return { totalScore, maxScore, details };
  }, [examState.isSubmitted, examState.answers]);

  if (!hasLoaded) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="text-blue-600 w-6 h-6" />
            <h1 className="font-bold text-slate-800 hidden sm:block">CBSE Class XI Computer Science</h1>
             <h1 className="font-bold text-slate-800 sm:hidden">CS Exam</h1>
          </div>

          {!examState.isSubmitted ? (
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 font-mono text-lg font-medium ${examState.timeLeft < 300 ? 'text-red-600 animate-pulse' : 'text-slate-700'}`}>
                <Clock className="w-5 h-5" />
                {formatTime(examState.timeLeft)}
              </div>
              <button
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
              >
                Submit Exam
              </button>
            </div>
          ) : (
            <button
                onClick={handleReset}
                className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
                <RotateCcw className="w-4 h-4" />
                <span className="text-sm font-medium">Restart</span>
            </button>
          )}
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Exam Body */}
        {!examState.isSubmitted ? (
          <div className="space-y-12">
            {EXAM_DATA.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-20">
                <div className="mb-6 border-b border-slate-200 pb-4">
                    <h2 className="text-2xl font-bold text-slate-800">{section.title}</h2>
                    <p className="text-slate-500 mt-1">{section.description}</p>
                </div>
                <div className="space-y-6">
                  {section.questions.map((q) => (
                    <QuestionCard
                      key={q.id}
                      question={q}
                      selectedAnswer={examState.answers[q.id]}
                      onAnswerChange={(val) => handleAnswerChange(q.id, val)}
                      isLocked={lockedQuestions.has(q.id)}
                      onLockToggle={() => handleLockToggle(q.id)}
                    />
                  ))}
                </div>
              </section>
            ))}

            <div className="flex justify-end pt-8 border-t border-slate-200">
                <button
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                >
                Final Submit
                </button>
            </div>
          </div>
        ) : (
          /* Results View */
          <div className="animate-fade-in space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                    <Award className="w-10 h-10 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Exam Completed</h2>
                <p className="text-slate-500 mb-6">Here is your performance summary</p>
                
                <div className="flex justify-center items-end gap-2 mb-8">
                    <span className="text-6xl font-black text-slate-900">{resultData?.totalScore}</span>
                    <span className="text-2xl font-medium text-slate-400 mb-2">/ {resultData?.maxScore}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                        <div className="text-green-600 font-bold text-xl">{Math.round((resultData!.totalScore / resultData!.maxScore) * 100)}%</div>
                        <div className="text-green-800 text-xs uppercase font-bold tracking-wide mt-1">Percentage</div>
                    </div>
                     <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                        <div className="text-blue-600 font-bold text-xl">{EXAM_DATA.reduce((acc, s) => acc + s.questions.length, 0)}</div>
                        <div className="text-blue-800 text-xs uppercase font-bold tracking-wide mt-1">Total Questions</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                        <div className="text-purple-600 font-bold text-xl">{formatTime(EXAM_DURATION - examState.timeLeft)}</div>
                        <div className="text-purple-800 text-xs uppercase font-bold tracking-wide mt-1">Time Taken</div>
                    </div>
                </div>
            </div>

            {/* Detailed Analysis */}
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-800 px-2">Detailed Analysis</h3>
                {resultData?.details.map((item, idx) => (
                    <div key={idx} className={`bg-white rounded-xl p-6 border-l-4 shadow-sm ${item.isCorrect ? 'border-l-green-500' : 'border-l-red-500'}`}>
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Question {idx + 1}</span>
                                <h4 className="text-lg font-medium text-slate-900 mt-1">{item.question.text}</h4>
                            </div>
                            <div className="flex-shrink-0">
                                {item.isCorrect ? (
                                    <span className="flex items-center gap-1 text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full text-sm">
                                        <CheckCircle className="w-4 h-4" /> +{item.awardedMarks}
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-1 text-red-600 font-bold bg-red-50 px-3 py-1 rounded-full text-sm">
                                        <AlertTriangle className="w-4 h-4" /> 0 / {item.question.marks}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="space-y-3 pl-4 border-l-2 border-slate-100">
                           <div>
                                <p className="text-xs text-slate-500 uppercase font-bold mb-1">Your Answer</p>
                                {item.question.type === 'MCQ' ? (
                                    <p className={`text-sm ${item.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                                        {item.userAnswer !== undefined ? item.question.options[item.userAnswer] : <span className="italic text-slate-400">Not Answered</span>}
                                    </p>
                                ) : (
                                    <pre className="text-xs bg-slate-900 text-slate-300 p-3 rounded-md overflow-x-auto">
                                        {item.userAnswer || "// No code written"}
                                    </pre>
                                )}
                           </div>
                           
                           {!item.isCorrect && (
                               <div className="mt-2">
                                    <p className="text-xs text-slate-500 uppercase font-bold mb-1">Correct Answer / Reference</p>
                                    {item.question.type === 'MCQ' ? (
                                        <p className="text-sm text-slate-700 font-medium">
                                            {item.question.options[item.question.correctOptionIndex]}
                                        </p>
                                    ) : (
                                         <div className="text-sm text-slate-600">
                                            <p className="mb-1">Code should contain logic like:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {item.question.validationKeywords?.map((k: string) => (
                                                    <span key={k} className="bg-slate-100 px-2 py-1 rounded text-xs font-mono border border-slate-200">{k}</span>
                                                ))}
                                            </div>
                                         </div>
                                    )}
                               </div>
                           )}

                           {item.question.explanation && (
                               <div className="mt-3 bg-blue-50/50 p-3 rounded text-sm text-blue-800">
                                   <span className="font-bold mr-2">Explanation:</span>
                                   {item.question.explanation}
                               </div>
                           )}
                        </div>
                    </div>
                ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}