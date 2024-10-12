// 引入必要的型別和函式
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

// 引入我們的按鈕元件
import { Button } from "./Button";

// 設定按鈕元件的元資料
// 更多關於如何設置故事的資訊：https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	// 設定在 Storybook 中顯示的標題
	title: "Example/Button",
	// 指定要展示的元件
	component: Button,
	// 參數設定，讓按鈕在畫布中置中顯示
	// 更多資訊：https://storybook.js.org/docs/configure/story-layout
	parameters: {
		layout: "centered",
	},
	// 自動生成文件
	// https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// 設定參數類型
	// 更多關於 argTypes：https://storybook.js.org/docs/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
	// 使用 fn() 來監聽 onClick 事件，可在操作面板中看到點擊事件
	// https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

// 匯出元資料
export default meta;
// 定義 Story 型別
type Story = StoryObj<typeof meta>;

// 以下是各種按鈕的故事（Story）
// 更多關於使用參數寫故事：https://storybook.js.org/docs/writing-stories/args

// 主要按鈕
export const Primary: Story = {
	args: {
		primary: true,
		label: "Button",
	},
};

// 次要按鈕
export const Secondary: Story = {
	args: {
		label: "Button",
	},
};

// 大型按鈕
export const Large: Story = {
	args: {
		size: "large",
		label: "Button",
	},
};

// 小型按鈕
export const Small: Story = {
	args: {
		size: "small",
		label: "Button",
	},
};
