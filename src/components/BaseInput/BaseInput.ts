import type { IBaseBlockOwnProps } from "@/components/BaseBlock";

import BaseBlock from "@/components/BaseBlock";

import template from "./BaseInput.hbs?raw";

export interface IBaseInputProps extends IBaseBlockOwnProps {
	id: string;
	name: string;
	variant?: "primary" | "secondary";
	type?: HTMLInputElement["type"];
	defaultValue?: string;
	placeholder?: string;
	readonly?: boolean;
	label?: string;
	error?: string;
}

export default class BaseInput extends BaseBlock<IBaseInputProps> {
	public static componentName = "BaseInput";

	protected template = template;
}
