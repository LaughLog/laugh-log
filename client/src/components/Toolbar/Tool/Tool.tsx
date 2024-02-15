import styled from '@emotion/styled';

import { ToolProps } from '@/types/tool';

const Tool = ({ value, src }: ToolProps) => {
  return (
    <Container>
      <Input type="radio" name="tool" value={value} />
      <Icon src={src} />
    </Container>
  );
};

export default Tool;

const Container = styled.label`
  width: 32px;
  height: 32px;

  padding: 0;
  border: none;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff center;

  &:hover {
    background: ${props => props.theme.color.gray200};

    cursor: pointer;

    & > img {
      filter: invert(96%) sepia(42%) saturate(4863%) hue-rotate(299deg) brightness(100%)
        contrast(90%);
    }
  }
`;

const Input = styled.input`
  display: none;

  &:checked + img {
    filter: invert(96%) sepia(42%) saturate(4863%) hue-rotate(299deg) brightness(100%)
      contrast(90%);
  }
`;

const Icon = styled.img`
  filter: invert(94%) sepia(25%) saturate(462%) hue-rotate(174deg) brightness(92%)
    contrast(94%);
`;
