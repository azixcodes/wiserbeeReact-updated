import React, { useState, useRef } from "react";

import { chatbotSvg, paperPlaneSvg, smChatbotSvg } from "../../Constant/svgs";
import { SidebarLogo, primaryLogo } from "../../Constant/images";
const Chatbot = () => {
  const messagesRef = useRef(null);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      message: "Hi, how can I help you today?",
      timestamp: "06:45 PM",
      subject: "reciever",
    },
    {
      message: "How are you",
      timestamp: "06:45 PM",
      subject: "sender",
    },
    {
      message: "fine, thanks!",
      timestamp: "06:45 PM",
      subject: "reciever",
    },
    {
      message: "I need your help",
      timestamp: "06:45 PM",
      subject: "sender",
    },
  ]);

  const handleSentMessage = () => {
    const newMessage = {
      message,
      subject: "sender",
    };
    setChat([...chat, newMessage]);
    setMessage("");
    if (messagesRef.current) {
      const { scrollHeight, clientHeight } = messagesRef.current;
      messagesRef.current.scrollTop = scrollHeight - clientHeight + 2;
    }
  };
  return (
    <div className="chatbox">
      <div className="chatbotHeader text-white">
        {/* {chatbotSvg} */}
        <div className="chatbotLogoWrapper">
          <img src={SidebarLogo} className="h-100 w-100" alt="chatbot" />
        </div>
        <div className="d-flex flex-column justify-content-center p-0 m-0">
          <h6 className="p-0 m-0 fw-bold">Wiser Adviser</h6>
          <div className="d-flex gap-1 align-items-center">
            <div className="onlineDot"></div>
            <p className="p-0 m-0">online</p>
          </div>
        </div>
      </div>
      {/* Chat area */}
      <div
        className="chats d-flex flex-column w-100 gap-4 py-2 px-2"
        ref={messagesRef}
      >
        {chat.map((message, index) => (
          <div
            key={index}
            className={`w-100 d-flex position-relative ${
              message.subject === "reciever"
                ? "justify-content-start"
                : "justify-content-end"
            }`}
          >
            <div
              className={`w-auto ${
                message.subject === "sender"
                  ? "sentMessageBubble"
                  : "recievedMessageBubble"
              }`}
            >
              <div
                className={`${
                  message.subject === "sender"
                    ? "chatBotSentMessages"
                    : "RecievedMessageBubbleChatBot"
                }`}
              >
                {message.subject === "reciever" && (
                  <div className="d-flex align-items-center gap-2">
                    <div className="chatbotAvatarWrapper">
                      <img src={primaryLogo} />
                    </div>
                    <div className="chatboxRecievedMessages">
                      {message.message}
                    </div>
                  </div>
                )}
                {message.subject === "sender" && <div>{message.message}</div>}
              </div>
              {/* <p
                className={`position-absolute ${
                  message.subject === "sender"
                    ? "chatTimeStampsent"
                    : "chatTimeStamprecieved"
                }`}
              >
                {message.timestamp}
              </p> */}
            </div>
          </div>
        ))}
      </div>
      <div className="divider"></div>
      <div className="footer">
        <input
          type="text"
          placeholder="Ask your question..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <span className="m-0 ps-3 cursor-pointer" onClick={handleSentMessage}>
          {paperPlaneSvg}
        </span>
      </div>
    </div>
  );
};

export default Chatbot;
