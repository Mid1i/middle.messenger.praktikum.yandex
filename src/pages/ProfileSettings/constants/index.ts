import type { IBaseInputProps } from "@/components/BaseInput";
import type { IUser } from "@/types";

export const CURRENT_USER: IUser = {
	avatar: "#",
	first_name: "Иван",
	second_name: "Иванов",
	login: "ivanivanov",
	email: "example@mail.ru",
	display_name: "Иван Иванов",
	phone: "89876543210",
};

export const PROFILE_INPUTS: IBaseInputProps[] = [
	{
		label: "Логин",
		name: "login",
		id: "login",
		placeholder: "ivanivanov",
		defaultValue: CURRENT_USER.login,
		type: "text",
	},
	{
		label: "Имя",
		name: "first_name",
		id: "first_name",
		placeholder: "Иван",
		defaultValue: CURRENT_USER.first_name,
		type: "text",
	},
	{
		label: "Фамилия",
		name: "second_name",
		id: "second_name",
		placeholder: "Иванов",
		defaultValue: CURRENT_USER.second_name,
		type: "text",
	},
	{
		label: "Отображаемое имя",
		name: "display_name",
		id: "display_name",
		placeholder: "Иван",
		defaultValue: CURRENT_USER.display_name,
		type: "text",
	},
	{
		label: "Email",
		name: "email",
		id: "email",
		placeholder: "example@yandex.ru",
		defaultValue: CURRENT_USER.email,
		type: "text",
	},
	{
		label: "Телефон",
		name: "phone",
		id: "phone",
		placeholder: "+7 (900) 111-11-11",
		defaultValue: CURRENT_USER.phone,
		type: "text",
	},
];

export const PASSWORD_INPUTS: IBaseInputProps[] = [
	{
		label: "Старый пароль",
		name: "old_password",
		id: "old_password",
		placeholder: "● ● ● ● ● ● ● ● ● ● ● ●",
		type: "text",
	},
	{
		label: "Новый пароль",
		name: "new_password",
		id: "new_password",
		placeholder: "● ● ● ● ● ● ● ● ● ● ● ●",
		type: "text",
	},
	{
		label: "Повторите новый пароль",
		name: "new_password-repeat",
		id: "new_password-repeat",
		placeholder: "● ● ● ● ● ● ● ● ● ● ● ●",
		type: "text",
	},
];
