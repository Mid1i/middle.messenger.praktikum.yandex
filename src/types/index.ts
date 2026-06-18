export type BaseObj = Record<string, unknown>;

export type Nullable<T> = T | null;

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

export interface IChatsItem {
	id: number;
	title: string;
	avatar: string;
	unread_count: number;
	created_by: number;
	last_message: IMessage;
}

export interface IMessage {
	user: IUser;
	time: string;
	content: string;
}

export type EventListType = Partial<Record<keyof HTMLElementEventMap, (e: Event) => void>>;
