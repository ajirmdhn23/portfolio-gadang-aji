"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Activities", href: "#activities" },
  { label: "Contact", href: "#connect" },
];

const stats = [
  { value: "06", label: "Selected Projects" },
  { value: "05+", label: "Technology Areas" },
  { value: "01", label: "Internship Experience" },
  { value: "05", label: "Campus Activities" },
];

const strengths = [
  { label: "Web Development", value: 80 },
  { label: "System Development", value: 70 },
  { label: "UI/UX Design", value: 80 },
  { label: "IoT & System Monitoring", value: 40 },
  { label: "Automation", value: 60 },
];

const skillGroups = [
  {
    number: "01",
    category: "Web Development",
    description:
      "Developing web applications by combining interfaces, features, data processing, and system requirements.",
    accent: "coral",
    skills: [
      "Laravel",
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "REST API",
    ],
  },
  {
    number: "02",
    category: "System Development",
    description:
      "Analyzing requirements, designing system flows and structures, and translating designs into implementable features.",
    accent: "purple",
    skills: [
      "System Flow",
      "User Flow",
      "Flowchart",
      "Use Case",
      "Activity Diagram",
      "ERD",
      "Database Design",
      "System Planning",
    ],
  },
  {
    number: "03",
    category: "UI/UX Design",
    description:
      "Designing digital experiences and interfaces through user flows, wireframes, prototypes, and visual interfaces.",
    accent: "yellow",
    skills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "UI Design",
      "User Flow",
    ],
  },
  {
    number: "04",
    category: "Development Tools & Server",
    description:
      "Using supporting tools for development, version control, local development, databases, and servers.",
    accent: "pink",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "XAMPP",
      "phpMyAdmin",
      "Nginx",
    ],
  },
  {
    number: "05",
    category: "IoT & System Monitoring",
    description:
      "Experienced in developing microcontroller- and sensor-based projects for monitoring and automatic control.",
    accent: "orange",
    skills: [
      "ESP32",
      "HC-SR04",
      "pH Sensor",
      "Sensor Integration",
      "Monitoring",
      "Automatic Control",
    ],
  },
  {
    number: "06",
    category: "Automation & Bot Development",
    description:
      "Developing Telegram bots to support faster and more structured retrieval, processing, monitoring, and presentation of operational data.",
    accent: "blue",
    skills: [
      "Node.js",
      "JavaScript",
      "Telegram Bot API",
      "REST API",
      "Axios",
      "Automation",
    ],
  },
];

