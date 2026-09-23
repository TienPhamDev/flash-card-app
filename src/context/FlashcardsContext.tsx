import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { Flashcard } from "../components/FlashcardCard/FlashcardCard";

interface FilterState {
  selectedCategories: string[];
  hideMastered: boolean;
  shuffled: boolean;
}

interface FlashcardsState {
  flashcards: Flashcard[];
  filters: FilterState;
}

type FlashcardsAction =
  | { type: "ADD_CARD"; payload: Omit<Flashcard, "id" | "knownCount"> }
  | { type: "UPDATE_CARD"; payload: Flashcard }
  | { type: "DELETE_CARD"; payload: { id: string } }
  | { type: "MARK_KNOWN"; payload: { id: string } }
  | { type: "RESET_PROGRESS"; payload: { id: string } }
  | { type: "SET_SELECTED_CATEGORIES"; payload: { categories: string[] } }
  | { type: "SET_HIDE_MASTERED"; payload: { hideMastered: boolean } }
  | { type: "SHUFFLE" };

interface FlashcardsContextValue extends FlashcardsState {
  dispatch: React.Dispatch<FlashcardsAction>;
}

const initialState: FlashcardsState = {
  flashcards: [],
  filters: {
    selectedCategories: [],
    hideMastered: false,
    shuffled: false,
  },
};

function flashcardsReducer(state: FlashcardsState, action: FlashcardsAction): FlashcardsState {
  switch (action.type) {
    case "ADD_CARD":
      // TODO
      return state;
    case "UPDATE_CARD":
      // TODO
      return state;
    case "DELETE_CARD":
      // TODO
      return state;
    case "MARK_KNOWN":
      // TODO
      return state;
    case "RESET_PROGRESS":
      // TODO
      return state;
    case "SET_SELECTED_CATEGORIES":
      // TODO
      return state;
    case "SET_HIDE_MASTERED":
      // TODO
      return state;
    case "SHUFFLE":
      // TODO
      return state;
    default:
      return state;
  }
}

const FlashcardsContext = createContext<FlashcardsContextValue | undefined>(undefined);

export function FlashcardsProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(flashcardsReducer, initialState);

  return (
    <FlashcardsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FlashcardsContext.Provider>
  );
}

export function useFlashcards() {
  const context = useContext(FlashcardsContext);
  if (context === undefined) {
    throw new Error("useFlashcards must be used within a FlashcardsProvider");
  }
  return context;
}
