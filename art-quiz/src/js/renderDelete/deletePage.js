const deleteNodes = (...node) => {
  node.map((el) => el.remove());
};

export default deleteNodes;
