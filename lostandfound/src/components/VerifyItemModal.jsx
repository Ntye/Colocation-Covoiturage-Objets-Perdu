import React, { useState } from 'react';
import axios from 'axios';
import './Modal.css';

const VerifyItemModal = ({ onClose }) => {
  const [serialNumber, setSerialNumber] = useState('');
  const [name, setName] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/lost-items/verify', { serialNumber, name });
      setVerificationResult(response.data);
    } catch (error) {
      console.error('Error verifying item:', error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Vérifier un objet</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Numéro de série"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Vérifier</button>
          <button type="button" onClick={onClose}>Fermer</button>
        </form>
        {verificationResult && (
          <div>
            {verificationResult ? (
              <p>Objet signalé. Voulez-vous alerter le propriétaire par email?</p>
            ) : (
              <p>Objet non trouvé.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyItemModal;
