import "./StatsPanel.css";

interface StatsPanelProps {
  total: number;
  mastered: number;
  inProgress: number;
  notStarted: number;
}

function StatsPanel({ total, mastered, inProgress, notStarted }: StatsPanelProps) {
  return (
    <div className="stats-panel">
      {/* TODO: total, mastered, in progress, not started counts */}
    </div>
  );
}

export default StatsPanel;
