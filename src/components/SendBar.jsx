import React from "react";

const SendBar = ({ message, handleChange, onSend }) => {
  return (
    <form
      onSubmit={onSend}
      style={{
        display: "flex",
        margin: 0,
      }}
    >
      <div style={{ width: "15%" }}>
        <input
          style={{ width: "90%" }}
          value={message.user}
          name="user"
          onChange={handleChange}
        />
      </div>
      <div style={{ width: "75%" }}>
        <input
          style={{ width: "100%" }}
          name="content"
          value={message.content}
          onChange={handleChange}
        />
      </div>
      <div style={{ width: "10%" }}>
        <button style={{ width: "100%" }} type="submit">
          SEND
        </button>
      </div>
    </form>
  );
};

export default SendBar;
