import React, { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setList([...list, task]);
    setTask("");
  };

  const removeTask = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Bài 3: Danh sách công việc</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nhập công việc..."
      />
      <button onClick={addTask}>Thêm</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeTask(index)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
