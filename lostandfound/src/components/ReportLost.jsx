// src/components/ReportLost.jsx
import React, { useState } from "react";
import { db, storage } from "../firebaseConfig";

const ReportLost = () => {
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [image, setImage] = useState(null);

  const handleReportLost = async (e) => {
    e.preventDefault();
    try {
      const storageRef = storage.ref();
      const imageRef = storageRef.child(image.name);
      await imageRef.put(image);
      const imageUrl = await imageRef.getDownloadURL();

      await db.collection("lost-items").add({
        description,
        contact,
        imageUrl,
        reportedAt: new Date(),
      });

      setDescription("");
      setContact("");
      alert("Lost item reported successfully!");
    } catch (error) {
      console.error("Error reporting lost item", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="report-lost">
      <h2>Report Lost Item</h2>
      <form onSubmit={handleReportLost}>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Contact Info"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
        <input
          type="file"
          onChange={handleImageChange}
          required
        />
        <button type="submit">Report Lost</button>
      </form>
    </div>
  );
};

export default ReportLost;
