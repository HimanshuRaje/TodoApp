import { useState } from "react";

export function CreateTodo({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = async () => {
    const res = await fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" },
    });

    const json = await res.json();
    if (json.msg === "Todo created") {
      setTitle("");
      setDescription("");
      onAdd(); // refresh todos
    }
  };

  return (
    <div className="create-todo-card">
      <h2>Create New Todo</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAdd}>➕ Add Todo</button>
    </div>
  );
}
