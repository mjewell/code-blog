import React, { useState } from "react";

type Props = {
  userId: number;
};

export default function MessageComposer({ userId }: Props) {
  const [message, setMessage] = useState("");
  const [prevUserId, setPrevUserId] = useState(userId);

  if (userId !== prevUserId) {
    setPrevUserId(userId);
    setMessage("");
  }

  function sendMessage() {
    // make an api call here
    setMessage("");
  }

  return (
    <div style={{ display: "flex" }}>
      <input
        style={{ flex: 1 }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