const projects = [
  {
    image: "/tangan-kita.png",
    number: "01",
    title: "Tangan Kita",
    type: "Web Development · UI/UX Design",
    description:
      "A web application designed to provide an informative, easy-to-use digital experience with a responsive interface.",
    focus: [
      "User interface design",
      "Web page and component development",
      "User flow planning",
      "Responsive design for different devices",
      "Feature implementation based on user needs",
      "Applying UI/UX principles to the web application",
    ],
    stack: [
      "Laravel",
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Figma",
    ],
    accent: "coral",
  },
  {
    image: "/explore-wonosari.png",
    number: "02",
    title: "Explore Wonosari",
    type: "Web Development · UI/UX Design",
    description:
      "A tourism web application for Wisata Agro Wonosari in Singosari, Malang, providing destination information, service packages, and digital features for visitors.",
    focus: [
      "Tourism and destination information pages",
      "Tour packages and product catalog",
      "Visitor reservation estimation",
      "User authentication",
      "Invoice generation",
      "Responsive user interface",
    ],
    stack: [
      "Laravel",
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Figma",
    ],
    accent: "yellow",
  },
  {
    image: "/smart-aquaculture-system.png",
    number: "03",
    title: "Smart Aquaculture Monitoring & Automatic Water Management System",
    type: "IoT · Embedded System · Automatic Control",
    description:
      "An IoT-based fish farming system for monitoring water conditions and automatically managing water using sensors and predefined parameters.",
    focus: [
      "IoT system architecture and flow design",
      "Water-level monitoring using an ultrasonic sensor",
      "Water quality parameter measurement",
      "Automatic water pump control",
      "ESP32 and sensor integration",
      "Device data transmission for monitoring",
    ],
    stack: [
      "ESP32",
      "HC-SR04",
      "pH Sensor",
      "Sensor Integration",
      "Automatic Control",
    ],
    accent: "purple",
  },
  {
    image: "/smart-aquaculture-web.png",
    number: "04",
    title: "Smart Aquaculture Monitoring Website",
    type: "Web Development · System Development · IoT Monitoring",
    description:
      "A monitoring website supporting the Smart Aquaculture system by presenting sensor data, water conditions, and device operational information in a more structured way.",
    focus: [
      "Monitoring dashboard design",
      "Presentation of sensor and water condition data",
      "Data visualization for monitoring",
      "Integration of IoT data into a web-based system",
      "System flow and structure design",
      "Responsive monitoring interface",
    ],
    stack: [
      "Laravel",
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "IoT Monitoring",
    ],
    accent: "pink",
  },
  {
    image: "/telkom-operational-monitoring.png",
    number: "05",
    title: "Telkom Akses Operational Monitoring System",
    type: "Web Development · System Development · Monitoring",
    description:
      "An operational monitoring system developed during an internship to support the structured presentation, processing, and monitoring of operational information.",
    focus: [
      "Operational monitoring requirements analysis",
      "System flow and structure design",
      "Operational data processing and presentation",
      "Dashboard for monitoring needs",
      "Improving information accessibility",
      "Testing and refining features based on operational needs",
    ],
    stack: [
      "Web Development",
      "System Development",
      "Monitoring",
      "Data Processing",
      "UI/UX",
      "Automation",
    ],
    accent: "orange",
  },
  {
    image: "/telegram-monitoring-bots.png",
    number: "06",
    title: "Telegram-Based Operational Monitoring Bots",
    type: "Automation · Telegram Bot · Operational Monitoring · System Integration",
    description:
      "Developing and improving operational monitoring solutions that include Telegram bots for accessing Work Order and operational data. The solution integrates data from the Insera and Symphoni systems into a more structured and user-friendly monitoring format.",
    focus: [
      "Work Order monitoring bot for the Insera system",
      "Work Order summaries and details through Telegram",
      "Data filtering by work area, status, and monitoring needs",
      "Periodic data updates and monitoring notifications",
      "Operational data monitoring bot for the Symphoni system",
      "Retrieval, processing, and presentation of information through Telegram",
      "Integration of two different operational data sources",
      "Concise reports in an easy-to-read format",
    ],
    stack: [
      "Node.js",
      "JavaScript",
      "Telegram Bot API",
      "REST API",
      "Axios",
      "Automation",
    ],
    accent: "blue",
  },
];

const experiences = [
  {
    period: "2026",
    title: "Web Development & Automation Intern",
    place: "PT TELKOM AKSES",
    description:
      "Contributing to the development and improvement of digital solutions for operational monitoring needs. The work includes web-based system development, data processing and presentation, and Telegram bot development to support access to Work Order information and operational data from internal systems.",
    focus: "Web Development · Automation · System Monitoring",
  },
  {
    period: "2025 — 2026",
    title: "Intern Staff — Ministry of Social Affairs and Community",
    place: "BEM Fakultas Vokasi, University Brawijaya",
    description:
      "Contributing to organizational activities and social programs while developing communication, coordination, teamwork, and event management skills.",
    focus: "Achievement: Best Intern Staff Award",
  },
];

const activities = [
  {
    title: "BEM Fakultas Vokasi — Kabinet Skala Senandhika",
    role: "Intern Staff · Ministry of Social Affairs and Community",
    image:
      "/activities/staff-magang-bem-fakultas-vokasi-kabinet-skala-senandhika.jpeg",
  },
  {
    title: "Abdi Desa BEM Fakultas Vokasi 2025",
    role: "Ministry of Social Affairs and Community · Transportation & Equipment Division",
    image:
      "/activities/abdi-desa-kementerian-sosial-masyarakat-bem-fakultas-vokasi.jpeg",
  },
{
  title: "PKKMB Vokasi UB 2025 — ADAPTIVE",
  role: "Including PKKMB, Krida Mahasiswa, and Open House",
  image:
    "/activities/pkkmb-vokasi-ub-2025-mencakup-krida-mahasiswa-dan-open-house-adaptive.jpeg",
},
  {
    title: "SAMBA TI 2025",
    role: "Staff · Health Division",
    image: "/activities/samba-ti-2025.jpeg",
  },
  {
    title: "Vokasi Mengajar",
    role: "Staff · Transportation & Equipment Division",
    image: "/activities/vokasi-mengajar.jpeg",
  },
];

