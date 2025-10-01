import React, { useState } from "react";

function TextCounter() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Bài 1: Bộ đếm ký tự</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Nhập văn bản..."
        style={{ width: "300px", padding: "5px" }}
      />
      <p style={{ color: text.length > 100 ? "red" : "black" }}>
        Số ký tự: {text.length}
      </p>
      {text.length > 100 && (
        <p style={{ color: "red" }}>⚠️ Bạn đã vượt quá 100 ký tự!</p>
      )}
    </div>
  );
}

export default TextCounter;
