import type { IBaseInputProps } from "@/components/BaseInput";

export const SIGN_UP_INPUTS: IBaseInputProps[] = [
	{
		label: "Логин",
		name: "login",
		id: "login",
		placeholder: "ivanivanov",
		validationRule: "login",
	},
	{
		label: "Email",
		name: "email",
		id: "email",
		placeholder: "example@yandex.ru",
		validationRule: "email",
	},
	{
		label: "Имя",
		name: "first_name",
		id: "first_name",
		placeholder: "Иван",
		validationRule: "name",
	},
	{
		label: "Фамилия",
		name: "second_name",
		id: "second_name",
		placeholder: "Иванов",
		validationRule: "name",
	},
	{
		label: "Телефон",
		name: "phone",
		id: "phone",
		placeholder: "+7 (900) 111-11-11",
		validationRule: "phone",
	},
	{
		label: "Пароль",
		name: "password",
		id: "password",
		placeholder: "● ● ● ● ● ● ● ● ● ● ● ●",
		type: "password",
		validationRule: "password",
	},
	{
		label: "Повторите пароль",
		name: "password-repeat",
		id: "password-repeat",
		placeholder: "● ● ● ● ● ● ● ● ● ● ● ●",
		type: "password",
		validationRule: "password",
	},
];
