import React from "react";
import IconWrapper from "../Common/IconWrapper";
import TextChip from "./TextChip";
import { Store } from "../../ContextAPI/Context";
import { Mic, MoreVertical, Plus, Search, Smile } from "lucide-react";

const Chat = () => {
  const { user } = Store();
  const chat = [
    {
      recieved: [
        {
          message:
            "Oh, hello! All perfectly I will check it and get back to you soon",
          timestamp: "06:45 PM",
        },
        {
          message:
            "Oh, hello! All perfectly I will check it and get back to you soon",
          timestamp: "06:45 PM",
        },
      ],
      sent: [
        {
          message:
            "Oh, hello! All perfectly. I will check it and get back to you soon",
          timestamp: "06:45 PM",
        },
        {
          message: "how you doing,",
          timestamp: "06:45 PM",
        },
      ],
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
      <div className="messages mt-4">
        {chat.map((message, index) => (
          <div key={index} className="w-100 d-flex gap-5">
            <div className="w-50 d-flex flex-column gap-2 align-items-start">
              {message.recieved.map((text, index) => (
                <div className="recievedMessageBubble" key={index}>
                  <div className="RecievedMessageBubble">{text.message}</div>
                  <p className="chatTimeStamprecieved">{text.timestamp}</p>
                </div>
              ))}
            </div>
            <div className="w-50 d-flex flex-column gap-2 align-items-end mt-5">
              {message.sent.map((text, index) => (
                <div className="sentMessageBubble" key={index}>
                  <div className="chatBubbleSent">{text.message}</div>
                  <p className="chatTimeStampsent">{text.timestamp}</p>
                </div>
              ))}
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
