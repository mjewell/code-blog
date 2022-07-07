import React, { useState } from "react";

export default function InfiniteLoopHandler() {
  const [count, setCount] = useState(0);

  // @ts-expect-error no-highlight
  return <button onClick={setCount((x) => x + 1)}>count {count}</button>;
}
