import React, { useState } from "react";

function RegisterForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.password) {
      setError("⚠️ Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    setError("");
    setSubmitted(form);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Bài 5: Form Đăng ký</h2>
      <input
        type="text"
        name="name"
        placeholder="Tên"
        value={form.name}
        onChange={handleChange}
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Mật khẩu"
        value={form.password}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleSubmit}>Đăng ký</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {submitted && (
        <div>
          <h4>Thông tin đã nhập:</h4>
          <p>Tên: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
          <p>Mật khẩu: {submitted.password}</p>
        </div>
      )}
    </div>
  );
}

export default RegisterForm;
