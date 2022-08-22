import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const onChange = (event) => setTodo(event.target.value);
  return (
    <div>
      <input
        onChange={onChange}
        value={todo}
        type="text"
        placeholder="Write your to do..."
      />
    </div>
  );
}

export default App;
