import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";
import EmailForm from "./email-form";

export default function Footer() {
  return (
    <footer className="mb-16 mt-48 flex flex-wrap justify-between">
      <div>
        <p className="mb-6 font-title text-6xl">Let's connect</p>
        <p className="text-muted-foreground">
          Say hello at andrei.iatan00@gmail.com
        </p>
        {/* <p className="text-muted-foreground">For more info, here's my resume</p> */}
        <div className="mt-6 flex gap-2">
          <Link
            href="https://www.linkedin.com/in/andrei-sebastian-iatan-8a026919b/"
            className="text-accent"
          >
            <IconBrandLinkedin />
          </Link>
          <Link href="https://www.github.com/iataand" className="text-accent">
            <IconBrandGithub />
          </Link>
        </div>
        <p className="mt-4 text-muted-foreground">© 2023 Andrei Iatan</p>
      </div>
      {/* <EmailForm /> */}
    </footer>
  );
}
