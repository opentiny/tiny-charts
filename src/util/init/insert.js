import defendXSS from "../defendXSS";

const ERROR_SVG = (fillColor) => {
    return `<svg width="80px" height="80px" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(5.000000, 41.000000)">
                <path d="M135.649368,0 C140.813579,-9.48650299e-16 145,4.18642074 145,9.35063244 L145,30.3128 C145,31.2446148 144.244615,32 143.3128,32 L126.298735,32 L126.298735,32 L126.298735,9.35063244 C126.298735,4.18642074 130.485156,9.48650299e-16 135.649368,0 Z" fill-opacity="0.08" fill="${fillColor}"></path>
                <path d="M135.666667,0 C140.821324,0 145,4.09339657 145,9.14285714 L145,29.7142857 C145,30.9766509 143.955331,32 142.666667,32 L125.885703,32 L125.885703,9.7809637 C125.885703,4.37908661 130.26479,9.92308723e-16 135.666667,0 L135.666667,0 L135.666667,0 Z M135.666667,2.05920206 L134.981839,2.05920206 C131.115845,2.05920206 127.981839,5.19320881 127.981839,9.05920206 L127.981839,29.9407979 L127.981839,29.9407979 L142.666667,29.9407979 C142.794372,29.9407979 142.897898,29.839385 142.897898,29.7142857 L142.897898,9.14285714 C142.897898,5.23066247 139.660365,2.05920206 135.666667,2.05920206 Z" fill="${fillColor}" fill-rule="nonzero"></path>
                <path d="M128.031703,105.57885 L128.031724,136.725807 C128.031724,142.400087 123.427668,147 117.748276,147 L115,147 L115,144.863 L117.748276,144.863993 C122.246921,144.863993 125.893793,141.220403 125.893793,136.725807 L125.894079,106.401172 C126.620404,106.155789 127.333413,105.881214 128.031703,105.57885 Z M136.360709,0 C136.644838,0.899738066 136.524602,1.57454162 136,2.02441065 C131.599253,2.02441065 128.031742,5.59192129 128.031724,9.99266869 L128.031703,54.4211505 C127.333413,54.1187859 126.620404,53.8442105 125.894079,53.5988278 L125.893083,27.9709748 C125.893033,27.9381122 125.89298,27.9039511 125.892924,27.8684915 L125.892114,27.3806471 L125.891993,27.3109015 L125.891993,27.3109015 L125.891021,26.7681443 L125.890865,26.6828164 L125.890865,26.6828164 L125.890017,26.2269601 C125.889414,25.9068243 125.888739,25.5542254 125.887989,25.1691634 L125.887055,24.6915067 C125.880914,21.5676598 125.870528,16.5687428 125.855897,9.69475588 C125.849378,6.63789545 127.472127,3.8175724 130.098992,2.28334264 L130.356319,2.13891888 L23.2834482,2.13600695 C18.7848033,2.13600695 15.137931,5.77959709 15.137931,10.2741933 L15.137,117 L13,117 L13,10.2741933 C13,4.59991303 17.6040566,0 23.2834482,0 L136.360709,0 Z" fill="${fillColor}" fill-rule="nonzero"></path>
                <path d="M105.29412,117 C106.166823,117 106.874288,117.706919 106.874288,118.578947 L106.874288,136.247276 C106.874288,140.105898 109.495409,144.895084 115.097369,144.895084 C118.616046,144.895084 115.289571,147 117,147 L15.0115833,147 C6.72091477,147 0,140.284265 0,132 L0,118.578947 C0,117.706919 0.707465271,117 1.58016791,117 L105.29412,117 Z M104.73844,119.133713 L2.13536204,119.133713 L2.13536204,132 C2.13536204,138.998182 7.72687236,144.69141 14.6892832,144.862335 L15.0115833,144.866287 L108.724094,144.866287 L108.655993,144.812245 C106.247587,142.858894 104.821938,139.819547 104.742438,136.537479 L104.738926,136.247276 L104.73844,119.133713 Z" fill="${fillColor}" fill-rule="nonzero"></path>
            </g>
            <g transform="translate(32.000000, 55.000000)">
                <path d="M18.5,0 C8.2991,0 0,8.2991 0,18.5 C0,28.7009 8.2991,37 18.5,37 C28.7009,37 37,28.7009 37,18.5 C37,8.2991 28.7009,0 18.5,0" id="Fill-1" fill="#1476FF"></path>
                <path d="M11.4542029,12.4542029 C12.1323292,11.7760767 13.324783,11.8678039 14.1159303,12.6589512 L14.1159303,12.6589512 L18.5,17.043 L22.8840697,12.6589512 C23.675217,11.8678039 24.8676708,11.7760767 25.5457971,12.4542029 C26.2239233,13.1323292 26.1321961,14.324783 25.3410488,15.1159303 L20.957,19.5 L25.3410488,23.8840697 C26.0905568,24.6335776 26.2123303,25.743261 25.6464822,26.4345838 L25.5457971,26.5457971 C24.8676708,27.2239233 23.675217,27.1321961 22.8840697,26.3410488 L22.8840697,26.3410488 L18.5,21.957 L14.1159303,26.3410488 C13.324783,27.1321961 12.1323292,27.2239233 11.4542029,26.5457971 C10.7760767,25.8676708 10.8678039,24.675217 11.6589512,23.8840697 L16.043,19.5 L11.6589512,15.1159303 C10.9094432,14.3664224 10.7876697,13.256739 11.3535178,12.5654162 Z" fill="#ffffff" fill-rule="nonzero"></path>
            </g>
            <g transform="translate(92.000000, 91.000000)" fill="${fillColor}">
                <path d="M54.661608,58.5980308 L48.4015328,52.3382734 C47.8661557,51.8047505 47.8661557,50.9368624 48.4015328,50.4015125 C48.93691,49.8661625 49.8048421,49.8661625 50.338392,50.4015125 L56.5984672,56.6612699 C57.1338443,57.1966198 57.1338443,58.0626808 56.5984672,58.5980308 C56.3316922,58.8666193 55.9808649,59 55.6300376,59 C55.2792102,59 54.9283829,58.8666193 54.661608,58.5980308 Z"></path>
                <path d="M64.2299385,53.5190184 C66.59153,53.5190184 68.5059782,55.4315327 68.5059782,57.7907386 L68.5059782,74.877619 C68.5059782,77.2368249 66.59153,79.1493391 64.2299385,79.1493391 C61.868347,79.1493391 59.9538988,77.2368249 59.9538988,74.877619 L59.9538988,57.7907386 C59.9538988,55.4315327 61.868347,53.5190184 64.2299385,53.5190184 Z M64.2299385,55.6548785 C63.0491428,55.6548785 62.0919187,56.6111356 62.0919187,57.7907386 L62.0919187,74.877619 C62.0919187,76.057222 63.0491428,77.0134791 64.2299385,77.0134791 C65.4107343,77.0134791 66.3679584,76.057222 66.3679584,74.877619 L66.3679584,57.7907386 C66.3679584,56.6111356 65.4107343,55.6548785 64.2299385,55.6548785 Z"  fill-rule="nonzero" transform="translate(64.229939, 66.334179) rotate(-45.000000) translate(-64.229939, -66.334179) "></path>
                <path d="M30,0 C46.5423465,0 60,13.4576535 60,30 C60,46.5423465 46.5423465,60 30,60 C13.4576535,60 0,46.5423465 0,30 C0,13.4576535 13.4576535,0 30,0 Z M30,2.14285714 C14.6411208,2.14285714 2.14285714,14.6411208 2.14285714,30 C2.14285714,45.3588792 14.6411208,57.8571429 30,57.8571429 C45.3588792,57.8571429 57.8571429,45.3588792 57.8571429,30 C57.8571429,14.6411208 45.3588792,2.14285714 30,2.14285714 Z" fill-rule="nonzero"></path>
            </g>
            <g transform="translate(53.177778, 12.000000)" stroke="${fillColor}" stroke-width="0.76">
                <path d="M120.505373,158 L127.662222,158 C134.378005,158 139.822222,152.555783 139.822222,145.84 L139.822222,12.16 C139.822222,5.44421744 134.378005,-3.01002608e-15 127.662222,0 L11.9822222,0 C5.26643966,1.23366924e-15 -0.177777778,5.44421744 -0.177777778,12.16 L-0.177777778,23.786605 L-0.177777778,23.786605"></path>
            </g>
            <ellipse fill="${fillColor}" cx="171.047716" cy="170.746356" rx="3.74528" ry="3.7414966"></ellipse>
            <ellipse fill="${fillColor}" cx="53.3389156" cy="33.9144801" rx="3.74528" ry="3.7414966"></ellipse>
        </g>
    </svg>`;
}

