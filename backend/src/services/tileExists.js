const tileExists = (req, res, next) => {
  const { coord_x: x, coord_y: y } = req.body;
  console.warn("x in middleware :", x, "y in middleware:", y);

  if (
    x !== undefined &&
    x >= 0 &&
    x < 12 &&
    y !== undefined &&
    y >= 0 &&
    y < 6
  ) {
    next();
  } else {
    res.status(422);
  }
};

module.exports = {
  tileExists,
};
