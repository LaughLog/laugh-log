import styled from '@emotion/styled';

import Tool from './Tool/Tool';
import mouse from '@assets/icons/mouse.svg';
import hand from '@assets/icons/hand.svg';
import rectangle from '@assets/icons/rectangle.svg';
import rhombus from '@assets/icons/rhombus.svg';
import circle from '@assets/icons/circle.svg';
import arrow from '@assets/icons/arrow.svg';
import line from '@assets/icons/line.svg';
import pen from '@assets/icons/pen.svg';

const Toolbar = () => {
  const tools = [
    {
      value: 'mouse',
      src: mouse
    },
    {
      value: 'hand',
      src: hand
    },
    {
      value: 'rectangle',
      src: rectangle
    },
    {
      value: 'rhombus',
      src: rhombus
    },
    {
      value: 'circle',
      src: circle
    },
    {
      value: 'arrow',
      src: arrow
    },
    {
      value: 'line',
      src: line
    },
    {
      value: 'pen',
      src: pen
    }
  ];

  return (
    <Container>
      {tools.map(tool => (
        <Tool key={tool.value} value={tool.value} src={tool.src} />
      ))}
    </Container>
  );
};

export default Toolbar;

const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 50%;
  transform: translateX(50%);

  padding: 10px 25px;
  border-radius: 8px;

  display: flex;
  gap: 24px;

  border: 1px solid ${props => props.theme.color.gray300};
`;
