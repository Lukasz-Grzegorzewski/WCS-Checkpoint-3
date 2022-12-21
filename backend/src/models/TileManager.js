const db = require("../datasource");

const table = "tile";

const find = (id) => {
  return db.query(`select * from  ${table} where id = ?`, [id]);
};

const findAll = () => {
  return db.query(`select * from  ${table}`);
};

const hideTreasure = () => {
  return db.query(`UPDATE ${table} SET has_treasure = false;`);
};

/* SELECT COUNT(id) FROM tile; */
const getAllIslandTiles = () => {
  return db.query(`select id from  ${table} WHERE type = 'island';`);
};

const putTreasure = () => {
  const array = [];

  const one = array[Math.floor(Math.random() * array.length)];
  console.warn("one :", one);

  return db.query(`UPDATE ${table} SET has_treasure = true WHERE id = ?;`, [
    one,
  ]);
};

const deleteOne = (id) => {
  return db.query(`delete from ${table} where id = ?`, [id]);
};

module.exports = {
  find,
  findAll,
  hideTreasure,
  putTreasure,
  getAllIslandTiles,
  deleteOne,
};