const learnedSkills = [
  {
    title: "Problem Solving",
    description:
      "Understanding problems and turning them into practical digital solutions.",
    icon: "01",
  },
  {
    title: "Web Development",
    description:
      "Building functional web applications from interfaces to system features.",
    icon: "02",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing interfaces with clarity, usability, and user experience in mind.",
    icon: "03",
  },
  {
    title: "System Thinking",
    description:
      "Understanding the relationship between hardware, software, data, and users within a system.",
    icon: "04",
  },
  {
    title: "Teamwork",
    description:
      "Collaborating with others to develop projects and achieve shared goals.",
    icon: "05",
  },
  {
    title: "Continuous Learning",
    description:
      "Learning through experimentation, projects, feedback, and hands-on experience.",
    icon: "06",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    handle: "github.com/ajirmdhn23",
    icon: "GH",
    href: "https://github.com/ajirmdhn23",
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/gadang-aji-ramadhan",
    icon: "in",
    href: "https://www.linkedin.com/in/gadang-aji-ramadhan-39b9b13a6/",
  },
  {
    label: "Instagram",
    handle: "@raamajii__",
    icon: "IG",
    href: "https://www.instagram.com/raamajii__/",
  },
  {
    label: "Email",
    handle: "ajirmdhn23@gmail.com",
    icon: "@",
    href: "mailto:ajirmdhn23@gmail.com",
  },
];

const accentClasses = {
  coral: {
    text: "text-[#ef654f]",
    bg: "bg-[#ef654f]",
    soft: "bg-[#ef654f]/10",
    border: "border-[#ef654f]/20",
  },
  purple: {
    text: "text-[#8b5cf6]",
    bg: "bg-[#8b5cf6]",
    soft: "bg-[#8b5cf6]/10",
    border: "border-[#8b5cf6]/20",
  },
  yellow: {
    text: "text-[#d59b20]",
    bg: "bg-[#d59b20]",
    soft: "bg-[#d59b20]/10",
    border: "border-[#d59b20]/20",
  },
  pink: {
    text: "text-[#e85d91]",
    bg: "bg-[#e85d91]",
    soft: "bg-[#e85d91]/10",
    border: "border-[#e85d91]/20",
  },
  orange: {
    text: "text-[#e57d32]",
    bg: "bg-[#e57d32]",
    soft: "bg-[#e57d32]/10",
    border: "border-[#e57d32]/20",
  },
  blue: {
    text: "text-[#4f82c2]",
    bg: "bg-[#4f82c2]",
    soft: "bg-[#4f82c2]/10",
    border: "border-[#4f82c2]/20",
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.65,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#ef654f]">
      <span>{number}</span>

      <span className="h-px w-8 bg-[#ef654f]/40" />

      <span>{children}</span>
    </div>
  );
}

