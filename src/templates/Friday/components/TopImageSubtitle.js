const TopImageSubtitle = ({ href, src, alt = 'Top Image Subtitle', container }) => {
  return `
    <tr>
      <td ${container ? `class="${container}" ` : ''}style="line-height: 0; font-size: 0; padding: 0;">
        <a href="${href}" style="display: block; text-decoration: none;">
          <img alt="${alt}" src="${src}" style="display: block; width: 100%; max-width: 100%; height: auto; border: 0; line-height: 0;" loading="lazy">
        </a>
      </td>
    </tr>`;
};

export { TopImageSubtitle };
