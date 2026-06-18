import type { IBaseBlockOwnProps } from "@/components/BaseBlock";
import type { IMessage } from "@/types";

import BaseBlock from "@/components/BaseBlock";

import template from "./ChatMessage.hbs?raw";

export interface IChatMessageProps extends IBaseBlockOwnProps, IMessage {
	isIncoming: boolean;
}

export default class ChatMessage extends BaseBlock<IChatMessageProps> {
	public static componentName = "ChatMessage";

	protected template = template;
}
