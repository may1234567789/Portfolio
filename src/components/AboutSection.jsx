import { Code, Cpu, Database } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">

            <div className="container mx-auto max-w-5xl">
                <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Web Developer &amp; Tech Creator
                        </h3>
                        <p className="text-muted-foreground">
                            With over 5 years of experience in web development, I specialize
                            in creating responsive, accessible, and performant web
                            applications using modern technologies.
                        </p>

                        <p className="text-muted-foreground">
                            I&apos;m passionate about creating elegant solutions to complex
                            problems, and I'm constantly learning new technologies and
                            techniques to stay at the forefront of the ever-evolving web
                            landscape.
                        </p>
                        <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a href="#projects" className="cosmic-button">
                                View Projects
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Code className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg"> Web Development</h4>
                                        <p className="text-muted-foreground">
                                            Creating responsive websites and web applications with
                                            modern frameworks.
                                        </p>
                                    </div> 
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Cpu className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-lg font-semibold">AI &amp; Automation</h4>
                                        <p className="text-muted-foreground">
                                            Exploring intelligent tools and practical ways to
                                            automate everyday workflows.
                                        </p>
                                    </div> 
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Database className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-lg font-semibold">Data &amp; APIs</h4>
                                        <p className="text-muted-foreground">
                                            Connecting services and working with data to build
                                            reliable, useful applications.
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
};