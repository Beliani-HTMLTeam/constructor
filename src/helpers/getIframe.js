export const getIframe = (src) => {
  const iframe = document.createElement('iframe');
  // iframe.style.display = 'none';
  iframe.style.position = 'absolute';
  // iframe.style.left = '-9999px';
  // iframe.style.top = '-9999px';
  iframe.style.width = '900px';
  iframe.style.height = '300px';
  iframe.style.border = 'none';
  // iframe.style.visibility = 'hidden';
  iframe.src = src;

  return iframe;
};
