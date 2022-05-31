export const getTiles = (gridSize = 3) => {
  return new Array(gridSize ** 2).fill().map((_, index) => index);
};
