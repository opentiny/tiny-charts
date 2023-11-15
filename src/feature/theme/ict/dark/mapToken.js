import {basicToken } from '../../basicTheme';
import getMapToken from '../../util/getMapToken';


// 覆盖色值
const colorSubg=basicToken.colorGray70


const ictMapToken={
    ...getMapToken(basicToken),
    colorSubg,
}

export  default  ictMapToken