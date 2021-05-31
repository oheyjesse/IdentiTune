import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  children?: React.ReactElement;
};

const Input = ({ children, ...restProps }: InputProps): React.ReactElement => {
  return <StyledInput {...restProps}>{children}</StyledInput>;
};

export { Input };

const StyledInput = styled.input`
  padding: ${({ theme }) => theme.space.sm};
  color: ${({ theme }) => theme.colors.body};

  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  letter-spacing: ${({ theme }) => theme.space.xxs};

  border-radius: ${({ theme }) => theme.space.xs};
  border: 0.2em solid ${({ theme }) => theme.colors.primary};

  background: ${({ theme }) => theme.colors.secondary};
  transition: 0.05s ease-out;

  &:focus {
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  }
`;
