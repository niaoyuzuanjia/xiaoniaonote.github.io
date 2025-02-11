// 替换textarea为contenteditable div
const editor = document.createElement('div');
editor.contentEditable = true;
// 添加工具栏按钮实现粗体、斜体等