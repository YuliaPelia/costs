import CostItem from "./CostItem";
import "./CostList.css";

const CostsList = (props) => {
  if (props.costs.length === 0) {
    return <h2 className="cost-list__fallback">У цьому році витрат немає</h2>;
  }
  return (
    <ul className="cost-list">
      {props.costs.map((cost) => (
        <CostItem
          key={cost.id}
          date={cost.date}
          descr={cost.descr}
          amount={cost.amount}
        />
      ))}
    </ul>
  );
};

export default CostsList;
