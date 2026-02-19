import { useState, useCallback } from "react";
import RetroRobot from "@/components/RetroRobot";
import MemberList from "@/components/MemberList";
import WebringNav from "@/components/WebringNav";
import { members } from "@/data/members";

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = members[currentIndex];

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % members.length);
  }, []);
  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + members.length) % members.length);
  }, []);
  const goRandom = useCallback(() => {
    setCurrentIndex((prev) => {
      let next = prev;
      while (next === prev && members.length > 1) {
        next = Math.floor(Math.random() * members.length);
      }
      return next;
    });
  }, []);

  return (
    <div className="crt-scanlines crt-flicker min-h-screen bg-background flex flex-col items-center px-4 py-8 md:py-12">
      <div className="text-center mb-2">
        <h1 className="text-xs md:text-sm font-pixel text-primary glow-text tracking-[0.3em] leading-relaxed">
          UW MECHATRONICS
        </h1>
        <p className="text-[10px] md:text-xs font-pixel text-accent glow-accent mt-1 tracking-widest">
          WEBRING
        </p>
      </div>

      <div className="max-w-2xl mx-auto text-center mb-6 px-4">
        <p className="text-[10px] md:text-xs font-mono text-muted-foreground leading-relaxed">
          {'>'} Welcome to the UWaterloo Mechatronics Engineering webring! This is an ongoing project and was inspired by CS/SE webrings.
        </p>
        <p className="text-[10px] md:text-xs font-mono text-muted-foreground/80 mt-2 leading-relaxed">
          To join, open a PR
          {/* add a link here */}
        </p>
      </div>

      <div className="w-full max-w-2xl border-t border-border/30 mb-6"></div>

      <p className="font-mono text-xs text-muted-foreground mb-6 cursor-blink">
        {'>'} now visiting: {current.name}
      </p>

      <RetroRobot memberName={current.name} memberYear={current.program || current.grad_year?.toString() || ""} />

      <a
        href={current.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 mb-4 px-6 py-2 border-2 border-primary rounded bg-primary/10 text-primary font-mono text-sm hover:bg-primary hover:text-primary-foreground transition-all glow-text"
      >
        VISIT {current.name.toUpperCase()} →
      </a>

      <div className="mb-10">
        <WebringNav onPrev={goPrev} onNext={goNext} onRandom={goRandom} />
      </div>

      <div className="w-full max-w-2xl border-t border-border mb-8 relative">
        <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-background px-3 text-xs text-muted-foreground font-mono">
          ═══════════
        </span>
      </div>

      <MemberList members={members} currentIndex={currentIndex} onSelectMember={setCurrentIndex} />

      <footer className="mt-12 text-center font-mono text-xs text-muted-foreground">
        <p>University of Waterloo · Mechatronics Engineering</p>
        <p className="mt-1 text-[10px] opacity-60">a webring for MTE students · est. 2026</p>
      </footer>
    </div>
  );
};

export default Index;
