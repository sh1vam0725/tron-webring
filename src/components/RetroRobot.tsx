interface RetroRobotProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  onRandom: () => void;
  memberName?: string;
  memberYear?: string;
  resultCount?: number;
}

const RetroRobot = ({ searchValue, onSearchChange, onRandom, memberName, memberYear, resultCount }: RetroRobotProps) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <svg
        viewBox="0 0 280 200"
        className="w-60 md:w-72 drop-shadow-[0_0_40px_hsl(270,70%,55%,0.3)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Antenna */}
        <line x1="140" y1="5" x2="140" y2="35" stroke="hsl(45,100%,50%)" strokeWidth="3" />
        <circle cx="140" cy="4" r="5" fill="hsl(270,70%,55%)" className="screen-shimmer" />

        {/* Head */}
        <rect x="40" y="35" width="200" height="130" rx="14"
          fill="hsl(0,0%,7%)" stroke="hsl(270,70%,55%)" strokeWidth="2.5" />
        {/* Inner border gold */}
        <rect x="46" y="41" width="188" height="118" rx="10"
          fill="none" stroke="hsl(45,100%,50%)" strokeWidth="1" opacity="0.3" />

        {/* Single screen */}
        <rect x="60" y="55" width="160" height="80" rx="6"
          fill="hsl(0,0%,3%)" stroke="hsl(45,100%,50%)" strokeWidth="1.5" />
        <rect x="63" y="58" width="154" height="74" rx="4"
          fill="hsl(270,20%,8%)" className="screen-shimmer" />

        {/* Screen content - conditional rendering */}
        {memberName ? (
          <>
            <text
              x="140"
              y="88"
              textAnchor="middle"
              fill="hsl(45,100%,60%)"
              fontSize={memberName.length > 12 ? "8" : memberName.length > 8 ? "9" : "11"}
              fontFamily="'Press Start 2P', monospace"
              letterSpacing={memberName.length > 12 ? "1" : "2"}
              textLength={memberName.length > 15 ? "145" : undefined}
              lengthAdjust={memberName.length > 15 ? "spacingAndGlyphs" : undefined}
            >
              {memberName.toUpperCase()}
            </text>
            <text
              x="140"
              y="115"
              textAnchor="middle"
              fill="hsl(270,70%,65%)"
              fontSize="7"
              fontFamily="'Press Start 2P', monospace"
              opacity="0.8"
              textLength={memberYear && memberYear.length > 20 ? "145" : undefined}
              lengthAdjust={memberYear && memberYear.length > 20 ? "spacingAndGlyphs" : undefined}
            >
              {memberYear}
            </text>
          </>
        ) : resultCount !== undefined ? (
          <>
            <text x="140" y="92" textAnchor="middle" fill="hsl(45,100%,60%)"
              fontSize="20" fontFamily="'Press Start 2P', monospace" fontWeight="900">
              {resultCount}
            </text>
            <text x="140" y="115" textAnchor="middle" fill="hsl(270,70%,65%)"
              fontSize="8" fontFamily="'Press Start 2P', monospace">
              RESULTS
            </text>
          </>
        ) : null}

        {/* Jaw lights */}
        <circle cx="110" cy="150" r="4" fill="hsl(45,100%,50%)" opacity="0.7" className="screen-shimmer" />
        <circle cx="140" cy="150" r="4" fill="hsl(270,70%,55%)" opacity="0.7" className="screen-shimmer" />
        <circle cx="170" cy="150" r="4" fill="hsl(45,100%,50%)" opacity="0.7" className="screen-shimmer" />

        {/* Neck stub */}
        <rect x="115" y="165" width="50" height="14" rx="3"
          fill="hsl(0,0%,7%)" stroke="hsl(270,40%,30%)" strokeWidth="1.5" />
        <line x1="115" y1="179" x2="165" y2="179" stroke="hsl(45,100%,50%)" strokeWidth="1" opacity="0.4" />
      </svg>

      {/* Random button and Search input */}
      <div className="w-full max-w-2xl flex items-center gap-3 px-4">
        <button
          onClick={onRandom}
          className="w-12 h-11 border-2 border-accent/50 rounded bg-card text-accent hover:bg-accent hover:text-accent-foreground transition-all shadow-lg hover:shadow-accent/20 flex items-center justify-center flex-shrink-0"
          title="Random Member"
        >
          <img
            src={`${import.meta.env.BASE_URL}shuffle.png`}
            alt="Shuffle"
            className="w-5 h-5"
          />
        </button>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="SEARCH..."
          className="flex-1 px-4 py-3 bg-card border-2 border-border rounded font-pixel text-[8px] md:text-[10px] text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors glow-border tracking-wider"
        />
      </div>
    </div>
  );
};

export default RetroRobot;
