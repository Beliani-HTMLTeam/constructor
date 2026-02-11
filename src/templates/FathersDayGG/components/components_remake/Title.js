export const Title = ({
  title,
  color,
  align = 'left',
  insideContainer = 'false',
  className = 'newsletterTitle',
	style = ''
}) => {
  return `
	<tr>
			<td align="${align}" ${insideContainer ? 'class="newsletterContainer"' : ''}>
				<span class="${className}" style="color: ${color || '#000000'}; ${style}">
					${title}
				</span>
			</td>
		</tr>
	`;
};
