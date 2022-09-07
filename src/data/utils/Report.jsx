const Report = (item) => {
  const { content, reference, wallpaper, category, language } = item;

  const subject = `Muslim Tab: Content Report`;

  const message = `
    ==== DON'T CHANGE ====%0D%0A
    Content: ${content},%0D%0A
    Reference: ${reference},%0D%0A
    Wallpaper: ${wallpaper},%0D%0A
    Category: ${category},%0D%0A
    Language: ${language},%0D%0A
    ==== DON'T CHANGE ====%0D%0A
    %0D%0A
    Your comment here:%0D%0A
    I want to report...
  `;

  window.open(`mailto:muslimtab@benkco.io?subject=${subject}&body=${message}`);
};

export default Report;
