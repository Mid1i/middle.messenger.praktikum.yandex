export type BaseObj = Record<string, any>;

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
};
