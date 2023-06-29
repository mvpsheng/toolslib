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
    { name: "Google", url: "https://www.google.com", type: "Search Engine" },
    { name: "Facebook", url: "https://www.facebook.com", type: "Social Media" },
    { name: "GitHub", url: "https://github.com", type: "Development" },
    { name: "Amazon", url: "https://www.amazon.com", type: "E-commerce" },
    {
      name: "We Work Remotely",
      url: "https://www.amazon.com",
      type: "Remote Jobs",
    },
    { name: "EchoJobs", url: "https://www.amazon.com", type: "Remote Jobs" },
    {
      name: "IELTSLiz",
      url: "https://www.amazon.com",
      type: "English Learning",
    },
    {
      name: "Cambridge Dictionary",
      url: "https://www.amazon.com",
      type: "Translation",
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
      name: "Upwork",
      url: "https://www.amazon.com",
      type: "Remote Jobs",
    },
    {
      name: "Strrldev",
      url: "https://strrl.dev/",
      type: "Subsribe Blogs",
    },
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
