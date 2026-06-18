import type { IBaseBlockOwnProps } from "@/components/BaseBlock";

import BaseBlock from "@/components/BaseBlock";

import template from "./BaseAvatar.hbs?raw";

export interface IBaseAvatarProps extends IBaseBlockOwnProps {
	url: string;
	alt: string;
}

export default class BaseAvatar extends BaseBlock<IBaseAvatarProps> {
	public static componentName = "BaseAvatar";

	protected template = template;
}
