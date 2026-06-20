import type { IBaseBlockOwnProps } from "@/components/BaseBlock";

import BaseBlock from "@/components/BaseBlock";

import template from "./NotFound.hbs?raw";

export default class NotFound extends BaseBlock<IBaseBlockOwnProps> {
	public static componentName = "NotFound";

	protected template = template;

	constructor(props: IBaseBlockOwnProps = {}) {
		super(props);
	}
}
