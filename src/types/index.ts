export type BaseObj = Record<string, any>;

export type PageType = 
	| "plug"
	| "signIn"
	| "signUp"
	| "notFound"
	| "serverError"
	| "chats";

export interface IUser {
	first_name: string;
	second_name: string;
	avatar: string;
	email: string;
	login: string;
	phone: string;
};