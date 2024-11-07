import React from "react";
import "./App.css";
import { Slider } from "./components/atoms/Slider";
import { Select, SelectOptionList } from "./components/atoms/Select";

const selectOptions: SelectOptionList = [
  { label: "First One", value: 1 },
  { label: "Second One", value: 2 },
  { label: "Third One", value: 3 },
];

function App() {
  return (
    <div className="h-screen bg-stone-800">
      <div className="max-w-3xl mx-auto bg-stone-50 py-12 px-8 min-h-screen">
        <h1 className="bg-green-500 mb-4 font-bold text-xl">Hello, world!</h1>
        <Slider minValue={0} maxValue={100} defaultValue={50} />
        <Select
          options={selectOptions}
          onSelectionChange={(key) => console.log(">>> changed", key)}
        />
      </div>
    </div>
  );
}

export default App;
