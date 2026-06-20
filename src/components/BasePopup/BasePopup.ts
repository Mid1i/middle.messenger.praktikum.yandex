import type { IBaseBlockOwnProps } from "@/components/BaseBlock";

import BaseBlock from "@/components/BaseBlock";

import template from "./BasePopup.hbs?raw";

export interface IBasePopupProps extends IBaseBlockOwnProps {
	isOpened: boolean;
	ariaLabel?: string;
}

export default class BasePopup extends BaseBlock<IBasePopupProps> {
	public static componentName = "BasePopup";

	protected template = template;
}
