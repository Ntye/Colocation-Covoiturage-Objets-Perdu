// src/components/ReportFound.jsx
import React, { useState } from "react";
import { db } from "../firebaseConfig";

const ReportFound = () => {
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");

  const handleReportFound = async (e) => {
    e.preventDefault();
    try {
      await db.collection("found-items").add({
        description,
        contact,
        reportedAt: new Date(),
      });
      setDescription("");
      setContact("");
      alert("Found item reported successfully!");
    } catch (error) {
      console.error("Error reporting found item", error);
    }
  };

  return (
    <div className="report-found">
      <h2>Report Found Item</h2>
      <form onSubmit={handleReportFound}>
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
        <button type="submit">Report Found</button>
      </form>
    </div>
  );
};

export default ReportFound;
