import type { IPlugItem } from "../WelcomePlug";

export const PLUG_ITEMS: IPlugItem[] = [
	{ text: "Вход", href: "signIn" },
	{ text: "Регистрация", href: "signUp" },
	{ text: "404 ошибка", href: "notFound" },
	{ text: "500 ошибка", href: "serverError" },
	{ text: "Список чатов", href: "chats" },
	{ text: "Профиль", href: "profile" },
];
