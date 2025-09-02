// src/components/Hello.jsx
import React from "react";

export default function Hello({ name = "World" }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>Hello, {name} 👋</h1>
      <p>Welcome to your React app (Vite + React).</p>
    </div>
  );
}
