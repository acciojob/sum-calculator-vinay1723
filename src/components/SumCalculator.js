import React, { useState, useEffect } from "react";

export default function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let totalSum = numbers.reduce((acc, num) => acc + num, 0);
      setSum(totalSum);
    }, 0);
  }, [numbers]);

  function handleChange(e) {
    const val = Number(e.target.value);
    if (!isNaN(val)) {
      setNumbers((prev) => [...prev, val]);
    }
  }

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input type="number" onChange={handleChange} />
      <p>Sum: {sum}</p>
      {/* <p>Numbers: {numbers.join(", ")}</p> */}
    </div>
  );
}
