import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const linkClassName =
        "text-foreground/80 transition-colors duration-200 hover:text-primary";

    return (
        <nav
            className={cn(
                "fixed z-40 w-full transition-all duration-300",
                isScrolled
                    ? "bg-background/80 py-3 shadow-xs backdrop-blur-md"
                    : "py-5",
            )}
        >
            <div className="container flex items-center justify-between">
                <a
                    className="flex items-center text-xl font-bold text-primary"
                    href="#hero"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <span className="text-glow relative z-10">
                        Portfolio
                    </span>
                </a>

                <div className="flex items-center gap-4">
                    <div className="hidden items-center gap-8 md:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                className={linkClassName}
                                href={item.href}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <ThemeToggle />

                    <button
                        type="button"
                        className="z-50 p-2 text-foreground md:hidden"
                        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen((open) => !open)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="absolute left-0 top-full flex w-full flex-col items-center gap-6 border-b border-border bg-background py-6 md:hidden">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                className={linkClassName}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};
