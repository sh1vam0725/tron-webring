import { useState, useCallback, useMemo } from "react";
import RetroRobot from "@/components/RetroRobot";
import MemberList from "@/components/MemberList";
import { members } from "@/data/members";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMember, setSelectedMember] = useState<typeof members[0] | null>(null);

  const filteredMembers = useMemo(() => {
    if (!searchQuery.trim()) return members;

    const query = searchQuery.toLowerCase();
    return members.filter(member =>
      member.name.toLowerCase().includes(query) ||
      member.program?.toLowerCase().includes(query) ||
      member.grad_year?.toString().includes(query)
    );
  }, [searchQuery]);

  const goRandom = useCallback(() => {
    if (members.length === 0) return;
    const randomMember = members[Math.floor(Math.random() * members.length)];
    setSelectedMember(randomMember);
  }, []);

  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value);
    setSelectedMember(null);
  }, []);

  return (
    <div className="crt-scanlines crt-flicker min-h-screen bg-background flex flex-col items-center px-4 py-8 md:py-12">
      <div className="text-center mb-2">
        <h1 className="text-[10px] md:text-xs font-pixel text-primary glow-text tracking-[0.3em] leading-relaxed">
          UW MECHATRONICS
        </h1>
        <p className="text-[10px] md:text-[10px] font-pixel text-accent glow-accent mt-1 tracking-widest">
          WEBRING
        </p>
      </div>

      <div className="max-w-2xl mx-auto text-left mb-6 px-4">
        <p className="text-[8px] md:text-[8px] font-pixel text-muted-foreground leading-relaxed tracking-wider">
          Welcome to the <a
            href="https://uwaterloo.ca/future-students/programs/mechatronics-engineering"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline glow-text hover:text-accent transition-colors"
          >
            UWaterloo Mechatronics Engineering
          </a> webring! This is a project to connect and showcase the personal websites and portfolios of tron students past and present. Explore the members, find your friends, and discover the amazing things we have built.
        </p>
        <p className="text-[6px] md:text-[8px] font-pixel text-muted-foreground/80 mt-2 leading-relaxed tracking-wider">
          If you are part of the Mechatronics Engineering program and want to join open a PR{' '}
          <a
            href="https://github.com/shivam-2507/tron-webring/pulls"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline glow-text hover:text-accent transition-colors"
          >
            here.
          </a>
          <br />
          <br />
          {' '} To contribute, check out the <a href="https://github.com/shivam-2507/tron-webring/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="text-primary underline glow-text hover:text-accent transition-colors">README</a> on GitHub.
        </p>
      </div>

      <div className="w-full max-w-2xl border-t border-border/30 mb-6"></div>

      <RetroRobot
        searchValue={searchQuery}
        onSearchChange={handleSearchChange}
        onRandom={goRandom}
        memberName={selectedMember?.name}
        memberYear={selectedMember?.program || selectedMember?.grad_year?.toString()}
        resultCount={searchQuery.trim() && !selectedMember ? filteredMembers.length : undefined}
      />

      {selectedMember && (
        <a
          href={selectedMember.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-6 py-2 border-2 border-primary rounded bg-primary/10 text-primary font-pixel text-[8px] hover:bg-primary hover:text-primary-foreground transition-all glow-text"
        >
          VISIT {selectedMember.name.toUpperCase()} →
        </a>
      )}

      <div className="w-full max-w-2xl border-t border-border mt-10 mb-8 relative">
        <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-background px-3 text-[8px] text-muted-foreground font-pixel">
          ═══════════
        </span>
      </div>

      <MemberList
        members={filteredMembers}
        showResultCount={searchQuery.trim().length > 0}
        totalCount={members.length}
        onSelectMember={setSelectedMember}
      />

      <footer className="mt-12 text-center font-pixel text-[8px] text-muted-foreground">
        <p className="tracking-wider">University of Waterloo · Mechatronics Engineering</p>
        <div className="h-4" />

        <div className="flex items-center justify-center gap-3 mb-3">
          <img
            src="/uwaterloo seal.svg"
            alt="University of Waterloo Seal"
            className="w-12 h-12 md:w-16 md:h-16 opacity-70"
          />
        </div>
      </footer>
    </div>
  );
};

export default Index;
