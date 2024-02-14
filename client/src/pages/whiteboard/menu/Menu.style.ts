import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  position: absolute;
  bottom: 64px;

  width: 904px;
  height: 76px;

  left: 50%;
  transform: translate(-50%);

  overflow: hidden;

  section.actual-ceil {
    width: 100%;
    height: 50px;
    background-color: white;

    position: absolute;
    bottom: 0;
    display: flex;

    border-radius: 8px;
    border: 1px solid ${theme.color.gray400};
  }
`;

export const MainToolsContainer = styled.section`
  flex-shrink: 0;
  width: 529px;
  height: 100%;

  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${theme.color.gray400};

  ${theme.shadow};

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
    color: ${theme.color.coral700};
    background-color: ${theme.color.gray300};
  }

  & .icon-box:hover {
    background-color: ${theme.color.gray100};
    color: ${theme.color.coral600};
  }
`;

export const PostitContainer = styled.section`
  flex-shrink: 0;
  width: 152px;
  height: 100%;
  border-right: 1px solid ${theme.color.gray400};
  background-color: white;

  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${theme.color.gray100};
  }
`;

export const StickerContainer = styled.section`
  width: 100%;
  height: 100%;
  background-color: white;
  &:hover {
    background-color: ${theme.color.gray100};
  }
`;
