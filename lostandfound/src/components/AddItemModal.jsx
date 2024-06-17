import React, { useState } from 'react';
import axios from 'axios';
import './Modal.css';

const AddItemModal = ({ onClose, onItemAdded }) => {
  const [serialNumber, setSerialNumber] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('serialNumber', serialNumber);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('ownerEmail', ownerEmail);
    if (image) {
      formData.append('image', image);
    }
    
    try {
      await axios.post('http://localhost:8080/api/lost-items', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      onItemAdded();
      onClose();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Signaler un objet</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Numéro de série"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email du propriétaire"
            value={ownerEmail}
            onChange={(e) => setOwnerEmail(e.target.value)}
            required
          />
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
          />
          <button type="submit">Ajouter</button>
          <button type="button" onClick={onClose}>Fermer</button>
        </form>
      </div>
    </div>
  );
};

export default AddItemModal;
