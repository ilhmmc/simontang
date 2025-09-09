import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Home, Monitor, Users } from "lucide-react";
import SENav from "@/components/se/SENav";

export default function SE2026Monitoring() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50/30 via-white to-yellow-100/30 dark:from-slate-900 dark:via-slate-800 dark:to-yellow-900/20">
      <header className="sticky top-0 z-40 w-full wayang-border wayang-texture backdrop-blur-md supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/70 wayang-shadow">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="ghost" size="sm" className="hover:bg-amber-50 dark:hover:bg-slate-700">
                <Home className="w-4 h-4 mr-2" />
                Beranda
              </Button>
            </Link>
            <div className="text-sm text-muted-foreground">/ Dashboard SE2026 / Monitoring</div>
          </div>
          <img src="assets/images/logo-semar.png" alt="Logo Semar Mesem" className="w-8 h-8" />
        </div>
      </header>

      <main className="container py-8">
        <SENav />

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="wayang-border wayang-texture">
            <CardContent className="p-6 text-center text-muted-foreground">
              <Monitor className="w-6 h-6 mx-auto mb-2 text-amber-600" />
              Monitoring SE2026 belum tersedia. Konten akan muncul saat sensus berjalan.
            </CardContent>
          </Card>
          <Card className="wayang-border wayang-texture">
            <CardContent className="p-6 text-center text-muted-foreground">
              <Users className="w-6 h-6 mx-auto mb-2 text-amber-600" />
              Panel grafik dan tabel akan ditambahkan kemudian.
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
