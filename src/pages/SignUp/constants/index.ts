import type { IBaseInputProps } from "@/components/BaseInput";

export const SIGN_UP_INPUTS: IBaseInputProps[] = [
	{
		"label": "Логин",
		"name": "login",
		"id": "login",
		"placeholder": "ivanivanov",
	},
	{
		"label": "Почта",
		"name": "email",
		"id": "email",
		"placeholder": "example@yandex.ru",
	},
	{
		"label": "Имя",
		"name": "first_name",
		"id": "first_name",
		"placeholder": "Иван",
	},
	{
		"label": "Фамилия",
		"name": "second_name",
		"id": "second_name",
		"placeholder": "Иванов",
	},
	{
		"label": "Телефон",
		"name": "phone",
		"id": "phone",
		"placeholder": "+7 (900) 111-11-11",
	},
	{
		"label": "Пароль",
		"name": "password",
		"id": "password",
		"placeholder": "Пароль",
		"type": "password"
	},
	{
		"label": "Повторите пароль",
		"name": "password-repeat",
		"id": "password-repeat",
		"placeholder": "Пароль",
		"type": "password"
	},
];