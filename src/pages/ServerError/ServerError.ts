import type { IBaseBlockOwnProps } from "@/components/BaseBlock";

import BaseBlock from "@/components/BaseBlock";

import template from "./ServerError.hbs?raw";

export default class ServerError extends BaseBlock<IBaseBlockOwnProps> {
	public static componentName = "ServerError";

	protected template = template;

	constructor(props: IBaseBlockOwnProps = {}) {
		super(props);
	}
}
