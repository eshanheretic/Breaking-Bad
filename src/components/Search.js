import React, { useState } from "react";

export default function Search({ handle }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    handle(e.target.value);
    setText(e.target.value);
  };
  return (
    <div className="search">
      <input
        value={text}
        onChange={(e) => handleChange(e)}
        type="text"
        autoFocus
      />
    </div>
  );
}
