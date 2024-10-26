# GTM 示範網站

## 說明

- 使用 Google Tag Manager 埋設和追蹤
- 使用 Google Analytics 4 進行網站分析

### GTM 追蹤事件

#### apply_free_trial

說明：使用者提交免費體驗申請

步驟：

1. 確保啟用"Click ID"內建變數（Variable）：
   - 進入 GTM 控制台，點擊 "變數" > "內建變數" > "設定"
   - 勾選"Click ID"
2. 創建一個新的觸發器（Trigger）：
   - 進入 GTM 控制台，點擊 "觸發器" > "新增"
   - 選擇觸發器類型為 "點擊 - 所有元素"
   - 設置觸發條件：
     - 選擇 "部分匹配"
     - 設置 "Click ID" 等於 "submit-application"
     - 命名觸發器（例如："送出申請按鈕點擊"）並保存
3. 創建一個新的代碼（Tag）：
   - 點擊 "代碼" > "新增"
   - 選擇代碼類型為 "Google Analytics: GA4 事件"
   - 設置代碼：
     - 選擇您的 GA4 配置代碼
     - 事件名稱：apply_free_trial
     - 事件參數（可選）：
       - 參數名稱：page_name，參數值：{{Page Path}}
       - 參數名稱：form_name，參數值：free_trial_application
   - 在觸發條件中選擇剛才創建的 "送出申請按鈕點擊" 觸發器
   - 命名代碼（例如："GA4 - 送出申請事件"）並保存

#### scroll_percentage

說明：使用者捲動頁面百分比


步驟：

1. 確保啟用"Scroll Depth Threshold"內建變數（Variable）：
   - 進入 GTM 控制台，點擊 "變數" > "內建變數" > "設定"
   - 勾選"Scroll Depth Threshold"
2. 創建一個新的觸發器（Trigger）：
   - 進入 GTM 控制台，點擊 "觸發器" > "新增"
   - 選擇觸發器類型為 "捲動頁數"
     - 選擇"垂直捲動頁數"
     - 設置"百分比"為"10,24,50,75,100"
   - 命名觸發器（例如："捲動百分比"）並保存
3. 創建一個新的代碼（Tag）：
   - 點擊 "代碼" > "新增"
   - 選擇代碼類型為 "Google Analytics: GA4 事件"
   - 設置代碼：
     - 選擇您的 GA4 配置代碼
     - 事件名稱：scroll_percentage
     - 事件參數（必填）：
       - 參數名稱：scroll_percentage，參數值：{{Scroll Depth Threshold}}
     - 事件參數（可選）：
       - 參數名稱：page_name，參數值：{{Page Path}}
   - 在觸發條件中選擇剛才創建的 "捲動百分比" 觸發器
   - 命名代碼（例如："GA4 - 捲動百分比事件"）並保存

#### video_${Video Status}

說明：使用者觀看影片

步驟：

1. 確保啟用"影片"相關的內建變數（Variable）：
   - 進入 GTM 控制台，點擊 "變數" > "內建變數" > "設定"
   - 勾選"影片"相關的內建變數
2. 創建一個新的觸發器（Trigger）：
   - 進入 GTM 控制台，點擊 "觸發器" > "新增"
   - 選擇觸發器類型為 "YouTube 影片"
     - 勾選"開始"、"完成"、"暫停、跳轉和緩衝"、"進度"
     - 進度設置"百分比"為"10,24,50,75,100"
   - 命名觸發器（例如："YouTube 影片"）並保存
3. 創建一個新的代碼（Tag）：
   - 點擊 "代碼" > "新增"
   - 選擇代碼類型為 "Google Analytics: GA4 事件"
   - 設置代碼：
     - 選擇您的 GA4 配置代碼
     - 事件名稱：video_${Video Status}
     - 事件參數（可選）：
       - 參數名稱：video_url，參數值：{{Video URL}}
   - 在觸發條件中選擇剛才創建的 "YouTube 影片" 觸發器
   - 命名代碼（例如："GA4 - YouTube 影片事件"）並保存


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
