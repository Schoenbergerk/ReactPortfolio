import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'logo',
      description: '3 Character logo generator',
      link: "https://github.com/Schoenbergerk/",
      repo: "https://github.com/Schoenbergerk/SVG-Logo"
    },
    {
      name: 'ecomm',
      description: 'Mongo, Express, and Node',
      link: "https://github.com/Schoenbergerk/",
      repo: "https://github.com/Schoenbergerk/ecomm"
    },
    {
      name: 'planner',
      description: 'JQuery',
      link: "https://schoenbergerk.github.io/SchedulingCalendar/",
      repo: "https://github.com/Schoenbergerk/SchedulingCalendar"
    },
    {
      name: 'weather',
      description: 'JavaScript and API calls',
      link: "https://schoenbergerk.github.io/WeatherApp/",
      repo: "https://github.com/Schoenbergerk/WeatherApp"
    },
    // {
    //   name: 'calculator',
    //   description: 'React/JavaScript/CSS',
    //   link: "https://github.com/Schoenbergerk/",
    //   repo: "https://github.com"
    // },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
