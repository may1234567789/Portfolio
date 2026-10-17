import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
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
                {/* <SkillsSection />    */}
            </main>
        </div>
    )
}