const STAGE_EMPTY_SVG = (fillColor) => {
    return `<svg width="80px" height="80px" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-0.340000, -0.000000)">
                <g>
                    <rect x="0" y="0" width="199.8" height="199.8"></rect>
                    <path d="M33.966,63.936 L171.0288,63.936 C172.573651,63.936 173.826,65.1883491 173.826,66.7332 L173.826,167.832 C173.826,172.24586 170.24786,175.824 165.834,175.824 L41.958,175.824 C37.5441403,175.824 33.966,172.24586 33.966,167.832 L33.966,63.936 L33.966,63.936 Z"></path>
                    <path d="M26.7732,63.936 L135.864,63.936 L135.864,63.936 L135.864,167.832 C135.864,172.24586 132.28586,175.824 127.872,175.824 L31.968,175.824 C27.5541403,175.824 23.976,172.24586 23.976,167.832 L23.976,66.7332 C23.976,65.1883491 25.2283491,63.936 26.7732,63.936 Z"></path>
                    <path d="M1.998,63.936 L112.385858,63.936 C113.762537,63.936 115.042272,64.6446419 115.772816,65.8114973 L133.949294,94.8437487 C134.534854,95.7790313 134.251349,97.0119183 133.316066,97.597479 C132.998228,97.7964705 132.630806,97.902 132.255815,97.902 L28.3238627,97.902 C25.612893,97.902 23.0867558,96.5277135 21.614018,94.2516642 L1.998,63.936 L1.998,63.936 Z" transform="translate(68.931000, 80.919000) scale(-1, 1) translate(-68.931000, -80.919000) "></path>
                    <path d="M135.864,63.936 L173.810021,63.936 C175.170494,63.936 176.437498,64.6281744 177.172556,65.7729789 L195.825988,94.8244894 C196.422185,95.7530279 196.152769,96.9890705 195.224231,97.5852677 C194.902159,97.7920639 194.527467,97.902 194.14472,97.902 L160.414993,97.902 C157.582914,97.902 154.962336,96.4031709 153.526415,93.9621049 L135.864,63.936 L135.864,63.936 Z"></path>
                </g>
                <g transform="translate(1.000000, 0.000000)">
                    <rect x="0" y="0" width="199.8" height="199.8"></rect>
                    <path d="M173.965,96.796875 L173.965,166.832 C173.965,171.797592 169.939592,175.823 164.974,175.823 L126.000156,175.823 L126.000156,173.825 L164.974,173.825 C168.836127,173.825 171.967,170.694127 171.967,166.832 L171.967,96.796875 L173.965,96.796875 Z" id="矩形备份" fill="${fillColor}" fill-rule="nonzero"></path>
                    <path d="M135.863,63.937 L135.863,166.832 C135.863,171.797592 131.837592,175.823 126.872,175.823 L30.9680001,175.823 C26.0024079,175.823 21.977,171.797592 21.977,166.832 L21.977,96.796875 L23.975,96.796875 L23.975,166.832 C23.975,170.694127 27.1058728,173.825 30.9680001,173.825 L126.872,173.825 C130.734127,173.825 133.865,170.694127 133.865,166.832 L133.865,65.935 L25.7732,65.935 L25.7732,63.937 L135.863,63.937 Z" fill="${fillColor}" fill-rule="nonzero"></path>
                    <path d="M112.995777,63.936 C114.372456,63.936 115.652192,64.6446419 116.382735,65.8114973 L134.559213,94.8437487 C135.144774,95.7790313 134.861268,97.0119183 133.925985,97.597479 C133.608148,97.7964705 133.240725,97.902 132.865734,97.902 L28.9337822,97.902 C26.2228125,97.902 23.6966752,96.5277135 22.2239375,94.2516642 L2.60791944,63.936 L112.995777,63.936 Z M112.995777,65.934 L6.27991944,65.934 L23.9013986,93.1662482 C25.0059519,94.8732851 26.9005549,95.904 28.9337822,95.904 L132.865734,95.904 L114.689256,66.8717487 C114.323984,66.2883209 113.684117,65.934 112.995777,65.934 Z" fill="${fillColor}" fill-rule="nonzero" transform="translate(68.735960, 80.919000) scale(-1, 1) translate(-68.735960, -80.919000) "></path>
                    <path d="M172.810021,63.936 C174.170494,63.936 175.437498,64.6281744 176.172556,65.7729789 L194.825988,94.8244894 C195.422185,95.7530279 195.152769,96.9890705 194.224231,97.5852677 C193.902159,97.7920639 193.527467,97.902 193.14472,97.902 L159.414993,97.902 C156.582914,97.902 153.962336,96.4031709 152.526415,93.9621049 L134.864,63.936 L172.810021,63.936 Z M172.810021,65.934 L138.357,65.934 L154.248559,92.9490786 C155.3255,94.7798782 157.290933,95.904 159.414993,95.904 L193.14472,95.904 L174.491288,66.8524894 C174.123759,66.2800872 173.490257,65.934 172.810021,65.934 Z" fill="${fillColor}" fill-rule="nonzero"></path>
                    <g transform="translate(61.895063, 21.978000)" fill="${fillColor}" fill-rule="nonzero">
                        <path d="M39.0029373,0.999 L39.0029373,14.985 C39.0029373,15.5367325 38.5556698,15.984 38.0039373,15.984 C37.4522049,15.984 37.0049373,15.5367325 37.0049373,14.985 L37.0049373,0.999 C37.0049373,0.447267535 37.4522049,1.0135161e-16 38.0039373,0 C38.5556698,-1.0135161e-16 39.0029373,0.447267535 39.0029373,0.999 Z"></path>
                        <path d="M72.1457153,6.84296597 L72.1457153,20.828966 C72.1457153,21.3806984 71.6984477,21.827966 71.1467153,21.827966 C70.5949828,21.827966 70.1477153,21.3806984 70.1477153,20.828966 L70.1477153,6.84296597 C70.1477153,6.2912335 70.5949828,5.84396597 71.1467153,5.84396597 C71.6984477,5.84396597 72.1457153,6.2912335 72.1457153,6.84296597 Z" transform="translate(71.146715, 13.835966) rotate(-330.000000) translate(-71.146715, -13.835966) "></path>
                        <path d="M5.86015938,6.84296597 L5.86015938,20.828966 C5.86015938,21.3806984 5.41289184,21.827966 4.86115938,21.827966 C4.30942691,21.827966 3.86215938,21.3806984 3.86215938,20.828966 L3.86215938,6.84296597 C3.86215938,6.2912335 4.30942691,5.84396597 4.86115938,5.84396597 C5.41289184,5.84396597 5.86015938,6.2912335 5.86015938,6.84296597 Z" transform="translate(4.861159, 13.835966) rotate(-30.000000) translate(-4.861159, -13.835966) "></path>
                    </g>
                    <g transform="translate(36.962000, 133.866000)">
                        <rect fill="#1476FF" x="0" y="0" width="31.968" height="9.99" rx="2"></rect>
                        <rect fill="${fillColor}" x="0" y="17.982" width="23.976" height="1.998" rx="0.6993"></rect>
                        <rect fill="${fillColor}" x="0" y="25.974" width="11.988" height="1.998" rx="0.6993"></rect>
                    </g>
                </g>
            </g>
        </g>
    </svg>`;
}


