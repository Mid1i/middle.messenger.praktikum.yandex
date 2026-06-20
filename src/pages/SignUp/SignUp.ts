import type { IBaseBlockOwnProps } from "@/components/BaseBlock";
import type { IBaseInputProps } from "@/components/BaseInput";

import BaseBlock from "@/components/BaseBlock";

import template from "./SignUp.hbs?raw";

import { SIGN_UP_INPUTS } from "./constants";

export interface ISignUpProps extends IBaseBlockOwnProps {
	formSchema: IBaseInputProps[];
}

export default class SignUp extends BaseBlock<ISignUpProps> {
	public static componentName = "SignUp";

	protected template = template;

	constructor() {
		super({
			formSchema: SIGN_UP_INPUTS,
		});
	}
}
