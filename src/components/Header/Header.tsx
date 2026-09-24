import "./Header.css";

export type View = "study" | "all";

interface HeaderProps {
  view: View;
  onViewChange: (view: View) => void;
}

function Header({ view, onViewChange }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__brand">
        <img
          className="header__logo"
          src="/assets/images/logo-small.svg"
          alt=""
          width={32}
          height={32}
        />
        <span className="header__title">Flashcard</span>
      </div>

      <div className="header__toggle" role="group" aria-label="View mode">
        <button
          type="button"
          className="header__toggle-btn"
          aria-pressed={view === "study"}
          onClick={() => onViewChange("study")}
        >
          Study Mode
        </button>
        <button
          type="button"
          className="header__toggle-btn"
          aria-pressed={view === "all"}
          onClick={() => onViewChange("all")}
        >
          All Cards
        </button>
      </div>
    </header>
  );
}

export default Header;
