# TrueFix Studio 官网

这是 [TrueFix Studio](https://github.com/truefix-labs/truefix-studio) 的 GitHub Pages 站点，采用无构建依赖的静态 HTML、CSS 和 JavaScript。

站点支持中、英、韩、日四种语言。首次访问按浏览器语言偏好选择，用户切换后使用 `localStorage` 保存，并在后续访问中优先恢复。动画会自动尊重系统的“减少动态效果”设置。

## 本地预览

```bash
python3 -m http.server 4173
```

打开 <http://localhost:4173>。

## 部署

仓库名为 `truefix.github.io`，将默认分支根目录配置为 GitHub Pages 发布源即可。`.nojekyll` 用于保持静态资源按原样发布。

## 内容边界

TrueFix Studio 仍处于首版发布前。本站不把界面、Provider SDK 存在或单次连通视为端到端能力认证；准确实现状态以主仓库中的 capability evidence 与运行时证据为准。
