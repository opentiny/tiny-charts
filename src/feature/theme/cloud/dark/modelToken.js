import cloudMapToken from './mapToken';
import getModelToken from '../getModelToken';

const cloudModelToken = {
  ...getModelToken(cloudMapToken),
};

export default cloudModelToken;
