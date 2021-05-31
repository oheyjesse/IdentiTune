import React from 'react';
import styled from '@emotion/styled';
import { Flex as TuiFlex, FlexProps } from 'theme-ui';

type CenteredProps = FlexProps & {
  height?: string;
  children: React.ReactElement;
};

const Centered = ({ children, ...restProps }: CenteredProps): React.ReactElement => {
  return <StyledFlex {...restProps}>{children}</StyledFlex>;
};

export { Centered };

type StyledFlexProps = Pick<CenteredProps, 'height'>;
const StyledFlex = styled(TuiFlex)<StyledFlexProps>`
  border-radius: 20em;
  border: 5px solid blue;
  ${(props) => props.height && `height: ${props.height};`};
`;
