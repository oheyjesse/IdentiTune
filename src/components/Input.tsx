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

  font-size: 24px;
  letter-spacing: ${({ theme }) => theme.space.xxs};

  border-radius: ${({ theme }) => theme.space.xs};
  border: 0.2em solid ${({ theme }) => theme.colors.primary};

  background: ${({ theme }) => theme.colors.secondary};
`;
