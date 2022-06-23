import React from "react";
// import "./Chat.css";
import { useQuery } from "@apollo/client";
import { getMessage } from "./query";

const Chat = ({ user }) => {
  const { loading, error, data } = useQuery(getMessage);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // const user = message.messages.user;

  return (
    <div>
      {data.messages.map(({ id, user: messageUser, content }) => (
        <div
          key={id}
          style={{
            display: "flex",
            justifyContent: user === messageUser ? "flex-end" : "flex-start",
            paddingBottom: "1em",
          }}
        >
          {user !== messageUser && (
            <div
              style={{
                height: "50",
                width: "80px",
                marginRight: "0.5em",
                border: "2px solid",
                borderRadius: 25,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontSize: "1rem",
              }}
            >
              {messageUser.toUpperCase()}
            </div>
          )}
          <div
            style={{
              background: user === messageUser ? "#58bf56" : "#e5e6ea",
              color: user === messageUser ? "white" : "black",
              padding: "1em",
              borderRadius: "1em",
              maxWidth: "60%",
            }}
          >
            {content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chat;
