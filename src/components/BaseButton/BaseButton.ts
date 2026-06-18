import type { EventListType } from "@/types";

import BaseBlock from "@/components/BaseBlock";

import template from "./BaseButton.hbs?raw";

interface IBaseButtonProps {
	variant?: "primary" | "secondary";
	className?: string;
	disabled?: boolean;
	ariaLabel?: string;
	type?: "button" | "submit" | "reset";
};

export default class BaseButton extends BaseBlock<IBaseButtonProps> {
	public static componentName = "BaseButton";

	protected template = template;

	protected events: EventListType = {
		click: (event) => {
			event.preventDefault();
			console.log(11111);
		}
	}
}