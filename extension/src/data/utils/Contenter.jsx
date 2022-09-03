const Contenter = (current) => {
  let mode = current;

  switch (mode) {
      case 'verse':
        mode = 'hadith';
          break;

      case 'hadith':
        mode = 'quote';
          break;

      default:
        mode = 'verse';
          break;
  }

  return mode;
};

export default Contenter;
