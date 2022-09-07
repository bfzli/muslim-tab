import html2canvas from 'html2canvas';

const Screenshot = async () => {
  const screenshotTarget = document.body;

  html2canvas(screenshotTarget, {
    logging: false,
    useCORS: true,
  }).then((canvas) => {
    const base64image = canvas.toDataURL('image/png');

    function download(source) {
      const fileName = 'muslim-tab-' + Math.random().toString().substring(3, 6) + '.png';
      var el = document.createElement('a');
      el.setAttribute('href', source);
      el.setAttribute('download', fileName);
      document.body.appendChild(el);
      el.click();
      el.remove();
    }

    download(base64image);
  });
};

export default Screenshot;
