import type { IBaseBlockOwnProps } from "@/components/BaseBlock";
import type { PageType } from "@/types";

import BaseBlock from "@/components/BaseBlock";

import template from "./AsidePanel.hbs?raw";

export interface IAsidePanelProps extends IBaseBlockOwnProps {
	activePage: PageType;
	avatar: string;
}

export default class AsidePanel extends BaseBlock<IAsidePanelProps> {
	public static componentName = "AsidePanel";

	protected template = template;
}
