import React from 'react';

import { Input } from 'theme-ui';

import { Centered } from 'components';

const Root = (): React.ReactElement => {
  return (
    <Centered height="100vh" width={1} justifyContent="center" alignItems="center">
      <Centered height="80%">
        <Input bg="red" fontSize={[3, 5, 6]} placeholder="IdentiTune" />
      </Centered>
    </Centered>
  );
};

export { Root };
