import React, { useState } from "react";
import { Clock, MoreVertical, Search } from "lucide-react";
import { chats } from "../../Constant/chats";
import TextChip from "./TextChip";
import { Store } from "../../ContextAPI/Context";

const Chats = () => {
  const { setUser } = Store();
  const [message, setMessage] = useState("All Messages");
  const handleChatClick = (chat) => {
    setUser(chat);
  };
  return (
    <div className="w-100 d-flex flex-column bg-white  ChatsWrapper">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center py-2  px-2">
        <div className="form-group d-flex align-items-center gap-1">
          <label>{message}</label>
          <select
            className="form-control "
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: "4px", height: "4px" }}
          >
            <option>Unread</option>
            <option>Seen</option>
            <option>Archive</option>
            <option>All Messages</option>
          </select>
        </div>
        <MoreVertical className="cursor-pointer" />
      </div>
      {/* Divider */}
      <div className="divider w-100 customDivider"></div>
      {/* Search Component */}
      <div className="d-flex w-100 justify-content-center py-3  px-1">
        <div className="SearchWrapper">
          <Search className="searchIcon" />
          <input type="text" placeholder="Search or start a new chat" />
        </div>
      </div>
      {/* Divider */}
      {/* <div className="divider"></div> */}

      {/* Chats */}

      <div className="messageWrapper d-flex flex-column">
        {chats.map((chat, index) => (
          <div
            className="chatWrapper w-100 d-flex gap-2 cursor-pointer"
            key={index}
            onClick={() => handleChatClick(chat)}
          >
            <img src={chat.dp} className="chatUserDP" />
            <div className="d-flex flex-column justify-content-center">
              <div className="d-flex gap-3 align-items-center">
                <h4 className="p-0 m-0 fs-6 userName">{chat.user}</h4>
                {chat.tag === "Parent" && (
                  <TextChip label="Parent" bg="#EDE7FF" text="#7F53FE" />
                )}
                {chat.tag === "Student" && (
                  <TextChip label="Student" bg="#DE6D2E1F" text="#DE6D2E" />
                )}
                {chat.tag === "Instructor" && (
                  <TextChip label="Instructor" bg="#3DC0791F" text="#44AB96" />
                )}
              </div>
              <div className="message">{chat.lastMessage}</div>
              <div className="d-flex gap-1 align-items-center justify-content-end chatFooter mt-1">
                <Clock className="icon" /> <span>{chat.timestamp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chats;