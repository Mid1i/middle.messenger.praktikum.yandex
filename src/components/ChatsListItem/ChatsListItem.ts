import type { IBaseBlockOwnProps } from "@/components/BaseBlock";
import type { IChatsItem } from "@/types";

import BaseBlock from "@/components/BaseBlock";

import template from "./ChatsListItem.hbs?raw";

export interface IChatsListItemProps extends IBaseBlockOwnProps, IChatsItem {
	isActive: boolean;
}

export default class ChatsListItem extends BaseBlock<IChatsListItemProps> {
	public static componentName = "ChatsListItem";

	protected template = template;
}
