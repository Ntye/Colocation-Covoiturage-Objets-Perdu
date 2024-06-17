// src/components/AccountBubble.jsx
import React from "react";

const AccountBubble = ({ user }) => {
  return (
    <div className="account-bubble">
      {user && (
        <div>
          <p>{user.displayName}</p>
          <p>{user.email}</p>
          <img src={user.photoURL} alt={user.displayName} />
        </div>
      )}
    </div>
  );
};

export default AccountBubble;
