import { Member } from "@/data/members";

interface MemberListProps {
  members: Member[];
  showResultCount?: boolean;
  totalCount?: number;
  onSelectMember?: (member: Member) => void;
}

const MemberList = ({ members, showResultCount, totalCount, onSelectMember }: MemberListProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-center gap-3 mb-6">
        {showResultCount && (
          <span className="text-[6px] font-pixel text-muted-foreground tracking-wider">
            ({members.length} of {totalCount})
          </span>
        )}
      </div>
      {members.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground font-pixel text-[6px] tracking-wider">
          NO MEMBERS FOUND
        </div>
      ) : (
        <div className="space-y-1">
          {/* Header Row */}
          <div className="grid grid-cols-[2fr_auto_2fr] gap-4 px-3 py-2 text-[6px] font-pixel text-muted-foreground tracking-wider">
            <span>NAME</span>
            <span>YEAR</span>
            <span className="ml-8">URL</span>
          </div>
          {members.map((member) => (
            <div
              key={member.name}
              className="grid grid-cols-[2fr_auto_2fr] gap-4 px-3 py-2 text-[6px] md:text-[8px] font-pixel transition-colors hover:bg-secondary/50 text-foreground tracking-wider"
            >
              <span className="truncate">{member.name}</span>
              <span className="text-muted-foreground whitespace-nowrap">{member.program || member.grad_year || '-'}</span>
              <a
                href={member.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-primary underline underline-offset-2 transition-colors truncate ml-8 hover:glow-text"
              >
                {member.url}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MemberList;
