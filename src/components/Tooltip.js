import "../styles/Tooltip.css";

const Tooltip = ({ text, tooltipText }) => {
  return (
    <div className="tooltip">
      <i className={text}></i>
      <span className="tooltiptext">{tooltipText}</span>
    </div>
  );
};

export default Tooltip;
