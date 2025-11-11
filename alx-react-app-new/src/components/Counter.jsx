import { useState } from 'react';

function Counter() {
  // Step 2: Initialize state
  const [count, setCount] = useState(0);

  // Step 3 & 4: JSX structure with buttons and display
  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
