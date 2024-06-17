// src/components/Home.jsx
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";

// src/components/Home.jsx
// ...
<div>
  Logged in as: {currentUser ? currentUser.email : "Not logged in"}
</div>
// ...


const Home = ({ currentUser }) => {
  const [lostItems, setLostItems] = useState([]);

  useEffect(() => {
    const fetchLostItems = async () => {
      try {
        const snapshot = await db.collection("lost-items").get();
        const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setLostItems(items);
      } catch (error) {
        console.error("Error fetching lost items", error);
      }
    };

    fetchLostItems();
  }, []);

  const handleFoundItem = async (itemId) => {
    try {
      // Implement logic to mark the item as found
      alert("Item marked as found!");
    } catch (error) {
      console.error("Error marking item as found", error);
    }
  };

  return (
    <div className="home">
      <h1>Welcome to Lost & Found</h1>
      {currentUser && (
        <div>
          Logged in as: {currentUser.email}
        </div>
      )}
      {lostItems.map((item) => (
        <div key={item.id} className="lost-item">
          <img src={item.image} alt={item.name} onClick={() => handleFoundItem(item.id)} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
