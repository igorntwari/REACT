import { useState } from "react";
import Calculations from "./components/Calculations";
import Output from "./components/Output";

function App() {
  const [yearlyData, setYearlyData] = useState([]);
  console.log(yearlyData)

  return (
    <div>
      <Calculations setYearlyData={setYearlyData} />
      <Output yearlyData={yearlyData}/>
    </div>
  );
}

export default App;
