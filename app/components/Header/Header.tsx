"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const investLinks = [
  { label: "Vermögensaufbau", href: "/vermoegensaufbau" },
  { label: "Zinsen", href: "/zinsen" },
  { label: "VL-Sparen", href: "/vl-sparen" },
  { label: "Kinderdepot", href: "/kinderdepot" },
  { label: "Betriebsrente", href: "/betriebsrente" },
];

const aboutLinks = [
  { label: "Expertise", href: "/expertise" },
  { label: "Nachhaltigkeit", href: "/nachhaltigkeit" },
  { label: "Sicherheit", href: "/sicherheit" },
];

export default function Header() {
  const [investOpen, setInvestOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between transition-all duration-300 ${
          scrolled
            ? "rounded-full bg-[#f5f5f3]/95 px-6 lg:px-10 py-4 shadow-md backdrop-blur"
            : "bg-transparent px-4 lg:px-6 py-4"
        }`}
      >
        {/* Left Spacer Desktop */}
        <div className="hidden lg:block w-[180px]" />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="flex lg:hidden items-center justify-center rounded-full border border-[#002b1b]/10 p-2"
        >
          <Menu className="h-6 w-6 text-[#002b1b]" />
        </button>

        {/* Center */}
        <div className="flex flex-col items-center">
          {/* Logo */}
          {!scrolled && (
            <Link
              href="/"
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black"
            >
              evergreen
            </Link>
          )}

          {/* Desktop Nav */}
          <nav
            className={`hidden lg:flex items-center gap-10 ${
              scrolled ? "" : "mt-6"
            }`}
          >
            {/* Investieren */}
            <div
              className="relative"
              onMouseEnter={() => setInvestOpen(true)}
              onMouseLeave={() => setInvestOpen(false)}
            >
              <button className="flex items-center gap-1 text-[18px] font-semibold text-[#002b1b]">
                Investieren
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    investOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 top-full mt-4 w-[260px] overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-200 ${
                  investOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <div className="flex flex-col py-3">
                  {investLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="px-7 py-4 text-[17px] font-medium text-[#002b1b] hover:bg-gray-50"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Kosten */}
            <Link
              href="/kosten"
              className="text-[18px] font-semibold text-[#002b1b]"
            >
              Kosten
            </Link>

            {/* Über uns */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className="flex items-center gap-1 text-[18px] font-semibold text-[#002b1b]">
                Über uns
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 top-full mt-4 w-[260px] overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-200 ${
                  aboutOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <div className="flex flex-col py-3">
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="px-7 py-4 text-[17px] font-medium text-[#002b1b] hover:bg-gray-50"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Lernen */}
            <Link
              href="/lernen"
              className="text-[18px] font-semibold text-[#002b1b]"
            >
              Lernen
            </Link>

            {/* Hilfe */}
            <Link
              href="/hilfe"
              className="text-[18px] font-semibold text-[#002b1b]"
            >
              Hilfe
            </Link>
          </nav>
        </div>

        {/* Desktop Buttons */}
        {!scrolled ? (
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/login"
              className="rounded-full bg-[#002b1b] px-8 py-4 text-lg font-semibold text-white transition hover:opacity-90"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-full bg-[#f7941d] px-8 py-4 text-lg font-semibold text-black transition hover:opacity-90"
            >
              Jetzt starten
            </Link>
          </div>
        ) : (
          <div className="hidden lg:block w-[180px]" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className={`absolute left-0 top-0 h-full w-[85%] max-w-[360px] bg-white p-6 transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Top */}
          <div className="mb-10 flex items-center justify-between">
            <Link
              href="/"
              className="text-3xl font-black tracking-tight text-black"
              onClick={() => setMobileMenuOpen(false)}
            >
              evergreen
            </Link>

            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="h-6 w-6 text-[#002b1b]" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col">
            {/* Investieren */}
            <div className="border-b border-gray-100 py-4">
              <p className="mb-3 text-lg font-semibold text-[#002b1b]">
                Investieren
              </p>

              <div className="flex flex-col gap-3 pl-2">
                {investLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[16px] text-[#002b1b]/80"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Kosten */}
            <Link
              href="/kosten"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-gray-100 py-4 text-lg font-semibold text-[#002b1b]"
            >
              Kosten
            </Link>

            {/* Über uns */}
            <div className="border-b border-gray-100 py-4">
              <p className="mb-3 text-lg font-semibold text-[#002b1b]">
                Über uns
              </p>

              <div className="flex flex-col gap-3 pl-2">
                {aboutLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[16px] text-[#002b1b]/80"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Lernen */}
            <Link
              href="/lernen"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-gray-100 py-4 text-lg font-semibold text-[#002b1b]"
            >
              Lernen
            </Link>

            {/* Hilfe */}
            <Link
              href="/hilfe"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-gray-100 py-4 text-lg font-semibold text-[#002b1b]"
            >
              Hilfe
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="mt-10 flex flex-col gap-4">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-full bg-[#002b1b] px-6 py-4 text-center text-lg font-semibold text-white"
            >
              Login
            </Link>

            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-full bg-[#f7941d] px-6 py-4 text-center text-lg font-semibold text-black"
            >
              Jetzt starten
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
