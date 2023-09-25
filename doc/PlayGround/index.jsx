import React from 'react';
import PlayGround from './PlayGround';
import PlayGroundProvider from './PlayGroundProvider';

const PlaygroundIndex = props => {
  return (
    <PlayGroundProvider>
      <PlayGround {...props} />
    </PlayGroundProvider>
  );
};
export default PlaygroundIndex;
