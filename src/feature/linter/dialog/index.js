/**
 * Copyright (c) 2024 - present OpenTiny HUICharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
const iconAll = {};
iconAll.error = "data:image/image/png;base64,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";
iconAll.alert = "data:image/image/png;base64,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";

// 弹窗卡片
class Dialog {
    constructor(container, data) {
        // 弹窗容器
        this.container = container;

        // 卡片数据
        this.data = data;
        if (this.container) {
            let dialog = this.container.getElementsByClassName('linter-dialog');
            if (dialog && dialog.length) {
                this.container.removeChild(dialog[0]);
            }
            this.createDialog();
        }

    }

    // 创建弹窗
    createDialog() {
        let dialogContainer = this.dialogContainer = document.createElement('div');
        let self = this;
        let data = this.data;
        dialogContainer.setAttribute('style', `
            position: absolute;
            width: ${this.container.clientWidth / 2}px;
            right: 0px; 
            top: 0px; 
            box-shadow:0px 2px 12px 0px rgba(37, 43, 58, .24);
            padding: 12px;
            border-radius: 4px;
            max-width: 400px;
            min-width: 100px;
            z-index: 999;
            background: #fff`
        );
        dialogContainer.className = 'linter-dialog';
        this.container.append(dialogContainer);
        let closeIcon = document.createElement('div');
        closeIcon.setAttribute('style', `
            float: right;
            margin-top: -10px;
            font-size: 20px`
        );
        closeIcon.innerHTML = '×';
        this.dialogContainer.append(closeIcon);
        closeIcon.onclick = function () {
            self.unInstall()
        }
        let descCon = document.createElement('div');
        descCon.setAttribute('style', `
            max-height: 100px;
            margin-right: 18px;
            overflow: auto`
        );
        for (let i = 0; i < data.length; i++) {
            let descItem = document.createElement('div');
            descItem.setAttribute('style', `
                font-size: 12px;
                line-height: 20px`
            );
            let img = document.createElement('img');
            img.setAttribute('style', `
                width: 14px;
                vertical-align: middle;
                margin-right: 5px`
            );
            let imgPath = data[i].indexOf('主题颜色') === -1 ? 'alert' : 'error';
            img.src = iconAll[imgPath];
            let span = document.createElement('span');
            span.setAttribute('style', `
                vertical-align: middle`
            );
            span.innerHTML = data[i];
            descItem.append(img);
            descItem.append(span);
            descCon.append(descItem)
        }
        this.dialogContainer.append(descCon);
    }

    showDialog() {
        this.dialogContainer.style.display = 'block';
    }

    hideDialog() {
        this.dialogContainer.style.display = 'none';
    }
    // 销毁实例,
    unInstall() {
        this.dialogContainer.parentNode.removeChild(this.dialogContainer);
    }
}


export default Dialog;
