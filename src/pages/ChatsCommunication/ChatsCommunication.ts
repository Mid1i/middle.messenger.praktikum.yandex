import type { IBaseBlockOwnProps } from "@/components/BaseBlock";
import type { IChatsItem, IMessage, Nullable } from "@/types";

import BaseBlock from "@/components/BaseBlock";

import template from "./ChatsCommunication.hbs?raw";

import { CHATS, CURRENT_CHAT } from "./constants";

export interface IChatsCommunicationProps extends IBaseBlockOwnProps {
	chats: IChatsItem[];
	currentChat: Nullable<{
		history: IMessage[];
	}>;
}

export default class ChatsCommunication extends BaseBlock<IChatsCommunicationProps> {
	public static componentName = "ChatsCommunication";

	protected template = template;

	constructor() {
		super({
			chats: CHATS,
			currentChat: CURRENT_CHAT
		});
	}
}
