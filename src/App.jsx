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
      name: "IELTSLiz",
      url: "https://ieltsliz.com/how-to-prepare-for-ielts-essential-steps/",
      type: "English Learning",
    },
    {
      name: "IELTS Speaking Training",
      url: "https://www.bilibili.com/video/BV1Rz4y1q7QV?p=39&vd_source=f094d7c3380a67852396d8fc3e19bacb",
      type: "English Learning",
    },
    {
      name: "IELTS Listening Training",
      url: "https://www.bilibili.com/video/BV1sM4y1Y7oM/?spm_id_from=333.999.0.0&vd_source=f094d7c3380a67852396d8fc3e19bacb",
      type: "English Learning",
    },
    {
      name: "IELTS Reading Training",
      url: "https://www.bilibili.com/video/BV1Ko4y1E7Ew?p=24&vd_source=f094d7c3380a67852396d8fc3e19bacb",
      type: "English Learning",
    },
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
