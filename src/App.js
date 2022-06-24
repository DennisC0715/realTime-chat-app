import { Fragment, useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import SendBar from "./components/SendBar";
import { useMutation } from "@apollo/client";
import { POST_Message, getMessage } from "./components/query";


function App() {
  const [message, setMessage] = useState({ user: "Jack", content: "" });
  const [postMessage, { data, loading, error }] = useMutation(POST_Message);
  const onSend = (event) => {
    event.preventDefault();

    if (message.content.length > 0) {
      postMessage({
        variables: message,
        refetchQueries: [{ query: getMessage }],
      });
    }
    setMessage({ ...message, content: "" });
  };

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setMessage({ ...message, [name]: value });
  };
  return (
    <Fragment>
      <Chat user={message.user} />
      <SendBar
        message={message}
        handleChange={handleChange}
        onSend={onSend}
      ></SendBar>
    </Fragment>
  );
}

export default App;
