export type BaseObj = Record<string, unknown>;

export type PageType =
	| "plug"
	| "signIn"
	| "signUp"
	| "notFound"
	| "serverError"
	| "chats"
	| "profile";

export interface IUser {
	first_name: string;
	second_name: string;
	display_name?: string;
	avatar: string;
	email: string;
	login: string;
	phone: string;
}

export type EventListType = Partial<Record<keyof HTMLElementEventMap, (e: Event) => void>>;
