import "./CostDate.css";
const CostDate = (props) => {
  const month = props.date.toLocaleString("uk-UK", { month: "long" });
  const day = props.date.getFullYear();
  const year = props.date.toLocaleString("uk-UK", { day: "2-digit" });

  return (
    <div className="cost-date">
      <div className="cost-date__month">{month}</div>
      <div className="cost-date__year">{day}</div>
      <div className="cost-date__day">{year}</div>
    </div>
  );
};

export default CostDate;
