# GTM 示範網站

## 說明

- 使用 Google Tag Manager 埋設和追蹤
- 使用 Google Analytics 4 進行網站分析

## 網站結構

```
.
├── public/
│   ├── index.html: 首頁
│   ├── free-trial.html: 免費體驗頁面
│   └── courses.html: 課程頁面
├── build.js: 替換 GTM ID 的腳本
├── package.json: 用於 Vercel 的配置 (build 指令)
├── vercel.json: 用於 Vercel 的配置 (distDir 指向 public)
```
