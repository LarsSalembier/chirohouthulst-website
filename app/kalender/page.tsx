import {Navbar} from "@/app/components/navbar";
import {Footer} from "@/app/components/footer";
import Image from "next/image";

function Kalender() {
    return (
        <div className="flex flex-col min-h-screen items-center">
            <Navbar imageUrl="/tentkamp.jpg" imageAlt="Groepsfoto Kamp" title="Kalender"/>
            <main className="flex-grow w-full max-w-7xl p-16 gap-8 flex flex-col items-center">
                <Image src="/kalender.jpg" alt="Kalender" width={1000} height={400}/>
            </main>
            <Footer/>
        </div>
    )
}

export default Kalender;