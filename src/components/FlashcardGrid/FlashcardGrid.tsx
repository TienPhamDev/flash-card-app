import "./FlashcardGrid.css";
import type { Flashcard } from "../FlashcardCard/FlashcardCard";

interface FlashcardGridProps {
  flashcards: Flashcard[];
}

function FlashcardGrid({ flashcards }: FlashcardGridProps) {
  return (
    <div className="flashcard-grid">
      {/* TODO: render FlashcardCard per item, Load More control */}
    </div>
  );
}

export default FlashcardGrid;
