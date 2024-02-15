import { SerializedStyles, css } from '@emotion/react';

const fontCreator = (
  fontSize: string,
  fontWeight: number,
  lineHeight = '150%'
): SerializedStyles => {
  return css`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `;
};

export default fontCreator;
