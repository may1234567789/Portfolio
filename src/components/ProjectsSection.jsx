import { ArrowUpRight, Code2, LayoutDashboard, ShoppingBag } from "lucide-react";

const projects = [
    {
        title: "Portfolio Website",
        description:
            "A personal portfolio for sharing projects, skills, and ways to get in touch.",
        icon: Code2,
        tags: ["React", "Tailwind CSS", "Responsive UI"],
    },
    {
        title: "Analytics Dashboard",
        description:
            "A clear dashboard concept for bringing key metrics and activity into one view.",
        icon: LayoutDashboard,
        tags: ["React", "Data visualization", "Dashboard UI"],
    },
    {
        title: "Online Storefront",
        description:
            "A polished shopping experience concept with product discovery at its center.",
        icon: ShoppingBag,
        tags: ["JavaScript", "E-commerce", "Responsive UI"],
    },
];

export const ProjectsSection = () => (
    <section id="projects" className="relative px-4 py-24">
        <div className="container mx-auto max-w-5xl">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
                Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
                A selection of project ideas and interface work. Get in touch to talk
                through the details or see more.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map(({ title, description, icon: Icon, tags }) => (
                    <article
                        key={title}
                        className="gradient-border card-hover flex flex-col p-6 text-left"
                    >
                        <div className="mb-6 flex h-36 items-center justify-center overflow-hidden rounded-lg border border-border/70 bg-primary/5">
                            <Icon
                                className="h-14 w-14 text-primary/80"
                                strokeWidth={1.2}
                                aria-hidden="true"
                            />
                        </div>
                        <div className="mb-3 flex items-center justify-between gap-3">
                            <h3 className="text-xl font-semibold">{title}</h3>
                            <ArrowUpRight
                                className="h-5 w-5 shrink-0 text-primary"
                                aria-hidden="true"
                            />
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
                    </article>
                ))}
            </div>

            <div className="mt-12 text-center">
                <a href="#contact" className="cosmic-button inline-flex items-center gap-2">
                    Have a project in mind? Let&apos;s talk
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
            </div>
        </div>
    </section>
);
