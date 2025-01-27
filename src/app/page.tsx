import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="m-auto max-w-[1440px]">
      <Header />
      <div className="px-10 md:px-28">
        <Hero />
      </div>
    </div>
  );
}
