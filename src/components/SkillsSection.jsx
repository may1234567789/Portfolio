import { Code2, Database, Layers3, Wrench } from "lucide-react";

const skillGroups = [
    {
        title: "Frontend",
        description: "Crafting responsive, accessible user interfaces.",
        icon: Code2,
        skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
        title: "Backend",
        description: "Building APIs and application logic.",
        icon: Database,
        skills: ["Node.js", "REST APIs", "SQL", "Authentication"],
    },
    {
        title: "Tools",
        description: "Keeping development workflows productive.",
        icon: Wrench,
        skills: ["Git", "GitHub", "Vite", "VS Code"],
    },
    {
        title: "Practices",
        description: "Making software easier to use and maintain.",
        icon: Layers3,
        skills: ["Responsive design", "Accessibility", "Performance", "Testing"],
    },
];

export const SkillsSection = () => (
    <section id="skills" className="relative px-4 py-24">
        <div className="container mx-auto max-w-5xl">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
                Skills <span className="text-primary">&amp; Tools</span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
                The technologies and practices I use to turn ideas into dependable
                digital experiences.
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
