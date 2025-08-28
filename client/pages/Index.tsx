import { useState, useMemo, useEffect } from "react";
import {
  Search,
  Menu,
  X,
  ExternalLink,
  Database,
  Globe,
  ChevronDown,
  ChevronRight,
  Leaf,
  BarChart3,
  Users,
  FileText,
  Shield,
  DollarSign,
  Settings,
  Archive,
  Moon,
  Sun,
  Home,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceItem {
  title: string;
  description: string;
  url: string;
  icon: string;
  category: "storage" | "official";
  subcategory: string;
}

const services: ServiceItem[] = [
  // Data Storage System - Administrative & Personnel
  {
    title: "MITRA",
    description: "Data Mitra Statistik BPS Nganjuk",
    url: "https://shorturl.at/cmrv8",
    icon: "👥",
    category: "storage",
    subcategory: "administrative",
  },
  {
    title: "CHAMPION",
    description: "Storage Kegiatan Pegawai Berprestasi",
    url: "https://drive.google.com/drive/folders/1RTHBLEjIy4WMycXUIRn5wofRsCKaGVLy",
    icon: "🏆",
    category: "storage",
    subcategory: "administrative",
  },
  {
    title: "ASN Lapor",
    description: "Monitoring Pelaporan ASN",
    url: "https://drive.google.com/drive/folders/1yj2sfVwrpFuPIwjWIQ1tcbN-52R0iL4q",
    icon: "📋",
    category: "storage",
    subcategory: "administrative",
  },
  {
    title: "APEL",
    description: "Storage Kegiatan Apel Senin Pagi",
    url: "https://drive.google.com/drive/folders/1zDyPGxfmpx_lndMo84GEqHyMOB-IodCj",
    icon: "🎖️",
    category: "storage",
    subcategory: "administrative",
  },
  {
    title: "BPS Nganjuk Peduli",
    description: "Storage Kegiatan BPS Nganjuk Peduli",
    url: "https://drive.google.com/drive/folders/1HfR5nkGoLIcJQWnhxHm2n0MqhJF7zEhb",
    icon: "❤️",
    category: "storage",
    subcategory: "administrative",
  },
  {
    title: "Meeting Docs",
    description: "Storage Notulensi Rapat",
    url: "https://drive.google.com/drive/folders/1-4HZT3GbzqgTlpq2vBkYS94rIGOqQNh8",
    icon: "📝",
    category: "storage",
    subcategory: "administrative",
  },
  {
    title: "CKP Online",
    description: "Pelaporan CKP Pegawai BPS Nganjuk",
    url: "https://drive.google.com/drive/folders/1p12i8KrI-PdWSZjRsK8uXmGS_ZzbVhbE",
    icon: "📊",
    category: "storage",
    subcategory: "administrative",
  },
  {
    title: "SURAT",
    description: "Storage Data Surat Keluar Masuk",
    url: "https://drive.google.com/drive/folders/1kif9d4z41gVyJYrL7id7MCUWDY7HxF5m",
    icon: "📧",
    category: "storage",
    subcategory: "administrative",
  },

  // Data Storage System - Data Management & Statistics
  {
    title: "SATU DATA NGANJUK",
    description: "Storage Kegiatan Satu Data Indonesia di BPS Nganjuk",
    url: "https://shorturl.at/rIQ08",
    icon: "📊",
    category: "storage",
    subcategory: "data-management",
  },
  {
    title: "DESA CANTIK",
    description: "Storage Kegiatan Desa Cantik di BPS Nganjuk",
    url: "https://shorturl.at/fx068",
    icon: "🏘️",
    category: "storage",
    subcategory: "data-management",
  },
  {
    title: "REGSOSEK",
    description: "Storage Kegiatan Regsosek 2022",
    url: "https://drive.google.com/drive/folders/1hVMveoGCesqOzdN6ZFDoAmWbeIYpNUi6",
    icon: "🏢",
    category: "storage",
    subcategory: "data-management",
  },
  {
    title: "ST 2023",
    description: "Storage Kegiatan Sensus Pertanian 2023",
    url: "https://drive.google.com/drive/folders/1ixsqLanChDzMvmq8omXY7uP2z-lrdedo",
    icon: "🌾",
    category: "storage",
    subcategory: "data-management",
  },
  {
    title: "Satu DATA Indonesia",
    description: "Storage Kegiatan SDI",
    url: "https://drive.google.com/drive/folders/1LDK1glN-eL5iTpkFai0VAvp254YW3XqM",
    icon: "🇮🇩",
    category: "storage",
    subcategory: "data-management",
  },
  {
    title: "SIMONIK",
    description: "Sistem Monitoring Kinerja BPS Nganjuk",
    url: "https://drive.google.com/drive/folders/1fsXulBCE2eUAGE-OHTx63_E1hZnRUoUf",
    icon: "📊",
    category: "storage",
    subcategory: "data-management",
  },

  // Data Storage System - Documentation & Archives
  {
    title: "K A K",
    description: "Storage Data K A K",
    url: "https://drive.google.com/drive/folders/1KAd7nKEmFXqcYMvY68SxoF1lnfAxy9li",
    icon: "📄",
    category: "storage",
    subcategory: "documentation",
  },
  {
    title: "PERMINDOK",
    description: "Storage Permintaan Dokumen",
    url: "https://drive.google.com/drive/folders/1XYoNhdGfMBaXrut54Yji0oZcwDTqMw3A",
    icon: "📁",
    category: "storage",
    subcategory: "documentation",
  },
  {
    title: "SERTIFIKAT",
    description: "Storage Sertifikat",
    url: "https://drive.google.com/drive/folders/1fu-vKIJWw0QkpVNWfZR4MEoRYKvEPpgo",
    icon: "🏅",
    category: "storage",
    subcategory: "documentation",
  },
  {
    title: "RAKORDA",
    description: "Materi Rakorda",
    url: "https://drive.google.com/drive/folders/1rBlh5UpuT-ZKE5fjQiM0r0gSKBGyTlq7",
    icon: "🏛️",
    category: "storage",
    subcategory: "documentation",
  },
  {
    title: "PERKA",
    description: "Storage Peraturan Kepala BPS",
    url: "https://drive.google.com/drive/folders/1K6wQ-DeHCjkmYpt18VIGWruCLSX1GTHL",
    icon: "📜",
    category: "storage",
    subcategory: "documentation",
  },
  {
    title: "FOTO-FOTO KEGIATAN",
    description: "Storage Foto Semua Kegiatan",
    url: "https://drive.google.com/drive/folders/1Sj4KY6LxQZy0pjE-93PYdqARQEocvagj",
    icon: "📸",
    category: "storage",
    subcategory: "documentation",
  },

  // Data Storage System - Evaluation & Monitoring
  {
    title: "Lembar Kerja Evaluasi",
    description: "Perkembangan Zona Integritas BPS Kabupaten Nganjuk",
    url: "https://drive.google.com/drive/folders/1X2GGtstik6ZCsPfo394yHlq8Y3Vf-A5-",
    icon: "📈",
    category: "storage",
    subcategory: "evaluation",
  },
  {
    title: "SAKIP",
    description: "Storage Dokumen SAKIP",
    url: "https://drive.google.com/drive/folders/1AkZ1mFv3pOK9N4dQhtV1Qvcx4KOUaR2J",
    icon: "📋",
    category: "storage",
    subcategory: "evaluation",
  },
  {
    title: "TEKNIS",
    description: "Storage Kegiatan Teknis BPS Nganjuk",
    url: "https://drive.google.com/drive/folders/1yRkA8vPlvQ3i3MiUOXYOp657jLw7rScL",
    icon: "⚙️",
    category: "storage",
    subcategory: "evaluation",
  },
  {
    title: "FENOMENA",
    description: "Storage Fenomena di Nganjuk",
    url: "https://drive.google.com/drive/folders/178g7AR510TYafwREkyjyE-z7BspA-P5t",
    icon: "🌟",
    category: "storage",
    subcategory: "evaluation",
  },

  // Official Websites - Main Platforms
  {
    title: "WEBSITE",
    description: "Website Resmi BPS Kabupaten Nganjuk",
    url: "https://nganjukkab.bps.go.id",
    icon: "🌐",
    category: "official",
    subcategory: "main-platforms",
  },
  {
    title: "Dashboard FKP",
    description: "Monitoring Kegiatan FKP BPS Nganjuk",
    url: "https://bpsnganjuk.com/dashboard_fkp",
    icon: "📊",
    category: "official",
    subcategory: "main-platforms",
  },
  {
    title: "Dashboard ST2023",
    description: "Monitoring Kegiatan ST2023 BPS Nganjuk",
    url: "https://bpsnganjuk.com/dashboard_st2023",
    icon: "🌾",
    category: "official",
    subcategory: "main-platforms",
  },
  {
    title: "Pojok Statistik",
    description: "Pojok Statistik BPS Nganjuk",
    url: "https://sites.google.com/view/potik-kabupaten-nganjuk/halaman-muka",
    icon: "📈",
    category: "official",
    subcategory: "main-platforms",
  },

  // Official Websites - Financial Systems
  {
    title: "SAKTI",
    description: "Link ke Aplikasi SAKTI",
    url: "https://sakti.kemenkeu.go.id",
    icon: "💰",
    category: "official",
    subcategory: "financial",
  },
  {
    title: "SMART",
    description: "Link ke Aplikasi SMART",
    url: "https://smart.kemenkeu.go.id",
    icon: "🧠",
    category: "official",
    subcategory: "financial",
  },
  {
    title: "OM-SPAN",
    description: "Link ke Aplikasi OM-SPAN",
    url: "https://spanint.kemenkeu.go.id",
    icon: "🔗",
    category: "official",
    subcategory: "financial",
  },
  {
    title: "TUKIN",
    description: "Link ke Aplikasi TUKIN",
    url: "https://tkonline.bps.go.id",
    icon: "💵",
    category: "official",
    subcategory: "financial",
  },

  // Official Websites - Information Systems
  {
    title: "EMAIL",
    description: "Email Resmi BPS Kabupaten Nganjuk",
    url: "https://mail.bps.go.id",
    icon: "✉️",
    category: "official",
    subcategory: "information",
  },
  {
    title: "SIMPEG",
    description: "Website Sistem Informasi Pegawai Resmi BPS",
    url: "https://simpeg.bps.go.id",
    icon: "👤",
    category: "official",
    subcategory: "information",
  },
  {
    title: "ROMANTIK",
    description: "Rekomendasi Kegiatan Statistik Online",
    url: "https://romantik.bps.go.id",
    icon: "💕",
    category: "official",
    subcategory: "information",
  },
  {
    title: "WEB ENTRY",
    description: "Website Sistem Pengolahan Online BPS",
    url: "https://webentry.bps.go.id",
    icon: "💻",
    category: "official",
    subcategory: "information",
  },
  {
    title: "WEB MONITORING",
    description: "Website Monitoring Resmi BPS",
    url: "https://webmonitoring.bps.go.id",
    icon: "👁️",
    category: "official",
    subcategory: "information",
  },

  // Official Websites - Data & Records
  {
    title: "FRA",
    description: "Storage Data FRA",
    url: "https://drive.google.com/drive/folders/19BfOBkgzjPGnD9F5tQvRP9llBDPbbvpq",
    icon: "📊",
    category: "official",
    subcategory: "data-records",
  },
  {
    title: "SAKIP",
    description: "Link ke Aplikasi SAKIP",
    url: "https://esr.menpan.go.id",
    icon: "📋",
    category: "official",
    subcategory: "data-records",
  },
];

const subcategoryConfig = {
  storage: {
    administrative: {
      title: "Administrasi & Kepegawaian",
      icon: Users,
      color: "text-yellow-600",
    },
    "data-management": {
      title: "Manajemen Data & Statistik",
      icon: BarChart3,
      color: "text-yellow-600",
    },
    documentation: {
      title: "Dokumentasi & Arsip",
      icon: Archive,
      color: "text-yellow-700",
    },
    evaluation: {
      title: "Evaluasi & Monitoring",
      icon: Shield,
      color: "text-yellow-700",
    },
  },
  official: {
    "main-platforms": {
      title: "Platform Utama",
      icon: Globe,
      color: "text-yellow-600",
    },
    financial: {
      title: "Sistem Keuangan",
      icon: DollarSign,
      color: "text-yellow-600",
    },
    information: {
      title: "Sistem Informasi",
      icon: Settings,
      color: "text-yellow-700",
    },
    "data-records": {
      title: "Data & Rekaman",
      icon: FileText,
      color: "text-yellow-700",
    },
  },
};

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const [selectedView, setSelectedView] = useState<
    "home" | "storage" | "official" | string
  >("home");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    "/assets/images/fotbar-bps-nganjuk.png",
    "/assets/images/fotbar2-bps-nganjuk.png",
    // '/assets/images/contoh-surat-tugas.jpg'
  ];

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDarkMode(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000); // 4 seconds

    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  // Carousel navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Toggle menu open/close
  const toggleMenu = (menuKey: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  // Handle subcategory selection
  const selectSubcategory = (
    category: "storage" | "official",
    subcategory: string,
  ) => {
    setSelectedView(category);
    setSelectedSubcategory(subcategory);
  };

  // Handle main category selection
  const selectMainCategory = (category: "home" | "storage" | "official") => {
    setSelectedView(category);
    setSelectedSubcategory("");
  };

  // Filter services based on current selection
  const filteredServices = useMemo(() => {
    let filtered = services;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (service) =>
          service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.description.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Filter by selected view
    if (selectedView === "storage") {
      filtered = filtered.filter((service) => service.category === "storage");
      if (selectedSubcategory) {
        filtered = filtered.filter(
          (service) => service.subcategory === selectedSubcategory,
        );
      }
    } else if (selectedView === "official") {
      filtered = filtered.filter((service) => service.category === "official");
      if (selectedSubcategory) {
        filtered = filtered.filter(
          (service) => service.subcategory === selectedSubcategory,
        );
      }
    }

    return filtered;
  }, [searchQuery, selectedView, selectedSubcategory]);

  const ServiceCard = ({ service }: { service: ServiceItem }) => (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 wayang-border hover:wayang-glow wayang-texture backdrop-blur-sm relative overflow-hidden">
      <div className="absolute top-1 right-1 wayang-decoration">
        <img src="/assets/images/wayang-pattern5.png" alt="" className="w-6 h-6 opacity-10 wayang-float" />
      </div>
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="text-3xl wayang-gradient rounded-full w-14 h-14 flex items-center justify-center group-hover:wayang-glow transition-all wayang-shadow">
            {service.icon}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors mb-1">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
              {service.description}
            </p>
            <Button
              variant="outline"
              size="sm"
              className="wayang-border bg-white/80 dark:bg-slate-800/80 text-amber-700 dark:text-amber-300 hover:wayang-gradient hover:text-white transition-all duration-300"
              onClick={() => window.open(service.url, "_blank")}
            >
              Buka <ExternalLink className="w-3 h-3 ml-1" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderContent = () => {
    if (searchQuery) {
      return (
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Hasil Pencarian "{searchQuery}" ({filteredServices.length} layanan)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Tidak ditemukan</h3>
              <p className="text-muted-foreground">
                Coba gunakan kata kunci yang berbeda
              </p>
            </div>
          )}
        </div>
      );
    }

    if (selectedView === "home") {
      return (
        <>
          {/* Hero Section */}
          <section className="relative py-8 px-4 h-[92.4vh] flex items-center overflow-hidden">
            {/* Background Image Carousel */}
            <div className="absolute inset-0">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 transition-transform duration-1000 ease-in-out ${index === currentSlide
                      ? "translate-x-0"
                      : index < currentSlide
                        ? "-translate-x-full"
                        : "translate-x-full"
                    }`}
                  style={{
                    backgroundImage: `url('${image}')`,
                  }}
                ></div>
              ))}
            </div>

            {/* Wayang-themed decorative overlay */}
            <div className="absolute inset-0">
              <img src="/assets/images/wayang-pattern1.png" alt="" className="absolute top-10 left-10 w-20 h-20 wayang-decoration wayang-float opacity-20" />
              <img src="/assets/images/wayang2.png" alt="" className="absolute top-20 right-20 w-24 h-30 wayang-decoration wayang-float-slow wayang-glow opacity-30" />
              <img src="/assets/images/wayang-pattern3.png" alt="" className="absolute bottom-20 left-20 w-18 h-18 wayang-decoration wayang-float opacity-25" />
              <img src="/assets/images/wayang4.png" alt="" className="absolute bottom-30 right-30 w-20 h-25 wayang-decoration wayang-float-slow wayang-shadow opacity-35" />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white drop-shadow-lg" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white drop-shadow-lg" />
            </button>

            {/* Overlay to ensure better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-yellow-50/20 to-orange-50/30 dark:bg-gradient-to-br dark:from-amber-900/20 dark:via-yellow-900/15 dark:to-orange-900/20"></div>
            <div className="container text-center relative z-10">
              <div className="inline-flex items-center space-x-2 wayang-gradient rounded-full px-6 py-3 text-sm font-medium text-white mb-8 wayang-shadow">
                <img src="/assets/images/logo-semar-coklat.png" alt="" className="w-5 h-6" />
                <span>Sistem Monitoring & Evaluasi</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 wayang-shadow">
                Selamat Datang di{" "}
                <span className="text-amber-600 dark:text-amber-400">Se</span>
                <span className="text-foreground">MAr</span>
              </h1>
              <p className="text-xl text-foreground font-medium mb-16 max-w-1xl mx-auto drop-shadow-lg">
                Sistem Monitoring & Evaluasi Tata Kelola Administrasi dan Teknis
                BPS Kabupaten Nganjuk
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="wayang-gradient hover:opacity-90 transition-all wayang-shadow text-white border-2 border-amber-300/50"
                  onClick={() => selectMainCategory("storage")}
                >
                  <Database className="w-5 h-5 mr-2" />
                  Data Storage System
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="wayang-border bg-white/80 dark:bg-slate-800/80 text-amber-700 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-900/30 backdrop-blur-sm"
                  onClick={() => selectMainCategory("official")}
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Official Website
                </Button>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                      ? "bg-white scale-125 shadow-lg"
                      : "bg-white/50 hover:bg-white/75"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </section>

          {/* Overview Sections */}

        </>
      );
    }

    // Render specific category or subcategory
    const currentCategory = selectedView as "storage" | "official";
    const categoryConfig = subcategoryConfig[currentCategory];

    if (selectedSubcategory && categoryConfig) {
      const subcategoryData =
        categoryConfig[selectedSubcategory as keyof typeof categoryConfig];
      const IconComponent = subcategoryData.icon;

      return (
        <div className="container py-8">
          <div className="flex items-center mb-6 bg-yellow-50/50 dark:bg-slate-800/50 rounded-lg p-4 border border-yellow-200/30 dark:border-slate-600/30">
            <IconComponent
              className={`w-6 h-6 mr-3 ${subcategoryData.color} dark:text-yellow-400`}
            />
            <h2 className="text-2xl font-bold text-foreground">
              {subcategoryData.title}
            </h2>
            <span className="ml-auto text-sm text-muted-foreground bg-white dark:bg-slate-700 dark:text-slate-300 rounded-full px-3 py-1">
              {filteredServices.length} layanan
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      );
    }

    // Render all subcategories for the selected main category
    return (
      <div className="container py-8">
        <div className="text-center mb-12 bg-yellow-50/30 dark:bg-slate-800/30 rounded-xl p-8 border border-yellow-200/30 dark:border-slate-600/30">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            {currentCategory === "storage" ? (
              <>
                <Database className="w-8 h-8 mr-3 text-primary" />
                Data Storage System
              </>
            ) : (
              <>
                <Globe className="w-8 h-8 mr-3 text-primary" />
                Official Website
              </>
            )}
          </h2>
          <p className="text-muted-foreground text-lg">
            {currentCategory === "storage"
              ? "Tempat Penyimpanan Data Administrasi Kegiatan di BPS Nganjuk"
              : "Shortcut yang terhubung dengan website resmi pemerintah"}
          </p>
        </div>

        {Object.entries(categoryConfig).map(([key, data]) => {
          const subcategoryServices = services.filter(
            (s) => s.category === currentCategory && s.subcategory === key,
          );
          const IconComponent = data.icon;

          return (
            <div key={key} className="mb-12">
              <div className="flex items-center mb-6 bg-yellow-50/50 dark:bg-slate-800/50 rounded-lg p-4 border border-yellow-200/30 dark:border-slate-600/30">
                <IconComponent
                  className={`w-6 h-6 mr-3 ${data.color} dark:text-yellow-400`}
                />
                <h3 className="text-xl font-bold text-foreground">
                  {data.title}
                </h3>
                <span className="ml-auto text-sm text-muted-foreground bg-white dark:bg-slate-700 dark:text-slate-300 rounded-full px-3 py-1">
                  {subcategoryServices.length} layanan
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subcategoryServices.map((service) => (
                  <ServiceCard key={service.title} service={service} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50/30 via-white to-yellow-100/30 dark:from-slate-900 dark:via-slate-800 dark:to-yellow-900/20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200/20 dark:bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-yellow-300/15 dark:bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-yellow-200/20 dark:bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-lime-200/15 dark:bg-lime-400/10 rounded-full blur-3xl"></div>

        {/* Leaf decorations */}
        <Leaf className="absolute top-32 right-1/4 w-8 h-8 text-yellow-300/30 dark:text-yellow-400/40 transform rotate-45" />
        <Leaf className="absolute bottom-1/3 left-1/4 w-6 h-6 text-yellow-400/30 dark:text-yellow-400/40 transform -rotate-12" />
        <Leaf className="absolute top-1/2 right-16 w-5 h-5 text-yellow-300/30 dark:text-yellow-400/40 transform rotate-90" />
      </div>

      {/* Top Navbar */}
      <header className="sticky top-0 z-50 w-full wayang-border wayang-texture backdrop-blur-md supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/70 wayang-shadow relative overflow-hidden">
        <div className="absolute top-1 right-4 wayang-decoration">
          <img src="/assets/images/wayang-pattern1.png" alt="" className="w-4 h-4 opacity-20 wayang-float" />
        </div>
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </Button>

            <div className="flex items-center space-x-2">
              <img
                src="/assets/images/logo-semar.png"
                alt="Logo SeMAr"
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div className="w-8 h-8 wayang-gradient rounded-lg items-center justify-center hidden">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold">
                <span className="text-amber-600 dark:text-amber-400">Se</span>
                <span className="text-foreground">MAr</span>
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Cari layanan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-72 border-yellow-200 focus:border-yellow-400"
              />
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="flex items-center hover:bg-yellow-100 dark:hover:bg-slate-700/50"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-yellow-500" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`
          fixed lg:sticky top-14 left-0 z-40 w-80 h-[calc(100vh-3.5rem)]
          wayang-texture wayang-border
          backdrop-blur-md transition-transform duration-300 ease-in-out wayang-shadow
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
        >
          <div className="overflow-y-auto h-full p-4">
            <nav className="space-y-2">
              {/* Home */}
              <Button
                variant={selectedView === "home" ? "default" : "ghost"}
                className={`w-full justify-start ${selectedView === "home" ? "wayang-gradient text-white wayang-shadow" : "hover:bg-amber-50 dark:hover:bg-slate-700"}`}
                onClick={() => selectMainCategory("home")}
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>

              {/* Data Storage System */}
              <div>
                <Button
                  variant="ghost"
                  className="w-full justify-between hover:bg-amber-50 dark:hover:bg-slate-700"
                  onClick={() => toggleMenu("storage")}
                >
                  <div className="flex items-center">
                    <Database className="w-4 h-4 mr-2" />
                    Data Storage System
                  </div>
                  {openMenus.storage ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </Button>

                {openMenus.storage && (
                  <div className="ml-6 mt-2 space-y-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`w-full justify-start text-sm py-2 ${selectedView === "storage" && !selectedSubcategory ? "wayang-gradient text-white" : "hover:bg-amber-100 dark:hover:bg-slate-700"}`}
                      onClick={() => selectMainCategory("storage")}
                    >
                      Lihat Semua
                    </Button>
                    {Object.entries(subcategoryConfig.storage).map(
                      ([key, data]) => {
                        const IconComponent = data.icon;
                        return (
                          <Button
                            key={key}
                            variant="ghost"
                            size="sm"
                            className={`w-full justify-start text-xs leading-relaxed py-2 h-auto ${selectedView === "storage" && selectedSubcategory === key ? "bg-amber-100 dark:bg-amber-900/50" : "hover:bg-amber-50 dark:hover:bg-slate-700"}`}
                            onClick={() => selectSubcategory("storage", key)}
                          >
                            <IconComponent className="w-3 h-3 mr-2 flex-shrink-0" />
                            <span className="text-left break-words">
                              {data.title}
                            </span>
                          </Button>
                        );
                      },
                    )}
                  </div>
                )}
              </div>

              {/* Official Website */}
              <div>
                <Button
                  variant="ghost"
                  className="w-full justify-between hover:bg-amber-50 dark:hover:bg-slate-700"
                  onClick={() => toggleMenu("official")}
                >
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    Official Website
                  </div>
                  {openMenus.official ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </Button>

                {openMenus.official && (
                  <div className="ml-6 mt-2 space-y-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`w-full justify-start text-sm py-2 ${selectedView === "official" && !selectedSubcategory ? "wayang-gradient text-white" : "hover:bg-amber-100 dark:hover:bg-slate-700"}`}
                      onClick={() => selectMainCategory("official")}
                    >
                      Lihat Semua
                    </Button>
                    {Object.entries(subcategoryConfig.official).map(
                      ([key, data]) => {
                        const IconComponent = data.icon;
                        return (
                          <Button
                            key={key}
                            variant="ghost"
                            size="sm"
                            className={`w-full justify-start text-xs leading-relaxed py-2 h-auto ${selectedView === "official" && selectedSubcategory === key ? "bg-amber-100 dark:bg-amber-900/50" : "hover:bg-amber-50 dark:hover:bg-slate-700"}`}
                            onClick={() => selectSubcategory("official", key)}
                          >
                            <IconComponent className="w-3 h-3 mr-2 flex-shrink-0" />
                            <span className="text-left break-words">
                              {data.title}
                            </span>
                          </Button>
                        );
                      },
                    )}
                  </div>
                )}
              </div>
            </nav>
          </div>
        </aside>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 lg:ml-0 relative z-10">
          {/* Mobile Search */}
          <div className="lg:hidden p-3 border-b border-yellow-200/50 dark:border-slate-700/50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Cari layanan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-yellow-200 focus:border-yellow-400"
              />
            </div>
          </div>

          {renderContent()}
        </main>
      </div>

      {/* Footer */}
      <footer className="wayang-gradient text-white py-12 relative overflow-hidden wayang-shadow">
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
        <div className="absolute top-4 left-4 wayang-decoration">
          <img src="/assets/images/wayang-pattern2.png" alt="" className="w-8 h-8 opacity-30 wayang-float" />
        </div>
        <div className="absolute bottom-4 right-4 wayang-decoration">
          <img src="/assets/images/wayang5.png" alt="" className="w-10 h-12 opacity-40 wayang-float-slow" />
        </div>
        <div className="container relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img
                src="/assets/images/logo-semar.png"
                alt="Logo SeMAr"
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div className="w-8 h-8 bg-white rounded-lg items-center justify-center hidden">
                <BarChart3 className="w-5 h-5 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold">
                <span className="text-amber-200">Se</span>MAr
              </h3>
            </div>
            <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
              Sistem Monitoring & Evaluasi Tata Kelola Administrasi dan Teknis
              BPS Kabupaten Nganjuk
            </p>
            <div className="border-t border-yellow-600 pt-6">
              <p className="text-sm text-yellow-200">
                © 2025 BPS Kabupaten Nganjuk. Semua hak cipta dilindungi.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
