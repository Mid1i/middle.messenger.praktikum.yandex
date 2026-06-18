import type { IBaseBlockOwnProps } from "@/components/BaseBlock";

import BaseBlock from "@/components/BaseBlock";

import template from "./BaseLink.hbs?raw";

export interface IBaseLinkProps extends IBaseBlockOwnProps {
	variant?: "primary" | "secondary";
	href: string;
	dataHref?: string;
}

export default class BaseLink extends BaseBlock<IBaseLinkProps> {
	public static componentName = "BaseLink";

	protected template = template;
}
