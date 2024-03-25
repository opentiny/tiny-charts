import { appendHTML } from '../../util/dom';
import { insertIcon } from './insertIcon';

export function initContainer(dom,option) {
    let container = `
    <div class="mc-container ${option.layout} ${option.alignment}" id="mc-container">
        <div class="mc-content">
            <div class="mc-current">
                <div class="mc-current-text"></div>
            </div>
            <div class="mc-scales"></div>
        </div>
        <div class="mc-btn mc-btn-prev">
            <img src='${insertIcon('prev')}'>
        </div>
        <div class="mc-btn mc-btn-next">
            <img src='${insertIcon('next')}'>
        </div>
    </div>`;
    appendHTML(dom, container);
}
