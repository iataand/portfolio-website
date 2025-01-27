import ExperienceSection from "@/components/experience-card";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ProjectCard from "@/components/project-card";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="m-auto max-w-[1440px]">
      <Header />
      <div className="px-10 md:px-28">
        <Hero />
        <ExperienceSection />
        <ProjectCard />
        <Footer />
      </div>
    </div>
  );
}
