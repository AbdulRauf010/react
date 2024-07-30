import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const addVal = () => {
    setCounter(counter + 1);
  };

  const removeVal = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("You can not go into the negative values");
    }
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={addVal}>Add</button>
      <button onClick={removeVal}>Remove</button>
    </>
  );
}

export default App;
