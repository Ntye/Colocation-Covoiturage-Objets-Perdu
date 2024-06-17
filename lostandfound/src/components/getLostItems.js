// getLostItems.js
const connection = require("./mysqlConfig");

const getLostItems = () => {
  const query = "SELECT * FROM lost_items";
  connection.query(query, (err, results) => {
    if (err) throw err;
    console.log("Lost items:");
    results.forEach((item) => {
      console.log(`Name: ${item.name}, Description: ${item.description}, Image: ${item.image}`);
    });
  });
};

module.exports = getLostItems;
