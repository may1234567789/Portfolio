import { useState } from "react";
import { Mail, Send } from "lucide-react";

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL?.trim();

export const ContactSection = () => {
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!contactEmail) {
            setMessage("Set VITE_CONTACT_EMAIL in your environment to enable email submissions.");
            return;
        }

        const formData = new FormData(event.currentTarget);
        const subject = `Portfolio inquiry from ${formData.get("name")}`;
        const body = [
            `Name: ${formData.get("name")}`,
            `Email: ${formData.get("email")}`,
            "",
            formData.get("message"),
        ].join("\n");

        window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setMessage("Your email app should open with your message ready to send.");
        event.currentTarget.reset();
    };

    return (
        <section id="contact" className="relative px-4 py-24">
            <div className="container mx-auto max-w-5xl">
                <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
                    Have a project in mind or want to say hello? Send a note and let&apos;s
                    start a conversation.
                </p>

                <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
                    <div className="space-y-6 text-left">
                        <div>
                            <h3 className="mb-2 text-xl font-semibold">Let&apos;s work together</h3>
                            <p className="text-muted-foreground">
                                I&apos;m always open to discussing new projects, creative ideas,
                                or opportunities to be part of your vision.
                            </p>
                        </div>
                        <div className="gradient-border flex items-center gap-4 p-5">
                            <span className="rounded-full bg-primary/10 p-3">
                                <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                            </span>
                            <div>
                                <p className="font-medium">Email</p>
                                <p className="text-sm text-muted-foreground">
                                    {contactEmail || "Configure VITE_CONTACT_EMAIL to receive messages"}
                                </p>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="gradient-border space-y-5 p-6 text-left">
                        <div className="grid gap-5 sm:grid-cols-2">
                            <label className="space-y-2 text-sm font-medium">
                                Your name
                                <input
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    className="w-full rounded-lg border border-border bg-background/70 px-4 py-3 font-normal outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                                    placeholder="Jane Smith"
                                />
                            </label>
                            <label className="space-y-2 text-sm font-medium">
                                Your email
                                <input
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="w-full rounded-lg border border-border bg-background/70 px-4 py-3 font-normal outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                                    placeholder="jane@example.com"
                                />
                            </label>
                        </div>
                        <label className="block space-y-2 text-sm font-medium">
                            Message
                            <textarea
                                name="message"
                                rows="5"
                                required
                                className="w-full resize-y rounded-lg border border-border bg-background/70 px-4 py-3 font-normal outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                                placeholder="Tell me a little about what you have in mind..."
                            />
                        </label>
                        <button type="submit" className="cosmic-button inline-flex items-center gap-2">
                            Send Message
                            <Send className="h-4 w-4" aria-hidden="true" />
                        </button>
                        {message && (
                            <p role="status" className="text-sm text-muted-foreground">
                                {message}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};
