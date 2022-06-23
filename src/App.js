import { Fragment, useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import SendBar from "./components/SendBar";

function App() {
  const [message, setMessage] = useState({ user: "Jack", content: "" });

  const onSend = () => {
    if (message.content.length > 0) {
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
      <SendBar message={message} handleChange={handleChange}></SendBar>
    </Fragment>
  );
}

export default App;
