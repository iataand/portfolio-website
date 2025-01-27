import Link from "next/link";
import { Button } from "./ui/button";
import { IconBrandGithub } from "@tabler/icons-react";

export default function Hero() {
  return (
    <div className="mt-10 flex flex-wrap justify-between">
      <div className="max-w-[544px]">
        <p className="font-title text-6xl md:text-8xl">
          Hi, I am <br /> Andrei Iatan.
        </p>
        <p className="text-gray-500">
          A Bucharest based front-end developer passionate about building
          accessible and user friendly websites.
        </p>
        <div className="mt-4 flex gap-6">
          {/* <Button variant="accent" size="lg">
            CONTACT ME
          </Button> */}
          <Link href="https://www.linkedin.com/in/andrei-sebastian-iatan-8a026919b/">
            <Button variant="secondary" size="icon">
              <p className="font-extrabold text-accent">in</p>
            </Button>
          </Link>
          <Link href={"https://github.com/iataand"}>
            <Button variant="secondary" size="icon" className="text-accent">
              <IconBrandGithub />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
