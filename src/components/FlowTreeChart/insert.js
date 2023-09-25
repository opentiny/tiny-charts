const svgContainer =
    `<svg class="ftc-line-container ftc-absolute" id="ftc-line-container" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%">
        <defs>
            <marker id="markerArrow" markerWidth="6" markerHeight="9" refX="5.6" refY="2" markerUnits="strokeWidth" class="ftc-arrow" orient='auto'>
                <path
                    d="M3,0.5 L6.3,4.9 C6.63137085,5.3418278 6.5418278,5.96862915 6.1,6.3 C5.92690383,6.42982213 5.71637021,6.5 5.5,6.5 L0.5,6.5 C-0.0522847498,6.5 -0.5,6.05228475 -0.5,5.5 C-0.5,5.28362979 -0.429822128,5.07309617 -0.3,4.9 L3,0.5 Z"
                    transform="translate(3.000000, 3.500000) rotate(-270.000000) translate(-3.000000, -3.500000) scale(0.5)">
                </path>
            </marker>
            <marker id="markerDiamond" markerWidth="40" markerHeight="40" refX="10" refY="6" markerUnits="strokeWidth" class="ftc-diamond" orient='auto'>
                <path d="M6,6 L10,10 L14,6 L10,2 L6,6 Z" transform="scale(1)"></path>
            </marker>
        </defs>
        <g class="ftc-line-g"></g>
    </svg>`;

const htmlContainer = `<div class="ftc-node-container ftc-absolute" id="ftc-node-container"></div>`;

export function initContainer(dom) {
    let container =
        `<div id="ftc-container" class="ftc-container">
            ${svgContainer}
            ${htmlContainer}
        </div>`
    dom.insertAdjacentHTML('beforeend', container);
}
