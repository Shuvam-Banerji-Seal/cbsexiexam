import React from 'react';
import { Question } from '../types';
import { CheckCircle, Code, HelpCircle } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | number | undefined;
  onAnswerChange: (answer: string | number) => void;
  isReadOnly?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onAnswerChange,
  isReadOnly = false,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6 transition-all hover:shadow-md">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-medium text-slate-800 flex items-start gap-3">
          <span className="flex-shrink-0 bg-slate-100 text-slate-600 rounded-md px-2 py-1 text-sm font-bold mt-0.5">
            Q
          </span>
          {question.text}
        </h3>
        <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-3 py-1 rounded-full whitespace-nowrap">
          {question.marks} Marks
        </span>
      </div>

      <div className="ml-11">
        {question.type === 'MCQ' && question.options && (
          <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              return (
                <label
                  key={index}
                  className={`
                    relative flex items-center p-4 rounded-lg cursor-pointer border-2 transition-all
                    ${isSelected 
                      ? 'border-blue-500 bg-blue-50/50' 
                      : 'border-slate-100 hover:border-slate-300 bg-slate-50'}
                    ${isReadOnly ? 'cursor-default pointer-events-none' : ''}
                  `}
                >
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    className="hidden"
                    checked={isSelected}
                    onChange={() => !isReadOnly && onAnswerChange(index)}
                    disabled={isReadOnly}
                  />
                  <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${isSelected ? 'border-blue-500' : 'border-slate-300'}`}>
                    {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />}
                  </div>
                  <span className={`text-sm ${isSelected ? 'text-blue-900 font-medium' : 'text-slate-600'}`}>
                    {option}
                  </span>
                </label>
              );
            })}
          </div>
        )}

        {question.type === 'CODE' && (
          <div className="mt-2">
             <div className="flex items-center gap-2 mb-2 text-sm text-slate-500">
                <Code className="w-4 h-4" />
                <span>Python Editor</span>
             </div>
            <textarea
              className="w-full h-48 font-mono text-sm bg-slate-900 text-slate-50 p-4 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              placeholder="# Write your Python code here..."
              value={(selectedAnswer as string) || question.codeStarter || ''}
              onChange={(e) => !isReadOnly && onAnswerChange(e.target.value)}
              disabled={isReadOnly}
              spellCheck={false}
            />
            {!isReadOnly && (
                <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                    <HelpCircle className="w-3 h-3" />
                    Key logic checks will be applied to your code upon submission.
                </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};