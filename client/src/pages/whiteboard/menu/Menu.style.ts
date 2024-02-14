import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  position: absolute;
  bottom: 64px;

  width: 904px;
  height: 76px;
  background-color: #f1f1f1;

  left: 50%;
  transform: translate(-50%);

  display: flex;
  ${theme.shadow};

  section.actual-ceil {
    width: 100%;
    height: 50px;
    background-color: white;

    position: absolute;
    bottom: 0;

    border-radius: 8px;
    border: 1px solid ${theme.color.gray400};
  }
`;

export const primaryToolsContainer = styled.section`
  width: 529px;
  height: 100%;

  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${theme.color.gray400};

  .icon-box {
    width: 32px;
    height: 32px;

    font-size: 28px;
    color: ${theme.color.gray400};
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-box.select {
    color: ${theme.color.coral600};
  }

  & .icon-box:hover {
    background-color: ${theme.color.gray100};
    color: ${theme.color.coral600};
  }
`;
