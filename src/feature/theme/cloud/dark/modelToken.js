
import cloudMapToken from './mapToken'
import getModelToken from '../../util/getModelToken'
// 图例的图元高度覆盖

const   legendItemHeight=6

const cloudModelToken = {
  ...getModelToken(cloudMapToken),
  legendItemHeight,
};

export default cloudModelToken