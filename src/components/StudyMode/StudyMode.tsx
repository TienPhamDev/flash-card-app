import "./StudyMode.css";
import type { Flashcard } from "../FlashcardCard/FlashcardCard";

interface StudyModeProps {
  flashcards: Flashcard[];
}

function StudyMode({ flashcards }: StudyModeProps) {
  return (
    <div className="study-mode">
      {/* TODO: current card, flip-to-reveal, Previous/Next, I Know This, card X of Y */}
    </div>
  );
}

export default StudyMode;
