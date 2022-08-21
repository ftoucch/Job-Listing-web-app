import React from "react";

const Jobs = ({ jobs, filterItems }) => {
  return (
    <div className="container">
      {jobs.map((job, index) => {
        const {
          featured,
          company,
          logo,
          position,
          role,
          level,
          postedAt,
          contract,
          location,
          languages,
          tools,
        } = job;
        return (
          <article className={featured ? "job featured" : "job"} key={index}>
            <div className="wrapper">
              {" "}
              <img src={logo} alt={company} />
              <div className="job-desc">
                <div className="job-type">
                  <span className="company">{company}</span>
                  {job.new && <span className="bullet-btn">NEW!</span>}

                  {featured && (
                    <span className="bullet-btn featured">FEATURED</span>
                  )}
                </div>
                <h4 className="job-title">{position}</h4>
                <div className="job-small-desc">
                  <ul>
                    <li>{postedAt}</li>
                    <li>{contract}</li>
                    <li>{location}</li>
                  </ul>
                </div>
                <hr></hr>
              </div>
            </div>
            <div className="filter-buttons">
              <button className="btn" onClick={() => filterItems(role)}>
                {role}
              </button>
              <button className="btn" onClick={() => filterItems(level)}>
                {level}
              </button>
              {languages.map((language, index) => {
                return (
                  <button
                    key={index}
                    className="btn"
                    onClick={() => filterItems(language)}
                  >
                    {language}
                  </button>
                );
              })}

              {tools.map((tool, index) => {
                return (
                  <button
                    key={index}
                    className="btn"
                    onClick={() => filterItems(tool)}
                  >
                    {tool}
                  </button>
                );
              })}
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Jobs;
