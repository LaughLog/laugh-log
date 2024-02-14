import styled from '@emotion/styled';
export const Container = styled.div`
  width: 121px;
  height: 121px;
  background-color: #e3f330;

  position: absolute;
  top: -20px;

  clip-path: polygon(0 0, 80% 0%, 100% 20%, 100% 100%, 0 100%);

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .fold {
    width: 20%;
    height: 20%;
    background-color: #fbffcb;

    position: absolute;
    top: 0;
    right: 0;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.04);
  }

  &:hover {
    background-color: #edfd3a;
  }
`;
