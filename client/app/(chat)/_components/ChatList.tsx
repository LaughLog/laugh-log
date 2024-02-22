import React from "react";
import { ChatBoxReciever, ChatBoxSender } from "./ChatBox";

interface Props {
  chats: any;
  user: any;
}

const ChatList = ({ chats, user }: Props) => {
  return (
    <div>
      {chats.map((chat: any, index: number) => {
        if (chat.user === user)
          return (
            <ChatBoxSender
              key={index}
              message={chat.message}
              user={chat.user}
            />
          );
        return (
          <ChatBoxReciever
            key={index}
            message={chat.message}
            user={chat.user}
          />
        );
      })}
    </div>
  );
};

export default ChatList;
