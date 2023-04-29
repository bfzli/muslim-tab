const InitalMode = () => {
  const mode = localStorage.getItem("view");

  if (mode) return mode;
  else {
    localStorage.setItem("view", "verse");
    return "verse";
  }
};

export default InitalMode;
