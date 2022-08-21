import users from "./data";
import React, { useState, useEffect } from "react";
import "./style/index.css";
import Jobs from "./Jobs";
import FilterBox from "./FilterBox";
function App() {
  const [jobs, setJobs] = useState(users);
  const [panel, setPanel] = useState([]);

  const filterItems = (data) => {
    setPanel((panel) => [...panel, data]);
    console.log(panel);
    const newJobs = users.filter(
      (user) =>
        user.languages.includes(data) ||
        user.role === data ||
        user.tools.includes(data) ||
        user.level === data
    );
    setJobs(newJobs);
  };

  const setPanelData = (filters) => {
    const newPanel = panel.filter((e) => !e.includes(filters));
    const newJobs = users.filter(
      (user) =>
        !user.languages.includes(filters) ||
        !user.role === filters ||
        !user.tools.includes(filters) ||
        !user.level === filters
    );
    setPanel(newPanel);
    setJobs(newJobs);
  };

  const clear = () => {
    setJobs(users);
    setPanel([]);
  };
  return (
    <section className="section">
      <header className="header"></header>
      <FilterBox panel={panel} setPanelData={setPanelData} clear={clear} />
      <div className="center-content">
        <Jobs jobs={jobs} filterItems={filterItems} />
      </div>
    </section>
  );
}
export default App;
