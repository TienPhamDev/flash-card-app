import "./FlashcardCard.css";

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: string;
  knownCount: number;
}

interface FlashcardCardProps {
  flashcard: Flashcard;
}

function FlashcardCard({ flashcard }: FlashcardCardProps) {
  return (
    <div className="flashcard-card">
      {/* TODO: render question, answer, category, mastery progress */}
    </div>
  );
}

export default FlashcardCard;
