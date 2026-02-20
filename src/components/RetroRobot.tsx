interface RetroRobotProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  onRandom: () => void;
  memberName?: string;
  memberYear?: string;
  resultCount?: number;
}


const RetroRobot = ({ searchValue, onSearchChange, onRandom, memberName, memberYear, resultCount }: RetroRobotProps) => {
  const showGears = resultCount !== undefined && resultCount > 1;

  return (
    <div className="flex flex-col items-center gap-0">
      {/* Antenna */}
      <div className="flex flex-col items-center mb-0">
        <div
          className="w-2 h-8 md:w-3 md:h-12 rounded-t-sm relative"
          style={{
            backgroundColor: 'hsl(45, 100%, 50%)',
            boxShadow: '0 0 6px hsla(45, 100%, 50%, 0.45)',
            background: 'linear-gradient(to bottom, hsl(45, 100%, 50%) 0%, hsl(45, 100%, 50%) 85%, #1A1A1F 85%, #1A1A1F 100%)'
          }}
        >
          {/* Purple circular tip */}
          <div
            className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 w-5 h-5 md:w-7 md:h-7 rounded-full"
            style={{
              backgroundColor: 'hsl(var(--accent) / 0.6)',
              border: '2px solid hsl(45, 100%, 50%)',
              boxShadow: '0 0 4px hsl(var(--accent) / 0.85)'
            }}
          >
            {/* Inner glow circle */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
              style={{
                backgroundColor: 'hsl(270,80%,75%)',
                boxShadow: '0 0 8px hsla(270,80%,75%,0.8)'
              }}
            />
          </div>
        </div>
      </div>

      {/* Main Robot Head Body */}
      <div className="relative w-full max-w-[95vw] md:max-w-none">
        {/* Main Body - Purple Outer Border */}
        <div
          className="relative rounded-[1.5rem] md:rounded-[2.5rem] p-0 transition-all duration-300"
          style={{
            backgroundColor: 'hsl(var(--accent) / 0.6)',
            boxShadow: '0 0 18px hsl(var(--accent) / 0.55), 0 0 30px hsl(var(--accent) / 0.4)'
          }}
        >
          {/* Inner Purple Layer */}
          <div
            className="rounded-[1.5rem] md:rounded-[2.5rem] p-[4px] md:p-[6px] transition-all duration-300"
            style={{
              backgroundColor: 'hsl(var(--accent) / 0.6)',
            }}
          >
            {/* Gold Border Layer */}
            <div
              className="rounded-[1.25rem] md:rounded-[2.25rem] p-[3px] md:p-[5px] transition-all duration-300"
              style={{
                backgroundColor: 'hsl(45, 100%, 50%)',
                boxShadow: 'inset 0 0 20px hsla(45, 100%, 50%, 0.4)'
              }}
            >
              {/* Dark Background */}
              <div
                className="rounded-[1rem] md:rounded-[2rem] p-2 md:p-3 transition-all duration-300"
                style={{
                  backgroundColor: '#1A1A1F',
                }}
              >
                {/* Inner Screen with Gold Frame */}
                <div
                  className="rounded-[0.875rem] md:rounded-[1.75rem] p-2 md:p-3 lg:p-4 w-full min-h-[40px] md:min-h-[60px] transition-all duration-300 relative"
                  style={{
                    backgroundColor: '#0D0D12',
                    border: '3px solid hsl(45, 100%, 50%)',
                    boxShadow: '0 0 12px hsla(45, 100%, 50%, 0.45), inset 0 0 20px rgba(0, 0, 0, 0.8)'
                  }}
                >
                  {/* Content Area */}
                  <div className="flex items-center justify-center gap-2 md:gap-4 lg:gap-6 h-full">

                    {/* Center Content */}
                    <div className="flex flex-col items-center justify-center gap-1 md:gap-2 lg:gap-3 flex-1">
                      {memberName ? (
                        <>
                          {/* Member Name */}
                          <div
                            className="text-center w-full tracking-widest uppercase transition-all duration-300 text-xs md:text-base lg:text-lg"
                            style={{
                              color: 'hsl(45, 100%, 50%)',
                              textShadow: '0 0 20px hsla(45, 100%, 50%, 0.9), 0 0 35px hsla(45, 100%, 50%, 0.6)',
                              fontWeight: '900',
                              letterSpacing: '0.1em',
                              fontFamily: "'Press Start 2P', monospace"
                            }}
                          >
                            {memberName.toUpperCase()}
                          </div>

                          {/* Member Year */}
                          <div
                            className="text-center w-full tracking-wider transition-all duration-300 text-[8px] md:text-sm lg:text-base"
                            style={{
                              color: 'hsl(var(--accent))',
                              textShadow: '0 0 8px hsl(var(--accent) / 0.6), 0 0 14px hsl(var(--accent) / 0.45)',
                              fontWeight: '700',
                              letterSpacing: '0.2em',
                              fontFamily: "'Press Start 2P', monospace"
                            }}
                          >
                            {memberYear}
                          </div>
                        </>
                      ) : resultCount !== undefined ? (
                        <>
                          {/* Result Count */}
                          <div
                            className="text-center w-full tracking-widest transition-all duration-300 text-lg md:text-xl lg:text-2xl"
                            style={{
                              color: 'hsl(45, 100%, 50%)',
                              textShadow: '0 0 20px hsla(45, 100%, 50%, 0.9), 0 0 35px hsla(45, 100%, 50%, 0.6)',
                              fontWeight: '900',
                              letterSpacing: '0.1em',
                              fontFamily: "'Press Start 2P', monospace"
                            }}
                          >
                            {resultCount}
                          </div>

                          {/* Results Label */}
                          <div
                            className="text-center w-full tracking-wider transition-all duration-300 text-[8px] md:text-sm lg:text-base"
                            style={{
                              color: 'hsl(var(--accent))',
                              textShadow: '0 0 8px hsl(var(--accent) / 0.6), 0 0 14px hsl(var(--accent) / 0.45)',
                              fontWeight: '700',
                              letterSpacing: '0.2em',
                              fontFamily: "'Press Start 2P', monospace"
                            }}
                          >
                            RESULTS
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Square Robot Eyes */}
                          <div className="flex items-center justify-center gap-3 md:gap-4">
                            <div
                              className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-sm relative"
                              style={{
                                backgroundColor: '#0D0D12',
                                border: '2px solid hsl(45, 100%, 50%)',
                                boxShadow: '0 0 15px hsla(45, 100%, 50%, 0.6)'
                              }}
                            >
                              <div
                                className="absolute inset-1 rounded-sm"
                                style={{
                                  backgroundColor: 'hsl(45, 100%, 50%)',
                                  boxShadow: 'inset 0 0 10px hsla(45, 100%, 50%, 0.8)'
                                }}
                              />
                            </div>
                            <div
                              className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-sm relative"
                              style={{
                                backgroundColor: '#0D0D12',
                                border: '2px solid hsl(45, 100%, 50%)',
                                boxShadow: '0 0 15px hsla(45, 100%, 50%, 0.6)'
                              }}
                            >
                              <div
                                className="absolute inset-1 rounded-sm"
                                style={{
                                  backgroundColor: 'hsl(45, 100%, 50%)',
                                  boxShadow: 'inset 0 0 10px hsla(45, 100%, 50%, 0.8)'
                                }}
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Status Lights - Inside the body */}
                <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-10 mt-3 md:mt-5 mb-1 md:mb-2">
                  {/* Gold Light */}
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full relative"
                      style={{
                        backgroundColor: 'hsl(45, 100%, 50%)',
                        boxShadow: '0 0 20px hsla(45, 100%, 50%, 1), 0 0 35px hsla(45, 100%, 50%, 0.6)'
                      }}
                    >
                      <div className="absolute inset-1 rounded-full" style={{ backgroundColor: 'hsl(45, 100%, 70%)', boxShadow: '0 0 10px hsla(45, 100%, 70%, 0.8)' }} />
                    </div>
                    <div className="w-1 h-2" style={{ backgroundColor: 'hsl(45, 100%, 50%)', opacity: 0.4 }} />
                  </div>
                  {/* Purple Light */}
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full relative"
                      style={{
                        backgroundColor: 'hsl(270,70%,55%)',
                        boxShadow: '0 0 12px hsl(270,70%,55%), 0 0 20px hsla(270,70%,55%,0.6)'
                      }}
                    >
                      <div className="absolute inset-1 rounded-full" style={{ backgroundColor: 'hsl(270,70%,70%)', boxShadow: '0 0 10px hsla(270,70%,70%,0.8)' }} />
                    </div>
                    <div className="w-1 h-2" style={{ backgroundColor: 'hsl(270,70%,55%)', opacity: 0.4 }} />
                  </div>
                  {/* Gold Light */}
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full relative"
                      style={{
                        backgroundColor: 'hsl(45, 100%, 50%)',
                        boxShadow: '0 0 20px hsla(45, 100%, 50%, 1), 0 0 35px hsla(45, 100%, 50%, 0.6)'
                      }}
                    >
                      <div className="absolute inset-1 rounded-full" style={{ backgroundColor: 'hsl(45, 100%, 70%)', boxShadow: '0 0 10px hsla(45, 100%, 70%, 0.8)' }} />
                    </div>
                    <div className="w-1 h-2" style={{ backgroundColor: 'hsl(45, 100%, 50%)', opacity: 0.4 }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Chin/Base */}
      <div className="flex items-center gap-0">
        <div
          className="w-16 h-6 md:w-20 md:h-8 lg:w-24 lg:h-10 rounded-b-xl md:rounded-b-2xl -mt-1 relative"
          style={{
            backgroundColor: '#1A1A1F',
            border: '5px solid hsl(var(--accent) / 0.6)',
            borderTop: 'none',
            boxShadow: '0 0 10px hsl(var(--accent) / 0.6), inset 0 -5px 10px rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Chin detail line */}
          <div className="absolute bottom-1 md:bottom-2 left-1/2 -translate-x-1/2 w-8 md:w-10 lg:w-12 h-0.5" style={{ backgroundColor: 'hsl(45, 100%, 50%)', boxShadow: '0 0 8px hsla(45, 100%, 50%, 0.6)' }} />
        </div>
      </div>

      {/* Random button and Search input */}
      <div className="mt-6 w-full max-w-2xl flex items-center gap-3 px-4">
        <button
          onClick={onRandom}
          className="px-4 py-3 border-2 border-accent/50 rounded bg-card text-accent hover:bg-accent hover:text-accent-foreground transition-all shadow-lg hover:shadow-accent/20 flex-shrink-0"
          title="Random Member"
        >
          <img 
            src="/shuffle.png" 
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
