import { useState } from "react";

import "./Cost.css";
import Card from "../UI/Card";
import CostFilter from "./CostFilter";
import CostsList from "./CostsList";
import CostsDiagram from "./CostsDiagram";

const Cost = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const yearChangeHandler = (year) => {
    console.log(year);
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram costs={filteredCosts} />
        <CostsList costs={filteredCosts} />
      </Card>
    </div>
  );
};

export default Cost;
