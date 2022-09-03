const Copy = (content, setCopied) => {
  navigator.clipboard
    .writeText(content)
    .then(() => {
      setCopied(true);

      setTimeout(
        () => {
            setCopied(false);
        }, 1000
      );
    })
    .catch(() => {
      alert(
        'Something wen\t wrong while trying to copy this text, please contact us at muslimtab@benkco.io, if this error persists.'
      );
    });
};

export default Copy;
