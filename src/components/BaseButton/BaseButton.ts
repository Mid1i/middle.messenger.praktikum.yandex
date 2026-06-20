import type { IBaseBlockOwnProps } from "@/components/BaseBlock";

import BaseBlock from "@/components/BaseBlock";

import template from "./BaseButton.hbs?raw";

export interface IBaseButtonProps extends IBaseBlockOwnProps {
	variant?: "primary" | "secondary";
	className?: string;
	disabled?: boolean;
	ariaLabel?: string;
	type?: "button" | "submit" | "reset";
}

export default class BaseButton extends BaseBlock<IBaseButtonProps> {
	public static componentName = "BaseButton";

	protected template = template;
}
