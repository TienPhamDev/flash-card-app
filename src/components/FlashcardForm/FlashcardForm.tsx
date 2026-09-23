import "./FlashcardForm.css";
import type { Flashcard } from "../FlashcardCard/FlashcardCard";

interface FlashcardFormProps {
  initialValue?: Flashcard;
  onSubmit: (flashcard: Omit<Flashcard, "id" | "knownCount">) => void;
  onCancel: () => void;
}

function FlashcardForm({ initialValue, onSubmit, onCancel }: FlashcardFormProps) {
  return (
    <form className="flashcard-form">
      {/* TODO: question, answer, category fields + validation messages */}
    </form>
  );
}

export default FlashcardForm;
