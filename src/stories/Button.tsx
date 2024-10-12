// 導入按鈕樣式
import "./button.css";

// 定義按鈕屬性介面
export interface ButtonProps {
	/** 是否為 Primary 的樣式按鈕 */
	primary?: boolean;
	/** 使用什麼背景顏色 */
	backgroundColor?: string;
	/** 按鈕應該有多大？ */
	size?: "small" | "medium" | "large";
	/** 按鈕內容 */
	label: string;
	/** 可選的點擊處理函式 */
	onClick?: () => void;
}

/** 用戶交互的主要 UI 組件 */
export const Button = ({
	primary = false,
	size = "medium",
	backgroundColor,
	label,
	...props
}: ButtonProps) => {
	// 根據 primary 屬性決定按鈕模式
	const mode = primary
		? "storybook-button--primary"
		: "storybook-button--secondary";

	// 返回按鈕元素
	return (
		<button
			type="button"
			// 組合多個類名
			className={["storybook-button", `storybook-button--${size}`, mode].join(
				" "
			)}
			// 設置背景顏色
			style={{ backgroundColor }}
			// 展開其他屬性
			{...props}
		>
			{label}
		</button>
	);
};
