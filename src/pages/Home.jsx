import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";

export default function Home() {
    return (
        <div className='relative isolate min-h-screen bg-transparent'>
            {/* Theme Toggle */}
            <div className="relative z-10">
                <ThemeToggle />
            </div>
            {/* Background Effects */}
            <StarBackground />
        </div>
    )
}