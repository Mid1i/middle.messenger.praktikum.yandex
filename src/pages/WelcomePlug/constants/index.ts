import type { BaseObj, PageType } from "@/types";

import { SIGN_UP_INPUTS } from "@/pages/SignUp";
import { SIGN_IN_INPUTS } from "@/pages/SignIn";

interface IPlugItem<T extends BaseObj = BaseObj> {
	text: string;
	href: PageType;
	config?: T;
};

export const PLUG_ITEMS: IPlugItem[] = [
	{ text: "Вход", href: "signIn", config: { config: SIGN_IN_INPUTS } },
	{ text: "Регистрация", href: "signUp", config: { config: SIGN_UP_INPUTS }  },
	{ text: "404 ошибка", href: "notFound" },
	{ text: "500 ошибка", href: "serverError" }
];