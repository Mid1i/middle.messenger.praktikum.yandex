import type { IBaseBlockOwnProps } from "@/components/BaseBlock";
import type { ValidationRule } from "@/types";

import BaseBlock from "@/components/BaseBlock";

import template from "./BaseInput.hbs?raw";

export interface IBaseInputProps extends IBaseBlockOwnProps {
	id: string;
	name: string;
	variant?: "primary" | "secondary";
	type?: HTMLInputElement["type"];
	validationRule?: ValidationRule;
	defaultValue?: string;
	placeholder?: string;
	readonly?: boolean;
	label?: string;
}

export default class BaseInput extends BaseBlock<IBaseInputProps> {
	public static componentName = "BaseInput";

	protected template = template;
}
