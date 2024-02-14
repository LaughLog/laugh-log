import styled from '@emotion/styled';

export const Container = styled.section`
  position: relative;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
`;

export const Sticker = styled.div`
  position: relative;
  top: -20px;

  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: blue;

  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