const LOADING_SVG = (fillColor) => {
    return `<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <linearGradient x1="128.248383%" y1="50%" x2="26.8114638%" y2="0%" id="huichart-loading-linearGradient">
            <stop stop-color="${fillColor}" stop-opacity="0" offset="0.0956075175%"></stop>
            <stop stop-color="${fillColor}" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-817.000000, -590.000000)">
            <g transform="translate(538.000000, 402.000000)">
                <g transform="translate(279.000000, 188.000000)">
                    <path style="transform-origin: 50% 50%;"  d="M12,0.9 C12.7455844,0.9 13.35,1.50441559 13.35,2.25 C13.35,2.99558441 12.7455844,3.6 12,3.6 C7.36058441,3.6 3.6,7.36058441 3.6,12 C3.6,16.6394156 7.36058441,20.4 12,20.4 C16.6394156,20.4 20.4,16.6394156 20.4,12 C20.4,11.2544156 21.0044156,10.65 21.75,10.65 C22.4955844,10.65 23.1,11.2544156 23.1,12 C23.1,18.1305844 18.1305844,23.1 12,23.1 C5.86941559,23.1 0.9,18.1305844 0.9,12 C0.9,5.86941559 5.86941559,0.9 12,0.9 Z" id="Stroke-2" fill="url(#huichart-loading-linearGradient)" fill-rule="nonzero">
                    <animateTransform attributeName='transform' type="rotate" from='0' to='360' dur='1' repeatCount='indefinite'/> 
                    </path>
                     
                </g>
            </g>
        </g>
    </g>
</svg>`;
}



