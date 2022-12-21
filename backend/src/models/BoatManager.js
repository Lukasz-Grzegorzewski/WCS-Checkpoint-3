const db = require("../datasource");

const table = "boat";

const find = (id) => {
  return db.query(`select * from  ${table} where id = ?`, [id]);
};

const findByName = (name) => {
  return db.query(
    `SELECT b.name AS name, b.coord_x AS coord_x, b.coord_y AS coord_y, t.type, t.has_treasure AS has_treasure FROM ${table} b INNER JOIN tile t ON b.coord_x = t.coord_x AND b.coord_y = t.coord_y WHERE name = ?;`,
    [name]
  );
};

const findAll = () => {
  return db.query(`select * from  ${table}`);
};

const updateById = (x, y, id) => {
  return db.query(`UPDATE ${table} SET coord_x = ?, coord_y= ? WHERE id = ?`, [
    x,
    y,
    id,
  ]);
};

const resetBP = () => {
  return db.query(
    `UPDATE ${table} SET coord_x = 1, coord_y = 1 WHERE name = 'Black Pearl';`
  );
};

const deleteOne = (id) => {
  return db.query(`delete from ${table} where id = ?`, [id]);
};

module.exports = {
  find,
  findByName,
  findAll,
  updateById,
  resetBP,
  deleteOne,
};
