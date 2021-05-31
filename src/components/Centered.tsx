import React from 'react';
import styled from 'styled-components';

type CenteredProps = {
  width?: string;
  height?: string;
  background?: string;
  children: React.ReactElement | Array<React.ReactElement>;
};

const Centered = ({ children, height = '100%', width = '100%', background }: CenteredProps): React.ReactElement => {
  return (
    <StyledFlex height={height} width={width} background={background}>
      {children}
    </StyledFlex>
  );
};

export { Centered };

type StyledFlexProps = Pick<CenteredProps, 'height' | 'width' | 'background'>;
const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ background }) => background && `background: ${background};`}
  ${({ height }) => `height: ${height};`}
  ${({ width }) => `width: ${width};`}
`;