function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <SectionLabel number={number}>{eyebrow}</SectionLabel>

      <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.03em] text-[#18202d] sm:text-4xl lg:text-[2.8rem]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#69717d]">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#18202d]">
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-full border border-[#18202d]/10 bg-[#f7f6f2]/85 shadow-[0_10px_40px_rgba(24,32,45,0.06)] backdrop-blur-xl">
          <div className="flex h-[66px] items-center justify-between px-5 sm:px-6">
            <a
              href="#home"
              onClick={closeMenu}
              className="text-xl font-black tracking-[-0.04em] text-[#18202d]"
            >
              Gadang
              <span className="text-[#ef654f]">AR.</span>
            </a>

            <nav className="hidden items-center gap-6 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[13px] font-semibold text-[#68717d] transition hover:text-[#ef654f]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href="https://www.linkedin.com/in/gadang-aji-ramadhan-39b9b13a6/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#18202d]/10 px-4 py-2 text-xs font-bold text-[#18202d] transition hover:border-[#ef654f]/40 hover:text-[#ef654f]"
              >
                LinkedIn
              </a>

              <a
                href="/cv-gadang-aji-ramadhan.pdf"
                download
                className="rounded-full bg-[#18202d] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#ef654f]"
              >
                Download CV
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#18202d]/10 bg-white text-lg lg:hidden"
              aria-label="Open navigation menu"
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="overflow-hidden border-t border-[#18202d]/10 lg:hidden"
              >
                <div className="flex flex-col gap-1 px-6 py-5">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="rounded-xl px-3 py-3 text-sm font-semibold text-[#68717d] transition hover:bg-[#ef654f]/5 hover:text-[#ef654f]"
                    >
                      {item.label}
                    </a>
                  ))}

                  <div className="mt-3 flex gap-3 border-t border-[#18202d]/10 pt-5">
                    <a
                      href="https://www.linkedin.com/in/gadang-aji-ramadhan-39b9b13a6/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-[#18202d]/10 px-4 py-2.5 text-xs font-bold"
                    >
                      LinkedIn
                    </a>

                    <a
                      href="/cv-gadang-aji-ramadhan.pdf"
                      download
                      className="rounded-full bg-[#18202d] px-4 py-2.5 text-xs font-bold text-white"
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="mx-auto max-w-7xl px-5 pb-24 pt-36 sm:px-6 lg:pb-32 lg:pt-44"
      >
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-[#ef654f]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#68717d]">
                Information Technology Student
              </span>
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 28,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.08,
              }}
              className="mt-7 max-w-4xl text-[3.7rem] font-black leading-[0.95] tracking-[-0.065em] text-[#18202d] sm:text-6xl lg:text-[6.5rem]"
            >
              Gadang Aji{" "}
              <span className="relative inline-block text-[#ef654f]">
                Ramadhan
                <span className="absolute -bottom-2 left-1 h-1 w-16 rounded-full bg-[#d59b20] sm:w-24" />
              </span>
              <span className="text-[#18202d]">.</span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.18,
              }}
              className="mt-8 max-w-2xl text-base leading-8 text-[#68717d] sm:text-lg"
            >
              Mahasiswa D3 Teknologi Informasi University Brawijaya semester
              5 with an interest in pengembangan web, desain UI/UX,
              pengembangan sistem, serta teknologi IoT dan otomasi digital.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.28,
              }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="rounded-full bg-[#18202d] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#ef654f]"
              >
                View Projects
              </a>

              <a
                href="#connect"
                className="rounded-full border border-[#18202d]/15 bg-white px-7 py-3.5 text-sm font-bold text-[#18202d] transition hover:-translate-y-1 hover:border-[#ef654f]/40 hover:text-[#ef654f]"
              >
                Let’s Connect
              </a>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="mt-14 grid max-w-3xl grid-cols-2 border-y border-[#18202d]/10 sm:grid-cols-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`py-5 ${
                    index !== 0
                      ? "border-l border-[#18202d]/10 pl-4 sm:pl-5"
                      : ""
                  }`}
                >
                  <p className="text-2xl font-black tracking-tight text-[#18202d]">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#89919b]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-[#18202d]/10 bg-white p-3 shadow-[0_25px_70px_rgba(24,32,45,0.10)]">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[#e9e6df]">
                <img
                  src="/profile.jpg"
                  alt="Gadang Aji Ramadhan"
                  className="aspect-[4/5] w-full object-cover object-center"
                />

                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#18202d]/70 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                      Based in
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      Malang, Indonesia
                    </p>
                  </div>

                  <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur">
                    D3 IT · S5
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between px-3 pb-2 pt-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ef654f]">
                    Focus
                  </p>

                  <p className="mt-2 text-sm font-bold text-[#18202d]">
                    Web · UI/UX · Systems
                  </p>
                </div>

                <div className="flex -space-x-2">
                  <span className="h-7 w-7 rounded-full border-2 border-white bg-[#ef654f]" />
                  <span className="h-7 w-7 rounded-full border-2 border-white bg-[#8b5cf6]" />
                  <span className="h-7 w-7 rounded-full border-2 border-white bg-[#d59b20]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="border-y border-[#18202d]/10 bg-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <SectionHeading
                number="01"
                eyebrow="About Me"
                title="Building solutions by understanding the problem first."
                description="I am a D3 Information Technology student at University Brawijaya with an interest in Web Development, UI/UX Design, and System Development."
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <p className="text-xl font-medium leading-9 tracking-[-0.02em] text-[#343c48] sm:text-2xl">
                  Throughout my studies, saya telah mengembangkan berbagai proyek
                  mulai dari aplikasi web dan perancangan antarmuka hingga
                  sistem berbasis IoT dan otomasi digital.
                </p>

                <p className="mt-7 max-w-2xl text-[15px] leading-8 text-[#747c86]">
                  Through academic projects, organizational activities, dan pengalaman
                  langsung, saya terus mengembangkan technical skills,
                  problem-solving, serta approach to designing and building solutions
                  yang functional and user-friendly.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#18202d]/10 bg-[#18202d]/10 sm:grid-cols-4">
                  {[
                    ["Education", "D3 Teknologi Informasi"],
                    ["University", "University Brawijaya"],
                    ["Semester", "Semester 5"],
                    ["Location", "Malang, Indonesia"],
                  ].map(([label, value]) => (
                    <div key={label} className="bg-[#f7f6f2] p-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#9299a2]">
                        {label}
                      </p>

                      <p className="mt-2 text-sm font-bold leading-5 text-[#18202d]">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-24 overflow-hidden rounded-[2rem] bg-[#18202d] p-7 text-white sm:p-10 lg:p-12">
              <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
                <div>
                  <SectionLabel number="01A">
                    My Approach
                  </SectionLabel>

                  <h3 className="mt-6 max-w-sm text-3xl font-black leading-tight tracking-[-0.03em]">
                    From ideas to usable systems.
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
                    Saya mencoba melihat project bukan hanya dari sisi kode,
                    tetapi juga dari kebutuhan pengguna dan bagaimana setiap
                    bagian sistem saling terhubung.
                  </p>
                </div>

                <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
                  {[
                    [
                      "01",
                      "Understanding requirements",
                      "Identifying needs and problems before deciding on the solution to build.",
                    ],
                    [
                      "02",
                      "Designing before building",
                      "Planning flows, structures, and system designs before moving into implementation.",
                    ],
                    [
                      "03",
                      "Thinking about users",
                      "Combining system development and UI/UX so solutions are easy to understand and use.",
                    ],
                    [
                      "04",
                      "Learning through projects",
                      "Turning what I learn into practical experience and applicable solutions.",
                    ],
                  ].map(([number, title, description]) => (
                    <div key={number} className="bg-[#202938] p-6">
                      <span className="text-xs font-black text-[#ef654f]">
                        {number}
                      </span>

                      <h4 className="mt-5 text-base font-bold">
                        {title}
                      </h4>

                      <p className="mt-2 text-xs leading-6 text-white/50">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          FOCUS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:py-32">
        <Reveal>
          <SectionHeading
            number="02"
            eyebrow="Areas of Focus"
            title="Areas I develop most often."
            description="These areas represent the skills I most often develop through coursework, projects, internship experience, and practical activities."
          />
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-7">
            {strengths.map((strength, index) => (
              <Reveal key={strength.label} delay={index * 0.06}>
                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-[#343c48]">
                      {strength.label}
                    </p>

                    <span className="text-xs font-black text-[#18202d]">
                      {strength.value}%
                    </span>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e9e7e2]">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: `${strength.value}%`,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.9,
                        delay: index * 0.08,
                        ease: "easeOut",
                      }}
                      className={`h-full rounded-full ${
                        index === 0
                          ? "bg-[#ef654f]"
                          : index === 1
                            ? "bg-[#8b5cf6]"
                            : index === 2
                              ? "bg-[#d59b20]"
                              : index === 3
                                ? "bg-[#e57d32]"
                                : "bg-[#e85d91]"
                      }`}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="flex min-h-[330px] items-center justify-center rounded-[2rem] border border-[#18202d]/10 bg-white">
              <div className="relative h-64 w-64">
                <div className="absolute inset-0 rounded-full border border-[#18202d]/10" />

                <div className="absolute inset-8 rounded-full border border-dashed border-[#18202d]/10" />

                <div className="absolute inset-[4.5rem] rounded-full bg-[#18202d]" />

                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                  <span className="text-2xl font-black text-white">
                    05+
                  </span>

                  <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.18em] text-white/50">
                    Areas
                  </span>
                </div>

                <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full border border-[#ef654f]/20 bg-[#fff8f5] px-3 py-1.5 text-[9px] font-bold text-[#ef654f]">
                  WEB DEV
                </span>

                <span className="absolute right-[-1rem] top-1/2 -translate-y-1/2 rounded-full border border-[#8b5cf6]/20 bg-[#f8f5ff] px-3 py-1.5 text-[9px] font-bold text-[#8b5cf6]">
                  SYSTEM
                </span>

                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-[#d59b20]/20 bg-[#fffaf0] px-3 py-1.5 text-[9px] font-bold text-[#b78214]">
                  UI/UX
                </span>

                <span className="absolute left-[-1rem] top-1/2 -translate-y-1/2 rounded-full border border-[#e57d32]/20 bg-[#fff8f2] px-3 py-1.5 text-[9px] font-bold text-[#d56f27]">
                  IOT
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section
        id="skills"
        className="border-y border-[#18202d]/10 bg-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:py-32">
          <Reveal>
            <SectionHeading
              number="03"
              eyebrow="Skills"
              title="Tools and skills I use."
              description="Skills are grouped by area to show the tools and fields I have learned through coursework, projects, and hands-on experience."
            />
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-[#18202d]/10 bg-[#18202d]/10 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group, index) => {
              const accent =
                accentClasses[
                  group.accent as keyof typeof accentClasses
                ];

              return (
                <Reveal key={group.category} delay={index * 0.05}>
                  <motion.article
                    whileHover={{
                      y: -4,
                    }}
                    className="h-full bg-[#f7f6f2] p-7 transition-colors hover:bg-white"
                  >
                    <div className="flex items-start justify-between">
                      <span
                        className={`text-xs font-black ${accent.text}`}
                      >
                        {group.number}
                      </span>

                      <span className="text-4xl font-black tracking-[-0.08em] text-[#18202d]/[0.035]">
                        +
                      </span>
                    </div>

                    <h3 className="mt-8 text-xl font-black tracking-[-0.02em] text-[#18202d]">
                      {group.category}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#747c86]">
                      {group.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-[#18202d]/10 bg-white px-3 py-1.5 text-[11px] font-semibold text-[#5d6570]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        id="projects"
        className="border-b border-[#18202d]/10 bg-[#f7f6f2]"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:py-32">
          <Reveal>
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <SectionHeading
                number="04"
                eyebrow="Selected Work"
                title="Some projects I have worked on."
                description="A selection of academic, personal, and internship-related work in web development, UI/UX, IoT systems, and automation."
              />

              <a
                href="https://github.com/ajirmdhn23"
                target="_blank"
                rel="noreferrer"
                className="w-fit shrink-0 rounded-full border border-[#18202d]/15 bg-white px-5 py-3 text-xs font-bold text-[#18202d] transition hover:border-[#ef654f]/40 hover:text-[#ef654f]"
              >
                GitHub ↗
              </a>
            </div>
          </Reveal>

          <div className="mt-16 space-y-8">
            {projects.map((project, index) => {
              const isExpanded = expandedProject === project.number;
              const reversed = index % 2 === 1;

              const accent =
                accentClasses[
                  project.accent as keyof typeof accentClasses
                ];

              return (
                <Reveal key={project.title} delay={index * 0.04}>
                  <motion.article
                    whileHover={{
                      y: -4,
                    }}
                    className={`group overflow-hidden rounded-[2rem] border border-[#18202d]/10 bg-white shadow-[0_15px_50px_rgba(24,32,45,0.05)] ${
                      isExpanded
                        ? "lg:min-h-[430px]"
                        : "lg:h-[430px]"
                    }`}
                  >
                    <div
                      className={`grid h-full lg:grid-cols-2 ${
                        reversed
                          ? "lg:[&>*:first-child]:order-2"
                          : ""
                      }`}
                    >
                      {/* IMAGE */}
                      <div className="relative h-[300px] overflow-hidden bg-[#e9e6df] lg:h-full">
                        <img
                          src={project.image}
                          alt={`${project.title} — screenshot project`}
                          className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.025]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#18202d]/55 via-transparent to-transparent" />

                        <div className="absolute left-6 top-6">
                          <span
                            className={`rounded-full border ${accent.border} ${accent.soft} px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] ${accent.text} backdrop-blur`}
                          >
                            Project {project.number}
                          </span>
                        </div>

                        <span className="absolute bottom-5 right-6 text-7xl font-black tracking-[-0.08em] text-white/20">
                          {project.number}
                        </span>
                      </div>

                      {/* CONTENT */}
                      <div className="flex min-h-0 flex-col justify-center overflow-hidden p-7 sm:p-10 lg:h-full lg:p-12">
                        <div className="min-h-0">
                          <p
                            className={`text-[10px] font-black uppercase tracking-[0.2em] ${accent.text}`}
                          >
                            {project.type}
                          </p>

                          <h3 className="mt-4 max-w-xl text-2xl font-black leading-tight tracking-[-0.035em] text-[#18202d] sm:text-3xl">
                            {project.title}
                          </h3>

                          <p className="mt-5 text-sm leading-7 text-[#747c86]">
                            {project.description}
                          </p>

                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                animate={{
                                  height: "auto",
                                  opacity: 1,
                                }}
                                exit={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                transition={{
                                  duration: 0.25,
                                }}
                                className="overflow-hidden"
                              >
                                <div className="mt-6 border-t border-[#18202d]/10 pt-6">
                                  <p
                                    className={`text-[10px] font-black uppercase tracking-[0.16em] ${accent.text}`}
                                  >
                                    My Contributions
                                  </p>

                                  <ul className="mt-4 space-y-2.5">
                                    {project.focus.map((item) => (
                                      <li
                                        key={item}
                                        className="flex gap-3 text-sm leading-6 text-[#5f6874]"
                                      >
                                        <span
                                          className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.bg}`}
                                        />

                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          <div className="mt-7 flex flex-wrap gap-2">
                            {project.stack.map((item) => (
                              <span
                                key={item}
                                className="rounded-full bg-[#f3f2ee] px-3 py-1.5 text-[10px] font-bold text-[#68717d]"
                              >
                                {item}
                              </span>
                            ))}
                          </div>

                          <div className="mt-8">
                            <button
                              type="button"
                              onClick={() =>
                                setExpandedProject(
                                  isExpanded
                                    ? null
                                    : project.number,
                                )
                              }
                              className={`text-xs font-black ${accent.text} transition hover:opacity-70`}
                            >
                              {isExpanded
                                ? "Hide Detailss ↑"
                                : "View Detailss →"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <section
        id="experience"
        className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:py-32"
      >
        <Reveal>
          <SectionHeading
            number="05"
            eyebrow="Experience"
            title="Learning through real responsibilities."
            description="Experiences that have helped me apply technical skills, collaboration, communication, and problem-solving in practical environments."
          />
        </Reveal>

        <div className="mt-16">
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <Reveal key={experience.title} delay={index * 0.1}>
                <article className="relative overflow-hidden rounded-[2rem] border border-[#18202d]/10 bg-white p-7 sm:p-9">
                  <div className="grid gap-7 lg:grid-cols-[0.3fr_1fr]">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.15em] text-[#ef654f]">
                        {experience.period}
                      </p>

                      <p className="mt-3 text-sm font-bold text-[#18202d]">
                        {experience.place}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black tracking-[-0.03em] text-[#18202d]">
                        {experience.title}
                      </h3>

                      <p className="mt-5 max-w-3xl text-sm leading-7 text-[#747c86]">
                        {experience.description}
                      </p>

                      <span className="mt-6 inline-flex rounded-full bg-[#f3f2ee] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-[#68717d]">
                        {experience.focus}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ACTIVITIES
      ===================================================== */}

      <section
        id="activities"
        className="border-y border-[#18202d]/10 bg-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:py-32">
          <Reveal>
            <SectionHeading
              number="06"
              eyebrow="Activities"
              title="Growing beyond the classroom."
              description="A selection of organizational and campus activities that have strengthened my teamwork, coordination, communication, and leadership skills."
            />
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {activities.map((activity, index) => (
              <Reveal key={activity.title} delay={index * 0.06}>
                <motion.article
                  whileHover={{
                    y: -5,
                  }}
                  className="group overflow-hidden rounded-[1.5rem] border border-[#18202d]/10 bg-[#f7f6f2]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#e9e6df]">
                    <img
                      src={activity.image}
                      alt={`${activity.title} — activity documentation`}
                      className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#18202d]/50 to-transparent" />

                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-black text-[#18202d] backdrop-blur">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-black leading-6 tracking-[-0.015em] text-[#18202d]">
                      {activity.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-[#747c86]">
                      {activity.role}
                    </p>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LEARNED SKILLS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:py-32">
        <Reveal>
          <SectionHeading
            number="07"
            eyebrow="What I’ve Learned"
            title="More than just tools and technology."
            description="Projects and experiences throughout my studies have helped me develop skills beyond simply writing code."
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-[#18202d]/10 bg-[#18202d]/10 md:grid-cols-2 xl:grid-cols-3">
          {learnedSkills.map((skill, index) => (
            <Reveal key={skill.title} delay={index * 0.05}>
              <motion.article
                whileHover={{
                  y: -4,
                }}
                className="h-full bg-[#f7f6f2] p-7 transition hover:bg-white"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-black text-[#ef654f]">
                    {skill.icon}
                  </span>

                  <span className="text-2xl font-black text-[#18202d]/10">
                    +
                  </span>
                </div>

                <h3 className="mt-10 text-xl font-black tracking-[-0.025em] text-[#18202d]">
                  {skill.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#747c86]">
                  {skill.description}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="connect"
        className="border-t border-[#18202d]/10"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:py-32">
          <Reveal>
            <div className="overflow-hidden rounded-[2.5rem] bg-[#18202d] p-8 text-white sm:p-12 lg:p-16">
              <SectionLabel number="08">
                Let’s Connect
              </SectionLabel>

              <div className="mt-7 max-w-3xl">
                <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                  Have an idea, opportunity, or project to{" "}
                  <span className="text-[#ef654f]">
                    discuss?
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl text-sm leading-8 text-white/55 sm:text-base">
                  Saya terbuka untuk kesempatan magang, kolaborasi, dan
                  diskusi seputar pengembangan web, UI/UX, sistem IoT,
                  serta otomasi digital.
                </p>
              </div>

              <div className="mt-12 grid gap-3 sm:grid-cols-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={
                      social.label === "Email" ? undefined : "_blank"
                    }
                    rel={
                      social.label === "Email"
                        ? undefined
                        : "noreferrer"
                    }
                    whileHover={{
                      y: -4,
                    }}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xs font-black ${
                        index === 0
                          ? "bg-white/10 text-white"
                          : index === 1
                            ? "bg-[#ef654f] text-white"
                            : index === 2
                              ? "bg-[#8b5cf6] text-white"
                              : "bg-[#d59b20] text-white"
                      }`}
                    >
                      {social.icon}
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-black text-white">
                        {social.label}
                      </p>

                      <p className="mt-1 truncate text-xs text-white/40">
                        {social.handle}
                      </p>
                    </div>

                    <span className="ml-auto text-white/30 transition group-hover:translate-x-1 group-hover:text-white">
                      ↗
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-[#18202d]/10 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-xs text-[#89919b] sm:flex-row">
          <p>© 2026 Gadang Aji Ramadhan</p>

          <p>
            Web Development · UI/UX · System Development
          </p>
        </div>
      </footer>
    </main>
  );
}