# Storybook React + TypeScript + Vite 專案

使用 React、TypeScript 和 Vite 建立的 Storybook 專案。
本專案使用 pnpm 作為 package manager。

## 專案結構

```
.
├── README.md                 # 專案說明文件
├── eslint.config.js          # ESLint 配置文件
├── index.html               
├── package.json              # 專案依賴和腳本
├── pnpm-lock.yaml            # pnpm lock file
├── public                    
│   └── vite.svg             
├── src                       
│   ├── App.css              
│   ├── App.tsx               
│   ├── assets                
│   │   └── react.svg         
│   ├── index.css            
│   ├── main.tsx              
│   ├── stories               # Storybook 故事文件目錄
│   │   ├── Button.stories.ts # Button 組件故事
│   │   ├── Button.tsx        # Button 組件
│   │   ├── Configure.mdx     # Storybook 配置文檔
│   │   ├── Header.stories.ts # Header 組件故事
│   │   ├── Header.tsx        # Header 組件
│   │   ├── Page.stories.ts   # Page 組件故事
│   │   ├── Page.tsx          # Page 組件
│   │   ├── assets            # Storybook 資源目錄
│   │   ├── button.css        # Button 組件樣式
│   │   ├── header.css        # Header 組件樣式
│   │   └── page.css          # Page 組件樣式
│   └── vite-env.d.ts         
├── tsconfig.app.json         
├── tsconfig.json             
├── tsconfig.node.json       
└── vite.config.ts           
```

## 開始使用

1. 安裝依賴：
   ```
   pnpm install
   ```

2. 啟動開發服務器：
   ```
   pnpm run dev
   ```

3. 啟動 Storybook：
   ```
   pnpm run storybook
   ```

4. 在瀏覽器中訪問：
   - Vite 開發服務器：http://localhost:5173
   - Storybook：http://localhost:6006

## 可用腳本

- `pnpm run dev`: 啟動 Vite 開發服務器
- `pnpm run build`: 構建生產版本
- `pnpm run lint`: 運行 ESLint 檢查
- `pnpm run preview`: 預覽生產構建
- `pnpm run storybook`: 啟動 Storybook 服務器
- `pnpm run build-storybook`: 構建 Storybook 靜態文件

## Tech Stack

- React
- TypeScript
- Vite
- Storybook
- ESLint
