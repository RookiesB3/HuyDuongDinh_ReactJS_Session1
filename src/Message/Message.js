import React, { useEffect } from "react";

const Message = (props) => {
    useEffect(() => {}, [props.message]);

    const clear = () => {
      props.setMessage([]);
    };
  
    return (
      <div>
        <h2>MessagesPage</h2>
        <button onClick={clear}>Clear Messages</button>
        <div>
          {props.message.map((message) => (
            <span>{message}</span>
          ))} <br/>
        </div>
      </div>
      );
};

export default Message;