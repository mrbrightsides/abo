import React, { useState } from 'react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/buyaData';
import { X, CheckCircle, AlertCircle, Award, RotateCcw, ChevronRight } from 'lucide-react';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const currentQuestion: QuizQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const isSelected = selectedAnswers[currentQuestion.id] !== undefined;
  const currentSelected = selectedAnswers[currentQuestion.id];
  const isCorrect = currentSelected === currentQuestion.correctAnswer;

  const handleSelectOption = (optionIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionIndex
    }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setShowExplanation(false);
    setIsCompleted(false);
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const finalScore = calculateScore();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-xs">
      <div className="bg-[#FBF9F5] max-w-xl w-full p-6 sm:p-8 border border-stone-300 rounded-lg shadow-2xl relative space-y-6 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-500 hover:text-stone-900 rounded-full hover:bg-stone-200 transition-colors cursor-pointer"
          aria-label="Tutup kuis"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCompleted ? (
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs text-stone-500 uppercase tracking-wider font-semibold">
                <span>Uji Wawasan Sejarah Buya Rasyid</span>
                <span className="font-mono">
                  Soal {currentQuestionIndex + 1} dari {QUIZ_QUESTIONS.length}
                </span>
              </div>
              <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-800 h-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 leading-snug">
                {currentQuestion.question}
              </h3>
            </div>

            {/* Multiple Choice Options */}
            <div className="space-y-2.5">
              {currentQuestion.options.map((option, idx) => {
                let optionStyle = "border-stone-200 bg-white hover:border-emerald-800/60 text-stone-800";
                if (showExplanation) {
                  if (idx === currentQuestion.correctAnswer) {
                    optionStyle = "border-emerald-700 bg-emerald-50 text-emerald-950 font-medium";
                  } else if (currentSelected === idx) {
                    optionStyle = "border-rose-400 bg-rose-50 text-rose-950";
                  } else {
                    optionStyle = "border-stone-200 bg-stone-100 opacity-60 text-stone-500";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={showExplanation}
                    className={`w-full text-left p-3.5 rounded-lg border text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${optionStyle}`}
                  >
                    <span className="w-5 h-5 rounded-full border border-stone-300 flex items-center justify-center shrink-0 text-xs font-mono font-medium">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-snug">{option}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanation card after picking */}
            {showExplanation && (
              <div
                className={`p-4 rounded-lg border text-xs leading-relaxed ${
                  isCorrect
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                    : 'bg-amber-50 border-amber-300 text-amber-950'
                }`}
              >
                <div className="flex items-center gap-1.5 font-semibold mb-1">
                  {isCorrect ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-emerald-700" />
                      <span>Jawaban Anda Benar!</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-4 h-4 text-amber-800" />
                      <span>Jawaban Belum Tepat</span>
                    </>
                  )}
                </div>
                <p>{currentQuestion.explanation}</p>
              </div>
            )}

            {/* Next button */}
            {showExplanation && (
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-900 hover:bg-emerald-950 text-white text-xs font-medium rounded-md transition-colors cursor-pointer"
                >
                  <span>
                    {currentQuestionIndex < QUIZ_QUESTIONS.length - 1
                      ? 'Lanjut ke Soal Berikutnya'
                      : 'Lihat Hasil Akhir'}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Completion Screen */
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-800">
              <Award className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                Kuis Sejarah Selesai
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Skor Anda: {finalScore} / {QUIZ_QUESTIONS.length}
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                {finalScore === 5
                  ? 'Luar biasa! Pemahaman Anda mengenai sejarah hidup dan perjuangan Buya H.M. Rasyid Thalib sangat mendalam.'
                  : finalScore >= 3
                  ? 'Bagus sekali! Anda telah menyerap fakta-fakta penting mengenai keteladanan dakwah dan kepemimpinan Buya Rasyid.'
                  : 'Terus perdalam wawasan sejarah tokoh-tokoh pembaru Islam kita. Silakan membaca kembali bagian biografi.'}
              </p>
            </div>

            <div className="p-4 bg-stone-100 rounded-lg text-left text-xs space-y-2 text-stone-700">
              <div className="font-semibold text-stone-900">Intisari Memorabilia:</div>
              <ul className="list-disc list-inside space-y-1 text-stone-600">
                <li>Lahir 1915 di Danau Maninjau & lulus Thawalib Padang Panjang.</li>
                <li>Mengabdi di Mu'allimin Bengkulu 1938 & Kantor Penerangan.</li>
                <li>19 tahun (1975–1995) memimpin Muhammadiyah Sumatera Selatan.</li>
                <li>Pionir dakwah pembinaan muslim Tionghoa bersama KH Abdul Halim.</li>
              </ul>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-stone-700 bg-stone-200 hover:bg-stone-300 rounded-md cursor-pointer transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Ulangi Kuis</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2 text-xs font-medium text-white bg-emerald-900 hover:bg-emerald-950 rounded-md cursor-pointer transition-colors"
              >
                Selesai
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