function insertStateDom(container, state, option = { theme: 'light' }) {
    let text = '';
    let image = '';
    let theme = option.theme || 'light';
    let textSize = option.textSize || 14;
    let textShow = option.textShow === false ? false : true;
    let imageSize = option.imageSize || 'auto';
    let imageShow = option.imageShow === false ? false : true;
    let textColor = option.textColor || (theme.indexOf('dark') !== -1 ? '#FFFFFF' : '#808080');
    let imageColor = option.imageColor || (theme.indexOf('dark') !== -1 ? '#FFFFFF' : '#191919');
    let backgroundColor = option.backgroundColor || (theme.indexOf('dark') !== -1 ? '#191919' : '#FFFFFF');
    if (hasStateDom(container, state)) return;
    switch (state) {
        case 'error':
            image = ERROR_SVG(defendXSS(imageColor));
            text = '加载失败';
            break;
        case 'empty':
            image = STAGE_EMPTY_SVG(defendXSS(imageColor));
            text = '暂无数据';
            break;
        case 'loading':
            image = LOADING_SVG(defendXSS(imageColor));
            backgroundColor = option.backgroundColor || (theme.indexOf('dark') !== -1 ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)');
            text = '加载中...';
            break;
        case 'stage_empty':
            image = STAGE_EMPTY_SVG(defendXSS(imageColor));
            backgroundColor = option.backgroundColor || 'transparent';
            text = '没有符合所选时间内的数据';
            break;
        case 'custom':
            image = `<img style="display: block;" src="${defendXSS(option.image)}" />`;
            text = option.text;
            break;
    }
    image = option.image ? `<img style="display: block;width: ${defendXSS(imageSize)}px;" src="${defendXSS(option.image)}" />` : image;
    text = option.text || text;
    let stateDom =
        `<div class="huicharts-state-container huicharts-${defendXSS(state)}" style="background-color: ${defendXSS(backgroundColor)};position:absolute;top: 0;left: 0;width: 100%;height: 100%;display: flex;align-items: center;flex-direction: column;justify-content: center;z-index: 99;">
            <div style="display: ${imageShow ? 'flex' : 'none'};width: ${defendXSS(imageSize)}px;height: ${defendXSS(imageSize)}px;padding: 0;margin: 0;align-items: center;justify-content: center;">${image}</div>
            <div style="color: ${defendXSS(textColor)};font-size: ${defendXSS(textSize)}px;line-height: ${defendXSS(textSize)}px;display: ${textShow ? 'block' : 'none'};margin-top: 14px;letter-spacing: 0.5px;">${text}</div>
        </div>`
    container.insertAdjacentHTML('beforeend', stateDom);
}

function removeStateDom(container, state) {
    let doms = container.getElementsByClassName(`huicharts-${state}`);
    for (let index = 0; index < doms.length; index++) {
        let item = doms[index];
        container.removeChild(item)
    }
}

function hasStateDom(container, state) {
    let doms = container.getElementsByClassName(`huicharts-${state}`);
    if (doms.length >= 1) {
        return true
    } else {
        return false;
    }
}

export {
    insertStateDom,
    removeStateDom
}