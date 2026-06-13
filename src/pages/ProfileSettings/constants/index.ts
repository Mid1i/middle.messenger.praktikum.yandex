import type { IBaseInputProps } from "@/components/BaseInput";
import type { IUser } from "@/types";

export const CURRENT_USER: IUser = {
	avatar: "#",
	first_name: "Иван",
	second_name: "Иванов",
	login: "ivanivanov",
	email: "example@mail.ru",
	phone: "89876543210"
};

export const PROFILE_INPUTS: IBaseInputProps[] = [
	{
		"label": "Логин",
		"name": "login",
		"id": "login",
		"placeholder": "ivanivanov",
		"defaultValue": CURRENT_USER.login,
		"type": "text"
	},
	{
		"label": "Email",
		"name": "email",
		"id": "email",
		"placeholder": "example@yandex.ru",
		"defaultValue": CURRENT_USER.email,
		"type": "text"
	},
	{
		"label": "Имя",
		"name": "first_name",
		"id": "first_name",
		"placeholder": "Иван",
		"defaultValue": CURRENT_USER.first_name,
		"type": "text"
	},
	{
		"label": "Фамилия",
		"name": "second_name",
		"id": "second_name",
		"placeholder": "Иванов",
		"defaultValue": CURRENT_USER.second_name,
		"type": "text"
	},
	{
		"label": "Телефон",
		"name": "phone",
		"id": "phone",
		"placeholder": "+7 (900) 111-11-11",
		"defaultValue": CURRENT_USER.phone,
		"type": "text"
	}
];