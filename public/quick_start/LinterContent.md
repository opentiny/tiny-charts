## 使用方式

{{VITE_BASECOPYRIGHTS}} 图表配置中开启自动检测和修复
```javascript
// 引用图表库
import HuiCharts from '{{VITE_BASECOPYRIGHTSPAT}}';
// 创建图表实例
let chartIns = new HuiCharts();
// 初始化图表容器
let chartContainerDom = document.getElementById(id);
chartIns.init(chartContainerDom);
// 填入图表配置项 
const option = {
  theme: 'hdesign-light',
  padding: [50, 30, 50, 20]
  ...
}
chartIns.setSimpleOption('LineChart', option, {});
/*
 * 规范一致性检测与修正方法  `linter` 应在 `setSimpleOption` 方法和 `render` 方法之间调用，
 * 用于检查或修复图表配置的规范问题。需指定操作类型（检查或修复）及检查结果的展示方式。
 *
 * 参数一：指定操作类型
 * - `'check'`: 仅检查规范问题，不进行自动修复。
 * - `'fix'`: 自动检查并尝试修复发现的规范问题。
 *
 * 参数二：检查结果展示方式（可选）
 * - `'dialog'`: 在对话框中展示检查结果。
 * - `'console'`: 将检查结果输出至浏览器控制台。
 * - 省略: 默认展示行为根据操作类型而定。
 *
 * 示例:
 * chartIns.linter('check');            // 检查规范问题，默认对话框形式展示检查结果
 * chartIns.linter('fix');              // 自动修复问题，默认不展示检查结果
 * chartIns.linter('fix', 'console');   // 将检查结果输出到控制台并自动修复问题
 */
chartIns.linter('check', 'dialog');
chartIns.render();
```
