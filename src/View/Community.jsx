import React from "react";
import Chat from "../Components/Common/Chat";
import Chats from "../Components/Common/Chats";

const Community = () => {
  return (
    <div className=" d-flex gap-2 communityWrapper ">
      <div className="chatsMain ">
        <Chats />
      </div>
      <div className="SingleChat w-100">
        <Chat />
      </div>
    </div>
  );
};

export default Community;
