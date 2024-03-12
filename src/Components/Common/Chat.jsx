import React from "react";
import IconWrapper from "../Common/IconWrapper";
import TextChip from "./TextChip";
import { Store } from "../../ContextAPI/Context";
import { Mic, MoreVertical, Plus, Search, Smile } from "lucide-react";

const Chat = () => {
  const { user } = Store();
  const chat = [
    {
      message:
        "Oh, hello! All perfectly. I will check it and get back to you soon",
      timestamp: "06:45 PM",

      subject: "sender",
    },
    {
      message:
        "Oh, hello! All perfectly I will check it and get back to you soon",
      timestamp: "06:45 PM",
      subject: "reciever",
    },
    {
      message:
        "Oh, hello! All perfectly.I will check it and get back to you soon",
      timestamp: "06:45 PM",
      subject: "sender",
    },
    {
      message:
        "Ok",
      timestamp: "06:45 PM",
      subject: "reciever",
    },
  ];
  return (
    <main className="w-100 d-flex flex-column singleChatWrapper bg-white  ">
      {/* Header */}
      <div className="chatHeader d-flex justify-content-between w-100">
        <div className="d-flex align-items-center gap-2">
          <img src={user.dp} alt="user" className="userDp" />
          <h4 className="chatUserName">{user.user}</h4>
          <TextChip label={user.tag} />
        </div>
        <div className="d-flex gap-2">
          <IconWrapper bg="#6B6392" color="white">
            <Search />
          </IconWrapper>
          <IconWrapper bg="#6B6392" color="white">
            <MoreVertical />
          </IconWrapper>
        </div>
      </div>
      {/* Chat header */}
      <div className="messages mt-2 d-flex flex-column w-100 gap-4 ">
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
              className={`w-50 ${
                message.subject === "sender"
                  ? "sentMessageBubble"
                  : "recievedMessageBubble"
              }`}
            >
              <div
                className={`${
                  message.subject === "sender"
                    ? "chatBubbleSent"
                    : "RecievedMessageBubble"
                }`}
              >
                {message.message}
              </div>
              <p
                className={`position-absolute ${
                  message.subject === "sender"
                    ? "chatTimeStampsent"
                    : "chatTimeStamprecieved"
                }`}
              >
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="chatFooterMain">
        <div className="emojiWrapper">
          <Smile />
        </div>
        <div className="d-flex justify-content-start w-100 gap-2">
          <div className="d-flex align-items-center chatInputWrapper w-100">
            <input type="text" placeholder="type and send your message" />
            <div className="addFileChatWrapper">
              <Plus />
            </div>
          </div>
          <div className="emojiWrapper">
            <Mic style={{ color: "white" }} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Chat;
