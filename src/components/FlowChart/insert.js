const svgContainer =
    `<svg class="fc-line-container fc-absolute" id="fc-line-container" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%">
        <defs>
            <marker id="markerArrow" markerWidth="6" markerHeight="9" refX="5.8" refY="3.3" markerUnits="strokeWidth" class="fc-arrow" orient='auto'>
                <path
                    d="M3,0.5 L6.3,4.9 C6.63137085,5.3418278 6.5418278,5.96862915 6.1,6.3 C5.92690383,6.42982213 5.71637021,6.5 5.5,6.5 L0.5,6.5 C-0.0522847498,6.5 -0.5,6.05228475 -0.5,5.5 C-0.5,5.28362979 -0.429822128,5.07309617 -0.3,4.9 L3,0.5 Z"
                    transform="translate(3.000000, 3.500000) rotate(-270.000000) translate(-3.000000, -3.500000) scale(0.9)">
                </path>
            </marker>
        </defs>
        <g class="fc-line-g"></g>
    </svg>`;

const htmlContainer = `<div class="fc-node-container fc-absolute" id="fc-node-container"></div>`;

export function initContainer(dom) {
    let container =
        `<div id="fc-container" class="fc-container">
            ${svgContainer}
            ${htmlContainer}
        </div>`
    dom.insertAdjacentHTML('beforeend', container);
}
