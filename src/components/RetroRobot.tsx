interface RetroRobotProps {
  memberName: string;
  memberYear: string;
}

const RetroRobot = ({ memberName, memberYear }: RetroRobotProps) => {
  return (
    <div className="flex flex-col items-center">
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

        {/* Screen content */}
        <text x="140" y="88" textAnchor="middle" fill="hsl(45,100%,60%)"
          fontSize="11" fontFamily="var(--font-pixel)" letterSpacing="2">
          {memberName.toUpperCase()}
        </text>
        <text x="140" y="115" textAnchor="middle" fill="hsl(270,70%,65%)"
          fontSize="8" fontFamily="var(--font-mono)" opacity="0.8">
          {memberYear}
        </text>

        {/* Ear bolts */}
        <circle cx="34" cy="100" r="9" fill="hsl(0,0%,10%)" stroke="hsl(45,100%,50%)" strokeWidth="1.5" />
        <circle cx="246" cy="100" r="9" fill="hsl(0,0%,10%)" stroke="hsl(45,100%,50%)" strokeWidth="1.5" />

        {/* Jaw lights */}
        <circle cx="110" cy="150" r="4" fill="hsl(45,100%,50%)" opacity="0.7" className="screen-shimmer" />
        <circle cx="140" cy="150" r="4" fill="hsl(270,70%,55%)" opacity="0.7" className="screen-shimmer" />
        <circle cx="170" cy="150" r="4" fill="hsl(45,100%,50%)" opacity="0.7" className="screen-shimmer" />

        {/* Neck stub */}
        <rect x="115" y="165" width="50" height="14" rx="3"
          fill="hsl(0,0%,7%)" stroke="hsl(270,40%,30%)" strokeWidth="1.5" />
        <line x1="115" y1="179" x2="165" y2="179" stroke="hsl(45,100%,50%)" strokeWidth="1" opacity="0.4" />
      </svg>
    </div>
  );
};

export default RetroRobot;
