import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/navbar";

export default function Home() {
    return (
        <div className='relative isolate min-h-screen bg-transparent'>
            {/* Background Effects */}
            <StarBackground />
            {/* Navbar */}
            <Navbar />
        </div>
    )
}