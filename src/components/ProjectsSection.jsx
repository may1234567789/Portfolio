import {
    ArrowUpRight,
    BrainCircuit,
    Code2,
    Database,
    LayoutDashboard,
} from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const projects = [
    {
        title: "Portfolio",
        description:
            "My personal portfolio for sharing projects, skills, and ways to get in touch.",
        icon: Code2,
        tags: ["JavaScript", "React", "Vite"],
        url: "https://github.com/may1234567789/Portfolio",
    },
    {
        title: "AI-Guardian",
        description:
            "A machine-learning-powered security firewall for AI agents and LLMs, combining sensitive-data detection with policy enforcement.",
        icon: BrainCircuit,
        tags: ["Python", "Machine learning", "AI security"],
        url: "https://github.com/may1234567789/AI-Guardian",
    },
    {
        title: "Certificates",
        description:
            "A collection of my certificates and learning achievements.",
        icon: Code2,
        tags: ["Certificates"],
        url: "https://github.com/may1234567789/Certificates",
    },
    {
        title: "Deep-Learning",
        description:
            "Notebook-based work exploring deep learning concepts and experiments.",
        icon: BrainCircuit,
        tags: ["Jupyter Notebook", "Deep learning"],
        url: "https://github.com/may1234567789/Deep-Learning",
    },
    {
        title: "AI-SEO-Tracker",
        description:
            "An AI-focused project for tracking search engine optimization.",
        icon: LayoutDashboard,
        tags: ["TypeScript", "AI", "SEO"],
        url: "https://github.com/may1234567789/AI-SEO-Tracker",
    },
    {
        title: "CivicPluse-",
        description:
            "A civic-focused project. Visit the repository to explore its implementation.",
        icon: Code2,
        tags: ["Civic technology"],
        url: "https://github.com/may1234567789/CivicPluse-",
    },
    {
        title: "Student Performance Prediction Model",
        description:
            "A notebook-based project for predicting student performance.",
        icon: Database,
        tags: ["Jupyter Notebook", "Machine learning"],
        url: "https://github.com/may1234567789/student-performance-prediction-model",
        demoUrl: "https://student-performance-prediction-mode-one.vercel.app",
    },
    {
        title: "To-Do-App",
        description:
            "A to-do application for organizing and tracking tasks.",
        icon: Code2,
        tags: ["CSS", "React", "Vite"],
        url: "https://github.com/may1234567789/To-Do-App",
    },
    {
        title: "Indian Startup Data Visualization",
        description:
            "A data visualization project focused on Indian startup data.",
        icon: Database,
        tags: ["Python", "Data visualization"],
        url: "https://github.com/may1234567789/Indian-Startup-Data-Visualization",
        stars: 7,
    },
    {
        title: "AI-Resume-Builder",
        description:
            "An AI-focused application for building resumes.",
        icon: BrainCircuit,
        tags: ["TypeScript", "AI"],
        url: "https://github.com/may1234567789/AI-Resume-Builder",
    },
    {
        title: "Job-Portal-Project",
        description:
            "A web project centered on job listings and job-seeking.",
        icon: LayoutDashboard,
        tags: ["JavaScript"],
        url: "https://github.com/may1234567789/Job-Portal-Project",
    },
    {
        title: "Real-Time-Process-Monitoring-System",
        description:
            "A Python project for monitoring processes in real time.",
        icon: LayoutDashboard,
        tags: ["Python", "Process monitoring"],
        url: "https://github.com/may1234567789/Real-Time-Process-Monitoring-System",
    },
    {
        title: "Chat-App",
        description:
            "A web project for a chat application.",
        icon: Code2,
        tags: ["HTML"],
        url: "https://github.com/may1234567789/Chat-App",
    },
    {
        title: "password-Generator",
        description:
            "A simple password generator and my first project.",
        icon: Code2,
        tags: ["EJS"],
        url: "https://github.com/may1234567789/password-Generator",
    },
];

export const ProjectsSection = () => (
    <section id="projects" className="relative px-4 py-24">
        <div className="container mx-auto max-w-5xl max-h-5xl">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
                Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
                Explore all 14 of my public GitHub repositories, from web applications
                to AI, machine learning, and data projects.
            </p>

            <Carousel>
                <CarouselContent>
                    {projects.map(({ title, description, icon: Icon, tags, url, demoUrl, stars }) => (
                        <CarouselItem
                            key={title}
                            className="md:basis-1/2 lg:basis-1/3"
                        >
                            <article className="gradient-border card-hover flex h-full flex-col p-6 text-left">
                                <div className="mb-6 flex h-36 items-center justify-center overflow-hidden rounded-lg border border-border/70 bg-primary/5">
                                    <Icon
                                        className="h-14 w-14 text-primary/80"
                                        strokeWidth={1.2}
                                        aria-hidden="true"
                                    />
                                </div>
                                <div className="mb-3 flex items-center justify-between gap-3">
                                    <h3 className="text-xl font-semibold">{title}</h3>
                                    {stars && (
                                        <span className="shrink-0 text-sm text-muted-foreground">
                                            {stars} stars
                                        </span>
                                    )}
                                </div>
                                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                                    {description}
                                </p>
                                <ul className="flex flex-wrap gap-2">
                                    {tags.map((tag) => (
                                        <li
                                            key={tag}
                                            className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                                        >
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`View ${title} on GitHub`}
                                        className="inline-flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
                                    >
                                        View on GitHub
                                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                                    </a>
                                    {demoUrl && (
                                        <a
                                            href={demoUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`View live demo for ${title}`}
                                            className="inline-flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
                                        >
                                            Live demo
                                            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                                        </a>
                                    )}
                                </div>
                            </article>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="mt-6 flex justify-center gap-3">
                    <CarouselPrevious className="static inset-auto my-0 translate-y-0" />
                    <CarouselNext className="static inset-auto my-0 translate-y-0" />
                </div>
            </Carousel>
            <div className="mt-12 text-center">
                <a href="#contact" className="cosmic-button inline-flex items-center gap-2">
                    Have a project in mind? Let&apos;s talk
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
            </div>
        </div>
    </section>
);
