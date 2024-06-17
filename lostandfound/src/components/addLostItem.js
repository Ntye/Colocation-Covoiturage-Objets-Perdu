// addLostItem.js
const connection = require("./mysqlConfig");

const addLostItem = (itemName, itemDescription, itemImage) => {
  const query = "INSERT INTO lost_items (name, description, image) VALUES (?, ?, ?)";
  connection.query(query, [itemName, itemDescription, itemImage], (err, result) => {
    if (err) throw err;
    console.log("Lost item added successfully");
  });
};

module.exports = addLostItem;
