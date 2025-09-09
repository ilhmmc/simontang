import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export default function SENav() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  const tabs = [
    { label: "Overview", to: "/se2026" },
    { label: "Monitoring", to: "/se2026/monitoring" },
    { label: "Tim Kerja", to: "/se2026/teams" },
  ];

  return (
    <nav className="w-full mb-8">
      <div className="container flex flex-wrap justify-center gap-3">
        {tabs.map((t) => {
          const active = path === t.to || (t.to !== "/se2026" && path.startsWith(t.to));
          return (
            <Link key={t.to} to={t.to}>
              <Button
                variant="outline"
                className={
                  "wayang-border " +
                  (active
                    ? "wayang-gradient text-white"
                    : "bg-white/70 dark:bg-slate-800/70 hover:bg-amber-50 dark:hover:bg-amber-900/30")
                }
              >
                {t.label}
              </Button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
