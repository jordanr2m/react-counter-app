import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleSubtract = () => {
    setCount(count - 1)
  };

  const handleReset = () => {
    setCount(0)
  };

  const handleAdd = () => {
    setCount(count + 1)
  };

  let color = "#fff";
  if (count > 0) {
    color = "yellow"
  } else if (count < 0) {
    color = "red"
  } else {
    color = "white"
  }

  /* Below, we are using utility classes that instructor provided. Utility classes all start with -- */
  /* When you add an inline style in React, it treats it as an object, so you must use double curly braces {{}}. We set the color property equal to the color variable. If we wanted to use a word, we would also need quotes. Example: "red" */
  return (
    <section className='counter-sec --flex-center'>
      <div className='container counter --card --center-all'>
        <h1 className='--text-light'>React Counter App</h1>
        <p className='count --my2 --text-md --text-light --fw-bold' style={{color: color}}>{count}</p>
        <div className='buttons'>
          <button className='--btn --btn-danger' onClick={handleSubtract}>- Subtract</button>
          <button className='--btn' onClick={handleReset}>! Reset</button>
          <button className='--btn --btn-success' onClick={handleAdd}>+ Add</button>
        </div>
      </div>
    </section>
  );
}

export default App;
