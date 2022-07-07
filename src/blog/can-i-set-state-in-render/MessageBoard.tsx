import React, { useState } from "react";
import MessageComposer from "./MessageComposer";

type User = {
  id: number;
  name: string;
};

function Card({
  user,
  onClick,
  isSelected,
}: {
  user: User;
  onClick: () => void;
  isSelected: boolean;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)",
        borderRadius: 2,
        ...(isSelected && {
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "#069420",
        }),
        marginBottom: 3,
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ padding: "5px 16px" }}>
        <h4 style={{ marginTop: 10, marginBottom: 10 }}>
          <b>{user.name}</b>
        </h4>
      </div>
    </div>
  );
}

const users: User[] = [
  { id: 1, name: "Philip J Fry" },
  { id: 2, name: "Turanga Leela" },
  { id: 3, name: "Bender Bending Rodríguez" },
];

export default function MessageBoard() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        {users.map((user) => (
          <Card
            key={user.id}
            user={user}
            onClick={() => setSelectedUserId(user.id)}
            isSelected={user.id === selectedUserId}
          />
        ))}
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1, backgroundColor: "#EEEEEE" }}></div>
        <MessageComposer userId={selectedUserId} />
      </div>
    </div>
  );
}
