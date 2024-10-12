import type { Preview } from "@storybook/react";

// 定義 Storybook 預覽配置
const preview: Preview = {
	parameters: {
		controls: {
			// 定義控制項匹配器
			matchers: {
				// 匹配顏色相關的屬性
				color: /(background|color)$/i,
				// 匹配日期相關的屬性
				date: /Date$/i,
			},
		},
	},
};

// 導出預覽配置
export default preview;
