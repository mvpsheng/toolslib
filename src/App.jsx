import "./App.css";
import Nav from "./components/Nav";
import Subject from "./components/Subject";

import { useState, useEffect } from "react";
export default function App() {
  const navItems = [
    "All Websites",
    "Remote Jobs",
    "English Learning",
    "Software Development",
    "Videos",
    "Note and Plans",
  ];

  const websites = [
    // { name: "Google", url: "https://www.google.com", type: "Search Engine" },
    // { name: "Facebook", url: "https://www.facebook.com", type: "Social Media" },
    // { name: "GitHub", url: "https://github.com", type: "Development" },
    // { name: "Amazon", url: "https://www.amazon.com", type: "E-commerce" },
    {
      name: "We Work Remotely",
      url: "https://www.amazon.com",
      type: "Remote Jobs",
    },
    {
      name: "FreeLancer",
      url: "https://www.freelancer.cn/",
      type: "Remote Jobs",
    },
    { name: "EchoJobs", url: "https://www.amazon.com", type: "Remote Jobs" },

    {
      name: "Cambridge Dictionary",
      url: "https://www.amazon.com",
      type: "Dictionary",
    },
    {
      name: "菜鸟教程",
      url: "https://www.amazon.com",
      type: "Software Development",
    },
    {
      name: "Frontend Development In depth",
      url: "https://www.amazon.com",
      type: "Software Development",
    },
    {
      name: "GitHub",
      url: "https://www.amazon.com",
      type: "Software Development",
    },
    {
      name: "SAP Tutorial",
      url: "https://www.amazon.com",
      type: "Software Development",
    },
    {
      name: "Code Studio",
      url: "https://www.amazon.com",
      type: "Software Development",
    },
    {
      name: "FreeCodeCamp",
      url: "https://www.amazon.com",
      type: "Software Development",
    },
    {
      name: "resourcify.me",
      url: "https://resourcify.me/guides/web-frontend-ultimate",
      type: "Software Development",
    },
    {
      name: "pdai",
      url: "https://www.pdai.tech/md/project/project-x-overview.html",
      type: "Software Development",
    },
    {
      name: "Upwork",
      url: "https://www.amazon.com",
      type: "Remote Jobs",
    },
    {
      name: "Strrldev",
      url: "https://strrl.dev/",
      type: "Subsribe Blogs",
    },
    {
      name: "Guoyu 郭宇",
      url: "https://guoyu.mirror.xyz/",
      type: "Subsribe Blogs",
    },
    {
      name: "Cali 佐玩",
      url: "https://cali.so/",
      type: "Subsribe Blogs",
    },
    {
      name: "Sky wind",
      url: "https://skywind.me/blog/",
      type: "Subsribe Blogs",
    },
    {
      name: "Britannica",
      url: "https://www.britannica.com/technology/computer",
      type: "Dictionary",
    },
    {
      name: "dunwu 顿悟",
      url: "https://dunwu.github.io/blog/about/",
      type: "Subsribe Blogs",
    },
    {
      name: "peter-lynch",
      url: "https://peter-lynch.netlify.app/pages/projects.html",
      type: "Subsribe Blogs",
    },
    {
      name: "pylon",
      url: "https://0x400.com/",
      type: "Subsribe Blogs",
    },
    {
      name: "changkun",
      url: "https://changkun.de/",
      type: "Subsribe Blogs",
    },
    {
      name: "MicroSoft TODO",
      url: "https://to-do.live.com/tasks/myday",
      type: "ToDo Apps",
    },
    {
      name: "dev Challenges",
      url: "https://devchallenges.io/",
      type: "Communities",
    },
    {
      name: "Frontend Mentor",
      url: "https://www.frontendmentor.io/home",
      type: "Communities",
    },
    {
      name: "pdai Navigations",
      url: "https://www.pdai.tech/md/resource/tools.html",
      type: "Navigations",
    },
    {
      name: "程序员 Navigations",
      url: "https://www.pdai.tech/md/resource/tools.html",
      type: "Navigations",
    },
    {
      name: "IP Address Tracker",
      url: "https://ipaddresstrackergxs.netlify.app",
      type: "IMadeThat",
    },
    {
      name: "Sign Up Forms",
      url: "https://signupformgxs.netlify.app/",
      type: "IMadeThat",
    },
    {
      name: "Authentication App",
      url: "https://authenticationappgxs.netlify.app/",
      type: "IMadeThat",
    },
    {
      name: "Shopping List",
      url: "https://shoppingifygxs.netlify.app",
      type: "IMadeThat",
    },
    {
      name: "Age Calculator",
      url: "https://age-calculator-gxs.netlify.app",
      type: "IMadeThat",
    },
    {
      name: "News Page",
      url: "https://newshomepagegxs.netlify.app/",
      type: "IMadeThat",
    },
    {
      name: "Tic Tac Toe",
      url: "https://tictactoegxs.netlify.app",
      type: "IMadeThat",
    },
    // https://tictactoegxs.netlify.app
    // https://age-calculator-gxs.netlify.app
    // http://cxy521.com/
  ];

  const [selectedType, setSelectedType] = useState(null);

  const types = [...new Set(websites.map((website) => website.type))];

  const filteredWebsites = selectedType
    ? websites.filter((website) => website.type === selectedType)
    : websites;

  function selectAType(type) {
    setSelectedType(type);
    console.log(filteredWebsites);
  }

  return (
    <div className="zoomcontainer">
      <div className="navs">
        {types.map((item) => (
          <Nav key={item} name={item} onclick={() => selectAType(item)}>
            {item}
          </Nav>
        ))}
      </div>
      <div className="subjects">
        {selectedType ? (
          <Subject name={selectedType} websites={filteredWebsites}></Subject>
        ) : (
          types.map((item) => (
            <Subject
              name={item}
              websites={websites.filter((website) => website.type === item)}
            ></Subject>
          ))
        )}
      </div>
    </div>
  );
}
