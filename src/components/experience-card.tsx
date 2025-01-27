import React from "react";

const experiences = [
  {
    role: "Front-End Developer",
    company: "Luxoft",
    date: "Aug 2022 - Jan 2024",
    description: (
      <ul className="list-disc pl-5">
        <li>
          Developed and maintained banking transfer software, using HTML5,
          JavaScript, TypeScript, React, CSS, Redux, and MaterialUI to ensure
          robust functionality and friendly user experience
        </li>
        <li>
          Integrated unit testing methodologies using Jest and the DOM Testing
          Library
        </li>
        <li>
          Used CI, CD pipelines to deploy and test applications following
          accurate development lifecycle process
        </li>
        <li>
          Actively participated in UX/UI design meetings to further expand my
          frontend knowledge
        </li>
        <li>
          Maintained, curated and updated Confluence documentation and Jira
          tasks using agile techniques
        </li>
        <li>
          Interacted with internal stakeholders to promptly resolve bugs and
          successfully deliver products
        </li>
      </ul>
    ),
  },
  {
    role: "Front-End Developer",
    company: "Softbinator Techonologies",
    date: "Oct 2021 - Aug 2022",
    description: (
      <ul className="list-disc pl-5">
        <li>
          Developed and maintained responsive user interfaces using HTML5, CSS,
          JavaScript, TypeScript, Angular, React, Redux, and SCSS in an Agile
          environment, delivering new features and resolving bugs
        </li>
        <li>
          Implemented Cypress framework to conduct automated end-to-end testing
        </li>
        <li>
          Employed Fetch-API to establish data manipulation and retrieval from
          RESTful APIs
        </li>
        <li>
          Spearheaded the development of a comprehensive admin page as the sole
          frontend developer
        </li>
      </ul>
    ),
  },
  {
    role: "Front-End Developer (Internship)",
    company: "Sonovative Group",
    date: "Jul 2021 - Oct 2021",
    description: (
      <ul className="list-disc pl-5">
        <li>
          Utilized TypeScript, React, BootStrap, and HTML5 to introduce new
          functionalities and resolve bugs
        </li>
        <li>
          Used MobX as the state management solution, enabling seamless
          synchronization of data
        </li>
        <li>
          Contributed to the conversion of a vanilla JavaScript website to the
          latest React version
        </li>
      </ul>
    ),
  },
];

const ExperienceSection = () => {
  return (
    <section className="mt-24 flex flex-wrap gap-16 bg-black text-white">
      <h2 className="mb-8 text-4xl font-bold">MY EXPERIENCE</h2>
      <div className="flex-1 space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="flex flex-wrap items-start justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold">{experience.role}</h3>
              {experience.company && (
                <p className="font-medium text-accent">{experience.company}</p>
              )}
              <span className="mt-4 whitespace-nowrap text-sm text-gray-400">
                {experience.date}
              </span>
              <div className="mt-2 text-gray-400">{experience.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
