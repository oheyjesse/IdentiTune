import React, { useState } from 'react';
import styled from 'styled-components';
import { Centered, Input } from 'components/';

const Root = (): React.ReactElement => {
  const [idString, setIdString] = useState('IdentiTune!');

  return (
    <Container>
      <Centered height="90%">
        <Input value={idString} onChange={(event) => setIdString(event.target.value)} />
      </Centered>
    </Container>
  );
};

export { Root };

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors.background};
`;
