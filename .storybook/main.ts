import type { StorybookConfig } from "@storybook/react-vite";

// 定義 Storybook 配置
const config: StorybookConfig = {
	// 指定 stories 文件的位置
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	// 添加 Storybook 插件
	addons: [
		"@storybook/addon-onboarding", // 新手引導插件
		"@storybook/addon-links", // 故事間連結插件
		"@storybook/addon-essentials", // 基本插件集合
		"@chromatic-com/storybook", // Chromatic 插件
		"@storybook/addon-interactions", // 交互測試插件
	],
	// 指定使用的框架
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
};

export default config;
