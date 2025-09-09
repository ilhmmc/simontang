import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Clock3, Home, Hourglass, Info, TrendingUp, ClipboardList, DoorOpen, Map, PieChart, Lightbulb } from "lucide-react";
import SENav from "@/components/se/SENav";

function useCountdown(targetDate: Date) {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return useMemo(() => {
    const totalMs = targetDate.getTime() - now.getTime();
    const clamped = Math.max(totalMs, 0);

    const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
    const hours = Math.floor((clamped % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((clamped % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((clamped % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, totalMs: clamped };
  }, [now, targetDate]);
}

export default function SE2026() {
  // 1 Mei 2026 00:00:00 lokal
  const target = useMemo(() => new Date(2026, 4, 1, 0, 0, 0), []);
  const { days, hours, minutes, seconds } = useCountdown(target);

  const targetText = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(target);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-50/30 via-white to-yellow-100/30 dark:from-slate-900 dark:via-slate-800 dark:to-yellow-900/20 relative overflow-hidden">
      <header className="sticky top-0 z-40 w-full wayang-border wayang-texture backdrop-blur-md supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/70 wayang-shadow">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="ghost" size="sm" className="hover:bg-amber-50 dark:hover:bg-slate-700">
                <Home className="w-4 h-4 mr-2" />
                Beranda
              </Button>
            </Link>
            <div className="text-sm text-muted-foreground">/ Dashboard SE2026</div>
          </div>
          <img src="assets/images/logo-semar.png" alt="Logo Semar Mesem" className="w-8 h-8" />
        </div>
      </header>

      <main className="container py-8 relative z-10 flex-1 flex flex-col justify-center">
        {/* Hero */}
        <section className="mb-10">
          <div className="text-center bg-yellow-50/60 dark:bg-slate-800/50 rounded-2xl p-8 md:p-10 wayang-border wayang-texture relative overflow-hidden">
            <div className="absolute -top-6 -right-6 opacity-20">
              <img src="assets/images/wayang-pattern5.png" className="w-24 h-24" alt="" />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Dashboard <span className="gradient-text">Sensus Ekonomi 2026</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tinjauan cepat pelaksanaan SE2026. Data belum tersedia karena sensus belum dimulai.
            </p>
          </div>
        </section>

        <SENav />

        {/* Countdown */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <Card className="lg:col-span-2 wayang-border wayang-texture">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Hourglass className="w-5 h-5 text-amber-600" />
                <h2 className="text-xl font-semibold">Hitung Mundur Menuju Pelaksanaan</h2>
              </div>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-800/70 wayang-border">
                  <div className="text-4xl font-bold">{days}</div>
                  <div className="text-xs text-muted-foreground">Hari</div>
                </div>
                <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-800/70 wayang-border">
                  <div className="text-4xl font-bold">{hours}</div>
                  <div className="text-xs text-muted-foreground">Jam</div>
                </div>
                <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-800/70 wayang-border">
                  <div className="text-4xl font-bold">{minutes}</div>
                  <div className="text-xs text-muted-foreground">Menit</div>
                </div>
                <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-800/70 wayang-border">
                  <div className="text-4xl font-bold">{seconds}</div>
                  <div className="text-xs text-muted-foreground">Detik</div>
                </div>
              </div>
              <div className="mt-6 text-center text-sm md:text-base">
                Sensus Ekonomi 2026 akan terlaksana pada <span className="font-semibold">{targetText}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="wayang-border wayang-texture">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-amber-600" />
                <h3 className="font-semibold">Jadwal Pelaksanaan SE2026</h3>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-amber-200 dark:bg-slate-600" />

                <div className="relative mb-6">
                  <div className="absolute -left-1 top-2 w-3 h-3 rounded-full bg-amber-500 border-2 border-white dark:border-slate-900" />
                  <div className="ml-2 p-4 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-amber-200/50 dark:border-slate-700">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-amber-100 text-amber-700">
                        <ClipboardList className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-amber-700 font-semibold">1–31 Mei 2026</div>
                        <div className="font-medium mb-1">Pengisian Kuesioner SE2026 Online</div>
                        <p className="text-sm text-muted-foreground">
                          Pada periode ini perusahaan besar akan mendapatkan email untuk mengisi kuesioner secara mandiri (online).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-1 top-2 w-3 h-3 rounded-full bg-amber-500 border-2 border-white dark:border-slate-900" />
                  <div className="ml-2 p-4 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-amber-200/50 dark:border-slate-700">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-amber-100 text-amber-700">
                        <DoorOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-amber-700 font-semibold">1 Juni – 31 Juli 2026</div>
                        <div className="font-medium mb-1">Pendataan Lapangan (Door to Door)</div>
                        <p className="text-sm text-muted-foreground">
                          Bagi usaha/perusahaan yang belum memperoleh email untuk pengisian kuesioner secara mandiri, maka pendataan akan dilakukan secara langsung oleh petugas SE2026.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Data yang dihasilkan */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
          <div className="relative rounded-2xl wayang-border overflow-hidden wayang-texture bg-gradient-to-br from-amber-100 via-yellow-50 to-white dark:from-amber-900/20 dark:via-slate-800 dark:to-slate-900 p-4">
            <div className="relative rounded-3xl overflow-hidden flex items-center justify-center">
              <img
                src="assets/images/SE.png"
                alt="Sensus Ekonomi 2026"
                className="h-64 md:h-72 w-full object-cover scale-[1.01] rounded-3xl"
                style={{
                  WebkitMaskImage: 'radial-gradient(130% 120% at 50% 50%, #000 68%, rgba(0,0,0,0.9) 82%, transparent 100%)',
                  maskImage: 'radial-gradient(130% 120% at 50% 50%, #000 68%, rgba(0,0,0,0.9) 82%, transparent 100%)'
                }}
              />
              <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-tr from-amber-100/30 via-transparent to-transparent dark:from-amber-400/15" />
              <div className="absolute inset-0 pointer-events-none rounded-3xl bg-[radial-gradient(120%_95%_at_50%_50%,rgba(0,0,0,0.06)_70%,transparent_100%)] dark:bg-[radial-gradient(120%_95%_at_50%_50%,rgba(0,0,0,0.18)_70%,transparent_100%)]" />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-amber-200/60 dark:ring-slate-700/60 pointer-events-none" />
            </div>
            <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-md">
              <PieChart className="w-5 h-5" />
            </div>
            <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-md">
              <ClipboardList className="w-5 h-5" />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Data apa saja yang dihasilkan?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Map className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold">Peta Ekonomi Indonesia</div>
                  <p className="text-sm text-muted-foreground">Potret terkini struktur ekonomi di seluruh wilayah Indonesia.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                  <PieChart className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold">Analisis Sektoral</div>
                  <p className="text-sm text-muted-foreground">Informasi mendalam per sektor menurut skala usaha dan wilayah (nasional, provinsi, kabupaten/kota).</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold">Insight</div>
                  <p className="text-sm text-muted-foreground">Berbagai tinjauan lanjutan seperti ekonomi lingkungan dan ekonomi digital.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Placeholder panels */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="wayang-border wayang-texture">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-amber-600" />
                <h3 className="font-semibold">Capaian Sementara</h3>
              </div>
              <p className="text-sm text-muted-foreground">Belum ada data. Akan tersedia saat sensus berjalan.</p>
            </CardContent>
          </Card>

          <Card className="wayang-border wayang-texture">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Clock3 className="w-5 h-5 text-amber-600" />
                <h3 className="font-semibold">Aktivitas Terbaru</h3>
              </div>
              <p className="text-sm text-muted-foreground">Belum ada data.</p>
            </CardContent>
          </Card>

          <Card className="wayang-border wayang-texture">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Info className="w-5 h-5 text-amber-600" />
                <h3 className="font-semibold">Informasi</h3>
              </div>
              <p className="text-sm text-muted-foreground">Konten akan diperbarui mendekati tanggal pelaksanaan.</p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
