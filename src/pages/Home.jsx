import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { HeroSection } from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/navbar";

export default function Home() {
    return (
        <div className='relative isolate min-h-screen bg-transparent'>
            {/* Background Effects */}
            <StarBackground />
            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            <footer className="border-t border-border/50 py-6 text-center text-sm text-muted-foreground">
                <p>
                    Designed & built by <span className="text-primary">Mayank Bhardwaj</span>
                    {" "}· © {new Date().getFullYear()}
                </p>
            </footer>
        </div>
    )
}