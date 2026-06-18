import type { IBaseBlockOwnProps } from "@/components/BaseBlock";
import type { IBaseInputProps } from "@/components/BaseInput";
import type { IUser } from "@/types";

import BaseBlock from "@/components/BaseBlock";

import template from "./ProfileSettings.hbs?raw";

import { CURRENT_USER, PASSWORD_INPUTS, PROFILE_INPUTS } from "./constants";

export interface IProfileSettingsProps extends IBaseBlockOwnProps {
	currentUser: IUser;
	formSchema: IBaseInputProps[];
	passwordFormSchema: IBaseInputProps[];
}

export default class ProfileSettings extends BaseBlock<IProfileSettingsProps> {
	public static componentName = "ProfileSettings";

	protected template = template;

	constructor() {
		super({
			currentUser: CURRENT_USER,
			formSchema: PROFILE_INPUTS,
			passwordFormSchema: PASSWORD_INPUTS
		});
	}
}
