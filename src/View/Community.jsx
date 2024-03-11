import React from "react";
import Chats from "../Components/Common/Chats";
import Chat from "../Components/Common/Chat";

const Community = () => {
  return (
    <div className=" d-flex gap-4 communityWrapper ">
      <div className="chatsMain shadow rounded">
        <Chats />
      </div>
      <div className="SingleChat w-100">
        <Chat />
      </div>
    </div>
  );
};

export default Community;
