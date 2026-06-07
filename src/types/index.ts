export type BaseObj = Record<string, any>;

export type PageType = 
	| "plug"
	| "signIn"
	| "signUp"
	| "notFound"
	| "serverError";

export interface IGlobalState {
	currentPage: PageType;
};