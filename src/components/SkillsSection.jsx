import { BrainCircuit, Code2, Database, Wrench } from "lucide-react";

const skillGroups = [
    {
        title: "Web Development",
        description: "Building web projects with modern frontend tools.",
        icon: Code2,
        skills: [
            "React",
            "JavaScript",
            "TypeScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Vite",
            "EJS",
        ],
    },
    {
        title: "AI & ML",
        description: "Exploring AI, machine learning, and deep learning projects.",
        icon: BrainCircuit,
        skills: ["Python", "Jupyter Notebook", "AI", "Machine learning"],
    },
    {
        title: "Data & Applications",
        description: "Working on data visualization and application-focused projects.",
        icon: Database,
        skills: ["Data visualization", "Student performance prediction", "Web applications"],
    },
    {
        title: "Developer Tools",
        description: "Sharing projects and learning in public.",
        icon: Wrench,
        skills: [
            "Git",
            "GitHub",
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
                Technologies and topics reflected across my public projects.
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
