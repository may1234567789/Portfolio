import { ArrowDown, ArrowUpRight } from "lucide-react";

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative flex min-h-screen flex-col items-center justify-center px-4"
        >
            <div className="container z-10 mx-auto max-w-4xl text-center">
                <div className="space-y-6">
                    <h1 className="whitespace-nowrap text-[clamp(1.25rem,6vw,4.5rem)] font-bold">
                        <span className="animate-fade-in opacity-0">Hi, I&apos;m</span>{" "}
                        <span className="animate-fade-in-delay-1 opacity-0 text-primary">
                            Mayank
                        </span>{" "}
                        <span className="animate-fade-in-delay-2 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent opacity-0">
                            Bhardwaj
                        </span>
                    </h1>
                    <p className="mx-auto max-w-2xl animate-fade-in-delay-2 text-lg text-foreground/70 opacity-0 md:text-xl">
                        I build web applications and explore AI, machine learning, and
                        data visualization. Browse my projects and experiments on GitHub.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a className="cosmic-button" href="#projects">
                            View My Work
                        </a>
                        <a
                            className="cosmic-button inline-flex items-center gap-2"
                            href="https://github.com/may1234567789"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub Profile
                            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>

            <a
                className="absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center text-foreground/70 transition-colors hover:text-primary"
                href="#about"
                aria-label="Scroll to the about section"
            >
                <span className="mb-2 text-sm">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </a>
        </section>
    );
};