// src/components/AddLostItem.jsx
import React, { useState } from "react";
import { db } from "../firebaseConfig";

const AddLostItem = ({ currentUser }) => {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemImage, setItemImage] = useState("");

  const handleAddItem = async (e) => {
    e.preventDefault();
    try {
      await db.collection("lost-items").add({
        name: itemName,
        description: itemDescription,
        image: itemImage,
        reportedBy: currentUser.email,
        reportedAt: new Date(),
      });
      setItemName("");
      setItemDescription("");
      setItemImage("");
      alert("Lost item added successfully!");
    } catch (error) {
      console.error("Error adding lost item", error);
    }
  };

  return (
    <div className="add-lost-item">
      <h2>Add Lost Item</h2>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
        />
        <textarea
          placeholder="Item Description"
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={itemImage}
          onChange={(e) => setItemImage(e.target.value)}
          required
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddLostItem;
