import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="crt-scanlines crt-flicker flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="mb-4 text-4xl font-pixel text-destructive glow-text tracking-widest">404</h1>
        <p className="mb-4 text-xs font-pixel text-muted-foreground tracking-wider">ERROR: PAGE NOT FOUND</p>
        <a
          href="/"
          className="inline-block mt-4 px-6 py-2 border-2 border-primary rounded bg-primary/10 text-primary font-pixel text-[8px] hover:bg-primary hover:text-primary-foreground transition-all glow-text tracking-wider"
        >
          RETURN HOME
        </a>
      </div>
    </div>
  );
};

export default NotFound;
