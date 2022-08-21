const FilterBox = ({ panel, setPanelData, clear }) => {
  if (panel.length === 0) {
    return null;
  }
  return (
    <div className="filter-box">
      <div className="wrapper">
        {panel.map((filterDetails, index) => {
          return (
            <span key={index} className="panel-wrapper">
              <button className="btn-no-hover">{filterDetails}</button>
              <button
                className="btn close"
                onClick={() => setPanelData(filterDetails)}
              >
                x
              </button>
            </span>
          );
        })}
      </div>
      <button className="clear" onClick={clear}>
        clear
      </button>
    </div>
  );
};

export default FilterBox;
