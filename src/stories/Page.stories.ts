// 引入必要的型別和函式
import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

// 引入 Page 元件
import { Page } from "./Page";

// 定義 Page 元件的元資料
const meta = {
	title: "Example/Page",
	component: Page,
	parameters: {
		// 關於如何定位故事的更多資訊：https://storybook.js.org/docs/configure/story-layout
		layout: "fullscreen",
	},
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

// 未登入狀態的故事
export const LoggedOut: Story = {};

// 關於互動測試的更多資訊：https://storybook.js.org/docs/writing-tests/interaction-testing
// 已登入狀態的故事
export const LoggedIn: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		// 尋找登入按鈕
		const loginButton = canvas.getByRole("button", { name: /Log in/i });
		// 確認登入按鈕存在
		await expect(loginButton).toBeInTheDocument();
		// 模擬點擊登入按鈕
		await userEvent.click(loginButton);
		// 確認登入按鈕已消失
		await expect(loginButton).not.toBeInTheDocument();

		// 尋找登出按鈕
		const logoutButton = canvas.getByRole("button", { name: /Log out/i });
		// 確認登出按鈕存在
		await expect(logoutButton).toBeInTheDocument();
	},
};
