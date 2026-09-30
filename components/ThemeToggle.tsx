"use client";

export default function ThemeToggle() {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
  };
  const icon = "absolute h-5 w-5 transition-all duration-500 ease-out";
  return (
    <button onClick={toggle} aria-label="Toggle light and dark mode" className="relative flex h-10 w-10 items-center justify-center rounded-full border border-blueprint/30 transition-colors hover:bg-blueprint/10">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={`${icon} rotate-0 scale-100 dark:-rotate-90 dark:scale-0`}>
        <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${icon} rotate-90 scale-0 dark:rotate-0 dark:scale-100`}>
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    </button>
  );
}
