import type { IBaseBlockOwnProps } from "@/components/BaseBlock";
import type { PageType } from "@/types";

import BaseBlock from "@/components/BaseBlock";

import template from "./WelcomePlug.hbs?raw";

import { PLUG_ITEMS } from "./constants";

export interface IPlugItem {
	text: string;
	href: PageType;
}

export interface IWelcomePlugProps extends IBaseBlockOwnProps {
	schema: IPlugItem[];
}

export default class WelcomePlug extends BaseBlock<IWelcomePlugProps> {
	public static componentName = "WelcomePlug";

	protected template = template;

	constructor() {
		super({
			schema: PLUG_ITEMS
		});
	}
}
