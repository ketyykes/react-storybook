// 引入必要的型別和函式
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

// 引入 Header 元件
import { Header } from "./Header";

// 定義 Header 元件的元資料
const meta = {
	title: "Example/Header",
	component: Header,
	// 此元件將自動生成 Autodocs 條目：https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {
		// 關於如何定位故事的更多資訊：https://storybook.js.org/docs/configure/story-layout
		layout: "fullscreen",
	},
	// 設定預設的事件處理函式
	args: {
		onLogin: fn(),
		onLogout: fn(),
		onCreateAccount: fn(),
	},
} satisfies Meta<typeof Header>;

// 匯出元資料
export default meta;
// 定義 Story 型別
type Story = StoryObj<typeof meta>;

// 已登入狀態的故事
export const LoggedIn: Story = {
	args: {
		user: {
			name: "Jane Doe",
		},
	},
};

// 未登入狀態的 Story
export const LoggedOut: Story = {};
