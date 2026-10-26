import { BrainCircuit, Code2, Database, Wrench } from "lucide-react";

const skillGroups = [
    {
        title: "Web Development",
        description: "Building responsive web experiences from frontend to backend.",
        icon: Code2,
        skills: [
            "React",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Node.js",
            "REST APIs",
        ],
    },
    {
        title: "AI & ML",
        description: "Exploring intelligent tools and practical workflow automation.",
        icon: BrainCircuit,
        skills: ["AI tools", "Workflow automation"],
    },
    {
        title: "Data Science",
        description: "Connecting services and working with application data.",
        icon: Database,
        skills: ["SQL", "Authentication"],
    },
    {
        title: "DevOps & Tools",
        description: "Keeping development workflows productive and experiences reliable.",
        icon: Wrench,
        skills: [
            "Git",
            "GitHub",
            "Vite",
            "VS Code",
            "Responsive design",
            "Accessibility",
            "Performance",
            "Testing",
        ],
    },
];

export const SkillsSection = () => (
    <section id="skills" className="relative px-4 py-24">
        <div className="container mx-auto max-w-5xl">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
                Skills <span className="text-primary">&amp; Tools</span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
                Explore my skills across web development, AI and automation, data,
                and developer tools.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
                {skillGroups.map(({ title, description, icon: Icon, skills }) => (
                    <article key={title} className="gradient-border card-hover p-6 text-left">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="rounded-full bg-primary/10 p-3">
                                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                            </span>
                            <div>
                                <h3 className="font-semibold">{title}</h3>
                                <p className="text-sm text-muted-foreground">{description}</p>
                            </div>
                        </div>
                        <ul className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <li
                                    key={skill}
                                    className="rounded-full border border-border bg-background/70 px-3 py-1 text-sm text-foreground/80"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </div>
    </section>
);
