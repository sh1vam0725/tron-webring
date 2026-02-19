import { Member } from "@/data/members";

interface MemberListProps {
  members: Member[];
  currentIndex: number;
  onSelectMember: (index: number) => void;
}

const MemberList = ({ members, currentIndex, onSelectMember }: MemberListProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-xs md:text-sm font-pixel text-center mb-6 glow-text tracking-widest">
        :: MEMBERS ::
      </h2>
      <div className="border border-border rounded bg-card p-1">
        {/* Header */}
        <div className="grid grid-cols-[2rem_1fr_1fr_auto] gap-2 px-3 py-2 border-b border-border text-muted-foreground text-xs font-mono">
          <span>#</span>
          <span>NAME</span>
          <span>PROGRAM</span>
          <span>LINK</span>
        </div>
        {/* Rows */}
        {members.map((member, i) => (
          <button
            key={member.name}
            onClick={() => onSelectMember(i)}
            className={`w-full grid grid-cols-[2rem_1fr_1fr_auto] gap-2 px-3 py-2 text-xs md:text-sm font-mono text-left transition-colors hover:bg-secondary ${
              i === currentIndex
                ? "bg-secondary text-accent glow-accent"
                : "text-foreground"
            } ${i < members.length - 1 ? "border-b border-border/50" : ""}`}
          >
            <span className="text-muted-foreground">{String(i).padStart(2, '0')}</span>
            <span>{member.name}</span>
            <span className="text-muted-foreground">{member.program}</span>
            <a
              href={member.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-primary hover:text-accent underline underline-offset-2 transition-colors"
            >
              →
            </a>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MemberList;
