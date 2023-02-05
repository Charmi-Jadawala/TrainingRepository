import React, { useState, useEffect } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="container mx-auto my-2 text-center">
      <h1 className="text-primary display-6">Use Effect Practice</h1>
      <p className="text-success display-6 fs-2">You clicked {count} times</p>
      <button className="btn btn-outline-primary" onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}


