import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full max-w-7xl"></main>
      <Footer />
    </div>
  );
}
