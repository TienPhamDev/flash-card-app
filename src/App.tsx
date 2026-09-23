import { useState } from "react";
import Header, { type View } from "./components/Header";
import "./App.css";

function App() {
  const [view, setView] = useState<View>("study");

  return (
    <div className="app">
      <Header view={view} onViewChange={setView} />
    </div>
  );
}

export default App;
