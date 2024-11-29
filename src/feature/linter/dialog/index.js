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
const iconAll = {
    error: './image/md/linterError.png',
    alert: './image/md/linterAlert.png'
}
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
