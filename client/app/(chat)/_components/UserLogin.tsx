import React, { useState } from 'react';

const button = {
  width: '10%',
  height: 50,
  fontWeight: 'bold',
  borderRadius: 10,
  fontSize: 18,
  backgroundColor: '#075e54',
  borderWidth: 0,
  color: '#fff',
  margin: 10
};

interface Props {
  user: any;
  setUser: React.Dispatch<any>;
}

const UserLogin = ({ user, setUser }: Props) => {
  const [input, setInput] = useState<any>('');

  const handleSetUser = () => {
    setUser(input);
    sessionStorage.setItem('user', input);
  };

  return (
    <div>
      <h1 style={{ margin: 10, textAlign: 'center' }}>Super Chat </h1>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input
          style={{
            margin: 10,
            height: 30,
            width: '25%',
            borderRadius: 10,
            borderWidth: 10,
            fontSize: 15,
            paddingInline: 5
          }}
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Write a random name"
        ></input>
        <button onClick={handleSetUser} style={button}>
          Login
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
