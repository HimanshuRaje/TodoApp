export function Todos({ todos, onUpdate }) {
  const handleComplete = async (id) => {
    await fetch("http://localhost:3000/completed", {
      method: "PUT",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    });
    onUpdate();
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/todo/${id}`, {
      method: "DELETE",
    });
    onUpdate();
  };

  return (
    <div className="todos-grid">
      {todos.map((todo) => (
        <div
          key={todo._id}
          className={`todo-card ${todo.completed ? "completed" : ""}`}
        >
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <div className="actions">
            {!todo.completed && (
              <button onClick={() => handleComplete(todo._id)}>
                ✅ Complete
              </button>
            )}
            <button onClick={() => handleDelete(todo._id)}>🗑 Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
