// 1. Running on Component Mount (Empty Dependency Array)
// This effect runs only once when the component mounts.

import { useEffect } from "react";

function Example1() {
  useEffect(() => {
    console.log("Component Mounted");
  }, []); // Empty dependency array

  return <h1>Check the console!</h1>;
}

export default Example1;



// 2. Running on State Change (Dependency Array)
// This effect runs whenever the count state changes.


import { useState, useEffect } from "react";

function Example2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]); // Runs when `count` changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default Example2;



// 3. Cleanup Function (For Unmounting)
// This effect demonstrates cleanup, useful for things like event listeners or intervals.

import { useState, useEffect } from "react";

function Example3() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval); // Cleanup when unmounted
      console.log("Timer stopped");
    };
  }, []);

  return <h1>Timer: {timer}s</h1>;
}

export default Example3;




// These examples show:

// Running useEffect once on mount.

// Running useEffect when a state value changes.

// Cleaning up effects when the component unmounts.
