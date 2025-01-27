import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <>
      <h2 className="mt-48 text-4xl font-bold">MY PROJECTS</h2>
      <div className="flex items-center justify-center">
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <Image
              src="https://utfs.io/f/3oEdKbrCvD62q0xBvV5gE8MAUr4Kl51FBPeQvzSHWIRNOLhm" // Replace with your image path
              alt="World News Blog Preview"
              className="h-full w-full object-cover"
              width={400}
              height={400}
            />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <h2 className="text-3xl font-bold">Cross Measure</h2>
            <p className="text-lg text-gray-400">Key Features & Technologies</p>
            <ul className="list-disc pl-5">
              <li>
                Drizzle ORM: Implements a scalable, maintainable database schema
                to manage user profiles, band listings,
              </li>
              <li>
                Firebase Authentication: Provides secure and user-friendly login
                and signup processes with google, facebook or phone number
              </li>
              <li>
                Tailwind CSS: Delivers a visually appealing and modern design,
                allowing for rapid UI development
              </li>
              <li>
                Vitest: Powers a robust testing framework for unit testing
              </li>
              <li>Cypress: Facilitates end-to-end testing</li>
            </ul>
            <div className="mt-6">
              <Link
                href="https://github.com/iataand/cross-measure"
                className="flex items-center text-accent hover:underline"
              >
                View Project <ArrowUpRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
