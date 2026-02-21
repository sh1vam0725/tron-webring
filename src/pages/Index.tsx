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
    if (members.length === 1) {
      setSelectedMember(members[0]);
      return;
    }

    let randomMember;
    do {
      randomMember = members[Math.floor(Math.random() * members.length)];
    } while (selectedMember && randomMember.name === selectedMember.name);

    setSelectedMember(randomMember);
  }, [selectedMember]);

  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value);
    setSelectedMember(null);
  }, []);

  return (
    <div className="crt-scanlines crt-flicker min-h-screen bg-background px-4 py-8 md:py-12">
      {/* Two column layout: About on left, Robot on right */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">
          {/* Left Column - About Section */}
          <div className="space-y-6">
            <div className="text-center lg:text-left pt-4">
              <h1 className="text-[14px] md:text-[14px] font-pixel text-primary glow-text tracking-[0.3em] leading-relaxed">
                UNIVERSITY OF WATERLOO MECHATRONICS ENGINEERING
              </h1>
              <p className="text-[16px] md:text-[16px] font-pixel text-accent glow-accent mt-1 tracking-widest">
                WEBRING
              </p>
            </div>

            <div className="space-y-4">
              <div className="pb-3 border-b border-primary/20">
                <p className="text-xs md:text-sm font-mono text-foreground leading-relaxed tracking-wide">
                  Welcome to the <a
                    href="https://uwaterloo.ca/mechanical-mechatronics-engineering/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold underline decoration-primary/50 glow-text hover:text-accent hover:decoration-accent transition-colors"
                  >
                    Mechatronics Engineering
                  </a> webring!
                </p>
              </div>

              <p className="text-[10px] md:text-xs font-mono text-muted-foreground leading-relaxed tracking-wide">
                This is a project to <span className="text-primary glow-text">connect</span> and <span className="text-primary glow-text">showcase</span> the personal websites and portfolios of tron students past and present. Explore the members, find your friends, and discover the amazing things we have built.
              </p>


              <div className="flex items-start gap-2">
                <span className="text-accent font-pixel text-[8px] mt-0.5">►</span>
                <p className="text-[10px] md:text-xs font-mono text-muted-foreground/90 leading-relaxed tracking-wide">
                  <span className="text-foreground font-semibold">Join the webring:</span> Open a PR{' '}
                  <a
                    href="https://github.com/shivam-2507/tron-webring/pulls"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline decoration-primary/50 glow-text hover:text-accent hover:decoration-accent transition-colors"
                  >
                    here
                  </a>
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-accent font-pixel text-[8px] mt-0.5">►</span>
                <p className="text-[10px] md:text-xs font-mono text-muted-foreground/90 leading-relaxed tracking-wide">
                  <span className="text-foreground font-semibold">Contribute:</span> Check out the{' '}
                  <a
                    href="https://github.com/shivam-2507/tron-webring/blob/main/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline decoration-primary/50 glow-text hover:text-accent hover:decoration-accent transition-colors"
                  >
                    README
                  </a>{' '}
                  on GitHub
                </p>
              </div>

              <div className="flex items-start gap-2 pb-4">
                <span className="text-accent font-pixel text-[8px] mt-0.5">►</span>
                <p className="text-[10px] md:text-xs font-mono text-muted-foreground/90 leading-relaxed tracking-wide">
                  <a
                    href="https://indieweb.org/webring"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline decoration-primary/50 glow-text hover:text-accent hover:decoration-accent transition-colors"
                  >
                    What is a webring?
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Robot */}
          <div className="flex flex-col items-center justify-start">
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
          </div>
        </div>
      </div>

      {/* Member List Section */}
      <div className="max-w-5xl mx-auto">
        <div className="w-full border-t border-border mb-8 relative">
          <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-background px-3 text-[8px] text-muted-foreground font-pixel tracking-wider">
            ═══════════
          </span>
        </div>

        <MemberList
          members={filteredMembers}
          showResultCount={searchQuery.trim().length > 0}
          totalCount={members.length}
          onSelectMember={setSelectedMember}
        />
      </div>

      <footer className="mt-12 text-center font-pixel text-[8px] text-muted-foreground">
        <p className="tracking-wider">University of Waterloo · Mechatronics Engineering</p>
        <div className="h-4" />

        <div className="flex items-center justify-center gap-3 mb-3">
          <img
            src={`${import.meta.env.BASE_URL}uwaterloo-seal.svg`}
            alt="University of Waterloo Seal"
            className="w-12 h-12 md:w-16 md:h-16 opacity-70"
          />
        </div>
      </footer>
    </div >
  );
};

export default Index;
