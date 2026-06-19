import type { IBaseInputProps } from "@/components/BaseInput";

export const SIGN_IN_INPUTS: IBaseInputProps[] = [
	{
		label: "Логин",
		name: "login",
		id: "login",
		placeholder: "ivanivanov",
		validationRule: "login"
	},
	{
		label: "Пароль",
		name: "password",
		id: "password",
		placeholder: "● ● ● ● ● ● ● ● ● ● ● ●",
		type: "password",
		validationRule: "password"
	},
];
