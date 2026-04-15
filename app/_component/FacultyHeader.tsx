"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaBars, FaX } from "react-icons/fa6";
import Link from "next/link";

type HeaderSlide = {
    label: string;
    src: string;
};

type HeaderMenuItem = {
    title: string;
    href: string;
};

const menuItems: HeaderMenuItem[] = [
    {
        title: "Engineering and Technology",
        href: "https://lcu.edu.ng/index.php/template/template-features-2/overview",
    },
    {
        title: "Social Management & Sciences",
        href: "http://lcu.edu.ng/index.php/template/typography/overview",
    },
    {
        title: "Environmental Design and Management",
        href: "http://lcu.edu.ng/index.php/template/typography-2/overview-fedm",
    },
    {
        title: "Arts & Education",
        href: "http://lcu.edu.ng/index.php/template/2016-10-27-08-53-54/overview",
    },
    {
        title: "College of Medicine & Health Sciences",
        href: "https://lcu.edu.ng/index.php/template/cm-hs/overview",
    },
    {
        title: "Faculty of Pharmacy",
        href: "https://lcu.edu.ng/index.php/template/faculty-of-pharmacy/overview",
    },
    {
        title: "Courseware",
        href: "http://lcu.edu.ng/index.php/library-and-info-sc",
    },
    {
        title: "Careers",
        href: "https://lcu.edu.ng/index.php/careers",
    },
    {
        title: "Photo Gallery",
        href: "https://lcu.edu.ng/index.php/university-community",
    },
    {
        title: "Lead City FM",
        href: "https://lcu.edu.ng/index.php/lead-city-fm",
    },
];

const slides: HeaderSlide[] = [
    { label: "Campus Building 1", src: "/Assets/E1.jpg" },
    { label: "Campus Building 2", src: "/Assets/E2.jpg" },
    { label: "Campus Building 3", src: "/Assets/background.jpg" },
    { label: "Campus Building 4", src: "/Assets/college-of-medicine.jpg" },
    { label: "Campus Building 5", src: "/Assets/E3.jpg" },
    { label: "Campus Building 6", src: "/Assets/E4.jpg" },
];

export default function FacultyHeader() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setCurrentSlide((value) => (value + 1) % slides.length);
        }, 6000);

        return () => window.clearInterval(timer);
    }, []);

    return (
        <section className="relative overflow-hidden border border-slate-800 bg-slate-950/30 shadow-xl shadow-slate-950/20">
            <div className="absolute inset-0 bg-slate-950/50" />
            <div className="relative h-105 md:h-130">
                <Image
                    src={slides[currentSlide].src}
                    alt={slides[currentSlide].label}
                    fill
                    sizes="100vw"
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-b from-slate-950/10 via-slate-950/20 to-slate-950/80" />
                <div className="absolute inset-0 flex flex-col justify-between">
                    <header className="flex items-center justify-between px-5 pt-5 text-slate-100">
                        <Link href="https://lcu.edu.ng/">
                            <div className="flex items-center gap-3 rounded-2xl border border-slate-200/10 bg-slate-950/50 px-4 py-3 backdrop-blur-sm">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-900">
                                    LCU
                                </div>
                                <div>
                                    <p className="text-[11px] uppercase tracking-[0.22em] text-slate-300">Lead City University</p>
                                    <p className="text-sm font-semibold text-white">Faculty of Engineering</p>
                                </div>
                            </div>
                        </Link>
                        <button
                            type="button"
                            onClick={() => setDrawerOpen(true)}
                            className="rounded-full border border-slate-200/10 bg-slate-950/60 p-3 text-slate-100 shadow-lg shadow-slate-950/20 backdrop-blur-sm"
                            aria-label="Open menu"
                        >
                            <FaBars size={18} />
                        </button>
                    </header>

                    <div className="px-5 pb-8 text-center text-white">
                        <p className="text-sm uppercase tracking-[0.35em] text-sky-200/90">Overview</p>
                        <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">Engineering and Technology at Lead City University</h1>
                        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-200/85 md:text-base">
                            Explore the faculty through a visual slider of our campus buildings, laboratories and facilities.
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute inset-x-0 bottom-5 z-20 flex justify-center gap-2">
                {slides.map((slide, index) => (
                    <button
                        key={slide.label}
                        type="button"
                        aria-label={`Show ${slide.label}`}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2.5 w-2.5 rounded-full transition ${currentSlide === index ? "bg-white" : "bg-slate-400/70"}`}
                    />
                ))}
            </div>

            {drawerOpen ? (
                <div className="absolute inset-0 z-30 flex">
                    <button
                        type="button"
                        onClick={() => setDrawerOpen(false)}
                        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
                        aria-label="Close menu overlay"
                    />
                    <aside className="relative ml-auto h-full w-full max-w-[320px] max-h-screen bg-slate-950/95 p-6 text-slate-100 shadow-2xl shadow-slate-950/80">
                        <button
                            type="button"
                            onClick={() => setDrawerOpen(false)}
                            className="mb-6 rounded-full border border-slate-200/10 bg-slate-900 p-3 text-slate-100 shadow-sm"
                            aria-label="Close menu"
                        >
                            <FaX size={18} />
                        </button>
                        <div className="space-y-6">
                            <div>
                                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Menu</p>
                                <h2 className="mt-2 text-2xl font-semibold text-white">Faculty Navigation</h2>
                            </div>
                            <nav className="space-y-4 text-sm overflow-y-auto max-h-[calc(100vh-220px)] text-slate-200">
                                {menuItems.map((item) => (
                                    <a
                                        key={item.title}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="block w-full rounded-2xl px-4 py-3 text-left transition hover:bg-slate-900/70 hover:text-white"
                                        onClick={() => setDrawerOpen(false)}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>
                </div>
            ) : null}
        </section>
    );
}
