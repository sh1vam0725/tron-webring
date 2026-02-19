interface WebringNavProps {
  onPrev: () => void;
  onNext: () => void;
  onRandom: () => void;
}

const WebringNav = ({ onPrev, onNext, onRandom }: WebringNavProps) => {
  return (
    <div className="flex items-center gap-4 font-mono text-sm">
      <button
        onClick={onPrev}
        className="px-4 py-2 border border-border rounded bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors glow-text"
      >
        ← PREV
      </button>
      <button
        onClick={onRandom}
        className="px-4 py-2 border border-accent/50 rounded bg-card text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        ⚄ RANDOM
      </button>
      <button
        onClick={onNext}
        className="px-4 py-2 border border-border rounded bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors glow-text"
      >
        NEXT →
      </button>
    </div>
  );
};

export default WebringNav;
