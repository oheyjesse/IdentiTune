import React from 'react';
import styled from 'styled-components';

const TestPage: () => React.ReactElement = () => (
  <div>
    <Xxs>xxs____________________________________</Xxs>
    <Xs>xs____________________________________</Xs>
    <Sm>sm____________________________________</Sm>
    <Md>md____________________________________</Md>
    <Lg>lg____________________________________</Lg>
    <Xl>xl____________________________________</Xl>
    <Xxl>xxl____________________________________</Xxl>
  </div>
);

export { TestPage };

const Xxs = styled.p`
  background: red;
  margin-bottom: ${({ theme }) => theme.space.xxs};
`;

const Xs = styled.p`
  background: red;
  margin-bottom: ${({ theme }) => theme.space.xs};
`;

const Sm = styled.p`
  background: red;
  margin-bottom: ${({ theme }) => theme.space.sm};
`;

const Md = styled.p`
  background: red;
  margin-bottom: ${({ theme }) => theme.space.md};
`;

const Lg = styled.p`
  background: red;
  margin-bottom: ${({ theme }) => theme.space.lg};
`;

const Xl = styled.p`
  background: red;
  margin-bottom: ${({ theme }) => theme.space.xl};
`;

const Xxl = styled.p`
  background: red;
  margin-bottom: ${({ theme }) => theme.space.xxl};
`;
