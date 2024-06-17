import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemList from './components/ItemList';
import AddItemModal from './components/AddItemModal';
import VerifyItemModal from './components/VerifyItemModal';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showItemModal, setShowItemModal] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/lost-items');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowItemModal(true);
  };

  const handleModalClose = () => {
    setShowItemModal(false);
    setSelectedItem(null);
  };

  return (
    <div className="App">
      <header>
        <h1>Lost and Found</h1>
     </header>
	
      <div className="container">
	<NavBar />
        <button onClick={() => setShowAddModal(true)}>Signaler un objet</button>
        <button onClick={() => setShowVerifyModal(true)}>Vérifier un objet</button>
        <h2>Objets signalés</h2>
        <ItemList items={items} onItemClick={handleItemClick} />
      </div>

      {showAddModal && (
        <AddItemModal
          onClose={() => setShowAddModal(false)}
          onItemAdded={fetchItems}
        />
      )}

      {showVerifyModal && (
        <VerifyItemModal onClose={() => setShowVerifyModal(false)} />
      )}

      {showItemModal && selectedItem && (
        <div className="modal">
          <div className="modal-content">
            <img src={selectedItem.imageUrl || 'https://via.placeholder.com/150'} alt={selectedItem.name} />
            <h3>{selectedItem.name}</h3>
            <p>Numéro de série: {selectedItem.serialNumber}</p>
            <p>Description: {selectedItem.description}</p>
            <p>Date de signalisation: {selectedItem.dateReported}</p>
            <p>Email du propriétaire: {selectedItem.ownerEmail}</p>
            <button onClick={() => alert(`Alerte envoyée à ${selectedItem.ownerEmail}`)}>Alerter le propriétaire</button>
            <button onClick={handleModalClose}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
