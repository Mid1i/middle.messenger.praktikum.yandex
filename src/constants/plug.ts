import type { IBaseBlockOwnProps } from "@/components/BaseBlock";
import type BaseBlock from "@/components/BaseBlock";
import type { PageType } from "@/types";

import WelcomePlug from "@/pages/WelcomePlug";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import NotFound from "@/pages/NotFound";
import ServerError from "@/pages/ServerError";
import ChatsCommunication from "@/pages/ChatsCommunication";
import ProfileSettings from "@/pages/ProfileSettings";

export type PageConstructor = new (props?: IBaseBlockOwnProps) => BaseBlock<IBaseBlockOwnProps>;

export const PAGE_CONFIG: Record<PageType, PageConstructor> = {
	plug: WelcomePlug,
	signIn: SignIn,
	signUp: SignUp,
	notFound: NotFound,
	serverError: ServerError,
	chats: ChatsCommunication,
	profile: ProfileSettings,
};
