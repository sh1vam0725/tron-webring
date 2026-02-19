import { useState } from "react";

interface RetroRobotProps {
  currentUrl: string;
  memberName: string;
}

const RetroRobot = ({ currentUrl, memberName }: RetroRobotProps) => {
  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox="0 0 300 320"
        className="w-64 md:w-80 drop-shadow-[0_0_30px_hsl(120,100%,50%,0.3)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Antenna */}
        <line x1="150" y1="10" x2="150" y2="45" stroke="hsl(120,100%,50%)" strokeWidth="3" />
        <circle cx="150" cy="8" r="6" fill="hsl(45,100%,55%)" className="screen-shimmer" />

        {/* Head */}
        <rect x="60" y="45" width="180" height="120" rx="12" ry="12"
          fill="hsl(120,10%,12%)" stroke="hsl(120,100%,50%)" strokeWidth="2.5" />

        {/* Left eye/screen */}
        <rect x="78" y="65" width="60" height="45" rx="4"
          fill="hsl(120,10%,6%)" stroke="hsl(120,60%,35%)" strokeWidth="1.5" />
        <rect x="80" y="67" width="56" height="41" rx="3"
          fill="hsl(120,30%,10%)" className="screen-shimmer" />
        {/* Screen text - left eye */}
        <text x="108" y="85" textAnchor="middle" fill="hsl(120,100%,60%)"
          fontSize="5" fontFamily="var(--font-mono)" opacity="0.9">
          {currentUrl.replace('https://', '').substring(0, 14)}
        </text>
        <text x="108" y="95" textAnchor="middle" fill="hsl(120,100%,50%)"
          fontSize="4" fontFamily="var(--font-mono)" opacity="0.6">
          {'>'} visiting...
        </text>
        <text x="108" y="103" textAnchor="middle" fill="hsl(45,100%,55%)"
          fontSize="4" fontFamily="var(--font-pixel)" opacity="0.8">
          {memberName.substring(0, 12)}
        </text>

        {/* Right eye/screen */}
        <rect x="162" y="65" width="60" height="45" rx="4"
          fill="hsl(120,10%,6%)" stroke="hsl(120,60%,35%)" strokeWidth="1.5" />
        <rect x="164" y="67" width="56" height="41" rx="3"
          fill="hsl(120,30%,10%)" className="screen-shimmer" />
        {/* Screen text - right eye */}
        <text x="192" y="82" textAnchor="middle" fill="hsl(120,100%,60%)"
          fontSize="4.5" fontFamily="var(--font-mono)" opacity="0.7">
          ╔══════════╗
        </text>
        <text x="192" y="90" textAnchor="middle" fill="hsl(120,100%,50%)"
          fontSize="4.5" fontFamily="var(--font-mono)" opacity="0.7">
          ║ MTE RING ║
        </text>
        <text x="192" y="98" textAnchor="middle" fill="hsl(120,100%,60%)"
          fontSize="4.5" fontFamily="var(--font-mono)" opacity="0.7">
          ╚══════════╝
        </text>

        {/* Mouth - speaker grille */}
        <rect x="110" y="125" width="80" height="25" rx="4"
          fill="hsl(120,10%,8%)" stroke="hsl(120,60%,30%)" strokeWidth="1" />
        {[0, 1, 2, 3, 4].map(i => (
          <line key={i} x1={120 + i * 14} y1="129" x2={120 + i * 14} y2="146"
            stroke="hsl(120,60%,30%)" strokeWidth="1" />
        ))}

        {/* Ear bolts */}
        <circle cx="55" cy="100" r="8" fill="hsl(120,10%,15%)" stroke="hsl(120,100%,50%)" strokeWidth="1.5" />
        <circle cx="245" cy="100" r="8" fill="hsl(120,10%,15%)" stroke="hsl(120,100%,50%)" strokeWidth="1.5" />

        {/* Neck */}
        <rect x="125" y="165" width="50" height="20" rx="3"
          fill="hsl(120,10%,12%)" stroke="hsl(120,60%,30%)" strokeWidth="1.5" />

        {/* Body */}
        <rect x="70" y="185" width="160" height="100" rx="10"
          fill="hsl(120,10%,12%)" stroke="hsl(120,100%,50%)" strokeWidth="2.5" />

        {/* Chest panel */}
        <rect x="100" y="200" width="100" height="50" rx="4"
          fill="hsl(120,10%,8%)" stroke="hsl(120,60%,30%)" strokeWidth="1" />
        {/* UW Gear icon */}
        <text x="150" y="222" textAnchor="middle" fill="hsl(45,100%,55%)"
          fontSize="8" fontFamily="var(--font-pixel)">
          ⚙ UW ⚙
        </text>
        <text x="150" y="238" textAnchor="middle" fill="hsl(120,100%,50%)"
          fontSize="5" fontFamily="var(--font-mono)">
          MECHATRONICS
        </text>

        {/* Chest lights */}
        <circle cx="90" cy="260" r="5" fill="hsl(0,80%,50%)" opacity="0.8" className="screen-shimmer" />
        <circle cx="110" cy="260" r="5" fill="hsl(45,100%,55%)" opacity="0.8" className="screen-shimmer" />
        <circle cx="130" cy="260" r="5" fill="hsl(120,100%,50%)" opacity="0.8" className="screen-shimmer" />

        {/* Arms */}
        <rect x="30" y="195" width="35" height="70" rx="8"
          fill="hsl(120,10%,12%)" stroke="hsl(120,100%,50%)" strokeWidth="2" />
        <rect x="235" y="195" width="35" height="70" rx="8"
          fill="hsl(120,10%,12%)" stroke="hsl(120,100%,50%)" strokeWidth="2" />
        {/* Hands */}
        <circle cx="47" cy="272" r="10" fill="hsl(120,10%,15%)" stroke="hsl(120,60%,30%)" strokeWidth="1.5" />
        <circle cx="253" cy="272" r="10" fill="hsl(120,10%,15%)" stroke="hsl(120,60%,30%)" strokeWidth="1.5" />

        {/* Legs */}
        <rect x="95" y="285" width="30" height="30" rx="4"
          fill="hsl(120,10%,12%)" stroke="hsl(120,100%,50%)" strokeWidth="2" />
        <rect x="175" y="285" width="30" height="30" rx="4"
          fill="hsl(120,10%,12%)" stroke="hsl(120,100%,50%)" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default RetroRobot;
