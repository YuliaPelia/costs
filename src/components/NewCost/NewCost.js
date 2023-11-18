import { useState } from "react";
import CostForm from "./CostForm";
import "./NewCost.css";
const NewCost = (props) => {
  const [isFormVisible, setisFormVisible] = useState(false);

  const saveCostDataHandler = (inputcostData) => {
    const costData = {
      ...inputcostData,
      id: Math.random().toString(),
    };

    props.onAddCost(costData);

    setisFormVisible(false);
  };

  const inputCostDataHandler = () => {
    setisFormVisible(true);
  };

  const canselCostHandler = () => {
    setisFormVisible(false);
  };

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Додати новий розхід</button>
      )}
      {isFormVisible && (
        <CostForm
          onCancel={canselCostHandler}
          onSaveCostData={saveCostDataHandler}
        />
      )}
    </div>
  );
};

export default NewCost;
