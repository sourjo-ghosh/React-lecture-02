import { useState } from "react";

export default function Counter() {
  const counterStyle = {
    border: "2px solid red",
    padding: "8px",
  };
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div style={counterStyle}>
      <p>Count {count} </p>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
