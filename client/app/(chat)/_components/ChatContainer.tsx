'use client';

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import {
  doc,
  setDoc,
  collection,
  serverTimestamp,
  query,
  onSnapshot,
  orderBy
} from 'firebase/firestore';

import InputText from './InputText';
import UserLogin from './UserLogin';
import ChatList from './ChatList';
import { db } from '@/firebase/app';

const ChatContainer = () => {
  // ERROR: Module not found: Can't resolve 'bufferutil' in '/Users/jithoon/Documents/laugh-lab/client/node_modules/ws/lib'
  let socket = io('http://localhost:5001/chat', {
    withCredentials: true,
    extraHeaders: {
      'my-custom-header': 'abcd'
    }
  });

  const [chats, setChats] = useState<any>([]);
  const [user, setUser] = useState<any>('');

  const chatsRef = collection(db, 'Messages');

  useEffect(() => {
    setUser(sessionStorage.getItem('user'));
  }, [user]);

  // db에서 지난 대화 불러오기
  useEffect(() => {
    const q = query(chatsRef, orderBy('createdAt', 'asc'));

    const unsub = onSnapshot(q, querySnapshot => {
      const fireChats: any[] = [];

      querySnapshot.forEach(doc => {
        fireChats.push(doc.data());
      });

      setChats([...fireChats]);
    });

    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    socket.on('chat', senderChats => {
      setChats(senderChats);
    });

    return () => {
      socket.off('chat');
    };
  }, []);

  const sendChatToSocket = (chat: any) => {
    socket.emit('chat', chat);
  };

  const addToFirrebase = (chat: any) => {
    const newChat = {
      createdAt: serverTimestamp(),
      user,
      message: chat.message
    };
    const chatRef = doc(chatsRef);

    setDoc(chatRef, newChat)
      .then(() => console.log('Chat added succesfully'))
      .catch(console.log);
  };

  const addMessage = (chat: any) => {
    const newChat = { ...chat, user: sessionStorage.getItem('user') };
    addToFirrebase(chat);
    setChats([...chats, newChat]);
    sendChatToSocket([...chats, newChat]);
  };

  const logout = () => {
    sessionStorage.removeItem('user');
    setUser('');
  };

  return (
    <>
      {user ? (
        <>
          <h4>Username: {user}</h4>
          <p onClick={logout} style={{ color: 'blue', cursor: 'pointer' }}>
            Log Out
          </p>
          <ChatList chats={chats} user={user} />
          <InputText addMessage={addMessage} />
        </>
      ) : (
        <UserLogin user={user} setUser={setUser} />
      )}
    </>
  );
};

export default ChatContainer;
