const SoonEndingBanner = ({ href, src, orderingId }) => {
  return `
  <tr>
    <td align="left">
      <a href=${href}>
        <img alt="Soon Ending Banner ${orderingId}" loading="lazy" src=${src} style="display: block;" width="100%">
      </a>
    </td>
  </tr>
  `;
};

export { SoonEndingBanner };
