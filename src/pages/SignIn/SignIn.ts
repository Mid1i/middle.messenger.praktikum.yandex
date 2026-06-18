import type { IBaseBlockOwnProps } from "@/components/BaseBlock";
import type { IBaseInputProps } from "@/components/BaseInput";

import BaseBlock from "@/components/BaseBlock";

import template from "./SignIn.hbs?raw";

import { SIGN_IN_INPUTS } from "./constants";

export interface ISignInProps extends IBaseBlockOwnProps {
	formSchema: IBaseInputProps[];
}

export default class SignIn extends BaseBlock<ISignInProps> {
	public static componentName = "SignIn";

	protected template = template;

	constructor() {
		super({
			formSchema: SIGN_IN_INPUTS
		});
	}
}
