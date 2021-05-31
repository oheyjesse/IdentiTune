import React from 'react';
import styled from '@emotion/styled';
import { Input as TuiInput, InputProps as TuiInputProps } from 'theme-ui';

type InputProps = TuiInputProps & {
  children: React.ReactElement;
};

const Input = ({ children, ...restProps }: InputProps): React.ReactElement => {
  return <StyledInput {...restProps}>{children}</StyledInput>;
};

export { Input };

const StyledInput = styled(TuiInput)`
  border-radius: 20em;
  border: 5px solid blue;
`;
